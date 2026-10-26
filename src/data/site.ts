// সাইটের সব সত্যের একমাত্র উৎস (single source of truth)।
// নাম, ঠিকানা, স্থানাঙ্ক, রেটিং, খোলার সময় বা ফি বদলালে শুধু এই ফাইলটি সম্পাদনা করলেই
// TDK, JSON-LD, হিরো ফ্যাক্ট-বার, FAQ, Footer আর Sources — সব জায়গায় মিল থাকবে।
// পৃথকভাবে কোথাও হার্ড-কোড করবেন না।

/** SEO স্টেশন-নামের ধরন: «স্মৃতিসৌধের নাম + শহর + দর্শনার্থী গাইড» */
export const SITE_NAME = 'জাতীয় স্মৃতিসৌধ সাভার — দর্শনার্থী গাইড';

/** উপ-পাতার শিরোনামে সাইট-নাম যোগ করার সহায়ক (`পাতা | সাইট`) */
export const withSiteName = (title: string) => `${title} | ${SITE_NAME}`;

export const SITE_SHORT_NAME = 'স্মৃতিসৌধ গাইড';

export const LAST_UPDATED = {
  iso: '2026-10-25',
  monthWord: 'অক্টোবর ২০২৬',
  display: '২৫ অক্টোবর ২০২৬'
} as const;

export const ATTRACTION = {
  nameBn: 'জাতীয় স্মৃতিসৌধ',
  nameEn: 'National Martyrs’ Monument',
  alternateNames: [
    'National Martyrs’ Monument',
    'Jatiyo Smriti Soudho',
    'সাভার স্মৃতিসৌধ'
  ],
  streetAddress: 'ঢাকা–আরিচা মহাসড়ক, নবীনগর',
  locality: 'সাভার',
  localityShort: 'নবীনগর, সাভার',
  region: 'ঢাকা',
  postalCode: '1344',
  addressRegionFull: 'ঢাকা–আরিচা মহাসড়ক, সাভার ১৩৪৪',
  country: 'BD',
  plusCode: 'W763+GW',
  latitude: 23.9112985,
  longitude: 90.2547753,
  googleMapsUrl: 'https://maps.app.goo.gl/kfUxNKYsDusuGj9f6',
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6487.412098247093!2d90.2547753!3d23.9112985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e8fb9aa0707f%3A0x7f247dcf3afffae9!2sNational%20Martyrs'%20Monument!5e1!3m2!1sbn!2sbd!4v1788484997889!5m2!1sbn!2sbd",
  /** Google Maps-এ প্রকাশ্য রেটিং স্ন্যাপশট — সময়ের সঙ্গে বদলাতে পারে */
  rating: {
    value: '4.6',
    bestRating: '5',
    reviewCount: 23641,
    reviewCountDisplay: '২৩,৬৪১',
    source: 'Google Maps',
    syncedLabel: '২৫ অক্টোবর ২০২৬'
  }
} as const;

export const VISIT = {
  opens: '10:00',
  closes: '17:00',
  hoursDisplay: 'সকাল ১০টা – বিকেল ৫টা',
  hoursNote: '২৫ অক্টোবর ২০২৬-এর Google Maps তালিকা; বর্তমান প্রবেশ ও বিশেষ দিনের নিয়ম নিশ্চিত করুন',
  entryLabel: 'বর্তমান নিয়ম যাচাই করুন',
  entryNote: 'বর্তমান সাধারণ প্রবেশমূল্য নিশ্চিত করা যায়নি; ফি না দেখানো মানেই বিনামূল্যে নয়',
  suggestedDuration: 'প্রায় দেড়–দুই ঘণ্টা',
  bestSeason: 'আসল আবহাওয়া দেখে বাছুন',
  bestTimeOfDay: 'নিশ্চিত খোলা সময়ের মধ্যে',
  /** সড়কপথে, আনুমানিক */
  distanceFromDhakaKm: 35,
  distanceFromGabtoliKm: 20
} as const;

export const FACTS = {
  height: 'প্রায় ১৫০ ফুট (৪৫.৭ মিটার)',
  area: 'প্রায় ৩৪ হেক্টর (৮৪ একর)',
  architect: 'স্থপতি সৈয়দ মাইনুল হোসেন',
  designCompetition: '১৯৭৮; জমা পড়েছিল ৫৭টি প্রস্তাব',
  inaugurated: '১৬ ডিসেম্বর ১৯৮২ (বিজয় দিবস)',
  sevenChapters: [
    '১৯৫২-এর ভাষা আন্দোলন',
    '১৯৫৪-এর যুক্তফ্রন্ট নির্বাচন',
    '১৯৫৬-এর শাসনতান্ত্রিক আন্দোলন',
    '১৯৬২-এর শিক্ষা আন্দোলন',
    '১৯৬৬-এর ছয় দফা',
    '১৯৬৯-এর গণঅভ্যুত্থান',
    '১৯৭১-এর মুক্তিযুদ্ধ'
  ]
} as const;

export const OFFICIAL_SOURCES = [
  {
    name: 'সাভার উপজেলা প্রশাসন',
    url: 'https://savar.dhaka.gov.bd/pages/tourist-spot/697f940935ce18e1c06b73cd'
  },
  {
    name: 'বাংলাদেশ ট্যুরিজম বোর্ড · Beautiful Bangladesh',
    url: 'https://beautifulbangladesh.gov.bd/loc/dhaka/93'
  },
  {
    name: 'বাংলাপিডিয়া',
    url: 'https://bn.banglapedia.org/index.php?title=জাতীয়_স্মৃতিসৌধ'
  }
] as const;
