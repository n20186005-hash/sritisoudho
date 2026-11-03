// D. রুট পরিকল্পনা: ৩টি পাতা (পরিকল্পনার ৩৪–৩৬)।
// নীতি: রুটের সময় বাস্তবসম্মত পরিসরে রাখা হয়, নির্দিষ্ট সময়সূচি চাপিয়ে দেওয়া হয় না।
// যাচাইসাপেক্ষ তথ্য (খোলার সময়, প্রবেশ-নিয়ম) callout-এ স্পষ্ট করা হয়।
import type { ContentPage } from './types';

export const itineraryPages: ContentPage[] = [
  {
    slug: 'itineraries/savar-half-day',
    section: 'itineraries',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['visit/how-long', 'transport/nabinagar-last-mile', 'nearby/food-rest-nabinagar', 'nearby/jahangirnagar-university'],
    bn: {
      title: 'সাভার অর্ধদিবসের রুট: স্মৃতিসৌধকে কেন্দ্র করে সময়ের পরিকল্পনা',
      description: 'অর্ধেক দিনে জাতীয় স্মৃতিসৌধসহ সাভার এলাকার একটি সীমিত রুট কীভাবে সাজাবেন—কত সময় লাগবে, কোথায় নামবেন, কোথায় খাবেন ও কীভাবে ফিরবেন।',
      h1: 'সাভার অর্ধদিবসের রুট',
      answer:
        'অর্ধেক দিনে স্মৃতিসৌধকে কেন্দ্র করে সাভারের একটি সীমিত রুট সহজভাবে সাজানো যায়: প্রথমে স্মৃতিসৌধ দেখা, তারপর হালকা খাবার ও বিশ্রাম, এবং হাতে সময় থাকলে এলাকার একটি সম্পূরক গন্তব্য। মূল স্মৃতিসৌধে স্মৃতিসৌধ ও পরিবেশ দেখতে সাধারণত এক থেকে দুই ঘণ্টা ধরলে সময় বাস্তবসম্মত থাকে; বাকি সময় যাতায়াত, খাবার ও ফেরার জন্য আলাদা করে রাখা উচিত।',
      blocks: [
        { type: 'h2', text: 'এই রুট কার জন্য' },
        { type: 'p', text: 'যাঁরা ঢাকা থেকে সকালে বেরিয়ে দুপুর বা বিকেলের মধ্যে ফিরতে চান, বা যাঁরা স্মৃতিসৌধ দেখার পর অল্প সময়ে আরেকটি গন্তব্য যোগ করতে চান—তাঁদের জন্য অর্ধদিবসের রুট উপযুক্ত। এটি তিন থেকে পাঁচ ঘণ্টার একটি সাধারণ কাঠামো, নির্দিষ্ট ঘড়ি-ধরা সূচি নয়।' },
        { type: 'callout', tone: 'warn', title: 'সময় পরিসর, সূচি নয়', text: 'যানজট, দিনের ভিড় ও রাস্তার অবস্থা সময়কে বদলে দেয়। এখানে কোনো নির্দিষ্ট ছাড়ার বা ফেরার সময় দেওয়া হয়নি—দিনের অবস্থা দেখে সময় বাড়িয়ে ধরুন।' },
        { type: 'h2', text: 'রুটের কাঠামো' },
        { type: 'steps', items: [
          { title: 'প্রথমে স্মৃতিসৌধ', text: 'সকালে পৌঁছে আগে মূল স্মৃতিসৌধ ও সাতটি ত্রিভুজাকার দেয়াল দেখে নিন; সকালের আলো ও কম ভিড়—স্মৃতিসৌধ দেখার জন্য সুবিধাজনক।' },
          { title: 'এরপর হালকা খাবার ও বিশ্রাম', text: 'মহাসড়ক-সংলগ্ন নবীনগর এলাকায় হালকা খাবার বা চা-নাস্তা সেরে নিন; ছোট শিশু বা বয়স্ক সঙ্গী থাকলে এখানে বিরতি দিন।' },
          { title: 'সময় থাকলে একটি সম্পূরক গন্তব্য', text: 'হাতে সময় থাকলে সাভারের কাছের এলাকা যোগ করা যায়; নইলে সরাসরি ফেরার পথ ধরুন।' },
          { title: 'ফেরার পথ বেছে নিন', text: 'মহাসড়ক ধরে ফিরতি যান ধরুন; রাইড-সেবা ব্যবহার করলে পিক-আপ পয়েন্ট আগেই ঠিক করুন।' }
        ] },
        { type: 'h2', text: 'সময়ের মোটামুটি ভাগ' },
        {
          type: 'table',
          head: ['পর্যায়', 'কী ধরবেন', 'মন্তব্য'],
          rows: [
            ['স্মৃতিসৌধ দেখা', 'প্রায় ১–২ ঘণ্টা', 'হাঁটা, ছবি ও পরিবেশ দেখার উপর নির্ভর করে'],
            ['খাবার ও বিশ্রাম', 'প্রায় ৩০–৬০ মিনিট', 'নবীনগর বা সাভার শহরে'],
            ['সম্পূরক গন্তব্য (ঐচ্ছিক)', 'প্রায় ১ ঘণ্টা বা বেশি', 'যাওয়ার আগে প্রবেশ-নিয়ম যাচাই করুন'],
            ['যাতায়াত (আসা ও ফেরা)', 'দিনের ভিড় অনুযায়ী', 'সবচেয়ে অনিশ্চিত অংশ; বাড়তি সময় রাখুন']
          ]
        },
        { type: 'callout', tone: 'note', title: 'খোলার সময় যাচাই করুন', text: 'স্মৃতিসৌধের খোলার সময় কোনো নির্দিষ্ট ঘোষিত সময়সূচি নয়; ২০২৬ সালের ২৫ অক্টোবরের মানচিত্র-নিবন্ধনে ১০:০০–১৭:০০ দেখানো হয়েছিল, যা বদলাতে পারে। যাওয়ার আগে হালনাগাদ তথ্য যাচাই করুন।' },
        { type: 'h2', text: 'সঙ্গে কী নেবেন' },
        { type: 'ul', items: [
          'পর্যাপ্ত নিরাপদ পানি, বিশেষ করে গরমে',
          'রোদ বা বৃষ্টির জন্য হালকা ছাতা বা টুপি',
          'ব্যক্তিগত ওষুধ ও প্রাথমিক চিকিৎসা সামগ্রী',
          'প্রয়োজন হলে নগদ টাকা, কারণ সব জায়গায় কার্ড-লেনদেন চলে না'
        ] },
        { type: 'h2', text: 'আবহাওয়া খারাপ হলে রুট কীভাবে বদলাবেন' },
        { type: 'p', text: 'বর্ষা বা প্রচণ্ড গরমে অর্ধদিবসের রুটের সময় বাড়তে পারে, কারণ ভেজা মাটি, ছায়ার অভাব বা জমে থাকা পানি হাঁটা ধীর করে দেয়। তাই দিনের শুরুতে আবহাওয়া দেখে সময় পরিসর বাড়িয়ে ধরা এবং প্রয়োজনে কিছু অংশ বাদ দেওয়ার প্রস্তুতি রাখা ভালো।' },
        { type: 'ul', items: [
          'বৃষ্টির সম্ভাবনা থাকলে ছাতা বা রেইনকোট রাখুন এবং হাঁটার সময় বাড়িয়ে ধরুন।',
          'প্রচণ্ড গরমে সকালের দিকে স্মৃতিসৌধ দেখে নিন ও দুপুরের হাঁটা কমিয়ে দিন।',
          'আবহাওয়া বেশি খারাপ হলে কম গুরুত্বপূর্ণ সম্পূরক গন্তব্য বাদ দিয়ে মূল স্মৃতিসৌধেই মন দিন।',
          'যাওয়ার আগে হালনাগাদ আবহাওয়ার পূর্বাভাস দেখুন এবং সময় উদারভাবে ধরুন।'
        ] },
        { type: 'links', items: [
          { label: 'স্মৃতিসৌধ দেখতে কত সময় লাগে', href: '/visit/how-long/' },
          { label: 'নবীনগর থেকে শেষ অংশ', href: '/transport/nabinagar-last-mile/' },
          { label: 'খাবার, পানি ও বিশ্রাম', href: '/nearby/food-rest-nabinagar/' }
        ] }
      ],
      faq: [
        { q: 'অর্ধেক দিনে স্মৃতিসৌধ ঘুরে ফেরা যাবে কি?', a: 'হ্যাঁ। স্মৃতিসৌধ দেখতে সাধারণত ১–২ ঘণ্টা ধরলে খাবার, বিশ্রাম ও যাতায়াতসহ অর্ধেক দিনে ফেরা সম্ভব, তবে দিনের যানজটের উপর নির্ভর করে।' },
        { q: 'সকালে যাওয়া ভালো নাকি বিকেলে?', a: 'সকালে যাওয়া সাধারণত সুবিধাজনক, কারণ ভিড় তুলনামূলক কম ও দিনের বাকি অংশ হাতে থাকে। তবে খোলার সময় অবশ্যই আগে যাচাই করুন।' },
        { q: 'এর সঙ্গে কী যোগ করা যায়?', a: 'হাতে সময় থাকলে কাছের এলাকা যোগ করা যায়; যাওয়ার আগে সেই গন্তব্যের প্রবেশ-নিয়ম ও সময় আলাদাভাবে যাচাই করুন।' },
        { q: 'বর্ষায় বা গরমে অর্ধদিবসের রুট কি বদলাতে হবে?', a: 'আবহাওয়া সময়কে বদলাতে পারে; ছাতা, পানি ও বিশ্রামের প্রস্তুতি নিন এবং নির্দিষ্ট সূচি না ধরে সময় পরিসর বাড়িয়ে ধরুন।' }
      ]
    },
    en: {
      title: 'A Savar half-day route centred on the National Martyrs’ Monument',
      description: 'How to plan a limited half-day route in Savar around the National Martyrs’ Monument — how long to allow, where to eat and rest, and how to get back.',
      h1: 'A Savar half-day route',
      answer:
        'A limited half-day route around the monument is easy to arrange: see the monument first, then a light meal and a rest, and if time allows add one complementary stop in the area. Allow roughly one to two hours for the monument itself; keep the rest of the time for travel, food and the return leg.',
      blocks: [
        { type: 'h2', text: 'Who this route suits' },
        { type: 'p', text: 'This suits visitors who want to leave Dhaka in the morning and be back by midday or the afternoon, or who want to add one more stop after the monument without much time. It is a general three-to-five-hour structure, not a fixed timetable.' },
        { type: 'callout', tone: 'warn', title: 'Ranges, not a timetable', text: 'Traffic, crowds and road conditions change the timing. No fixed departure or return clock time is given here — extend your estimate according to the day.' },
        { type: 'h2', text: 'The shape of the route' },
        { type: 'steps', items: [
          { title: 'The monument first', text: 'Arrive in the morning and see the monument and its seven triangular walls first; morning light and smaller crowds suit viewing it.' },
          { title: 'Then a light meal and rest', text: 'Take tea, snacks or a light meal in the highway-side Nabinagar area; this is a good place for a break with children or older companions.' },
          { title: 'One complementary stop, if time allows', text: 'If you have time, add a nearby Savar-area stop; if not, head straight for the return leg.' },
          { title: 'Choose your route back', text: 'Take your return transport along the highway; if using ride-hailing, agree the pickup point in advance.' }
        ] },
        { type: 'h2', text: 'Rough time budget' },
        {
          type: 'table',
          head: ['Stage', 'Allow', 'Note'],
          rows: [
            ['Seeing the monument', 'about 1–2 hours', 'Depends on walking, photos and how long you linger'],
            ['Food and rest', 'about 30–60 minutes', 'At Nabinagar or Savar town'],
            ['Complementary stop (optional)', 'about 1 hour or more', 'Verify access rules before you go'],
            ['Travel (there and back)', 'varies with traffic', 'The most unpredictable part; build in extra time']
          ]
        },
        { type: 'callout', tone: 'note', title: 'Verify opening hours', text: 'There is no single fixed timetable for the monument. A Google Maps listing snapshot on 25 October 2026 showed 10:00–17:00, which can change. Confirm current information before you go.' },
        { type: 'h2', text: 'What to carry' },
        { type: 'ul', items: [
          'Enough safe drinking water, especially in hot weather',
          'A light umbrella or hat for sun or rain',
          'Personal medication and basic first-aid supplies',
          'Some cash if needed, since not every place accepts cards'
        ] },
        { type: 'h2', text: 'How to adjust the route in bad weather' },
        { type: 'p', text: 'In the monsoon or extreme heat, a half-day route can take longer, because wet ground, lack of shade or standing water slows walking. So check the weather at the start of the day, extend your time range, and be ready to drop some parts if needed.' },
        { type: 'ul', items: [
          'If rain is likely, carry an umbrella or raincoat and allow more walking time.',
          'In extreme heat, see the monument earlier in the day and cut back midday walking.',
          'If the weather is really poor, drop the less important complementary stop and focus on the monument itself.',
          'Check an updated weather forecast before you go, and be generous with your timing.'
        ] },
        { type: 'links', items: [
          { label: 'How long a monument visit takes', href: '/en/visit/how-long/' },
          { label: 'The last stretch from Nabinagar', href: '/en/transport/nabinagar-last-mile/' },
          { label: 'Food, water and rest', href: '/en/nearby/food-rest-nabinagar/' }
        ] }
      ],
      faq: [
        { q: 'Can I see the monument and get back in half a day?', a: 'Yes. Allowing about 1–2 hours for the monument, a half day is usually enough including food, rest and travel, though it depends on traffic.' },
        { q: 'Is morning or afternoon better?', a: 'Mornings are usually easier because crowds are smaller and the rest of the day stays free — but verify the opening hours first.' },
        { q: 'What can I add to it?', a: 'If you have time you can add a nearby area stop; verify the access rules and hours of that destination separately before you go.' },
        { q: 'Should the half-day route change in the monsoon or heat?', a: 'Weather can change the timing; prepare for rain, water and rest, and extend your time range rather than following a fixed schedule.' }
      ]
    }
  },
  {
    slug: 'itineraries/dhaka-savar-history-day',
    section: 'itineraries',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['history/1952-1971', 'history/why-built', 'transport/from-dhaka', 'nearby/birulia-heritage'],
    bn: {
      title: 'ঢাকা–সাভার একদিনের ঐতিহাসিক রুট: মুক্তিযুদ্ধের স্মৃতি ঘিরে',
      description: 'ঢাকা থেকে সাভার পর্যন্ত একদিনের একটি ঐতিহাসিক রুট—কীভাবে সাজাবেন, কোথায় সময় দেবেন এবং কোন তথ্য আগে যাচাই করা জরুরি।',
      h1: 'ঢাকা–সাভার একদিনের ঐতিহাসিক রুট',
      answer:
        'ঢাকা–সাভার একদিনের ঐতিহাসিক রুটের কেন্দ্র হলো জাতীয় স্মৃতিসৌধ, যা ১৯৭১ সালের মুক্তিযুদ্ধে শহীদদের স্মরণে নির্মিত এবং ১৯৮২ সালের ১৬ ডিসেম্বর উন্মোচিত হয়। একটি পরিপূর্ণ দিনে স্মৃতিসৌধে সময় দেওয়া, ইতিহাসের সাতটি অধ্যায় বুঝে নেওয়া এবং হাতে সময় থাকলে সাভারের একটি সম্পূরক গন্তব্য যোগ করা যায়। রুটটি নমনীয়—নির্দিষ্ট সময়সূচি নয়।',
      blocks: [
        { type: 'h2', text: 'রুটের ভিত্তি: কেন এই স্মৃতিসৌধ' },
        { type: 'p', text: 'জাতীয় স্মৃতিসৌধ বাংলাদেশের মুক্তিযুদ্ধের স্মৃতিকেন্দ্র। এর সাতটি ত্রিভুজাকার দেয়াল ১৯৫২ থেকে ১৯৭১ পর্যন্ত স্বাধীনতার সংগ্রামের সাতটি অধ্যায়ের প্রতীক। রুট পরিকল্পনার আগে এই প্রেক্ষাপট বুঝে নিলে স্মৃতিসৌধ দেখা অনেক বেশি অর্থবহ হয়।' },
        { type: 'callout', tone: 'note', title: 'ঐতিহাসিক তথ্য যাচাই করা হয়েছে', text: 'স্মৃতিসৌধের সাত দেয়াল সাত অধ্যায়ের প্রতীক এবং ১৯৮২ সালের ১৬ ডিসেম্বর উন্মোচন—এই তথ্য প্রামাণ্য সূত্র অনুসারে দেওয়া। দিনের কোনো নির্দিষ্ট সময়সূচি বা খোলার সময় এখানে নিশ্চিত করা হয়নি।' },
        { type: 'h2', text: 'দিনটি কীভাবে সাজাবেন' },
        { type: 'steps', items: [
          { title: 'সকালে ঢাকা থেকে রওনা', text: 'মহাসড়ক ধরে সাভারের দিকে; গাবতলী করিডরের পরিচিত প্রস্থানবিন্দু। যাত্রার দিন যানজটের অবস্থা দেখে সময় ধরুন।' },
          { title: 'স্মৃতিসৌধে পর্যাপ্ত সময়', text: 'কাঠামো, সাতটি দেয়াল এবং আশপাশের পরিসর দেখতে সময় দিন; গাইড বা তথ্যফলক থাকলে সেগুলো পড়ুন।' },
          { title: 'বিশ্রাম ও হালকা খাবার', text: 'নবীনগর বা সাভার শহরে হালকা খাবার সেরে নিন।' },
          { title: 'সাভারের সম্পূরক গন্তব্য (ঐচ্ছিক)', text: 'হাতে সময় থাকলে কাছের ঐতিহাসিক এলাকা যোগ করুন; যাওয়ার আগে সেখানে প্রবেশ-নিয়ম যাচাই করুন।' },
          { title: 'বিকেলে ফেরা', text: 'ভিড়ের সময় ফেরা এড়াতে সময় আগে ঠিক করুন এবং ফিরতি যান বা পিক-আপ নিশ্চিত করুন।' }
        ] },
        { type: 'h2', text: 'যা যাচাই না করে ধরে নেবেন না' },
        { type: 'ul', items: [
          'কোনো সম্পূরক গন্তব্যের প্রবেশ-নিয়ম বা খোলার সময়—যাওয়ার আগে আলাদাভাবে যাচাই করুন।',
          'বিশেষ দিনে (যেমন জাতীয় দিবস) ভিড়, প্রবেশ-নিয়ন্ত্রণ ও যানবাহনের নিয়ম।',
          'স্মৃতিসৌধের খোলার সময়—একক নিশ্চিত সময়সূচি নেই।',
          'কোনো নির্দিষ্ট যাদুঘর, ভবন বা সংগ্রহশালার খোলার সময়, কারণ তা পরিবর্তনশীল।'
        ] },
        { type: 'callout', tone: 'warn', title: 'ঐতিহাসিক স্থানের প্রতি শ্রদ্ধা', text: 'এই রুটের কেন্দ্র একটি জাতীয় স্মৃতিকেন্দ্র ও শহীদদের স্মৃতির জায়গা। কোনো স্থানকে বিনোদন-কেন্দ্র হিসেবে উপস্থাপন করা হয়নি; শব্দ, আচরণ ও ছবি তোলার সময় সেই মর্যাদা রক্ষা করুন।' },
        { type: 'h2', text: 'সঙ্গে নেওয়ার পরামর্শ' },
        { type: 'ul', items: [
          'দিনের পুরো সময়ের জন্য পানি ও হালকা খাবার',
          'রোদ-বৃষ্টির প্রস্তুতি',
          'ব্যক্তিগত ওষুধ',
          'ফিরতি যাত্রার পরিকল্পনা লিখিতভাবে মনে রাখা'
        ] },
        { type: 'h2', text: 'একদিনের রুটের খরচ নিয়ে বাস্তব ধারণা' },
        { type: 'p', text: 'এই পাতায় কোনো নির্দিষ্ট দাম দেওয়া হয়নি, কারণ যাতায়াত, খাবার ও অন্যান্য খরচ দিনভেদে বদলায়। খরচ মূলত যাতায়াতের ধরন, দলের আকার এবং খাবারের সমন্বয়ের উপর নির্ভর করে; তাই বাজেট পরিকল্পনার সময় পরিসর ধরে ভাবাই ভালো।' },
        { type: 'ul', items: [
          'যাতায়াত: বাস, রাইড-সেবা বা নিজস্ব গাড়ির খরচ ও সময় অনেক আলাদা।',
          'খাবার ও পানি: হালকা খাবার বাদ দেবেন না; দাম স্থান ও সময়ভেদে ভিন্ন।',
          'নগদ রাখুন: সব জায়গায় কার্ড বা মোবাইল-লেনদেন কাজ করে না।',
          'হালনাগাদ ভাড়া ও দাম যাওয়ার আগে যাচাই করুন; এখানে কোনো দাম নিশ্চিত করা হয়নি।'
        ] },
        { type: 'links', items: [
          { label: '১৯৫২–১৯৭১: স্বাধীনতার সাত অধ্যায়', href: '/history/1952-1971/' },
          { label: 'কেন স্মৃতিসৌধ নির্মিত হয়', href: '/history/why-built/' },
          { label: 'ঢাকা থেকে যাওয়ার উপায়', href: '/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'একদিনে ঢাকা থেকে সাভার ঘুরে আসা যায় কি?', a: 'হ্যাঁ, তবে যানজট ও ভিড়ের উপর নির্ভর করে। সকালে বেরিয়ে স্মৃতিসৌধে পর্যাপ্ত সময় দেওয়া এবং ফেরার সময় আগে ঠিক করা ভালো।' },
        { q: 'রুটে ঠিক কী কী দেখা হবে?', a: 'কেন্দ্র স্মৃতিসৌধ; হাতে সময় থাকলে সাভারের কাছের ঐতিহাসিক এলাকা যোগ করা যায়। নির্দিষ্ট সম্পূরক গন্তব্যের নিয়ম আগে যাচাই করুন।' },
        { q: 'বিশেষ দিনে যাওয়া কি ভালো?', a: 'জাতীয় দিবসে স্মৃতিসৌধে বিশেষ কর্মসূচি ও বেশি ভিড় থাকতে পারে, এবং প্রবেশ-নিয়ন্ত্রণ বদলাতে পারে; যাওয়ার আগে হালনাগাদ তথ্য দেখুন।' },
        { q: 'একদিনের এই রুটে খরচ কেমন হবে?', a: 'নির্দিষ্ট দাম এখানে দেওয়া হয়নি, কারণ যাতায়াতের ধরন, দলের আকার ও খাবারের সমন্বয়ে খরচ বদলায়। হালনাগাদ ভাড়া ও দাম যাওয়ার আগে স্থানীয়ভাবে যাচাই করুন।' }
      ]
    },
    en: {
      title: 'A Dhaka–Savar history day: a route around the Liberation War memorial',
      description: 'A one-day historic route from Dhaka to Savar — how to shape it, where to spend time, and which facts to verify before you go.',
      h1: 'A Dhaka–Savar history day',
      answer:
        'The centre of a Dhaka–Savar history day is the National Martyrs’ Monument, built to honour those who died in the 1971 Liberation War and unveiled on 16 December 1982. On a full day you can spend proper time at the monument, follow the seven chapters of history it represents, and, if time allows, add one complementary stop in Savar. The route is flexible — not a fixed timetable.',
      blocks: [
        { type: 'h2', text: 'The foundation: why this memorial' },
        { type: 'p', text: 'The National Martyrs’ Monument is the memorial of Bangladesh’s Liberation War. Its seven triangular walls represent seven chapters of the independence struggle from 1952 to 1971. Understanding this context first makes the visit far more meaningful.' },
        { type: 'callout', tone: 'note', title: 'Historic facts, verified', text: 'That the seven walls represent seven chapters, and that the monument was unveiled on 16 December 1982, follows authoritative sources. No fixed schedule or opening time for the day is asserted here.' },
        { type: 'h2', text: 'How to shape the day' },
        { type: 'steps', items: [
          { title: 'Leave Dhaka in the morning', text: 'Head towards Savar along the highway; Gabtoli is the well-known departure point for that corridor. Judge the timing by the day’s traffic.' },
          { title: 'Give the monument enough time', text: 'Allow time for the structure, the seven walls and the surrounding grounds; read any information panels.' },
          { title: 'Rest and a light meal', text: 'Take a light meal at Nabinagar or Savar town.' },
          { title: 'A complementary Savar stop (optional)', text: 'If you have time, add a nearby historic area; verify its access rules before you go.' },
          { title: 'Return in the afternoon', text: 'To avoid the busiest return period, fix your timing early and confirm the return transport or pickup.' }
        ] },
        { type: 'h2', text: 'What not to assume' },
        { type: 'ul', items: [
          'Access rules or opening hours of any complementary stop — verify separately beforehand.',
          'Crowds, entry control and vehicle rules on special days such as national days.',
          'The monument’s opening hours — there is no single fixed timetable.',
          'The hours of any specific museum, building or collection, as these change.'
        ] },
        { type: 'callout', tone: 'warn', title: 'Respect the historic site', text: 'This route centres on a national memorial and a place of remembrance for the fallen. No location is presented as an entertainment venue; keep that dignity in noise, behaviour and photographs.' },
        { type: 'h2', text: 'What to bring' },
        { type: 'ul', items: [
          'Water and light food for the whole day',
          'Sun and rain protection',
          'Personal medication',
          'A clear note of your return plan'
        ] },
        { type: 'h2', text: 'A realistic idea of the day’s cost' },
        { type: 'p', text: 'No specific prices are given on this page, because transport, food and other costs vary from day to day. The cost depends mainly on your mode of transport, the size of your group and how you arrange food, so it is best to budget as a range.' },
        { type: 'ul', items: [
          'Transport: a bus, a ride-hailing car or your own car differ widely in cost and time.',
          'Food and water: do not skip light food; prices vary by place and time.',
          'Carry cash: not every place accepts cards or mobile payments.',
          'Verify current fares and prices before you go; no price is asserted here.'
        ] },
        { type: 'links', items: [
          { label: '1952–1971: seven chapters of independence', href: '/en/history/1952-1971/' },
          { label: 'Why the monument was built', href: '/en/history/why-built/' },
          { label: 'How to get there from Dhaka', href: '/en/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'Can I do Dhaka to Savar and back in one day?', a: 'Yes, though it depends on traffic and crowds. Leave in the morning, give the monument enough time, and fix the return plan early.' },
        { q: 'What exactly will I see on the route?', a: 'The centre is the monument; if time allows, add a nearby historic area in Savar. Verify the rules of any specific stop in advance.' },
        { q: 'Is it good to go on a special day?', a: 'National days can bring special programmes and larger crowds, and entry control may change; check updated information before you go.' },
        { q: 'How much will this one-day route cost?', a: 'No fixed figure is given here, because the cost varies with your mode of transport, group size and how you arrange food. Verify current fares and prices locally before you go.' }
      ]
    }
  },
  {
    slug: 'itineraries/school-educational-visit',
    section: 'itineraries',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['history/1952-1971', 'history/why-built', 'visit/etiquette', 'visit/with-children'],
    bn: {
      title: 'স্কুল ও শিক্ষার্থীদের জন্য স্মৃতিসৌধ শিক্ষা-সফর পরিকল্পনা',
      description: 'স্কুল, কলেজ ও শিক্ষার্থীদের দল নিয়ে জাতীয় স্মৃতিসৌধে শিক্ষামূলক সফর কীভাবে পরিকল্পনা করবেন—প্রস্তুতি, শ্রদ্ধা ও সংগঠনের নির্দেশনা।',
      h1: 'স্কুল ও শিক্ষার্থীদের শিক্ষা-সফর পরিকল্পনা',
      answer:
        'শিক্ষার্থীদের দল নিয়ে স্মৃতিসৌধ সফরের মূল লক্ষ্য হওয়া উচিত ইতিহাস বোঝা ও শ্রদ্ধা জানানো—বিনোদন নয়। সফরের আগে শিক্ষার্থীদের ১৯৭১ সালের মুক্তিযুদ্ধের প্রেক্ষাপট এবং সাতটি ত্রিভুজাকার দেয়ালের অর্থ সম্পর্কে প্রস্তুত করা ভালো। সফরের দিন দলগত শৃঙ্খলা, বয়স-উপযোগী ব্যাখ্যা ও স্মৃতিকেন্দ্রের প্রতি মর্যাদা রক্ষা করা জরুরি। নির্দিষ্ট খোলার সময় ও প্রবেশ-নিয়ম আগে যাচাই করে নিন।',
      blocks: [
        { type: 'h2', text: 'সফরের লক্ষ্য ঠিক করুন' },
        { type: 'p', text: 'শিক্ষা-সফরে স্মৃতিসৌধ দেখা একটি পাঠ্যক্রমের অংশ হওয়া উচিত। শিক্ষার্থীদের কাছে স্পষ্ট করুন কেন এই জায়গা গুরুত্বপূর্ণ: এটি ১৯৭১ সালের মুক্তিযুদ্ধে শহীদদের স্মৃতিকেন্দ্র, এবং এর সাতটি দেয়াল স্বাধীনতার সংগ্রামের সাতটি পর্যায়ের প্রতীক।' },
        { type: 'callout', tone: 'note', title: 'শ্রদ্ধাকে কেন্দ্রে রাখুন', text: 'স্মৃতিসৌধ একটি স্মৃতিকেন্দ্র ও শহীদদের স্মৃতির জায়গা। দলকে স্পষ্টভাবে বলুন—উঁচু শব্দ, ধাক্কাধাক্কি বা অসম্মানজনক আচরণ এখানে প্রযোজ্য নয়; শৃঙ্খলাই সফরের মূল নিয়ম।' },
        { type: 'h2', text: 'সফরের আগে প্রস্তুতি' },
        { type: 'steps', items: [
          { title: 'পাঠ্যক্রমের যোগসূত্র তৈরি করুন', text: 'ক্লাসে ১৯৫২ থেকে ১৯৭১ সালের মুক্তিযুদ্ধের প্রেক্ষাপট আলোচনা করে আসুন, যাতে শিক্ষার্থীরা প্রস্তুত থাকে।' },
          { title: 'আচরণ ও নিরাপত্তার নিয়ম জানান', text: 'দলগত ভ্রমণের নিয়ম, হাঁটার সীমা, ছবি তোলার নিয়ন্ত্রণ ও সঙ্গী হারিয়ে গেলে কী করবে—সব আগে বলে দিন।' },
          { title: 'হালনাগাদ সময় ও অনুমতি যাচাই করুন', text: 'খোলার সময়, দল প্রবেশের অনুমতি বা বিশেষ ব্যবস্থা—সব আগে প্রতিষ্ঠানের নিয়ম অনুযায়ী যাচাই করুন।' },
          { title: 'পর্যাপ্ত সংখ্যক অভিভাবক/শিক্ষক রাখুন', text: 'বয়স ও দলের আকার অনুযায়ী দায়িত্বশীল প্রাপ্তবয়স্কের সংখ্যা ঠিক করুন, যাতে শিক্ষার্থীদের তদারকি করা যায়।' }
        ] },
        { type: 'h2', text: 'মাঠে যা করবেন' },
        { type: 'ul', items: [
          'শিক্ষার্থীদের দলগতভাবে রাখুন এবং ভিড়ের সময় বিশেষভাবে নজর রাখুন।',
          'স্মৃতিকেন্দ্রের তথ্যফলক ও ইতিহাস বয়স-উপযোগী ভাষায় ব্যাখ্যা করুন।',
          'শ্রদ্ধা জানানোর জন্য একটি শান্ত মুহূর্ত রাখুন—যেমন কাঠামোর সামনে নীরবতা বা প্রার্থনা।',
          'আবর্জনা নির্দিষ্ট স্থানে ফেলুন এবং পরিবেশ পরিষ্কার রাখুন।',
          'নির্ধারিত স্থানটিতে দলবদ্ধ ছবি তোলা যেতে পারে; নিয়ম মেনে নিন।'
        ] },
        { type: 'callout', tone: 'warn', title: 'সময়, অনুমতি ও ব্যবস্থাপনা যাচাই করুন', text: 'স্মৃতিসৌধের কোনো একক নির্দিষ্ট খোলার সময় নেই এবং বড় দলের ক্ষেত্রে প্রবেশ-ব্যবস্থা ভিন্ন হতে পারে। ২০২৬ সালের ২৫ অক্টোবরের মানচিত্র-নিবন্ধনে ১০:০০–১৭:০০ দেখানো হয়েছিল, যা বদলাতে পারে। সফরের আগে সংশ্লিষ্ট কর্তৃপক্ষ বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখে নিন।' },
        { type: 'h2', text: 'অভিভাবকরাও সফরের সময় যা মনে রাখবেন' },
        { type: 'ul', items: [
          'আবহাওয়া ও মৌসুম অনুযায়ী সঙ্গে ছাতা, ছায়া ও খাবার রাখুন।',
          'শিক্ষার্থীদের কাছে নিরাপদ পানি ও প্রাথমিক ওষুধ নিশ্চিত করুন।',
          'শারীরিকভাবে দুর্বল শিক্ষার্থীদের জন্য হাঁটার সময় অনুযায়ী বিরতি রাখুন।'
        ] },
        { type: 'h2', text: 'সফরের পরে: ক্লাসে প্রতিফলন ও পাঠ্যক্রমে সংযোগ' },
        { type: 'p', text: 'শিক্ষা-সফরের শিক্ষামূলক মূল্য অনেকটা নির্ভর করে ফেরার পরের চর্চার উপর। ভ্রমণের অভিজ্ঞতা ক্লাসের পাঠের সঙ্গে যুক্ত করা হলে শিক্ষার্থীরা ইতিহাস, শ্রদ্ধা ও নাগরিক দায়িত্বের সম্পর্ক আরও ভালোভাবে বুঝতে পারে।' },
        { type: 'ul', items: [
          'ফেরার পর সংক্ষিপ্ত আলোচনায় শিক্ষার্থীদের অভিজ্ঞতা বলতে বা লিখতে দিন।',
          'স্মৃতিসৌধ, সাতটি দেয়াল ও মুক্তিযুদ্ধের প্রেক্ষাপট নিয়ে শ্রেণিকাজ বা প্রকল্প করান।',
          'শ্রদ্ধা, শৃঙ্খলা ও নাগরিক দায়িত্ব নিয়ে আলোচনা যুক্ত করুন।',
          'যাচাই করা যায়নি এমন তথ্য শিক্ষার্থীদের কাছে নিশ্চিত হিসেবে উপস্থাপন করবেন না।'
        ] },
        { type: 'links', items: [
          { label: '১৯৫২–১৯৭১: স্বাধীনতার সাত অধ্যায়', href: '/history/1952-1971/' },
          { label: 'দর্শনার্থীদের আচরণ ও রীতিনীতি', href: '/visit/etiquette/' },
          { label: 'শিশুদের সঙ্গে স্মৃতিসৌধ ভ্রমণ', href: '/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'শিক্ষার্থীদের দল নিয়ে আগে অনুমতি লাগে কি?', a: 'প্রবেশ-নিয়ম ও দলগত ব্যবস্থা প্রতিষ্ঠান ও সময়ভেদে বদলাতে পারে। সফরের আগে সংশ্লিষ্ট কর্তৃপক্ষ বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য যাচাই করুন।' },
        { q: 'শিক্ষার্থীদের কীভাবে প্রস্তুত করব?', a: 'আগে ক্লাসে ১৯৫২–১৯৭১ সালের মুক্তিযুদ্ধের প্রেক্ষাপট আলোচনা করুন, যাতে স্মৃতিসৌধ দেখার সময় ইতিহাস বুঝতে পারে এবং শ্রদ্ধা বজায় রাখতে পারে।' },
        { q: 'সফরের মূল উদ্দেশ্য কী হবে?', a: 'ইতিহাস বোঝা ও শহীদদের প্রতি শ্রদ্ধা জানানো—বিনোদন নয়। দলগত শৃঙ্খলা ও স্মৃতিকেন্দ্রের প্রতি মর্যাদা মূল নিয়ম।' },
        { q: 'সফরের পরে ক্লাসে কী করব?', a: 'ফেরার পর শিক্ষার্থীদের অভিজ্ঞতা আলোচনা ও লিখতে দিন এবং স্মৃতিসৌধ ও মুক্তিযুদ্ধের প্রেক্ষাপট নিয়ে শ্রেণিকাজ যুক্ত করুন—এতে সফরের শিক্ষামূলক মূল্য বাড়ে।' },
        { q: 'সফরের শিক্ষামূলক ফলাফল কীভাবে মাপা যায়?', a: 'নির্দিষ্ট মূল্যায়ন এখানে বলা হয়নি; তবে আলোচনা, লেখা বা প্রকল্পের মাধ্যমে ইতিহাস-বোঝাপড়া ও শ্রদ্ধার মনোভাব লক্ষ করা যেতে পারে।' }
      ]
    },
    en: {
      title: 'Planning a school or student educational visit to the National Martyrs’ Monument',
      description: 'How to plan an educational visit to the National Martyrs’ Monument with a school, college or student group — preparation, respect and organisation guidance.',
      h1: 'Planning a school or student educational visit',
      answer:
        'A student group visit to the monument should aim at understanding history and paying respect — not entertainment. Before the trip, prepare students with the context of the 1971 Liberation War and the meaning of the seven triangular walls. On the day, group discipline, age-appropriate explanation and dignity for the memorial matter. Verify the opening hours and entry rules in advance.',
      blocks: [
        { type: 'h2', text: 'Set the purpose of the visit' },
        { type: 'p', text: 'In an educational visit, seeing the monument should be part of the curriculum. Make clear to students why the place matters: it is the memorial of those who died in the 1971 Liberation War, and its seven walls symbolise seven stages of the independence struggle.' },
        { type: 'callout', tone: 'note', title: 'Keep respect at the centre', text: 'The monument is a memorial and a place of remembrance. Tell the group plainly that loud noise, pushing or disrespectful behaviour does not belong here; discipline is the core rule of the visit.' },
        { type: 'h2', text: 'Preparation before the trip' },
        { type: 'steps', items: [
          { title: 'Create a curriculum link', text: 'Discuss the context of the 1952–1971 Liberation War in class beforehand so students arrive prepared.' },
          { title: 'Teach behaviour and safety rules', text: 'Explain group travel rules, walking limits, photo controls and what to do if someone gets separated.' },
          { title: 'Verify current hours and permission', text: 'Check opening hours, group entry permission or special arrangements with the relevant authority in advance.' },
          { title: 'Have enough supervising adults', text: 'Match the number of responsible adults to the age and size of the group so students can be supervised.' }
        ] },
        { type: 'h2', text: 'On site' },
        { type: 'ul', items: [
          'Keep students in a group and pay extra attention in crowds.',
          'Explain the information panels and history in age-appropriate language.',
          'Include a quiet moment for respect, such as silence before the structure.',
          'Put litter in the proper place and keep the surroundings clean.',
          'A group photograph may be allowed at the designated spot; follow the rules.'
        ] },
        { type: 'callout', tone: 'warn', title: 'Verify timing, permission and arrangements', text: 'The monument has no single fixed opening time, and arrangements for large groups may differ. A Google Maps snapshot on 25 October 2026 showed 10:00–17:00, which can change. Check updated information from the relevant authority or the Savar Upazila Administration before the visit.' },
        { type: 'h2', text: 'What accompanying adults should remember' },
        { type: 'ul', items: [
          'Carry umbrellas, shade and food according to the weather and season.',
          'Ensure students have safe water and basic medicine.',
          'Plan breaks according to walking time for students who are physically weaker.'
        ] },
        { type: 'h2', text: 'After the visit: classroom reflection and curriculum links' },
        { type: 'p', text: 'The educational value of a trip depends a great deal on what follows it. When the experience is connected to classroom lessons, students understand the links between history, respect and civic responsibility far better.' },
        { type: 'ul', items: [
          'After returning, hold a short discussion and let students write or tell what they experienced.',
          'Set classwork or a project on the monument, its seven walls and the Liberation War context.',
          'Add a discussion on respect, discipline and civic responsibility.',
          'Do not present unverified information to students as established fact.'
        ] },
        { type: 'links', items: [
          { label: '1952–1971: seven chapters of independence', href: '/en/history/1952-1971/' },
          { label: 'Visitor etiquette and customs', href: '/en/visit/etiquette/' },
          { label: 'Visiting the monument with children', href: '/en/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'Do student groups need permission in advance?', a: 'Entry rules and group arrangements can vary by institution and time. Verify updated information from the relevant authority or the Savar Upazila Administration before the visit.' },
        { q: 'How should I prepare students?', a: 'Discuss the context of the 1952–1971 Liberation War in class first, so students understand the history and maintain respect while viewing the monument.' },
        { q: 'What should the main purpose be?', a: 'Understanding history and paying respect to the fallen — not entertainment. Group discipline and dignity for the memorial are the core rules.' },
        { q: 'What should we do in class after the visit?', a: 'After returning, discuss and let students write about the experience, and add classwork on the monument and the Liberation War context — this raises the educational value of the trip.' },
        { q: 'How can we measure the educational outcome?', a: 'No fixed assessment is prescribed here, but discussion, writing or a project can help you gauge students’ understanding of the history and their attitude of respect.' }
      ]
    }
  }
];
