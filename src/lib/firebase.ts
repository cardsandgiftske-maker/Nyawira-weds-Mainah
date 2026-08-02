import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  onSnapshot, 
  query, 
  orderBy, 
  updateDoc 
} from 'firebase/firestore';
import { RsvpGuest } from '../types';

// Read Firebase configuration from Vite environment variables
const firebaseConfig = {
  apiKey: "AIzaSyD8YsBKk_BS7s2dKJbaub28ikn2tU9EqUk",
  authDomain: "nyawirawedsmainah.firebaseapp.com",
  projectId: "nyawirawedsmainah",
  storageBucket: "nyawirawedsmainah.firebasestorage.app",
  messagingSenderId: "304529936209",
  appId: "1:304529936209:web:c98f7ecd429810d080cd70"
};

// Check if Firebase is fully configured
export const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.apiKey !== 'MY_FIREBASE_API_KEY'
);

let dbInstance: any = null;

// Lazy initialize Firebase and Firestore to prevent startup crashes if keys are empty or misconfigured
export function getDb() {
  if (!isFirebaseConfigured) {
    return null;
  }
  
  if (!dbInstance) {
    try {
      const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
      dbInstance = getFirestore(app);
    } catch (error) {
      console.error('Firebase initialization error:', error);
      return null;
    }
  }
  return dbInstance;
}

// COLLECTION NAME
const COLLECTION_NAME = 'rsvps';

// LOCAL STORAGE FALLBACK HELPERS
const getLocalRsvps = (): RsvpGuest[] => {
  return JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
};

const saveLocalRsvps = (rsvps: RsvpGuest[]) => {
  localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));
  window.dispatchEvent(new Event('rsvp_database_updated'));
};

// EXPORTED CORE API FUNCTIONS

/**
 * Clean and normalize phone numbers for deduplication checks
 */
export function normalizePhoneNumber(phone: string): string {
  if (!phone) return '';
  let cleaned = phone.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+254')) {
    cleaned = '0' + cleaned.slice(4);
  } else if (cleaned.startsWith('254')) {
    cleaned = '0' + cleaned.slice(3);
  }
  return cleaned;
}

/**
 * Check if a phone number has already submitted an RSVP
 */
export async function hasPhoneAlreadyRsvped(phone: string): Promise<boolean> {
  const normInput = normalizePhoneNumber(phone);
  if (!normInput || normInput.length < 5) return false;
  
  const allRsvps = await getRsvps();
  return allRsvps.some((r) => normalizePhoneNumber(r.phoneNumber) === normInput);
}

/**
 * Save or update an RSVP entry
 */
export async function saveRsvp(rsvp: RsvpGuest): Promise<void> {
  const db = getDb();
  if (db) {
    try {
      const docRef = doc(db, COLLECTION_NAME, rsvp.id);
      await setDoc(docRef, rsvp);
      return;
    } catch (error) {
      console.warn('Failed to save to Firebase, saving to localStorage instead:', error);
    }
  }
  
  // Local storage fallback
  const existing = getLocalRsvps();
  const updated = existing.filter((item) => item.id !== rsvp.id && item.phoneNumber !== rsvp.phoneNumber);
  updated.push(rsvp);
  saveLocalRsvps(updated);
}

/**
 * Fetch all RSVPs.
 */
export async function getRsvps(): Promise<RsvpGuest[]> {
  const db = getDb();
  if (db) {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('submittedAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const rsvps: RsvpGuest[] = [];
      querySnapshot.forEach((doc) => {
        rsvps.push(doc.data() as RsvpGuest);
      });
      return rsvps;
    } catch (error) {
      console.warn('Failed to fetch from Firebase, reading from localStorage instead:', error);
    }
  }
  
  // Local storage fallback
  const local = getLocalRsvps();
  return local.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
}

/**
 * Delete an RSVP entry
 */
export async function deleteRsvp(id: string): Promise<void> {
  const db = getDb();
  if (db) {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return;
    } catch (error) {
      console.warn('Failed to delete from Firebase, removing from localStorage:', error);
    }
  }
  
  const existing = getLocalRsvps();
  const updated = existing.filter((item) => item.id !== id);
  saveLocalRsvps(updated);
}

/**
 * Toggle RSVP attendance status or change seat count
 */
export async function updateRsvpStatus(
  id: string, 
  willAttend: 'yes' | 'no', 
  adultsCount: number, 
  childrenCount: number = 0
): Promise<void> {
  const db = getDb();
  if (db) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, {
        willAttend,
        adultsCount,
        childrenCount
      });
      return;
    } catch (error) {
      console.warn('Failed to update Firebase, updating localStorage:', error);
    }
  }
  
  const existing = getLocalRsvps();
  const updated = existing.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        willAttend,
        adultsCount,
        childrenCount
      };
    }
    return item;
  });
  saveLocalRsvps(updated);
}

/**
 * Real-time RSVP updates subscription
 */
export function subscribeToRsvps(onUpdate: (rsvps: RsvpGuest[]) => void): () => void {
  const db = getDb();
  if (db) {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('submittedAt', 'desc'));
      return onSnapshot(q, (snapshot) => {
        const rsvps: RsvpGuest[] = [];
        snapshot.forEach((doc) => {
          rsvps.push(doc.data() as RsvpGuest);
        });
        onUpdate(rsvps);
      }, (error) => {
        console.warn('Firebase snapshot subscription failed:', error);
      });
    } catch (e) {
      console.warn('Could not subscribe in real-time, relying on polling:', e);
    }
  }
  
  // Local storage listener fallback
  const handleLocalUpdate = () => {
    onUpdate(getLocalRsvps().sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()));
  };
  
  window.addEventListener('rsvp_database_updated', handleLocalUpdate);
  
  // Trigger initial callback
  handleLocalUpdate();
  
  return () => {
    window.removeEventListener('rsvp_database_updated', handleLocalUpdate);
  };
}
