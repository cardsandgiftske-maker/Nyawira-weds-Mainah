import { ProgramItem, ColorSwatch } from './types';

export const WEDDING_DATE = new Date('2026-08-19T10:00:00+03:00'); // Wednesday, 19th August 2026 (EAT)

export const WEDDING_DETAILS = {
  couple: {
    bride: 'Nyawira',
    groom: 'Mainah',
    brideFull: 'Nyawira',
    groomFull: 'Mainah',
  },
  tagline: 'Guess what? We have found a reason to have cake! Come join us!',
  ceremony: {
    time: '10:00 AM Prompt',
    venue: 'ACK EMMANUEL CHURCH KIKUYU',
    address: 'Kikuyu, Kiambu County, Kenya',
    coordinates: { lat: -1.2442, lng: 36.6631 },
    mapEmbedUrl: 'https://maps.google.com/maps?q=ACK+EMMANUEL+CHURCH+KIKUYU&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  reception: {
    time: '1:00 PM Expected Arrival',
    venue: 'Leilani Gardens Kikuyu',
    address: 'Kikuyu, Kiambu County, Kenya',
    coordinates: { lat: -1.2480, lng: 36.6685 },
    mapEmbedUrl: 'https://maps.google.com/maps?q=Leilani+Gardens+Kikuyu&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  contacts: [
    { name: 'Nyawira RSVP', phone: '+254 724 783 311' },
    { name: 'Mainah RSVP', phone: '+254 714 413 777' },
  ],
  registry: {
    paybill: '4080357',
    accountNo: 'Nyawira & Mainah Wedding',
  },
  themeColors: {
    primary: 'Sage Green',
    secondary: 'Warm Beige',
    sageHex: '#87A96B',
    beigeHex: '#E8DCC4',
  },
  bibleVerses: [
    {
      text: 'I have found the one whom my soul loves.',
      reference: 'Song of Solomon 3:4',
    },
    {
      text: 'Love is patient, love is kind. It always protects, always trusts, always hopes, always perseveres.',
      reference: '1 Corinthians 13:4,7',
    },
    {
      text: 'Two are better than one, because they have a good return for their labor.',
      reference: 'Ecclesiastes 4:9',
    },
  ]
};

export const PROGRAM_ITEMS: ProgramItem[] = [
  {
    time: '10:00 AM - 12:00 PM',
    duration: '2 hours',
    title: 'Church Service & Holy Matrimony',
    description: 'Sacrament of Holy Matrimony service at ACK EMMANUEL CHURCH KIKUYU.',
    bullets: ['Processional & Opening Hymn', 'Scripture Readings', 'Exchange of Vows & Rings', 'Signing of Certificate & Photo Session'],
    isChurch: true,
  },
  {
    time: '12:00 PM - 1:00 PM',
    duration: '1 hour',
    title: 'Photoshoot & Transfer to Reception',
    description: 'The newlyweds and bridal party capture memories at church grounds while guests transition to Leilani Gardens Kikuyu.',
    isChurch: false,
  },
  {
    time: '1:00 PM Expected Arrival',
    duration: '1:00 PM',
    title: 'Arrival of Guests & Welcome Lunch',
    description: 'Expected reception arrival at Leilani Gardens Kikuyu. Guests are ushered to their seats for a delicious welcome feast.',
    bullets: ['Welcoming the MC', 'Opening Blessing', 'Feast & Meal Service'],
    isChurch: false,
  },
  {
    time: '2:00 PM - 3:15 PM',
    duration: '1 hr 15 mins',
    title: 'Grand Entrance & Speeches',
    description: 'Energetic celebration welcoming the newly married couple into Leilani Gardens followed by speeches from parents and friends.',
    bullets: ["Groom's Family Speeches", "Bride's Family Speeches", 'Friends & Guests Speeches'],
    isChurch: false,
  },
  {
    time: '3:15 PM - 4:15 PM',
    duration: '1 hour',
    title: 'Cake Cutting Ceremony',
    description: 'Where there\'s cake, there is joy. Let there be cake!',
    bullets: ['Cake Cutting'],
    isChurch: false,
  },
  {
    time: '4:15 PM - 5:00 PM',
    duration: '45 mins',
    title: 'Vote of Thanks & Bouquet Toss',
    description: 'Expressing gratitude to everyone who celebrated with us, followed by final blessings.',
    bullets: ['Vote of Thanks', 'Bouquet Toss', 'Closing Prayer'],
    isChurch: false,
  },
  {
    time: '5:00 PM onwards',
    duration: 'Evening',
    title: 'Evening Socializing & Departure',
    description: 'Music, joy, socializing, and guest departure at leisure. Thank you for joining us!',
    isChurch: false,
  },
];

export const COLOR_SWATCHES: ColorSwatch[] = [
  {
    name: 'Swaying Sage Green',
    hex: '#87A96B',
    textColor: '#2D3B2D',
    description: 'Serene, natural earthy sage green representing growth, harmony, and renewal.'
  },
  {
    name: 'Cream Warm Beige',
    hex: '#E8DCC4',
    textColor: '#533F2A',
    description: 'A warm, organic beige tone bringing classic warmth and timeless elegance.'
  },
  {
    name: 'Soft Sand Linen',
    hex: '#F5EFE6',
    textColor: '#664E32',
    description: 'Gentle neutral ivory-beige reflecting clarity, peace, and natural grace.'
  },
  {
    name: 'Deep Forest Sage',
    hex: '#597359',
    textColor: '#1C261C',
    description: 'A rich botanical green accent that grounds the theme with sophisticated depth.'
  }
];

