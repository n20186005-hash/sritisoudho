// D. আশপাশ: ৪টি পাতা (পরিকল্পনার ৩০–৩৩)।
// নীতি: নির্দিষ্ট দোকান, রেস্টুরেন্ট বা প্রতিষ্ঠানের নাম-ঠিকানা লিখে দেওয়া হয় না।
// ভবন, নির্মাণকাল ও প্রবেশ-নিয়ম যাচাই না করে নিশ্চিত করে লেখা হয় না; অনিশ্চয়তা callout-এ স্পষ্ট করা হয়।
import type { ContentPage } from './types';

export const nearbyPages: ContentPage[] = [
  {
    slug: 'nearby/food-rest-nabinagar',
    section: 'nearby',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['transport/nabinagar-last-mile', 'visit/how-long', 'itineraries/savar-half-day', 'visit/with-children'],
    bn: {
      title: 'স্মৃতিসৌধের কাছে খাবার, পানি ও বিশ্রামের ব্যবস্থা (নবীনগর ও সাভার)',
      description: 'জাতীয় স্মৃতিসৌধ ভ্রমণের আগে ও পরে নবীনগর ও সাভার এলাকায় খাবার, পানি, বিশ্রাম ও যাতায়াত-সংযোগ নিয়ে পরিকল্পনার সাধারণ নির্দেশনা।',
      h1: 'স্মৃতিসৌধের কাছে খাবার, পানি ও বিশ্রাম',
      answer:
        'জাতীয় স্মৃতিসৌধ ঘুরে দেখার পর খাবার ও বিশ্রামের সবচেয়ে ব্যবহারিক কেন্দ্র দুইটি—মহাসড়ক-সংলগ্ন নবীনগর এলাকা এবং কিছুটা দূরে সাভার শহর ও সাভার বাজার। এখানে কোনো নির্দিষ্ট রেস্টুরেন্টের নাম, খোলার সময় বা দাম দেওয়া হয় না, কারণ তা দ্রুত বদলায়; বরং কোথায় কী ধরনের ব্যবস্থা সাধারণত পাওয়া যায় এবং কী আগে যাচাই করবেন, সেদিকে মনোযোগ দেওয়া হয়েছে।',
      blocks: [
        { type: 'h2', text: 'দুই প্রধান এলাকা থেকে বেছে নেওয়ার কারণ' },
        { type: 'p', text: 'স্মৃতিসৌধ ঢাকা–আরিচা মহাসড়কের পাশে নবীনগরে অবস্থিত। তাই ভ্রমণের দিন সবচেয়ে সহজ দুটি বিকল্প হলো—হাঁটার দূরত্বে মহাসড়ক-সংলগ্ন নবীনগর এলাকা, এবং গাড়িতে অল্প সময়ের মধ্যে পৌঁছানো যায় এমন সাভার শহর ও বাজার। কোনটি বেছে নেবেন তা নির্ভর করে আপনার হাতে কত সময় আছে এবং পরের গন্তব্য কোথায় তার ওপর।' },
        {
          type: 'table',
          head: ['এলাকা', 'কী পাওয়ার সম্ভাবনা', 'কখন সুবিধাজনক'],
          rows: [
            ['নবীনগর (মহাসড়ক-সংলগ্ন)', 'চা-নাস্তা, হালকা খাবার ও দৈনন্দিন প্রয়োজনীয় জিনিস', 'স্মৃতিসৌধের ঠিক আগে বা পরে, দীর্ঘ বিরতি ছাড়া'],
            ['সাভার শহর ও বাজার', 'আরও বৈচিত্র্যময় খাবার ও কেনাকাটার সুযোগ', 'হাতে বেশি সময় থাকলে বা কেনাকাটা একসঙ্গে করতে চাইলে']
          ]
        },
        { type: 'callout', tone: 'warn', title: 'দাম, সময় ও মান যাচাই করুন', text: 'এই পাতায় কোনো নির্দিষ্ট দোকানের নাম, মেনু, খোলার সময় বা দাম নেই। ব্যবসা, সময়সূচি ও মান বদলায়—তাই যাওয়ার আগে সেদিন স্থানীয়ভাবে যাচাই করুন এবং অতিরিক্ত মূল্য চাওয়া হলে দর যাচাই করুন।' },
        { type: 'h2', text: 'পানি, বিশ্রাম ও প্রাথমিক পরিষেবা' },
        { type: 'ul', items: [
          'বোতলজাত ও নিরাপদ পানি আগেই সঙ্গে রাখা ভালো, বিশেষ করে গরমের দিনে।',
          'রৌদ্র ও বৃষ্টি—দুটি ক্ষেত্রেই আশ্রয়দায়ী স্থান (গাছের ছায়া, স্থানীয় ভবন) কোথায় আছে তা আগে লক্ষ রাখুন।',
          'ছোট শিশু বা বয়স্ক সঙ্গী থাকলে হাঁটার মাঝে বসার জায়গা কোথায় পাওয়া যায় সেটি লাইন ঠিক করার সময় ভেবে রাখুন।',
          'ব্যক্তিগত ওষুধ, প্রাথমিক চিকিৎসা সামগ্রী নিজের সঙ্গে রাখা নিরাপদ; নিকটবর্তী চিকিৎসা-সুবিধার ঠিকানা যাচাই করে রাখুন।'
        ] },
        { type: 'h2', text: 'পরিবার বা দল নিয়ে গেলে' },
        { type: 'p', text: 'বড় দল বা স্কুল-ক্যাম্পাস সফরে খাবারের সময়সূচি আগে ঠিক করে নিলে ভিড় এড়ানো সহজ হয়। সাধারণত দর্শনার্থীরা দুপুরের দিকে সবচেয়ে বেশি আসেন, তাই ভ্রমণের দিন ভিড়ের চাপ বুঝে খাবারের আগে বা পরে স্মৃতিসৌধ দেখা সুবিধাজনক হতে পারে।' },
        { type: 'callout', tone: 'note', title: 'খাবার আগেই ভেবে রাখুন', text: 'স্মৃতিসৌধ একটি জাতীয় স্মৃতিকেন্দ্র। এই এলাকার মূল উদ্দেশ্য খাবার বা বিনোদন নয়। তাই খাবার ও কেনাকাটা পরিকল্পনার সময় আশপাশের পরিবেশকে সম্মান করে চলুন।' },
        { type: 'h2', text: 'যাতায়াতের সঙ্গে সংযোগ' },
        { type: 'steps', items: [
          { title: 'একই পথে সাজান', text: 'স্মৃতিসৌধ থেকে ফেরার পথে সাভার শহরের দিকে গেলে খাবার অনেক সময় একসঙ্গে সারানো যায়।' },
          { title: 'ফেরার পরিকল্পনা আগে করুন', text: 'খাবারের পর ফিরতি যান ধরতে হবে, তাই ফিরতি বাসের স্থান বা রাইড-সেবার পিক-আপ আগেই ঠিক করে রাখুন।' },
          { title: 'সময় ধরুন বাস্তবসম্মতভাবে', text: 'বিশ্রাম ও খাবারে যত সময় লাগবে তা হিসাবে রেখে বাকি দিনের রুট ঠিক করুন।' }
        ] },
        { type: 'h2', text: 'নিরাপদ খাবার বাছাই ও স্বাস্থ্যবিধি' },
        { type: 'ul', items: [
          'গরমে বা ভিড়ের সময় রান্না করা খাবার তাজা কি না দেখে নিন।',
          'কাঁচা বা খোলা রাখা খাবারে সতর্ক থাকুন, বিশেষ করে দীর্ঘ যাত্রার আগে।',
          'হাত ধোয়ার সুবিধা না থাকলে সঙ্গে স্যানিটাইজার রাখুন।',
          'পেটের সমস্যার ইতিহাস থাকলে ভারী ভাজা বা অপরিচিত খাবার এড়িয়ে চলুন।'
        ] },
        { type: 'links', items: [
          { label: 'নবীনগর থেকে স্মৃতিসৌধের শেষ অংশ', href: '/transport/nabinagar-last-mile/' },
          { label: 'সাভার থেকে স্মৃতিসৌধ', href: '/transport/from-savar/' },
          { label: 'সাভার অর্ধদিবসের রুট', href: '/itineraries/savar-half-day/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধের কাছেই কি খাবারের ব্যবস্থা আছে?', a: 'মহাসড়ক-সংলগ্ন নবীনগর এলাকায় হালকা খাবার ও দৈনন্দিন প্রয়োজনীয় জিনিস পাওয়ার সম্ভাবনা আছে; আরও বৈচিত্র্যের জন্য সাভার শহর বা বাজার বিকল্প। নির্দিষ্ট দোকান এখানে নাম দেওয়া হয়নি, কারণ দাম ও সময় বদলায়।' },
        { q: 'স্মৃতিসৌধে বসে খাওয়ার ব্যবস্থা আছে কি?', a: 'এটি একটি জাতীয় স্মৃতিকেন্দ্র, তাই মূল উদ্দেশ্য খাবার বা বিনোদন নয়। স্থানীয় নিয়ম মেনে চলুন এবং যাওয়ার আগে বর্তমান ব্যবস্থা যাচাই করুন।' },
        { q: 'পরিবার নিয়ে গিয়ে কোথায় আরাম করব?', a: 'আশ্রয়দায়ী ছায়া বা বসার সুযোগ কোথায় আছে তা আগে লক্ষ রাখুন এবং বয়স্ক বা শিশুর কথা ভেবে বিরতির স্থান ঠিক করুন। নির্দিষ্ট দোকান আমাদের নাম দেওয়া হয় না।' },
        { q: 'পানি বা ওষুধ পাওয়া যাবে কি?', a: 'নিজের নিরাপদ পানি ও প্রাথমিক ওষুধ সঙ্গে রাখাই নিরাপদ; নিকটবর্তী চিকিৎসা-সুবিধার ঠিকানা আগে যাচাই করে নিন।' },
        { q: 'খাবার খেয়ে অসুস্থ হওয়ার ঝুঁকি কমাতে কী করব?', a: 'রান্না করা খাবার তাজা কি না দেখে নিন, খোলা বা কাঁচা খাবারে সতর্ক থাকুন এবং হাত পরিষ্কারের ব্যবস্থা সঙ্গে রাখুন। নির্দিষ্ট দোকান বা দাম এখানে বলা হয়নি।' },
        { q: 'শিশুদের জন্য খাবার বাছাইয়ে কী খেয়াল রাখব?', a: 'শিশুদের জন্য হালকা ও কম ঝাল খাবার বেছে নেওয়া নিরাপদ; নির্দিষ্ট খাবারের নাম বা দাম যাচাইসাপেক্ষ, তাই এখানে দেওয়া হয়নি।' }
      ]
    },
    en: {
      title: 'Food, water and rest near the National Martyrs’ Monument (Nabinagar and Savar)',
      description: 'Practical guidance on food, drinking water, rest and onward transport around Nabinagar and Savar before or after visiting the National Martyrs’ Monument.',
      h1: 'Food, water and rest near the monument',
      answer:
        'The two practical centres for food and rest around the National Martyrs’ Monument are the highway-side Nabinagar area and, a little further on, Savar town and Savar Bazar. This page does not name specific restaurants, opening times or prices, because those change quickly; instead it explains what kinds of facilities you can usually expect and what you should verify on the day.',
      blocks: [
        { type: 'h2', text: 'Why these two areas' },
        { type: 'p', text: 'The monument stands beside the Dhaka–Aricha Highway at Nabinagar. On the day, the two simplest options are the highway-side Nabinagar area within walking distance, and Savar town and Bazar a short drive away. Which you choose depends on how much time you have and where you are heading next.' },
        {
          type: 'table',
          head: ['Area', 'What you can usually expect', 'When it suits you'],
          rows: [
            ['Nabinagar (beside the highway)', 'Tea, snacks, light food and everyday essentials', 'Right before or after the monument, without a long break'],
            ['Savar town and Bazar', 'A wider choice of food plus shopping', 'When you have more time or want to combine a shop with a meal']
          ]
        },
        { type: 'callout', tone: 'warn', title: 'Verify price, timing and quality', text: 'No specific shop names, menus, opening hours or prices are listed here. Businesses, schedules and quality change, so check locally on the day — and compare prices if you are asked for more than expected.' },
        { type: 'h2', text: 'Water, rest and basic facilities' },
        { type: 'ul', items: [
          'Carry bottled, safe drinking water with you, especially in hot weather.',
          'Notice in advance where shelter is available — shade trees or a building — for both sun and rain.',
          'If you are with small children or older companions, plan where you can sit down along the route.',
          'Keep any personal medication and basic first-aid supplies with you, and note the nearest medical facility in advance.'
        ] },
        { type: 'h2', text: 'If you are visiting as a family or group' },
        { type: 'p', text: 'For large groups or school visits, fixing mealtimes in advance makes it easier to avoid the busiest hours. Visitors tend to arrive in the middle of the day, so on the day it can help to see the monument before or after the meal rush rather than during it.' },
        { type: 'callout', tone: 'note', title: 'Remember what the place is for', text: 'The monument is a national memorial. Food and entertainment are not its purpose, so plan meals and shopping while respecting the surroundings.' },
        { type: 'h2', text: 'Connecting with transport' },
        { type: 'steps', items: [
          { title: 'Combine it with one route', text: 'Heading towards Savar town on the way back often lets you sort out food in the same trip.' },
          { title: 'Plan the return first', text: 'You will need to catch your return transport after eating, so fix the return bus stop or pickup in advance.' },
          { title: 'Allow realistic time', text: 'Budget for rest and meals when you plan the rest of the day.' }
        ] },
        { type: 'h2', text: 'Choosing safe food and hygiene' },
        { type: 'ul', items: [
          'In hot weather or at busy times, check that cooked food is fresh.',
          'Be cautious with raw or uncovered food, especially before a long journey.',
          'Carry hand sanitiser if you will not have easy access to washing.',
          'If you are prone to stomach trouble, avoid heavy fried or unfamiliar food.'
        ] },
        { type: 'links', items: [
          { label: 'The last stretch from Nabinagar', href: '/en/transport/nabinagar-last-mile/' },
          { label: 'From Savar to the monument', href: '/en/transport/from-savar/' },
          { label: 'A Savar half-day route', href: '/en/itineraries/savar-half-day/' }
        ] }
      ],
      faq: [
        { q: 'Is there food right next to the monument?', a: 'The highway-side Nabinagar area is likely to have light food and everyday essentials; Savar town and Bazar offer a wider choice. No specific shops are named here because prices and hours change.' },
        { q: 'Can I sit and eat at the monument?', a: 'It is a national memorial, not a food or entertainment venue. Follow local rules and check the current situation before you go.' },
        { q: 'Where can a family rest nearby?', a: 'Note where shade or seating is available in advance and plan a break with older visitors or children in mind. We do not name specific businesses.' },
        { q: 'Can I buy water or medicine there?', a: 'Carrying your own safe water and basic medicine is safest; check the location of the nearest medical facility beforehand.' },
        { q: 'How can I reduce the risk of getting ill from food?', a: 'Check that cooked food is fresh, be cautious with raw or uncovered food, and keep a way to clean your hands. No specific shops or prices are named here.' },
        { q: 'What should I consider when choosing food for children?', a: 'Light, less spicy food is the safer choice for children; specific dishes and prices are unverified, so they are not listed here.' }
      ]
    }
  },
  {
    slug: 'nearby/jahangirnagar-university',
    section: 'nearby',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['visit/location', 'itineraries/savar-half-day', 'nearby/food-rest-nabinagar', 'transport/from-savar'],
    bn: {
      title: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়: সাভারে স্মৃতিসৌধের কাছের শিক্ষা-পরিসর',
      description: 'সাভারে জাতীয় স্মৃতিসৌধের কাছের জাহাঙ্গীরনগর বিশ্ববিদ্যালয় নিয়ে সাধারণ পরিচিতি, কেন ইতিহাস-আগ্রহী দর্শনার্থীদের কাছে এটি প্রাসঙ্গিক, এবং পরিদর্শনের আগে কী যাচাই করা জরুরি।',
      h1: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয় ও আশপাশের পরিসর',
      answer:
        'জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (জাবি) সাভারে অবস্থিত একটি পরিচিত আবাসিক সরকারি বিশ্ববিদ্যালয়, যা ১৯৭০ সালের দিকে প্রতিষ্ঠিত। স্মৃতিসৌধ-ভ্রমণের সঙ্গে এটি প্রাসঙ্গিক কারণ এটি একই উপজেলায় এবং সাভার এলাকার শিক্ষা ও সাংস্কৃতিক পরিচয়ের অংশ। তবে ক্যাম্পাসে দর্শনার্থীদের প্রবেশ, সময় ও অনুমতির নিয়ম দ্রুত বদলাতে পারে—তাই কোনো নির্দিষ্ট নিয়ম এখানে নিশ্চিত করে লেখা হয়নি, যাওয়ার আগে বিশ্ববিদ্যালয়ের হালনাগাদ ঘোষণা দেখুন।',
      blocks: [
        { type: 'h2', text: 'কেন এটি স্মৃতিসৌধের সঙ্গে প্রাসঙ্গিক' },
        { type: 'p', text: 'স্মৃতিসৌধ ও বিশ্ববিদ্যালয় একই উপজেলা—সাভার—এর অন্তর্গত। স্বাধীনতা ও জাতীয় ইতিহাসে আগ্রহী অনেক দর্শনার্থী স্মৃতিসৌধ দেখার সঙ্গে এলাকার শিক্ষা-পরিসর সম্পর্কেও জানতে চান। এ কারণেই স্মৃতিসৌধ-ভ্রমণের দিনের রুটে এই এলাকা বিবেচনার যোগ্য একটি প্রসঙ্গ, যদিও এটি স্মৃতিসৌধের সমপর্যায়ের কোনো দর্শনীয় কেন্দ্র হিসেবে ঘোষণা করা হচ্ছে না।' },
        { type: 'callout', tone: 'warn', title: 'প্রবেশ ও সময় যাচাই করা বাধ্যতামূলক', text: 'বিশ্ববিদ্যালয় একটি সক্রিয় শিক্ষাপ্রতিষ্ঠান। দর্শনার্থীদের প্রবেশ, সময়, গেট ও অনুমতির নিয়ম পরিবর্তনশীল এবং প্রশাসন যেকোনো সময় বদলাতে পারে। এই পাতায় কোনো নির্দিষ্ট সময় বা প্রবেশ-নিয়ম নিশ্চিত করে বলা হয়নি—যাওয়ার দিন অবশ্যই বিশ্ববিদ্যালয়ের হালনাগাদ তথ্য দেখুন।' },
        { type: 'h2', text: 'পরিকল্পনার সময় যেসব বিষয় খেয়াল রাখবেন' },
        { type: 'ul', items: [
          'ক্যাম্পাস ছাত্রছাত্রীদের পড়াশোনার জায়গা—শৃঙ্খলা ও শান্ত পরিবেশ রক্ষা করুন।',
          'শিক্ষাসংশ্লিষ্ট ভবনে ঢোকার আগে অনুমতি আছে কি না নিশ্চিত করুন; সব ভবন সবার জন্য খোলা নয়।',
          'ছবি তোলার আগে স্থানীয় নিয়ম ও ব্যক্তিগত গোপনীয়তার প্রতি শ্রদ্ধা দেখান।',
          'অভ্যন্তরীণ রাস্তা বড় ও বিস্তৃত—হাঁটার জন্য সময় ধরুন এবং গাড়ি রাখার নিয়ম আগে জেনে নিন।'
        ] },
        { type: 'h2', text: 'যাতায়াত ও রুটে যোগ করা' },
        { type: 'steps', items: [
          { title: 'স্মৃতিসৌধ আগে, এরপর এলাকা', text: 'প্রধান লক্ষ্য স্মৃতিসৌধ থাকলে সেটি আগে দেখে নেওয়া সাধারণত সুবিধাজনক, কারণ সেখানে ভিড় ও সময়ের চাপ আলাদা।' },
          { title: 'হাতে সময় রাখুন', text: 'দুটি আলাদা গন্তব্য একদিনে ধরলে যাতায়াত ও বিশ্রামের সময় হিসাবে রাখুন।' },
          { title: 'ফেরার পথ ঠিক করুন', text: 'সাভারের দিক থেকে ফিরতি যান বা পিক-আপ আগেই ঠিক করে রাখলে শেষে ভোগান্তি কম হয়।' }
        ] },
        { type: 'h2', text: 'স্মৃতিসৌধ ও বিশ্ববিদ্যালয়: দুই গন্তব্য, দুই ধরনের অভিজ্ঞতা' },
        {
          type: 'table',
          head: ['দিক', 'স্মৃতিসৌধ', 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয়'],
          rows: [
            ['মূল পরিচয়', 'জাতীয় স্মৃতিকেন্দ্র', 'সক্রিয় শিক্ষাপ্রতিষ্ঠান'],
            ['পরিদর্শনের ধরন', 'স্মরণ ও ইতিহাস দেখা', 'ক্যাম্পাস-পরিবেশ, যাচাই করা প্রবেশ-নিয়ম সাপেক্ষে'],
            ['সময় পরিকল্পনা', 'প্রায় ১–২ ঘণ্টা', 'যাতায়াতসহ উদার সময় ধরুন']
          ]
        },
        { type: 'links', items: [
          { label: 'সাভার থেকে স্মৃতিসৌধ', href: '/transport/from-savar/' },
          { label: 'সাভার অর্ধদিবসের রুট', href: '/itineraries/savar-half-day/' },
          { label: 'স্মৃতিসৌধ কোথায় অবস্থিত', href: '/visit/location/' }
        ] }
      ],
      faq: [
        { q: 'জাহাঙ্গীরনগর বিশ্ববিদ্যালয় কি স্মৃতিসৌধের কাছে?', a: 'হ্যাঁ, দুটিই সাভার উপজেলায়। তবে দুটি আলাদা গন্তব্য—ভ্রমণের দিন যাতায়াত ও সময় আলাদাভাবে ধরে নেওয়া ভালো।' },
        { q: 'ক্যাম্পাসে ঢুকতে অনুমতি লাগে কি?', a: 'প্রবেশ-নিয়ম পরিবর্তনশীল এবং প্রশাসন যেকোনো সময় বদলাতে পারে। এই পাতায় নির্দিষ্ট নিয়ম বলা হয়নি—যাওয়ার আগে বিশ্ববিদ্যালয়ের হালনাগাদ ঘোষণা দেখুন।' },
        { q: 'ভ্রমণের দিনটি কীভাবে সাজাব?', a: 'স্মৃতিসৌধকেন্দ্রিক ভ্রমণে হাতে সময় থাকলে কাছের এলাকা যোগ করা যায়; তবে প্রতিটি গন্তব্যের নিয়ম ও সময় আলাদাভাবে যাচাই করুন।' },
        { q: 'বিশ্ববিদ্যালয় কি স্মৃতিসৌধের মতোই ঘুরে দেখা যায়?', a: 'না। স্মৃতিসৌধ সবার জন্য খোলা জাতীয় স্মৃতিকেন্দ্র, আর বিশ্ববিদ্যালয় একটি সক্রিয় শিক্ষাপ্রতিষ্ঠান; ক্যাম্পাস-দর্শন প্রবেশ-নিয়ম সাপেক্ষে, যা যাচাই করা জরুরি।' },
        { q: 'একই দিনে দুটি দেখতে কত সময় ধরব?', a: 'স্মৃতিসৌধে প্রায় ১–২ ঘণ্টা এবং যাতায়াতসহ বিশ্ববিদ্যালয়ে উদার সময় ধরে নিন। এটি নির্দিষ্ট সময়সূচি নয়—দিনের ভিড় ও যানজট দেখে সময় বাড়িয়ে নিন।' }
      ]
    },
    en: {
      title: 'Jahangirnagar University: the campus near the monument in Savar',
      description: 'A general introduction to Jahangirnagar University near the National Martyrs’ Monument in Savar, why it is relevant to history-minded visitors, and what to verify before you visit.',
      h1: 'Jahangirnagar University and the surrounding area',
      answer:
        'Jahangirnagar University (JU) is a well-known public residential university in Savar, established around 1970. It is relevant to a monument trip because it lies in the same upazila and is part of Savar’s educational and cultural identity. Visitor access, hours and permits can change quickly, so no fixed rule is asserted here — check the university’s current announcements before you go.',
      blocks: [
        { type: 'h2', text: 'Why it is relevant to a monument visit' },
        { type: 'p', text: 'The monument and the university both belong to Savar Upazila. Many visitors interested in independence and national history also want to know about the area’s educational setting. That is why the area is worth considering within a monument day, although it is not presented here as a sight on a par with the monument itself.' },
        { type: 'callout', tone: 'warn', title: 'Access and hours must be verified', text: 'The university is a working academic institution. Rules for visitors, hours, gates and permits are changeable and can be revised at any time. No specific time or access rule is asserted on this page — always check the university’s current information on the day.' },
        { type: 'h2', text: 'Things to keep in mind when planning' },
        { type: 'ul', items: [
          'The campus is a place of study for students — respect its order and quiet.',
          'Before entering academic buildings, confirm whether entry is permitted; not every building is open to everyone.',
          'Before taking photographs, respect local rules and personal privacy.',
          'Internal roads are long and wide — allow walking time and find out the parking rules in advance.'
        ] },
        { type: 'h2', text: 'Transport and adding it to a route' },
        { type: 'steps', items: [
          { title: 'Monument first, then the area', text: 'If the monument is your main goal, seeing it first is usually easier, since crowds and time pressure there are different.' },
          { title: 'Build in time', text: 'If you combine two destinations in one day, allow for travel and rest.' },
          { title: 'Fix the return leg', text: 'Agreeing your return transport or pickup from the Savar side in advance saves trouble at the end.' }
        ] },
        { type: 'h2', text: 'The monument and the university: two destinations, two kinds of experience' },
        {
          type: 'table',
          head: ['Aspect', 'The monument', 'Jahangirnagar University'],
          rows: [
            ['Main identity', 'National memorial', 'Working academic institution'],
            ['Type of visit', 'Remembrance and history', 'Campus setting only, subject to verified access rules'],
            ['Time planning', 'About 1–2 hours', 'Allow generous time including travel']
          ]
        },
        { type: 'links', items: [
          { label: 'From Savar to the monument', href: '/en/transport/from-savar/' },
          { label: 'A Savar half-day route', href: '/en/itineraries/savar-half-day/' },
          { label: 'Where the monument is located', href: '/en/visit/location/' }
        ] }
      ],
      faq: [
        { q: 'Is Jahangirnagar University near the monument?', a: 'Yes — both are in Savar Upazila. They are separate destinations, though, so plan travel and time for each.' },
        { q: 'Do I need a permit to enter the campus?', a: 'Access rules change and can be revised by the administration at any time. No fixed rule is stated here — check the university’s current announcement before you go.' },
        { q: 'How should I plan the day?', a: 'On a monument-focused trip you can add the nearby area if you have time, but verify the rules and hours of each destination separately.' },
        { q: 'Can I visit the university the way I visit the monument?', a: 'No. The monument is a national memorial open to all, while the university is a working academic institution; a campus visit is subject to access rules, which must be verified.' },
        { q: 'How much time should I allow for both in one day?', a: 'Allow about 1–2 hours for the monument and generous time for the university including travel. This is not a fixed timetable — extend it according to crowds and traffic.' }
      ]
    }
  },
  {
    slug: 'nearby/birulia-heritage',
    section: 'nearby',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['visit/location', 'itineraries/dhaka-savar-history-day', 'nearby/harishchandra-heritage', 'transport/from-dhaka'],
    bn: {
      title: 'বিরুলিয়া: সাভারের ঐতিহাসিক পল্লি নিয়ে যা জানা দরকার',
      description: 'সাভার এলাকার বিরুলিয়া ঐতিহাসিক পল্লি নিয়ে সাধারণ পরিচিতি, কেন এটি স্মৃতিসৌধ-ভ্রমণের সম্পূরক হতে পারে, এবং নির্দিষ্ট তথ্য যাচাই না করে যা দাবি করা হয়নি।',
      h1: 'বিরুলিয়া ঐতিহাসিক পল্লি',
      answer:
        'বিরুলিয়া সাভার এলাকার একটি পুরোনো জনবসতি, যা স্থানীয়ভাবে ঐতিহ্যবাহী বসতবাড়ি ও পুরোনো স্থাপনার জন্য পরিচিত। স্মৃতিসৌধ-ভ্রমণের সঙ্গে এটি একটি সম্ভাব্য সম্পূরক গন্তব্য, কারণ দুটিই সাভার উপজেলায়। তবে এই পাতায় কোনো নির্দিষ্ট ভবন, প্রতিষ্ঠার সন বা স্থাপত্যের বিবরণ নিশ্চিত করে বলা হয়নি—এসব যাচাইসাপেক্ষ, এবং যাওয়ার আগে স্থানীয় ও প্রামাণ্য সূত্রে মিলিয়ে নেওয়া জরুরি।',
      blocks: [
        { type: 'h2', text: 'কেন বিরুলিয়া স্মৃতিসৌধের সম্পূরক হতে পারে' },
        { type: 'p', text: 'স্মৃতিসৌধ মূলত ১৯৭১ সালের মুক্তিযুদ্ধের স্মৃতিকেন্দ্র। সাভার উপজেলার ভেতরে বিরুলিয়ার মতো পুরোনো জনবসতি স্থানীয় ইতিহাস ও স্থাপত্য-ঐতিহ্যের আরেকটি স্তর যোগ করে। হাতে সময় থাকলে স্মৃতিসৌধ-ভ্রমণের দিনে এটি বিবেচনা করা যায়, তবে প্রধান গন্তব্য হিসেবে নয়।' },
        { type: 'callout', tone: 'warn', title: 'নির্দিষ্ট তথ্য এখানে নিশ্চিত নয়', text: 'বিরুলিয়ার কোন কোন ভবন ঐতিহাসিক, সেগুলোর নির্মাণকাল বা বর্তমান অবস্থা—এসব এই পাতায় নিশ্চিত করে দাবি করা হয়নি, কারণ একক নির্ভরযোগ্য সূত্রে তা যাচাই করা যায়নি। বাড়িঘর ব্যক্তিমালিকানাধীন বা বসবাসরত হতে পারে; অনুমতি ছাড়া কারও প্রাঙ্গণে ঢুকবেন না।' },
        { type: 'h2', text: 'পরিদর্শনের সময় করণীয়' },
        { type: 'ul', items: [
          'বসবাসরত এলাকা—শব্দ, ছবি ও আচরণে স্থানীয়দের প্রতি সম্মান দেখান।',
          'ব্যক্তিগত বাসস্থান বা বন্ধ দরজায় অনুমতি ছাড়া প্রবেশ করবেন না।',
          'পুরোনো স্থাপনার অবস্থা সম্পর্কে নিশ্চিত না হয়ে কাঠামোতে হাত দেবেন না বা ভর দেবেন না।',
          'স্থানীয় কারও কাছ থেকে এলাকার প্রকৃত ইতিহাস জানার চেষ্টা করুন, গুজব বা অতিরঞ্জিত বর্ণনায় ভরসা করবেন না।'
        ] },
        { type: 'h2', text: 'রুটে কীভাবে যোগ করবেন' },
        { type: 'steps', items: [
          { title: 'আগে প্রামাণ্য তথ্য জোগাড় করুন', text: 'কোন অংশ ঘুরে দেখা যায় এবং কোন সময়ে যায়—তা যাচাই না করে গাড়ি নিয়ে বের হবেন না।' },
          { title: 'হাতে সময় রাখুন', text: 'গ্রামীণ এলাকায় রাস্তা ও যাতায়াতের গতি শহরের মতো নয়; সময় উদারভাবে ধরুন।' },
          { title: 'স্মৃতিসৌধ আগে দেখে নিন', text: 'প্রধান স্মৃতিকেন্দ্র আগে দেখে নিলে দিনের বাকি অংশ নমনীয় থাকে।' }
        ] },
        { type: 'h2', text: 'বিরুলিয়া ও হরিশ্চন্দ্র: পার্থক্য ও মিল' },
        { type: 'p', text: 'স্মৃতিসৌধের আশপাশে ঐতিহ্য-আগ্রহী দর্শনার্থীরা প্রায়ই বিরুলিয়া ও হরিশ্চন্দ্র—দুটি নাম একসঙ্গে শোনেন। দুটিই সাভার উপজেলার প্রাচীন ঐতিহ্যের সঙ্গে যুক্ত, তাই হাতে সময় থাকলে রুটে দুটিই বিবেচনা করা যায়; তবে স্মৃতিসৌধই মূল গন্তব্য, আর এগুলো ঐচ্ছিক সম্পূরক।' },
        {
          type: 'table',
          head: ['দিক', 'বিরুলিয়া', 'হরিশ্চন্দ্র'],
          rows: [
            ['স্থানীয় পরিচয়', 'পুরোনো বসতি ও ঐতিহ্যবাহী বসতবাড়ি', 'প্রাচীন ইতিহাস-সংশ্লিষ্ট স্থান'],
            ['প্রবেশ', 'বসবাসরত এলাকা; ব্যক্তিগত বাড়িতে অনুমতি ছাড়া নয়', 'সীমিত-প্রবেশ বা সংরক্ষণ এলাকা হতে পারে'],
            ['যাচাই প্রয়োজন', 'নির্দিষ্ট ভবন ও নির্মাণকাল', 'প্রত্নতাত্ত্বিক তথ্য ও সময়কাল']
          ]
        },
        { type: 'links', items: [
          { label: 'ঢাকা–সাভার একদিনের ঐতিহাসিক রুট', href: '/itineraries/dhaka-savar-history-day/' },
          { label: 'হরিশ্চন্দ্র ঐতিহাসিক স্থান', href: '/nearby/harishchandra-heritage/' },
          { label: 'ঢাকা থেকে স্মৃতিসৌধ', href: '/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'বিরুলিয়ায় নির্দিষ্ট কী দেখব?', a: 'বিরুলিয়া পুরোনো জনবসতি হিসেবে পরিচিত, তবে এই পাতায় নির্দিষ্ট ভবন বা সন নিশ্চিত করে বলা হয়নি—যাওয়ার আগে প্রামাণ্য সূত্রে যাচাই করুন।' },
        { q: 'বিরুলিয়া কি স্মৃতিসৌধের মতো দর্শনীয় স্থান?', a: 'না। স্মৃতিসৌধ জাতীয় স্মৃতিকেন্দ্র; বিরুলিয়া একটি বসবাসরত পুরোনো এলাকা, যা হাতে সময় থাকলে সম্পূরক হিসেবে দেখা যায়।' },
        { q: 'সেখানে ঢোকার জন্য অনুমতি লাগে কি?', a: 'অনেক বাড়ি ব্যক্তিমালিকানাধীন বা বসবাসরত। অনুমতি ছাড়া কারও প্রাঙ্গণে ঢুকবেন না এবং স্থানীয় রীতিনীতি মেনে চলুন।' },
        { q: 'বিরুলিয়া আর হরিশ্চন্দ্রের মধ্যে কোনটি আগে দেখব?', a: 'দুটিই ঐচ্ছিক সম্পূরক—কোনোটিই স্মৃতিসৌধের সমপর্যায়ের নয়। হাতে সময় ও যাতায়াত দেখে ক্রম ঠিক করুন এবং যাওয়ার আগে প্রতিটির প্রবেশ-নিয়ম আলাদাভাবে যাচাই করুন।' },
        { q: 'দুটোই একই দিনে করা যাবে কি?', a: 'হাতে সময় থাকলে সম্ভব হতে পারে, তবে গ্রামীণ রাস্তায় যাতায়াত সময়সাপেক্ষ; কম গুরুত্বপূর্ণ অংশ বাদ দেওয়ার প্রস্তুতি রাখুন।' }
      ]
    },
    en: {
      title: 'Birulia: what to know about the historic settlement in Savar',
      description: 'A general introduction to the historic settlement of Birulia in the Savar area, why it can complement a monument visit, and which specific claims are deliberately not made without verification.',
      h1: 'The historic settlement of Birulia',
      answer:
        'Birulia is an older settlement in the Savar area, known locally for traditional homes and old buildings. It can complement a monument visit because both lie in Savar Upazila. This page does not assert specific buildings, dates of construction or architectural details, because those are unverified — confirm them with local and authoritative sources before you go.',
      blocks: [
        { type: 'h2', text: 'Why Birulia can complement the monument visit' },
        { type: 'p', text: 'The monument is fundamentally a memorial to the 1971 Liberation War. An older settlement such as Birulia within Savar Upazila adds another layer of local history and architectural heritage. If you have time, it can be considered within a monument day, but not as the main destination.' },
        { type: 'callout', tone: 'warn', title: 'Specific details are not asserted here', text: 'Which buildings in Birulia are historic, when they were built and what condition they are in are not asserted on this page, because they could not be verified from a single reliable source. Homes may be private or occupied — do not enter anyone’s premises without permission.' },
        { type: 'h2', text: 'Etiquette while visiting' },
        { type: 'ul', items: [
          'It is a lived-in area — respect residents in noise, photographs and behaviour.',
          'Do not enter private homes or closed doors without permission.',
          'Do not lean on or touch old structures when you are unsure of their condition.',
          'Try to learn the real history from local people rather than relying on rumour or exaggeration.'
        ] },
        { type: 'h2', text: 'How to add it to a route' },
        { type: 'steps', items: [
          { title: 'Gather authoritative information first', text: 'Do not set out by car until you have verified which parts can be visited and at what hours.' },
          { title: 'Allow generous time', text: 'Roads and travel speeds in a village area are not like the city; build in extra time.' },
          { title: 'See the monument first', text: 'Seeing the main memorial first keeps the rest of the day flexible.' }
        ] },
        { type: 'h2', text: 'Birulia and Harishchandra: differences and overlap' },
        { type: 'p', text: 'Around the monument, heritage-minded visitors often hear two names together — Birulia and Harishchandra. Both are linked to the older heritage of Savar Upazila, so both can be considered within a route if you have time; the monument itself remains the main destination, and these are optional complements.' },
        {
          type: 'table',
          head: ['Aspect', 'Birulia', 'Harishchandra'],
          rows: [
            ['Local identity', 'Older settlement with traditional homes', 'Place linked to early history'],
            ['Access', 'Lived-in area; not into private homes without permission', 'May be limited-access or under conservation'],
            ['Needs verifying', 'Specific buildings and dates', 'Archaeological detail and period']
          ]
        },
        { type: 'links', items: [
          { label: 'A Dhaka–Savar history day route', href: '/en/itineraries/dhaka-savar-history-day/' },
          { label: 'The Harishchandra historic site', href: '/en/nearby/harishchandra-heritage/' },
          { label: 'From Dhaka to the monument', href: '/en/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'What exactly is there to see in Birulia?', a: 'Birulia is known as an older settlement, but no specific buildings or dates are asserted here — verify with authoritative sources before visiting.' },
        { q: 'Is Birulia a sight like the monument?', a: 'No. The monument is a national memorial; Birulia is a lived-in older area that can be a complement if you have time.' },
        { q: 'Do I need permission to enter?', a: 'Many homes are private or occupied. Do not enter anyone’s premises without permission, and follow local customs.' },
        { q: 'Which should I see first, Birulia or Harishchandra?', a: 'Both are optional complements — neither is on a par with the monument. Set the order by your available time and travel, and verify each one’s access rules separately beforehand.' },
        { q: 'Can I do both in the same day?', a: 'It may be possible if you have time, but travel on village roads takes longer; be ready to drop the less important part.' }
      ]
    }
  },
  {
    slug: 'nearby/harishchandra-heritage',
    section: 'nearby',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['nearby/birulia-heritage', 'itineraries/dhaka-savar-history-day', 'visit/location', 'history/why-built'],
    bn: {
      title: 'হরিশ্চন্দ্র ঐতিহাসিক স্থান: সাভারের প্রাচীন ইতিহাসের সূত্র',
      description: 'সাভার এলাকার হরিশ্চন্দ্র-সংশ্লিষ্ট ঐতিহাসিক স্থান নিয়ে সাধারণ পরিচিতি, কেন এটি সাভারের প্রাচীন ইতিহাস বোঝাতে সহায়ক, এবং যাচাই ছাড়া যা দাবি করা হয়নি।',
      h1: 'হরিশ্চন্দ্র ঐতিহাসিক স্থান',
      answer:
        'হরিশ্চন্দ্র সাভার এলাকার প্রাচীন ইতিহাসের সঙ্গে যুক্ত একটি স্থান হিসেবে স্থানীয়ভাবে পরিচিত, এবং এটি সাভারের প্রাক্-আধুনিক ঐতিহ্য বোঝাতে সহায়ক। তবে এই পাতায় কোনো নির্দিষ্ট প্রত্নতাত্ত্বিক বিবরণ, নির্মাণকাল বা সংরক্ষণের অবস্থা নিশ্চিত করে বলা হয়নি—এসব যাচাইসাপেক্ষ। পরিদর্শনের আগে প্রত্নতত্ত্ব অধিদপ্তর বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখুন।',
      blocks: [
        { type: 'h2', text: 'কেন সাভারের প্রাচীন ইতিহাস গুরুত্বপূর্ণ' },
        { type: 'p', text: 'জাতীয় স্মৃতিসৌধ আধুনিক বাংলাদেশের জন্মের স্মৃতি ধারণ করে, আর সাভার এলাকার পুরোনো বসতি ও প্রত্নস্থান তার চেয়ে অনেক আগের স্তর যোগ করে। একই উপজেলায় এই দুই স্তর পাশাপাশি থাকায় ইতিহাস-আগ্রহী দর্শনার্থীর কাছে সাভার আরও তাৎপর্যপূর্ণ হয়ে ওঠে।' },
        { type: 'callout', tone: 'warn', title: 'প্রত্নতাত্ত্বিক দাবি যাচাইসাপেক্ষ', text: 'হরিশ্চন্দ্র-সংশ্লিষ্ট কোনো নির্দিষ্ট প্রত্নতাত্ত্বিক তথ্য, সময়কাল বা সংরক্ষণ-অবস্থা এই পাতায় নিশ্চিত করে দাবি করা হয়নি। স্থানটি সক্রিয় খনন বা সীমিত-প্রবেশ এলাকা হতে পারে; কোনো চিহ্ন বা কাঠামোতে হাত দেবেন না, এবং প্রামাণ্য সূত্র ছাড়া কিছু সংগ্রহ বা সরাবেন না।' },
        { type: 'h2', text: 'পরিদর্শন ও সুরক্ষার নীতি' },
        { type: 'ul', items: [
          'প্রত্নস্থান বা প্রাচীন কাঠামোতে ওঠা, খোঁড়া বা ভাঙা সম্পূর্ণ নিষিদ্ধ।',
          'স্থানীয় নির্দেশনা ও বেড়া-চিহ্ন মেনে চলুন; নিষিদ্ধ এলাকায় ঢুকবেন না।',
          'ছবি তোলার আগে অনুমতি ও স্থানীয় নিয়ম যাচাই করুন।',
          'কোনো প্রত্নবস্তু সংগ্রহ করবেন না বা স্থানান্তর করবেন না—এটি আইনত দণ্ডনীয় হতে পারে।'
        ] },
        { type: 'h2', text: 'রুটে যোগ করার আগে' },
        { type: 'steps', items: [
          { title: 'বর্তমান অবস্থা জানুন', text: 'স্থানটি দর্শনার্থীদের জন্য খোলা কিনা এবং কোন সময়ে যাওয়া নিরাপদ—তা আগে যাচাই করুন।' },
          { title: 'গাইড বা স্থানীয় সহায়তা নিন', text: 'ঐতিহাসিক স্থানে প্রামাণ্য ব্যাখ্যার জন্য স্থানীয় বা প্রশিক্ষিত গাইড সহায়ক হতে পারেন।' },
          { title: 'স্মৃতিসৌধ দিয়ে শুরু করুন', text: 'প্রধান স্মৃতিকেন্দ্র আগে দেখে নিলে দিনের রুট সহজ থাকে।' }
        ] },
        { type: 'h2', text: 'প্রত্নস্থান সম্পর্কে তথ্য যাচাইয়ের দায়িত্বশীল উপায়' },
        { type: 'p', text: 'সোশ্যাল মিডিয়া বা অনানুষ্ঠানিক ব্লগে প্রত্নস্থান নিয়ে অতিরঞ্জিত বা ভুল তথ্য ছড়াতে পারে। সাভারের প্রাচীন ইতিহাস নিয়ে নির্ভরযোগ্য ধারণা পেতে সরকারি ও প্রাতিষ্ঠানিক সূত্রকে প্রাধান্য দেওয়া ভালো, এবং যাচাই না হওয়া দাবি অনিশ্চিত হিসেবেই ধরে নেওয়া উচিত।' },
        { type: 'ul', items: [
          'প্রত্নতত্ত্ব অধিদপ্তর বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখুন।',
          'কোনো দাবির জন্য একক সূত্রের বদলে একাধিক নির্ভরযোগ্য সূত্র মিলিয়ে দেখুন।',
          'স্থানীয় ইতিহাস জানতে সম্মানজনকভাবে কথা বলুন; কেউ বললেই তা প্রামাণ্য ধরে নেবেন না।',
          'যাচাই করা যায়নি—এমন তথ্য থাকলে সেটি স্পষ্টভাবে অনিশ্চিত হিসেবে উল্লেখ করুন।'
        ] },
        { type: 'links', items: [
          { label: 'বিরুলিয়া ঐতিহাসিক পল্লি', href: '/nearby/birulia-heritage/' },
          { label: 'ঢাকা–সাভার একদিনের ঐতিহাসিক রুট', href: '/itineraries/dhaka-savar-history-day/' },
          { label: 'স্মৃতিসৌধ কোথায় অবস্থিত', href: '/visit/location/' }
        ] }
      ],
      faq: [
        { q: 'হরিশ্চন্দ্রে ঠিক কী দেখা যায়?', a: 'স্থানটি সাভারের প্রাচীন ইতিহাসের সঙ্গে যুক্ত বলে স্থানীয়ভাবে পরিচিত, তবে এই পাতায় নির্দিষ্ট প্রত্নতাত্ত্বিক বিবরণ বা সময়কাল নিশ্চিত করে বলা হয়নি।' },
        { q: 'সেখানে যেতে কি অনুমতি লাগে?', a: 'প্রত্নস্থান সীমিত-প্রবেশ বা সক্রিয় সংরক্ষণ এলাকা হতে পারে। যাওয়ার আগে প্রত্নতত্ত্ব অধিদপ্তর বা উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখুন।' },
        { q: 'কিছু সংগ্রহ করা যাবে কি?', a: 'না। প্রত্নবস্তু সংগ্রহ বা স্থানান্তর আইনত দণ্ডনীয় হতে পারে; স্থানটি অক্ষত রাখুন।' },
        { q: 'হরিশ্চন্দ্র নিয়ে অনলাইনে নানা তথ্য দেখি—কোনটি বিশ্বাস করব?', a: 'সোশ্যাল মিডিয়া বা অনানুষ্ঠানিক ব্লগের দাবি যাচাইসাপেক্ষ। প্রত্নতত্ত্ব অধিদপ্তর বা সাভার উপজেলা প্রশাসনের মতো প্রামাণ্য সূত্রকে প্রাধান্য দিন এবং একাধিক সূত্র মিলিয়ে দেখুন।' },
        { q: 'স্থানীয়দের কাছ থেকে জানা তথ্য নির্ভরযোগ্য কি?', a: 'স্থানীয় বর্ণনা সহায়ক হতে পারে, তবে তা প্রামাণ্য সূত্রের সঙ্গে মিলিয়ে দেখুন; যাচাই না হওয়া তথ্য নিশ্চিত ধরে নেবেন না।' }
      ]
    },
    en: {
      title: 'The Harishchandra historic site: a link to Savar’s early history',
      description: 'A general introduction to the Harishchandra-related historic site in the Savar area, why it helps explain Savar’s early history, and which claims are deliberately left unverified.',
      h1: 'The Harishchandra historic site',
      answer:
        'Harishchandra is known locally as a site linked to the early history of the Savar area, and it helps explain Savar’s pre-modern heritage. This page does not assert specific archaeological details, dates or conservation status, because those are unverified. Before visiting, check updated information from the Department of Archaeology or the Savar Upazila Administration.',
      blocks: [
        { type: 'h2', text: 'Why Savar’s early history matters' },
        { type: 'p', text: 'The National Martyrs’ Monument carries the memory of modern Bangladesh’s birth, while older settlements and archaeological sites in the Savar area add a much earlier layer. Having both layers side by side in one upazila makes Savar more meaningful to history-minded visitors.' },
        { type: 'callout', tone: 'warn', title: 'Archaeological claims are left unverified', text: 'No specific archaeological detail, period or conservation status relating to Harishchandra is asserted on this page. The site may be an active excavation or a limited-access area — do not touch any relic or structure, and do not collect or remove anything without authoritative guidance.' },
        { type: 'h2', text: 'Visiting and protection policy' },
        { type: 'ul', items: [
          'Climbing, digging at or damaging an archaeological site or old structure is strictly prohibited.',
          'Follow local guidance and fencing or marker signs; do not enter restricted areas.',
          'Check permission and local rules before taking photographs.',
          'Do not collect or relocate any relic — it may be a punishable offence.'
        ] },
        { type: 'h2', text: 'Before adding it to a route' },
        { type: 'steps', items: [
          { title: 'Find out the current status', text: 'Verify in advance whether the site is open to visitors and when it is safe to go.' },
          { title: 'Use a guide or local help', text: 'For a historic site, a local or trained guide can help provide responsible interpretation.' },
          { title: 'Start with the monument', text: 'Seeing the main memorial first keeps the rest of the day’s route simpler.' }
        ] },
        { type: 'h2', text: 'Responsible ways to verify information about a site' },
        { type: 'p', text: 'Social media or informal blogs can spread exaggerated or wrong claims about a site. For a reliable picture of Savar’s early history, prefer official and institutional sources, and treat unverified claims as uncertain.' },
        { type: 'ul', items: [
          'Check updated information from the Department of Archaeology or the Savar Upazila Administration.',
          'Cross-check several reliable sources rather than relying on a single claim.',
          'Talk to local people respectfully when learning local history; do not treat every account as authoritative.',
          'Where something cannot be verified, state that it is uncertain rather than presenting it as fact.'
        ] },
        { type: 'links', items: [
          { label: 'The historic settlement of Birulia', href: '/en/nearby/birulia-heritage/' },
          { label: 'A Dhaka–Savar history day route', href: '/en/itineraries/dhaka-savar-history-day/' },
          { label: 'Where the monument is located', href: '/en/visit/location/' }
        ] }
      ],
      faq: [
        { q: 'What exactly can I see at Harishchandra?', a: 'The site is known locally as linked to Savar’s early history, but no specific archaeological detail or period is asserted on this page.' },
        { q: 'Do I need permission to go there?', a: 'An archaeological site may be limited-access or under active conservation. Check updated information from the Department of Archaeology or the upazila administration before you go.' },
        { q: 'Can I collect anything?', a: 'No. Collecting or relocating relics may be a punishable offence; leave the site intact.' },
        { q: 'I see conflicting information about Harishchandra online — which should I trust?', a: 'Claims on social media or informal blogs are unverified. Prefer authoritative sources such as the Department of Archaeology or the Savar Upazila Administration, and cross-check several sources.' },
        { q: 'Is information from local people reliable?', a: 'Local accounts can be helpful, but compare them with authoritative sources; do not treat unverified information as certain.' }
      ]
    }
  }
];
