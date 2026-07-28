import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Calendar, Clock, Sparkles, Heart, 
  Volume2, VolumeX, Navigation, ExternalLink, ChevronDown, Cake
} from 'lucide-react';
import Envelope from './components/Envelope';
import Countdown from './components/Countdown';
import DressCode from './components/DressCode';
import RSVPForm from './components/RSVPForm';
import Programme from './components/Programme';
import BibleVerses from './components/BibleVerses';
import waxSealUrl from './assets/images/nm_gold_wax_seal_1785247868796.jpg';
import floralBgUrl from './assets/images/kp_floral_wallpaper_1783875359536.jpg';
import resortUrl from './assets/images/buraha_zenoni_resort_1783874401777.jpg';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.35);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Background Audio - Romantic Canon in D
  const canonDUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Canon_in_D_Major_%28ISRC_USUAN1100301%29.mp3';

  // Toggle background music
  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio playback blocked or failed:", err));
    }
  };

  // Keep audio element volume in sync
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Synchronously play audio on seal click
  const handleEnvelopeStartOpening = () => {
    if (audioRef.current) {
      audioRef.current.src = canonDUrl;
      audioRef.current.load();
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play on seal open failed:", err));
    }
  };

  // Automatically try playing music when invitation slides open
  useEffect(() => {
    if (isOpen && audioRef.current && !isPlaying) {
      audioRef.current.src = canonDUrl;
      audioRef.current.load();
      audioRef.current.volume = volume;
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, [isOpen]);

  const handleEnvelopeOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen text-stone-800 bg-[#FAF9F6] selection:bg-[#738A6E]/20">
      {/* Hidden Audio element - Romantic Background Music */}
      <audio
        ref={audioRef}
        src={canonDUrl}
        loop
      />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            <Envelope
              onOpen={handleEnvelopeOpen}
              onStartOpening={handleEnvelopeStartOpening}
              waxSealUrl={waxSealUrl}
              volume={volume}
              onVolumeChange={setVolume}
              isPlaying={isPlaying}
              onTogglePlay={toggleMusic}
            />
          </motion.div>
        ) : (
          <motion.div
            key="minisite"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full overflow-x-hidden"
          >
            {/* Ambient Background Watermark Floral */}
            <div className="absolute top-0 inset-x-0 h-[700px] pointer-events-none opacity-[0.12] mix-blend-multiply overflow-hidden">
              <img
                src={floralBgUrl}
                alt="Floral Background Watermark"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover origin-top scale-110 blur-[0.5px]"
              />
            </div>

            {/* Floating Music Controller */}
            <div className="fixed bottom-6 right-6 z-50">
              <button
                onClick={toggleMusic}
                className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-[#738A6E]/30 flex items-center justify-center text-[#738A6E] hover:text-[#42523E] hover:scale-105 active:scale-95 transition-all cursor-pointer group relative"
                aria-label="Toggle background music"
              >
                {isPlaying && (
                  <span className="absolute inset-0 rounded-full border border-[#738A6E] animate-ping opacity-35" />
                )}
                {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-stone-400" />}
                
                <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap bg-stone-900/80 text-white text-[9px] font-sans font-bold uppercase tracking-widest px-2.5 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {isPlaying ? 'Pause Music' : 'Play Music'}
                </span>
              </button>
            </div>

            {/* SECTION 1: HERO & HEADING (ELEGANT DARK DEEP SLATE & SAGE ACCENTS) */}
            <div className="relative bg-gradient-to-b from-[#1C2826] via-[#2C3E3A] to-[#1C2826] text-white w-full border-b border-[#FAF9F6]/10 overflow-hidden">
              
              {/* Rich Floral Wallpaper Overlay inside Hero */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay overflow-hidden">
                <img
                  src={floralBgUrl}
                  alt="Floral Watermark"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-105"
                />
              </div>

              {/* Glowing Ambient Particles / Bokeh */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -100, 0],
                    x: [0, 30, 0],
                    opacity: [0.15, 0.4, 0.15],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-[20%] left-[15%] w-36 h-36 bg-[#8A9A86] rounded-full blur-[70px] mix-blend-screen"
                />
                <motion.div
                  animate={{
                    y: [0, -80, 0],
                    x: [0, -40, 0],
                    opacity: [0.12, 0.35, 0.12],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute bottom-[25%] right-[10%] w-44 h-44 bg-[#D8C3A5] rounded-full blur-[90px] mix-blend-screen"
                />
              </div>

              {/* Inner Frame Border */}
              <div className="absolute inset-3 sm:inset-5 md:inset-7 border border-[#8A9A86]/20 rounded-[2rem] pointer-events-none z-10">
                <div className="absolute inset-1 border border-dashed border-[#FAF9F6]/5 rounded-[1.85rem]" />
              </div>

              {/* Floating Invitation Header */}
              <nav className="w-full max-w-7xl mx-auto px-8 py-6 flex justify-between items-center z-40 relative">
                <span className="font-serif text-sm tracking-[0.3em] text-[#D8C3A5] font-semibold select-none">
                  N &amp; M
                </span>
                <span className="font-sans text-[10px] text-[#FAF9F6] uppercase tracking-[0.3em] font-bold border-b border-[#8A9A86]/30 pb-1 select-none">
                  August 19, 2026
                </span>
              </nav>

              {/* HERO SECTION */}
              <header className="relative w-full max-w-4xl mx-auto text-center px-6 pt-10 pb-20 flex flex-col items-center justify-center min-h-[85vh] z-20">
                
                {/* Decorative Laurel / Monogram */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="relative mb-8 group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#8A9A86]/30 to-[#D8C3A5]/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[#D8C3A5]/40 flex items-center justify-center bg-[#FAF9F6] shadow-2xl relative overflow-hidden transition-all duration-500 group-hover:border-[#D8C3A5]">
                    <img
                      src={waxSealUrl}
                      alt="Nyawira and Mainah Wedding Crest"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover p-1 rounded-full bg-white scale-[1.02]"
                    />
                    <div className="absolute inset-2 border border-dashed border-[#8A9A86]/30 rounded-full pointer-events-none" />
                  </div>
                  <div className="absolute -inset-2 border border-dashed border-[#D8C3A5]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="flex items-center gap-2 justify-center mb-6"
                >
                  <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D8C3A5]/40" />
                  <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#D8C3A5] font-semibold uppercase">
                    The Wedding Celebration
                  </span>
                  <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D8C3A5]/40" />
                </motion.div>

                {/* Names */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative space-y-2 mb-6"
                >
                  <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#FAF9F6] tracking-wide mt-2 leading-none drop-shadow-[0_2px_15px_rgba(28,40,38,0.4)]">
                    Nyawira
                  </h1>
                  <div className="flex items-center justify-center gap-4 my-3">
                    <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#D8C3A5]/40 to-transparent" />
                    <span className="font-cursive text-5xl sm:text-6xl md:text-7xl text-[#D8C3A5] block select-none transform -rotate-6">
                      &amp;
                    </span>
                    <span className="h-[1px] w-14 sm:w-24 bg-gradient-to-r from-transparent via-[#D8C3A5]/40 to-transparent" />
                  </div>
                  <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-light text-[#FAF9F6] tracking-wide leading-none drop-shadow-[0_2px_15px_rgba(28,40,38,0.4)]">
                    Mainah
                  </h1>
                </motion.div>

                {/* Requested Tagline / Cake Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.7 }}
                  className="bg-[#FAF9F6]/10 backdrop-blur-md border border-[#D8C3A5]/30 rounded-2xl px-6 py-3 my-4 max-w-lg shadow-lg flex items-center justify-center gap-2"
                >
                  <Cake className="w-5 h-5 text-[#D8C3A5] shrink-0" />
                  <p className="font-serif text-base sm:text-lg italic text-[#D8C3A5] leading-relaxed">
                    "Guess what? We have found a reason to have cake! Come join us!"
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 0.95, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.9 }}
                  className="font-serif text-sm sm:text-base text-stone-200 max-w-md leading-relaxed mt-2 px-4"
                >
                  Wednesday, 19th August 2026 • Kikuyu, Kenya
                </motion.p>

                {/* Countdown Ticker */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="mt-10 w-full"
                >
                  <Countdown targetDateStr="2026-08-19T10:00:00" />
                </motion.div>

                {/* Animated Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8, y: [0, 6, 0] }}
                  transition={{ delay: 1.6, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="mt-14 flex flex-col items-center gap-1.5 cursor-pointer"
                  onClick={() => {
                    window.scrollTo({
                      top: window.innerHeight * 0.95,
                      behavior: 'smooth'
                    });
                  }}
                >
                  <span className="text-[9px] uppercase tracking-[0.25em] font-sans font-bold text-[#D8C3A5]/85">
                    Scroll to explore
                  </span>
                  <div className="w-6 h-10 rounded-full border border-[#D8C3A5]/30 flex justify-center p-1 mt-1">
                    <motion.div 
                      animate={{ y: [0, 12, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1.5 h-1.5 rounded-full bg-[#FAF9F6]" 
                    />
                  </div>
                </motion.div>
              </header>
            </div>

            {/* SECTION 2: EVENT DETAILS & VENUE */}
            <div className="bg-[#1C2826] text-white py-20 border-b border-[#FAF9F6]/10">
              <div className="w-full max-w-5xl mx-auto px-4">
                <div className="text-center mb-12">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#D8C3A5]">The Gathering</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide mt-1 text-[#FAF9F6]">When &amp; Where</h2>
                </div>

                {/* EVENT OVERVIEW TILES */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-16">
                  <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 text-stone-800">
                    <div className="w-12 h-12 rounded-full bg-[#738A6E]/10 flex items-center justify-center text-[#738A6E] mb-4">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest block mb-1">
                      The Date
                    </span>
                    <h3 className="font-serif text-lg text-[#1C2826] font-semibold mb-1">
                      Wednesday, 19th August 2026
                    </h3>
                    <p className="text-xs text-stone-600 font-sans mt-1">
                      Save the date to join us in celebration.
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 text-stone-800">
                    <div className="w-12 h-12 rounded-full bg-[#738A6E]/10 flex items-center justify-center text-[#738A6E] mb-4">
                      <Clock className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest block mb-1">
                      The Time
                    </span>
                    <h3 className="font-serif text-lg text-[#1C2826] font-semibold mb-1">
                      10:00 AM Prompt
                    </h3>
                    <p className="text-xs text-stone-600 font-sans mt-1">
                      Service begins at 10:00 AM. Expected reception time is 1:00 PM.
                    </p>
                  </div>

                  <div className="bg-[#FAF9F6] border border-[#8A9A86]/20 rounded-2xl p-6 shadow-md flex flex-col items-center text-center hover:scale-[1.02] transition-all duration-300 text-stone-800">
                    <div className="w-12 h-12 rounded-full bg-[#738A6E]/10 flex items-center justify-center text-[#738A6E] mb-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-widest block mb-1">
                      The Venues
                    </span>
                    <h3 className="font-serif text-lg text-[#1C2826] font-semibold mb-1">
                      Kikuyu, Kenya
                    </h3>
                    <p className="text-xs text-stone-600 font-sans mt-1">
                      ACK Emmanuel Church &amp; Leilani Gardens
                    </p>
                  </div>
                </div>

                {/* THE VENUE FEATURE CARD */}
                <div className="bg-white border border-[#8A9A86]/30 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 hover:shadow-md transition-all duration-300 text-stone-800">
                  <div className="md:col-span-5 h-[300px] md:h-full relative overflow-hidden min-h-[300px]">
                    <img
                      src={resortUrl}
                      alt="Leilani Gardens Kikuyu"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1C2826]/10 mix-blend-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent flex flex-col justify-end p-6 text-white md:hidden">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-[#D8C3A5]">
                        Leilani Gardens Kikuyu
                      </span>
                      <h4 className="font-serif text-xl font-light">Reception Grounds</h4>
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 md:p-10 flex flex-col justify-center bg-[#FAF9F6]">
                    <span className="text-[10px] font-sans font-bold text-[#738A6E] uppercase tracking-widest block mb-1">
                      Church Ceremony &amp; Garden Reception
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#1C2826] font-light tracking-wide mb-4">
                      ACK Emmanuel Church &amp; Leilani Gardens
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed font-sans mb-6">
                      Our wedding ceremony will be held at <strong>ACK Emmanuel Church Kikuyu</strong> starting at 10:00 AM. Following the service, we will proceed to <strong>Leilani Gardens Kikuyu</strong> for our reception celebration at 1:00 PM.
                    </p>
                    
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://maps.google.com/?q=ACK+Emmanuel+Church+Kikuyu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#738A6E] hover:bg-[#1C2826] text-white font-sans text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-colors cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5" /> ACK Emmanuel Church Map
                      </a>
                      <a
                        href="https://maps.google.com/?q=Leilani+Gardens+Kikuyu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-[#738A6E] hover:bg-stone-100 text-[#738A6E] font-sans text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
                      >
                        Leilani Gardens Map <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: PROGRAMME SECTION */}
            <div className="bg-[#1C2826] text-stone-900 py-20 border-b border-[#FAF9F6]/10">
              <div className="w-full max-w-5xl mx-auto px-4">
                <Programme />
              </div>
            </div>

            {/* SECTION 4: BIBLE VERSES SECTION */}
            <div className="bg-[#1C2826] text-stone-900 py-20 border-b border-[#FAF9F6]/10">
              <div className="w-full max-w-5xl mx-auto px-4">
                <BibleVerses />
              </div>
            </div>

            {/* SECTION 5: DRESS CODE (SAGE & BEIGE) */}
            <div className="bg-[#1C2826] text-stone-900 py-20 border-b border-[#FAF9F6]/10">
              <div className="w-full max-w-5xl mx-auto px-4">
                <DressCode />
              </div>
            </div>

            {/* SECTION 6: RSVP */}
            <div className="bg-[#1C2826] text-white py-20 border-b border-[#FAF9F6]/10">
              <div className="w-full max-w-5xl mx-auto px-4">
                <RSVPForm />
              </div>
            </div>

            {/* FOOTER */}
            <footer className="w-full border-t border-[#FAF9F6]/10 bg-[#1C2826] py-16 text-center relative z-10 text-white">
              <div className="max-w-md mx-auto px-4 flex flex-col items-center">
                <Heart className="w-6 h-6 text-[#8A9A86] mb-4 animate-pulse stroke-1" />
                <p className="font-serif italic text-sm text-[#FAF9F6]/90 leading-relaxed max-w-sm">
                  "And over all these virtues put on love, which binds them all together in perfect unity."
                </p>
                <span className="text-[10px] font-sans font-bold text-[#D8C3A5] uppercase tracking-widest mt-2 block">
                  Colossians 3:14
                </span>
                
                <p className="text-[10px] text-[#FAF9F6]/70 font-sans mt-8 uppercase tracking-widest font-medium">
                  Nyawira &amp; Mainah
                </p>
                <p className="text-[9px] text-[#D8C3A5]/80 font-sans mt-1">
                  Wednesday, 19th August 2026 • Kikuyu, Kenya
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
