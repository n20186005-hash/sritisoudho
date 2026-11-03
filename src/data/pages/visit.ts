// A. দর্শনার্থী-পরিকল্পনা: ১০টি পাতা (পরিকল্পনার ০১–১০)।
import type { ContentPage } from './types';

export const visitPages: ContentPage[] = [
  {
    slug: 'visit/location',
    section: 'visit',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['visit/opening-hours', 'transport/nabinagar-last-mile', 'transport/from-dhaka', 'history/why-built'],
    bn: {
      title: 'জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত? ঠিকানা, মানচিত্র ও প্লাস কোড',
      description: 'জাতীয় স্মৃতিসৌধ সাভারের নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে অবস্থিত। সঠিক ঠিকানা, প্লাস কোড, আইনি এলাকা এবং মানচিত্রে স্মৃতিসৌধ পর্যন্ত নেভিগেট করার নিয়ম।',
      h1: 'জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত',
      answer:
        'জাতীয় স্মৃতিসৌধ বাংলাদেশের ঢাকা জেলার সাভার উপজেলায়, নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে অবস্থিত—ঢাকা শহর থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে। ডাক ঠিকানা: ঢাকা-আরিচা হাইওয়ে, সাভার ১৩৪৪। প্লাস কোড W763+GW, সাভার; স্থানাঙ্ক ২৩.৯১১২৯৮৫° উত্তর, ৯০.২৫৪৭৭৫৩° পূর্ব।',
      blocks: [
        { type: 'map' },
        { type: 'h2', text: 'সঠিক ঠিকানা ও প্রশাসনিক পরিচয়' },
        { type: 'p', text: 'মানচিত্রে স্মৃতিসৌধটির নিবন্ধিত ঠিকানা “ঢাকা-আরিচা হাইওয়ে, সাভার ১৩৪৪”। প্রশাসনিকভাবে এটি ঢাকা বিভাগের ঢাকা জেলার সাভার উপজেলার অন্তর্গত; সাভার পৌর এলাকা ও নবীনগর বাজার এর সবচেয়ে কাছের পরিচিত সড়ক-পরিচিতি।' },
        {
          type: 'table',
          head: ['বিষয়', 'তথ্য'],
          rows: [
            ['সড়ক ঠিকানা', 'ঢাকা–আরিচা মহাসড়ক, নবীনগর'],
            ['শহর ও জেলা', 'সাভার, ঢাকা'],
            ['পোস্ট কোড', '১৩৪৪'],
            ['প্লাস কোড', 'W763+GW'],
            ['স্থানাঙ্ক', '২৩.৯১১২৯৮৫° উ., ৯০.২৫৪৭৭৫৩° পূ.'],
            ['ঢাকা থেকে সরলরৈখিক দূরত্ব', 'প্রায় ৩৫ কিলোমিটার (সড়কপথে রুটভেদে বেশি)']
          ]
        },
        { type: 'h3', text: 'ঠিকানা থেকে ভুল বোঝাবুঝির কারণ' },
        { type: 'p', text: '“সাভার স্মৃতিসৌধ” খুঁজলে অনেক ফলাফল সাভার শহরের কেন্দ্রে নিয়ে যায়। স্মৃতিসৌধ কিন্তু শহরের ভেতরে নয়—মহাসড়কের পাশে নবীনগর এলাকায়। তাই গন্তব্য হিসেবে “Savar” বা “সাভার বাজার” না দিয়ে সরাসরি স্মৃতিসৌধের মানচিত্র-নিবন্ধন বা প্লাস কোড ব্যবহার করা নিরাপদ।' },
        { type: 'callout', tone: 'warn', title: 'নেভিগেশনে বাড়তি সময় রাখুন', text: 'মহাসড়কে যানজট, রাস্তার কাজ বা বিশেষ অনুষ্ঠানের সময় প্রবেশপথ বদলাতে পারে। নেভিগেশনে স্মৃতিসৌধ দেখানো মানেই নিরাপদ পার্কিং বা নির্দিষ্ট গেট নিশ্চিত নয়।' },
        { type: 'h2', text: 'প্লাস কোড ও স্থানাঙ্ক কীভাবে ব্যবহার করবেন' },
        { type: 'steps', items: [
          { title: 'প্লাস কোড কপি করুন', text: '“W763+GW Savar” লিখে Google Maps-এ সার্চ করলে স্মৃতিসৌধের মূল কাঠামোর কাছে সঠিক অবস্থান পাওয়া যায়; শুধু “Savar” লেখা যথেষ্ট নয়।' },
          { title: 'মানচিত্রে সঠিক নিবন্ধন বেছে নিন', text: 'নেভিগেশন শুরুর আগে নিশ্চিত করুন যে গন্তব্য “National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” নিবন্ধন, কোনো কাছাকাছি বাণিজ্যিক প্রতিষ্ঠান নয়।' },
          { title: 'ফেরার রুট আগে ভাবুন', text: 'অনেক দর্শনার্থী একই সময়ে ফেরেন; রাইড সেবা ব্যবহার করলে ফিরতি অবস্থান ও পিক-আপ পয়েন্ট আগেই ঠিক করে রাখুন।' }
        ] },
        { type: 'h2', text: 'কোন এলাকা দিয়ে গাড়ি নিয়ে যাবেন' },
        { type: 'p', text: 'স্মৃতিসৌধ ঢাকা–আরিচা মহাসড়কের পাশে হওয়ায় ঢাকা শহরের পশ্চিমমুখী করিডর ধরে গেলে মহাসড়ক সংলগ্ন প্রবেশপথে পৌঁছানো যায়। সাভার শহরের ভেতর দিয়ে না ঘুরে মহাসড়ক ধরে এলে সাধারণত সময় কম লাগে, তবে নির্দিষ্ট প্রবেশপথের অবস্থান যাত্রার দিন চালক বা স্থানীয়দের কাছে জেনে নেওয়া ভালো।' },
        { type: 'h3', text: 'নিকটবর্তী পরিচিত স্থান' },
        { type: 'ul', items: [
          'নবীনগর—স্মৃতিসৌধ ও মহাসড়কের কাছের সবচেয়ে পরিচিত বাজার এলাকা',
          'সাভার শহর—উপজেলা প্রশাসন, বাজার ও যাতায়াতের প্রধান কেন্দ্র',
          'ঢাকা–আরিচা মহাসড়ক—ঢাকা, গাবতলী ও মানিকগঞ্জের দিকে সংযোগ'
        ] },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'এই পাতার ঠিকানা ও প্লাস কোড মানচিত্র-নিবন্ধনের বর্তমান অবস্থা অনুসারে দেওয়া। ঠিকানা, প্রবেশপথ ও আশপাশের স্থাপনা সময়ের সঙ্গে বদলাতে পারে; যাত্রার আগে সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখুন।' },
        { type: 'h2', text: 'চালক বা সঙ্গীর সঙ্গে অবস্থান শেয়ার করার নিয়ম' },
        { type: 'p', text: 'শুধু “সাভার” লিখে পাঠালে চালক শহরের কেন্দ্রে পৌঁছে যেতে পারেন, তাই নামের সঙ্গে নির্দিষ্ট অবস্থান পাঠানো নিরাপদ।' },
        { type: 'steps', items: [
          { title: 'প্লাস কোড বা মানচিত্র-লিংক পাঠান', text: '“W763+GW Savar” অথবা স্মৃতিসৌধের মানচিত্র-নিবন্ধনের লিংক পাঠান; তাতে গন্তব্য স্পষ্ট হয়।' },
          { title: 'গন্তব্য মিলিয়ে নিতে বলুন', text: 'পৌঁছানোর আগে নিশ্চিত করুন যে নেভিগেশন “National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” নিবন্ধনে আছে, আশপাশের কোনো দোকান বা বাজারে নয়।' },
          { title: 'ফেরার পিক-আপ পয়েন্ট ঠিক করুন', text: 'যে গেট দিয়ে ঢুকেছেন, ফেরার সময়ও ঠিক সেই গেটেই গাড়ি পাওয়া যাবে—এটি ধরে নেবেন না; মহাসড়কের নিরাপদ পাশ আগে ঠিক করুন।' }
        ] },
        { type: 'links', items: [
          { label: 'খোলার সময় ও বন্ধের দিন', href: '/visit/opening-hours/' },
          { label: 'ঢাকা থেকে যাওয়ার পথ', href: '/transport/from-dhaka/' },
          { label: 'নবীনগরে শেষ অংশের যাতায়াত', href: '/transport/nabinagar-last-mile/' }
        ] }
      ],
      faq: [
        { q: 'জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত? জেলা ও উপজেলার নাম কী?', a: 'ঢাকা জেলার সাভার উপজেলায়, নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে। পোস্ট কোড ১৩৪৪, প্লাস কোড W763+GW।' },
        { q: 'বাংলাদেশের জাতীয় স্মৃতিসৌধ কোথায় অবস্থিত—ঢাকার ভেতরে কি?', a: 'না। এটি ঢাকা শহরের বাইরে, সাভারে। সরলরৈখিক দূরত্ব প্রায় ৩৫ কিলোমিটার; সড়কপথে শুরু ও যানজট অনুযায়ী বেশি।' },
        { q: 'স্মৃতিসৌধের নির্দিষ্ট স্থানাঙ্ক কী?', a: '২৩.৯১১২৯৮৫° উত্তর, ৯০.২৫৪৭৭৫৩° পূর্ব। এই বিন্দুটি মানচিত্রের ক্যামেরার কেন্দ্র নয়, কাঠামোর অবস্থান।' },
        { q: 'নেভিগেশনে কী লিখব?', a: '“National Martyrs’ Monument”, “জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW Savar ব্যবহার করুন। শুধু “Savar” লিখলে শহরের কেন্দ্রে চলে যাওয়ার সম্ভাবনা থাকে।' },
        { q: 'Nabinagar আর সাভার কি একই জায়গা?', a: 'না। নবীনগর সাভার উপজেলার ভেতরের একটি এলাকা, যা স্মৃতিসৌধ ও মহাসড়কের সঙ্গে সবচেয়ে বেশি সম্পর্কিত; সাভার শহর আলাদা বাজার এলাকা।' },
        { q: 'চালককে গন্তব্য কীভাবে পাঠাব?', a: 'শুধু “সাভার” নয়—প্লাস কোড W763+GW Savar বা স্মৃতিসৌধের মানচিত্র-নিবন্ধনের লিংক পাঠান।' },
        { q: 'ফেরার সময় একই প্রবেশপথে গাড়ি পাওয়া যাবে কি?', a: 'ধরে নেওয়া উচিত নয়। মহাসড়কের যে পাশে নিরাপদে থামা যায়, সেখানে ফেরার পিক-আপ পয়েন্ট আগেই ঠিক করুন।' }
      ]
    },
    en: {
      title: 'Where is the National Martyrs’ Monument located? Address, map and Plus Code',
      description: 'The National Martyrs’ Monument stands beside the Dhaka–Aricha Highway at Nabinagar, Savar. Correct address, Plus Code, administrative area and how to navigate to the monument rather than the town.',
      h1: 'Where is the National Martyrs’ Monument located?',
      answer:
        'The National Martyrs’ Monument (Jatiyo Smriti Soudho) is at Nabinagar in Savar Upazila, Dhaka District, Bangladesh, beside the Dhaka–Aricha Highway — about 35 km north-west of Dhaka city. Postal address: Dhaka–Aricha Highway, Savar 1344. Plus Code W763+GW, Savar; coordinates 23.9112985° N, 90.2547753° E.',
      blocks: [
        { type: 'map' },
        { type: 'h2', text: 'The exact address and administrative identity' },
        { type: 'p', text: 'The listing address on the map is “Dhaka–Aricha Highway, Savar 1344”. Administratively the monument belongs to Savar Upazila in Dhaka District. “Nabinagar” is the locality most closely tied to the monument and the highway, while “Savar town” is a separate market area further along the road.' },
        {
          type: 'table',
          head: ['Item', 'Detail'],
          rows: [
            ['Street address', 'Dhaka–Aricha Highway, Nabinagar'],
            ['City and district', 'Savar, Dhaka'],
            ['Postal code', '1344'],
            ['Plus Code', 'W763+GW'],
            ['Coordinates', '23.9112985° N, 90.2547753° E'],
            ['Straight-line distance from Dhaka', 'about 35 km (longer by road, depending on the route)']
          ]
        },
        { type: 'h3', text: 'Why the address is easy to misread' },
        { type: 'p', text: 'Searching for “Savar monument” often returns results centred on Savar town. The monument is not inside the town: it sits beside the highway at Nabinagar. Setting your destination to “Savar” or “Savar Bazar” instead of the monument listing is the most common navigation mistake.' },
        { type: 'callout', tone: 'warn', title: 'Allow extra travel time', text: 'Traffic, road works and special programmes can change which entrance is open. Being routed to the monument does not guarantee a specific gate, parking bay or drop-off point.' },
        { type: 'h2', text: 'How to use the Plus Code and coordinates' },
        { type: 'steps', items: [
          { title: 'Copy the Plus Code', text: 'Searching “W763+GW Savar” in Google Maps lands next to the monument itself; searching only “Savar” does not.' },
          { title: 'Confirm the correct listing', text: 'Before starting navigation, check that the destination is the “National Martyrs’ Monument” listing and not a nearby commercial business.' },
          { title: 'Plan the return leg', text: 'Many visitors leave at the same time. If you are using a ride-hailing app, agree on a return pickup point before you arrive.' }
        ] },
        { type: 'h2', text: 'Which corridor to drive in from' },
        { type: 'p', text: 'Because the monument stands beside the Dhaka–Aricha Highway, approaching along the highway from the Dhaka side usually reaches the highway-side entrance fastest. Ask your driver or a local on the day which entrance is currently in use rather than assuming a fixed gate.' },
        { type: 'h3', text: 'Nearby reference points' },
        { type: 'ul', items: [
          'Nabinagar — the best-known market area next to the monument and the highway',
          'Savar town — upazila offices, markets and the main transport hub',
          'Dhaka–Aricha Highway — links towards Dhaka, Gabtoli and Manikganj'
        ] },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'The address and Plus Code here follow the current map listing. Entrances and surrounding landmarks can change, so check updated information from the Savar Upazila Administration before travelling.' },
        { type: 'h2', text: 'Sharing the location with a driver or companion' },
        { type: 'p', text: 'Sending only “Savar” can leave a driver in the town centre, so send the exact location rather than the name alone.' },
        { type: 'steps', items: [
          { title: 'Send the Plus Code or a map link', text: '“W763+GW Savar”, or a link to the monument’s map listing, makes the destination unambiguous.' },
          { title: 'Ask them to confirm the destination', text: 'Before arrival, check that navigation sits on the “National Martyrs’ Monument” listing and not on a nearby shop or market.' },
          { title: 'Agree a return pickup point', text: 'Do not assume the gate you entered by works for pickup; fix a place where a vehicle can stop safely on the correct side of the highway.' }
        ] },
        { type: 'links', items: [
          { label: 'Opening hours and closed days', href: '/en/visit/opening-hours/' },
          { label: 'Getting there from Dhaka', href: '/en/transport/from-dhaka/' },
          { label: 'The last mile at Nabinagar', href: '/en/transport/nabinagar-last-mile/' }
        ] }
      ],
      faq: [
        { q: 'Where exactly is the National Martyrs’ Monument?', a: 'Beside the Dhaka–Aricha Highway at Nabinagar, Savar Upazila, Dhaka District. Postal code 1344, Plus Code W763+GW.' },
        { q: 'Is it inside Dhaka city?', a: 'No. It is outside the city, in Savar — about 35 km by straight line, and further by road depending on traffic and the route you take.' },
        { q: 'What are the exact coordinates?', a: '23.9112985° N, 90.2547753° E. That point is the structure, not the centre of the map view.' },
        { q: 'What should I type into navigation?', a: 'Use “National Martyrs’ Monument” or the Plus Code W763+GW Savar. Typing only “Savar” is likely to take you to the town centre.' },
        { q: 'Are Nabinagar and Savar the same place?', a: 'No. Nabinagar is a locality within Savar Upazila and is the closest reference point to the monument; Savar town is a separate market area.' },
        { q: 'How should I send the destination to a driver?', a: 'Not just “Savar”. Send the Plus Code W763+GW Savar or a link to the monument’s map listing.' },
        { q: 'Can I be picked up at the same entrance I used?', a: 'Do not assume so. Agree a return pickup point where a vehicle can stop safely on the highway.' }
      ]
    }
  },
  {
    slug: 'visit/opening-hours',
    section: 'visit',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['visit/location', 'visit/entry-costs', 'events/independence-day', 'events/victory-day', 'visit/first-time'],
    bn: {
      title: 'সাভার স্মৃতিসৌধ খোলার সময় ও বন্ধের দিন',
      description: 'সাভার স্মৃতিসৌধ কখন খোলা থাকে, কয়টা পর্যন্ত খোলা থাকে, কোন দিন বন্ধ থাকতে পারে এবং যাত্রার আগে কখন কোন তথ্য যাচাই করবেন।',
      h1: 'সাভার স্মৃতিসৌধ খোলার সময় ও বন্ধের দিন',
      answer:
        '২৫ অক্টোবর ২০২৬-এর Google Maps তালিকায় জাতীয় স্মৃতিসৌধ সপ্তাহের সাত দিন সকাল ১০টা থেকে বিকেল ৫টা পর্যন্ত খোলা দেখানো হয়েছে। এটি তৃতীয় পক্ষের তালিকা, কর্তৃপক্ষের স্থায়ী ঘোষণা নয়—তাই যাত্রার আগে ওই দিনের বর্তমান প্রবেশ-সময় নিশ্চিত করুন।',
      blocks: [
        {
          type: 'table',
          head: ['বিষয়', 'বর্তমান অবস্থা'],
          rows: [
            ['তালিকাভুক্ত সময়', 'সকাল ১০:০০ – বিকেল ৫:০০ (Google Maps, ২৫ অক্টোবর ২০২৬)'],
            ['সাপ্তাহিক বন্ধ', 'তালিকায় আলাদা সাপ্তাহিক বন্ধ দেখানো হয়নি'],
            ['প্রবেশ মূল্য', 'অনলাইনে নিশ্চিত তথ্য পাওয়া যায়নি'],
            ['জাতীয় দিবস', 'প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে'],
            ['যাচাইয়ের মাধ্যম', 'সাভার উপজেলা প্রশাসন ও ঘটনাস্থলের নিরাপত্তাকর্মী']
          ]
        },
        { type: 'h2', text: '“কয়টা পর্যন্ত খোলা থাকে” প্রশ্নের সৎ উত্তর' },
        { type: 'p', text: 'অনেকেই ভাবেন বিকেল ৫টা মানে ৫টা পর্যন্ত ভেতরে থাকা যাবে। বাস্তবে বন্ধের সময় সাধারণত কাছাকাছি সময়ে দর্শনার্থীদের বাইরে আসতে বলা হয়, আর প্রবেশ সন্ধ্যার আগেই বন্ধ হয়ে যায়। তাই শেষ সময় ধরে পরিকল্পনা না করে বন্ধের অন্তত ৩০–৪৫ মিনিট আগে পৌঁছানো ভালো।' },
        { type: 'callout', tone: 'warn', title: 'স্থায়ী সময়সূচি নেই', text: 'কর্তৃপক্ষের হালনাগাদ ঘোষণা ছাড়া কোনো সময়কে স্থায়ী ধরবেন না। রাষ্ট্রীয় অনুষ্ঠান, প্রস্তুতি, নিরাপত্তা বা রক্ষণাবেক্ষণের কারণে একই দিনে প্রবেশ সীমিত হতে পারে।' },
        { type: 'h2', text: 'যে দিনগুলোতে সময় বদলানোর সম্ভাবনা বেশি' },
        { type: 'ul', items: [
          '২৬ মার্চ স্বাধীনতা দিবস ও ১৬ ডিসেম্বর বিজয় দিবস—জাতীয় শ্রদ্ধা নিবেদনের কর্মসূচি',
          '২১ ফেব্রুয়ারি ও অন্যান্য জাতীয় স্মৃতি-দিবসের অনুষ্ঠান',
          'রাষ্ট্রীয় সফর বা বিশেষ নিরাপত্তা ব্যবস্থা',
          'ভারী বৃষ্টি, ঝড় বা মাঠ-রক্ষণাবেক্ষণের কাজ'
        ] },
        { type: 'h2', text: 'যাত্রার আগে তিন ধাপে যাচাই' },
        { type: 'steps', items: [
          { title: 'প্রস্থানের দিন সকালে মানচিত্র দেখুন', text: 'মানচিত্র-তালিকায় সাম্প্রতিক সময় ও ভিড়ের তথ্য বদলেছে কি না দেখে নিন; তালিকা পুরোনো হলে সেটিকেও চূড়ান্ত ধরবেন না।' },
          { title: 'স্থানীয় সূত্রে নিশ্চিত করুন', text: 'সাভার উপজেলা প্রশাসনের ওয়েবসাইট বা হটলাইন এবং সম্ভব হলে ঘটনাস্থলে যোগাযোগ করে চলতি সময় জেনে নিন।' },
          { title: 'সূর্যালোক ধরে সময় ভাগ করুন', text: 'খোলা সময় নিশ্চিত না হলেও সূর্যোদয়-সূর্যাস্ত ধরে হাঁটার সময় হিসাব করুন; ঢাকার কাছে বিকেল ৫টার আগেই আলো কমতে শুরু করে।' }
        ] },
        { type: 'h2', text: 'দর্শনের জন্য দিনের কোন সময় ভালো' },
        { type: 'p', text: 'সকালে খোলার পরপর পরিবেশ তুলনামূলক শান্ত থাকে এবং ছায়া বেশি থাকে; দুপুরে রোদ তীব্র। বিকেলের দিকে ভিড় বাড়ে, তবে আলো নরম হয়। পরিবার বা স্কুল-দল নিয়ে গেলে ভিড় এড়াতে সকাল বেছে নেওয়া সহজ।' },
        { type: 'callout', tone: 'note', title: 'মনে রাখবেন', text: 'ভ্রমণের দিন ছাড়া অন্য কোনো দিনের জন্য এই পাতার তথ্য চূড়ান্ত প্রমাণ নয়। খোলা সময় যাচাই ছাড়া দূর থেকে এসে পৌঁছালে ফিরতি যাত্রা নষ্ট হতে পারে।' },
        { type: 'h2', text: 'খোলা সময় ধরে একটি নমুনা দিনের পরিকল্পনা' },
        { type: 'p', text: 'তালিকাভুক্ত সময় সকাল ১০টা–বিকেল ৫টা ধরে রাখলে একটি স্বাভাবিক সফরের দিন এভাবে সাজানো যায়। ঘণ্টাগুলো শুধু নমুনা—চলতি প্রবেশ-সময় যাচাই করে নিজের মতো বদলে নিন।' },
        { type: 'steps', items: [
          { title: 'সকাল ৭:৩০–৮:০০ — ঢাকা থেকে রওনা', text: 'যানজট ধরে আগেই বেরোন; খোলার আগে পৌঁছে অপেক্ষা করলে ভেতরে কম ভিড় পাবেন।' },
          { title: 'সকাল ১০:০০ — প্রবেশ ও মূল কাঠামো', text: 'খোলার পরপর প্রবেশ করে প্রথমে মূল কাঠামো দেখুন; তখন আলো নরম থাকে ও ভিড় কম থাকে।' },
          { title: 'দুপুর ১২:০০–১:০০ — উদ্যান ও বিশ্রাম', text: 'ছায়ায় বসে পানি খেয়ে উদ্যানের দিক ঘুরুন; তীব্র রোদ এড়ানো যায়।' },
          { title: 'বিকেল ৩:৩০ — ফেরার প্রস্তুতি', text: 'বন্ধের অন্তত দেড় ঘণ্টা আগে বেরিয়ে পড়ুন, যাতে মহাসড়কের বিকেলের যানজট সহ্য করা যায়।' }
        ] },
        { type: 'links', items: [
          { label: 'প্রবেশমূল্য ও সফরের খরচ', href: '/visit/entry-costs/' },
          { label: 'বিজয় দিবস', href: '/events/victory-day/' },
          { label: 'স্বাধীনতা দিবস', href: '/events/independence-day/' }
        ] }
      ],
      faq: [
        { q: 'সাভার স্মৃতিসৌধ খোলার সময় কত?', a: '২৫ অক্টোবর ২০২৬-এর মানচিত্র-তালিকায় সকাল ১০টা–বিকেল ৫টা। এটি কর্তৃপক্ষের স্থায়ী ঘোষণা নয়, তাই যাত্রার আগে যাচাই করুন।' },
        { q: 'স্মৃতিসৌধ কয়টা পর্যন্ত খোলা থাকে?', a: 'তালিকায় বিকেল ৫টা পর্যন্ত, তবে বন্ধের আগেই দর্শনার্থীদের বাইরে আসতে বলা হতে পারে। অন্তত ৩০–৪৫ মিনিট আগে পৌঁছান।' },
        { q: 'সাপ্তাহিক বন্ধের দিন আছে কি?', a: 'বর্তমান তালিকায় আলাদা সাপ্তাহিক বন্ধ দেখানো হয়নি। তবে বিশেষ দিনে বা রক্ষণাবেক্ষণে বন্ধ থাকতে পারে—এটি নিশ্চিত করতে স্থানীয় সূত্রে যাচাই করুন।' },
        { q: '২৬ মার্চ বা ১৬ ডিসেম্বর খোলা থাকে কি?', a: 'সাধারণত জাতীয় দিবসে শ্রদ্ধা নিবেদনের কর্মসূচি হয়, কিন্তু প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে। ওই দিনের সরকারি ঘোষণা দেখে যাওয়া উচিত।' },
        { q: 'রাতে খোলা থাকে কি?', a: 'নিশ্চিত তথ্য নেই। নিরাপত্তার কারণে সাধারণত সন্ধ্যার পর সাধারণ দর্শনার্থীদের প্রবেশ সীমিত থাকে ধরে নিয়ে পরিকল্পনা করা ভালো।' },
        { q: 'খোলার সময় নিশ্চিত না হলে দিন কীভাবে সাজাব?', a: 'সকালে পৌঁছানো ও বিকেলের আগে ফেরার লক্ষ্য রাখুন; কোনো ঘণ্টাকে স্থায়ী ধরে না নিয়ে খোলা ও বন্ধের সাধারণ ধরন অনুসরণ করুন।' },
        { q: 'প্রবেশের জন্য অপেক্ষা করতে হতে পারে কি?', a: 'খোলার আগে পৌঁছালে বাইরে অপেক্ষা করতে হয়। কত সময় লাগবে তা নির্দিষ্ট করে বলা যায় না, তাই খোলা জায়গায় দাঁড়ানোর প্রস্তুতি রাখুন।' }
      ]
    },
    en: {
      title: 'Savar monument opening hours and closed days',
      description: 'When the National Martyrs’ Monument in Savar is open, what time it closes, which days it may be closed, and how to verify the current timings before you travel.',
      h1: 'Opening hours at the National Martyrs’ Monument, Savar',
      answer:
        'The Google Maps listing for the National Martyrs’ Monument showed 10:00–17:00 seven days a week as of 25 October 2026. That is a third-party listing, not a standing announcement by the managing authority, so confirm the current access time on the day you travel.',
      blocks: [
        {
          type: 'table',
          head: ['Item', 'Current status'],
          rows: [
            ['Listed hours', '10:00 – 17:00 (Google Maps, 25 October 2026)'],
            ['Weekly closed day', 'None shown in the listing'],
            ['Entry fee', 'No confirmed online information found'],
            ['National days', 'Access and vehicle movement may be restricted'],
            ['How to verify', 'Savar Upazila Administration and on-site security staff']
          ]
        },
        { type: 'h2', text: 'An honest answer to “what time does it close?”' },
        { type: 'p', text: 'A 17:00 closing time does not mean you can stay inside until 17:00. Visitors are normally asked to leave as closing approaches, and entry usually stops before that. Plan to arrive at least 30–45 minutes before closing rather than aiming at the last minute.' },
        { type: 'callout', tone: 'warn', title: 'There is no standing public timetable', text: 'Do not treat any time as permanent without an updated authority notice. State ceremonies, preparation work, security arrangements or maintenance can restrict access on an otherwise normal day.' },
        { type: 'h2', text: 'Days when timings are most likely to change' },
        { type: 'ul', items: [
          '26 March (Independence Day) and 16 December (Victory Day) — national tribute ceremonies',
          '21 February and other national remembrance days',
          'State visits or heightened security arrangements',
          'Heavy rain, storms or grounds maintenance'
        ] },
        { type: 'h2', text: 'Verify in three steps before you travel' },
        { type: 'steps', items: [
          { title: 'Check the map listing on the morning you go', text: 'Look for recently updated hours or crowd information, and remember that an outdated listing is not a guarantee either.' },
          { title: 'Confirm with a local source', text: 'Use the Savar Upazila Administration website or hotline, and ask on site where possible, for the access time in force.' },
          { title: 'Plan around daylight', text: 'If confirmed hours are unavailable, plan walking time around sunrise and sunset; near Dhaka the light starts fading well before 17:00.' }
        ] },
        { type: 'h2', text: 'Which part of the day is best' },
        { type: 'p', text: 'The grounds are calmer and shadier shortly after opening, while midday sun is intense. Crowds build towards the afternoon but the light is softer. Families and school groups will usually find an early visit easier.' },
        { type: 'callout', tone: 'note', title: 'Keep in mind', text: 'These timings are not proof of hours on any other day. Travelling a long distance without confirming access can mean arriving after entry has already closed.' },
        { type: 'h2', text: 'A sample plan shaped around the opening hours' },
        { type: 'p', text: 'If the listed 10:00–17:00 hours hold, a normal visit can be arranged roughly as follows. These times are illustrative only — check the current access time and adjust.' },
        { type: 'steps', items: [
          { title: '07:30–08:00 — leave Dhaka', text: 'Set off early to absorb traffic; arriving before opening usually means a quieter first hour inside.' },
          { title: '10:00 — enter and see the main structure', text: 'Enter soon after opening and go to the main structure first, while the light is soft and the crowds thin.' },
          { title: '12:00–13:00 — grounds and a rest', text: 'Rest in the shade with water and walk the grounds, avoiding the harshest midday sun.' },
          { title: '15:30 — prepare to leave', text: 'Start leaving at least an hour and a half before closing so the afternoon highway traffic is manageable.' }
        ] },
        { type: 'links', items: [
          { label: 'Entry cost and trip budget', href: '/en/visit/entry-costs/' },
          { label: 'Victory Day', href: '/en/events/victory-day/' },
          { label: 'Independence Day', href: '/en/events/independence-day/' }
        ] }
      ],
      faq: [
        { q: 'What are the opening hours of the Savar monument?', a: 'The map listing as of 25 October 2026 showed 10:00–17:00. It is not an official standing timetable, so verify before travelling.' },
        { q: 'What time does the monument close?', a: 'The listing says 17:00, but visitors may be asked to leave before that. Arrive at least 30–45 minutes before closing.' },
        { q: 'Is there a weekly closed day?', a: 'None is shown in the current listing. However, closure for maintenance or special events is possible — check locally.' },
        { q: 'Is it open on 26 March or 16 December?', a: 'National tribute ceremonies normally take place on those days, but access and traffic can be restricted. Follow the official notice for that specific day.' },
        { q: 'Is it open at night?', a: 'There is no confirmed information. Assume general visitor access is limited after dark and plan accordingly.' },
        { q: 'How do I plan the day without confirmed hours?', a: 'Aim to arrive in the morning and leave before late afternoon, following the general pattern rather than treating any hour as fixed.' },
        { q: 'Should I expect a queue to get in?', a: 'Arriving before opening usually means waiting outside; no specific queue time can be given, so allow for standing in the open.' }
      ]
    }
  },
  {
    slug: 'visit/entry-costs',
    section: 'visit',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['visit/opening-hours', 'transport/from-dhaka', 'transport/by-car', 'visit/first-time'],
    bn: {
      title: 'স্মৃতিসৌধে প্রবেশমূল্য ও ভ্রমণের খরচ',
      description: 'স্মৃতিসৌধে প্রবেশে টিকিট লাগে কি না, কোন খরচ নিশ্চিত আর কোনটি অনুমান, এবং সফরের বাজেট কোন কোন খাত মিলিয়ে বানাবেন।',
      h1: 'প্রবেশমূল্য ও সফরের খরচ',
      answer:
        'স্মৃতিসৌধে বর্তমানে প্রবেশমূল্য কত—এটি নির্ভরযোগ্য সরকারি অনলাইন সূত্রে নিশ্চিত করা যায়নি। কোনো পাতা বা তালিকায় ফি না দেখানো মানেই বিনামূল্যে প্রবেশ নয়। ওয়েবসাইটে উল্লেখ না থাকলে ফি ধরে নেওয়া বা না-ধরে নেওয়া—দুটোই অনুমান; ব্যবস্থাপনার কাছে চলতি নিয়ম যাচাই করুন।',
      blocks: [
        { type: 'h2', text: 'যা নিশ্চিত, যা নিশ্চিত নয়' },
        {
          type: 'table',
          head: ['খরচের খাত', 'অবস্থা'],
          rows: [
            ['প্রবেশমূল্য', 'নিশ্চিত সরকারি তথ্য পাওয়া যায়নি'],
            ['পার্কিং ফি', 'সরকারি অনলাইন তথ্য পাওয়া যায়নি'],
            ['যাতায়াত', 'আসল খরচ রুট ও যানভেদে বদলায়'],
            ['খাবার ও জল', 'নিজের ব্যবস্থা করলে খরচ আগেই নির্ধারণ করা যায়'],
            ['গাইড বা ছবি', 'কোনো প্রতিষ্ঠিত মূল্যতালিকা নিশ্চিত হয়নি']
          ]
        },
        { type: 'callout', tone: 'warn', title: 'অনুমানকে মূল্যতালিকা বানাবেন না', text: '“বিনামূল্যে হবে” বা “১০ টাকা হবে” ধরে নিয়ে ঘুরে আসা যায় না। বিশেষ করে স্কুল-দল বা বড় পরিবারের ক্ষেত্রে আগেই লিখিতভাবে জেনে নেওয়া ভালো, যাতে দলে টাকা তুলতে হয় না।' },
        { type: 'h2', text: 'যে খরচগুলো আপনি নিজেই হিসাব করতে পারেন' },
        { type: 'ul', items: [
          'ঢাকা থেকে যাওয়া-আসার যানবাহন ভাড়া—বাস, সিএনজি, রাইড বা ব্যক্তিগত গাড়ি',
          'রাস্তার সময় অনুযায়ী বিশ্রাম ও খাবারের খরচ',
          'পানি ও হালকা খাবার—বিশেষত গরমের দিনে',
          'মোবাইল ডেটা ও সম্ভাব্য পার্কিং সংক্রান্ত ছোট খরচ'
        ] },
        { type: 'h2', text: 'খরচ কমাতে তিনটি বাস্তব উপায়' },
        { type: 'steps', items: [
          { title: 'দল বেঁধে যান', text: 'যাতায়াতের খরচ ভাগ হলে জনপ্রতি খরচ কমে; স্কুল-দলের ক্ষেত্রে বাস ভাড়াই সবচেয়ে বড় খাত।' },
          { title: 'নিজের পানি নিন', text: 'পানি সঙ্গে নিলে অপ্রত্যাশিত দামে কিনতে হয় না, আর গরমে পানিশূন্যতার ঝুঁকিও কমে।' },
          { title: 'একদিনে এক গন্তব্য', text: 'একই দিনে অনেক জায়গা ঘুরতে গেলে যাতায়াতের খরচ কয়েকগুণ বাড়ে; স্মৃতিসৌধকে মূল রেখে সীমিত একটি সংযোজন নির্বাচন করুন।' }
        ] },
        { type: 'h2', text: 'খরচ যাচাইয়ের নিরাপদ নিয়ম' },
        { type: 'p', text: 'অনলাইনে দেখা যেকোনো সংখ্যা—টিকিট, পার্কিং বা গাইড ফি—উৎস ও তারিখ ছাড়া ব্যবহার করা উচিত নয়। কোনো ভ্রমণ-বিষয়কটির পূর্বের তথ্য বর্তমান বলে ধরে না নিয়ে, সরাসরি সাভার উপজেলা প্রশাসন বা ঘটনাস্থলের তথ্যকেন্দ্রে জেনে নিন।' },
        { type: 'callout', tone: 'note', title: 'দলনেতাদের জন্য', text: 'স্কুল বা প্রতিষ্ঠানের সফরে যাওয়ার আগে কর্তৃপক্ষের কাছে লিখিত নিশ্চয়তা নিন—সময়, প্রবেশ-নিয়ম, যান পার্কিং ও দলনেতার দায়িত্ব কে নেবে।' },
        { type: 'h2', text: 'প্রবেশমূল্য বা পার্কিং ফি পরিশোধের নিয়ম' },
        { type: 'p', text: 'ফির পরিমাণ নিশ্চিত না হলেও পরিশোধের ধরন জানা থাকলে অনিয়ম এড়ানো যায় এবং দল নিয়ে গেলে হিসাব পরিষ্কার থাকে।' },
        { type: 'steps', items: [
          { title: 'প্রবেশপথের নোটিশ দেখুন', text: 'প্রবেশপথ বা কাউন্টারে লেখা চলতি হার ও নিয়ম আগে পড়ে নিন; মুখের কথা নয়, নোটিশই ভিত্তি।' },
          { title: 'নির্ধারিত কাউন্টার ব্যবহার করুন', text: 'দর্শনার্থী চত্বরের বাইরে বা যানবাহনের ধারে দাঁড়িয়ে কেউ টাকা চাইলে তা পরিশোধের বৈধ স্থান নয়।' },
          { title: 'রসিদ নিন', text: 'প্রবেশ বা পার্কিংয়ের টাকা দিলে রসিদ বা রেকর্ড চেয়ে নিন; দল নিয়ে গেলে মোট পরিমাণ লিখিতভাবে রাখা ভালো।' }
        ] },
        { type: 'links', items: [
          { label: 'খোলার সময় ও বন্ধের দিন', href: '/visit/opening-hours/' },
          { label: 'গাড়িতে যাওয়ার নিয়ম', href: '/transport/by-car/' },
          { label: 'পার্কিং ও নামানোর স্থান', href: '/transport/parking-dropoff/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে ঢুকতে টিকিট লাগে কি?', a: 'চলতি প্রবেশমূল্যের নিশ্চিত সরকারি তথ্য পাওয়া যায়নি। ফি উল্লেখ না থাকা মানেই বিনামূল্যে নয়; ব্যবস্থাপনার কাছে যাচাই করুন।' },
        { q: 'শিশুদের জন্য আলাদা টিকিট আছে কি?', a: 'এমন কোনো নির্ভরযোগ্য তথ্য নেই। দল নিয়ে যাওয়ার আগে কর্তৃপক্ষের কাছে সরাসরি জেনে নিন।' },
        { q: 'পার্কিং খরচ কত?', a: 'নিশ্চিত তথ্য পাওয়া যায়নি। নির্দেশিত স্থান ব্যবহার করুন এবং বিশেষ দিনে যান চলাচল সীমিত হতে পারে ধরে রাখুন।' },
        { q: 'সফরে মোট কত টাকা ধরা উচিত?', a: 'যাতায়াত ও খাবার নিজে হিসাব করে যোগ করুন। স্মৃতিসৌধের প্রবেশ ফি অজানা, তাই বাজেটে আলাদা রাখুন বা আগেই যাচাই করুন।' },
        { q: 'টাকা দিলে রসিদ চাওয়া উচিত?', a: 'হ্যাঁ। প্রবেশ বা পার্কিং সংক্রান্ত পরিশোধে রসিদ বা রেকর্ড চাওয়া নিরাপদ, বিশেষত দল নিয়ে গেলে।' },
        { q: 'হাতে টাকা রাখা দরকার কি?', a: 'পরিশোধের ধরন (নগদ বা কার্ড) নিশ্চিত নয়, তাই সীমিত নগদ সঙ্গে রাখা এবং আগেই কর্তৃপক্ষের কাছে পদ্ধতি জেনে নেওয়া ভালো।' }
      ]
    },
    en: {
      title: 'Entry cost at the National Martyrs’ Monument and trip budget',
      description: 'Whether the National Martyrs’ Monument charges an entry fee, which costs are known and which are guesses, and how to build a realistic budget for the visit.',
      h1: 'Entry cost and what a visit really costs',
      answer:
        'No reliable official online source confirms the current entry fee at the National Martyrs’ Monument. The absence of a fee on a website is not proof that entry is free. Whether you assume a fee or assume none, it is a guess — check the current rule with the managing authority.',
      blocks: [
        { type: 'h2', text: 'What is confirmed and what is not' },
        {
          type: 'table',
          head: ['Cost item', 'Status'],
          rows: [
            ['Entry fee', 'No confirmed official information'],
            ['Parking fee', 'No official online information'],
            ['Transport', 'Real cost varies by route and vehicle'],
            ['Food and water', 'Controllable if you bring your own'],
            ['Guide or photography service', 'No established price list confirmed']
          ]
        },
        { type: 'callout', tone: 'warn', title: 'Do not turn an assumption into a price list', text: 'Assuming “it will be free” or “it will be a token fee” can leave a group collecting money on the spot. For school parties and large families, confirm in writing beforehand.' },
        { type: 'h2', text: 'Costs you can calculate yourself' },
        { type: 'ul', items: [
          'Return transport from Dhaka — bus, CNG, ride-hailing or private car',
          'Food and rest stops for the length of the journey',
          'Water and light snacks, especially in hot weather',
          'Mobile data and small parking-related charges'
        ] },
        { type: 'h2', text: 'Three practical ways to keep costs down' },
        { type: 'steps', items: [
          { title: 'Travel as a group', text: 'Sharing a vehicle lowers the per-person cost; for school groups, bus hire is usually the largest single item.' },
          { title: 'Bring your own water', text: 'It avoids resorting to whatever price is asked on the spot and reduces dehydration risk in the heat.' },
          { title: 'One destination per day', text: 'Adding several stops multiplies transport cost. Keep the monument as the main visit and add one confirmed nearby place at most.' }
        ] },
        { type: 'h2', text: 'A safe rule for verifying costs' },
        { type: 'p', text: 'Any figure you see online — ticket, parking or guide fee — should not be used without a source and a date. Confirm with the Savar Upazila Administration or the on-site information point instead of treating older travel content as current.' },
        { type: 'callout', tone: 'note', title: 'For group organisers', text: 'Before a school or institutional visit, get written confirmation of timings, access rules, vehicle parking and who is responsible for the group on site.' },
        { type: 'h2', text: 'How to pay any entry or parking fee' },
        { type: 'p', text: 'Even without a confirmed amount, knowing how payment should work helps you avoid irregularities and keeps the accounts clear for a group.' },
        { type: 'steps', items: [
          { title: 'Read the entrance notice', text: 'Check the current rate and rules posted at the entrance or counter; the notice, not word of mouth, is the basis.' },
          { title: 'Use the designated counter', text: 'Someone demanding money outside the visitor area or beside vehicles is not an official point of payment.' },
          { title: 'Ask for a receipt', text: 'When you pay for entry or parking, ask for a receipt or record; for groups, keep the total in writing.' }
        ] },
        { type: 'links', items: [
          { label: 'Opening hours and closed days', href: '/en/visit/opening-hours/' },
          { label: 'Going by car', href: '/en/transport/by-car/' },
          { label: 'Parking and drop-off', href: '/en/transport/parking-dropoff/' }
        ] }
      ],
      faq: [
        { q: 'Is there an entry ticket for the monument?', a: 'No confirmed official information on the current entry fee was found. A missing fee is not proof of free entry — verify with the managing authority.' },
        { q: 'Is there a separate child ticket?', a: 'No reliable information exists. Ask the authority directly before bringing a group.' },
        { q: 'How much is parking?', a: 'Not confirmed. Use the area you are directed to, and expect restricted vehicle movement on national days.' },
        { q: 'How much should I budget for the whole trip?', a: 'Add your own transport and food estimates to a separate allowance for the unknown entry cost, or confirm the entry rule in advance.' },
        { q: 'Should I ask for a receipt when I pay?', a: 'Yes. For entry or parking payments, asking for a receipt or record is prudent, especially with a group.' },
        { q: 'Do I need to carry cash?', a: 'The payment method (cash or card) is not confirmed, so carry a little cash and ask the authority in advance how it works.' }
      ]
    }
  },
  {
    slug: 'visit/how-long',
    section: 'visit',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['visit/first-time', 'itineraries/savar-half-day', 'transport/from-dhaka', 'visit/with-children'],
    bn: {
      title: 'স্মৃতিসৌধ দেখতে কত সময় লাগে? ৪৫ মিনিট থেকে ৩ ঘণ্টা',
      description: 'দল, আগ্রহ ও আবহাওয়া অনুযায়ী স্মৃতিসৌধ দেখতে কত সময় লাগে—ছোট, স্বাভাবিক ও ধীর—তিন ধরনের পরিকল্পনা এবং দূর থেকে আসার ক্ষেত্রে সময়ের হিসাব।',
      h1: 'স্মৃতিসৌধ দেখতে কত সময় লাগে',
      answer:
        'মূল কাঠামো, পথ ও উদ্যান ঘুরে দেখতে সাধারণত দেড় থেকে দুই ঘণ্টা যথেষ্ট। দ্রুত ঢুকে ছবি তুলে ফেরা যায় ৪৫ মিনিটে, আর প্রতিটি ফলক ও ইতিহাস পড়তে চাইলে সাড়ে তিন ঘণ্টা পর্যন্ত লাগতে পারে। এতে ঢাকা থেকে যাওয়া-আসার সময় ধরা হয়নি।',
      blocks: [
        { type: 'h2', text: 'তিন ধরনের পরিকল্পনা' },
        {
          type: 'table',
          head: ['ধরন', 'সময়', 'উপযুক্ত কখন'],
          rows: [
            ['ছোট সফর', '৪৫–৬০ মিনিট', 'যাত্রাপথে বিরতি বা দলের সময় কম'],
            ['স্বাভাবিক সফর', '১.৫–২ ঘণ্টা', 'পরিবার, বন্ধু বা প্রথমবার আসা দর্শনার্থী'],
            ['ধীর সফর', '২.৫–৩.৫ ঘণ্টা', 'ছাত্রদল, গবেষক বা ছবি তোলার আগ্রহ থাকলে']
          ]
        },
        { type: 'h2', text: 'সময় কোথায় বেশি লাগে' },
        { type: 'ul', items: [
          'মূল কাঠামোর কাছে হাঁটা ও সিঁড়ি/ঢালু পথ—গতি কম হলে সময় বাড়ে',
          'বড় দলে সদস্য গোনা, বিশ্রাম ও শৌচাগারের জন্য অপেক্ষা',
          'রোদ বা বৃষ্টির সময় ছায়ায় থামা',
          'দিবসের অনুষ্ঠানে ভিড় ও নিরাপত্তা তল্লাশি'
        ] },
        { type: 'callout', tone: 'note', title: 'ভেতরের সময় আর বাইরের সময় আলাদা', text: 'মানচিত্রে দেখানো দূরত্বের সঙ্গে ঢাকার যানজট যোগ করলে একটি সফর সাধারণত অর্ধেক দিনের কাজ। যাওয়া-আসা মিলিয়ে ৪–৬ ঘণ্টা ধরে দিনের পরিকল্পনা করুন।' },
        { type: 'h2', text: 'সময় বাঁচানোর পাঁচটি বাস্তব উপায়' },
        { type: 'steps', items: [
          { title: 'খোলার পরপর পৌঁছান', text: 'কম ভিড় মানে কম অপেক্ষা, ছায়ায় হাঁটার সুযোগ বেশি।' },
          { title: 'আগেই ভাগ করুন', text: 'দলে কেউ মূল কাঠামোয়, কেউ উদ্যানে—আগে ঠিক করে নিলে ঘুরে দাঁড়ানোর সময় কমে।' },
          { title: 'পানি সঙ্গে নিন', text: 'কেনার জন্য লাইনে দাঁড়ানো এড়ানো যায় এবং পানিশূন্যতা কমে।' },
          { title: 'ফেরার যান আগেই ঠিক করুন', text: 'বিকেলে সবাই একসাথে ফেরেন; রাইড বা গাড়ির পিক-আপ পয়েন্ট আগেই ঠিক থাকলে ২০–৩০ মিনিট বাঁচে।' },
          { title: 'পায়ে আরামদায়ক জুতা', text: 'শক্ত বা নতুন জুতা হাঁটার গতি কমিয়ে সময় বাড়ায়।' }
        ] },
        { type: 'h2', text: 'শিশু বা বয়স্কদের সঙ্গে সময়ের হিসাব' },
        { type: 'p', text: 'শিশু বা বয়স্ক সহযাত্রী থাকলে হিসাব করা সময় অন্তত ৩০–৪০ শতাংশ বাড়িয়ে ধরুন। ছায়া, বিশ্রামের বেঞ্চ ও পানির ফোয়ারা কোথায় আছে তা আগে দেখে নিলে সফর সহজ হয়। বিস্তারিত পরিকল্পনা শিশু ও প্রবেশগম্যতা-বিষয়ক পাতায় আছে।' },
        { type: 'h2', text: 'দলের ধরন অনুযায়ী সময় বাড়ানোর নিয়ম' },
        {
          type: 'table',
          head: ['দলের ধরন', 'বাড়তি সময়', 'কারণ'],
          rows: [
            ['একা বা দুইজন', 'যোগ করতে হবে না', 'দ্রুত চলাচল, কম অপেক্ষা'],
            ['ছোট শিশুসহ পরিবার', '৩০–৪০ শতাংশ বেশি', 'ধীর হাঁটা, বিশ্রাম ও শৌচাগার'],
            ['বয়স্ক সহযাত্রী', '৩০–৫০ শতাংশ বেশি', 'ছায়ায় বিরতি ও ধীর গতি'],
            ['স্কুল বা প্রতিষ্ঠানের দল', '৫০–১০০ শতাংশ বেশি', 'সদস্য গোনা, দলগত নির্দেশনা ও নিরাপত্তা তল্লাশি']
          ]
        },
        { type: 'links', items: [
          { label: 'অর্ধদিবসের সফর পরিকল্পনা', href: '/itineraries/savar-half-day/' },
          { label: 'প্রথমবার ভ্রমণ', href: '/visit/first-time/' },
          { label: 'শিশুদের সঙ্গে ভ্রমণ', href: '/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধ ঘুরতে কত সময় লাগে?', a: 'সাধারণত দেড়–দুই ঘণ্টা; দ্রুত সফরে ৪৫ মিনিট, ধীর ও বিস্তারিত সফরে সাড়ে তিন ঘণ্টা পর্যন্ত।' },
        { q: 'ঢাকা থেকে যাওয়া-আসা মিলিয়ে কত সময় লাগে?', a: 'যাতায়াত, যানজট ও বিশ্রাম মিলিয়ে সাধারণত ৪–৬ ঘণ্টা ধরে নিন।' },
        { q: 'অল্প সময় থাকলে কী দেখা উচিত?', a: 'মূল কাঠামো ও তার সামনের উদ্যান—এই দুই অংশ দেখলেই মূল অনুভূতি পাওয়া যায়; ইতিহাস পড়ার জন্য সময় রাখতে হবে।' },
        { q: 'শিশুদের সঙ্গে সময় বেশি লাগে কি?', a: 'হ্যাঁ, হাঁটার গতি, বিশ্রাম ও শৌচাগারের প্রয়োজনে সময় ৩০–৪০ শতাংশ বাড়তে পারে।' },
        { q: 'স্কুল-দল নিয়ে কত বেশি সময় ধরব?', a: 'সদস্য গোনা, দলগত নির্দেশনা ও নিরাপত্তা তল্লাশির কারণে সাধারণ হিসাবের চেয়ে ৫০–১০০ শতাংশ বেশি সময় ধরুন।' },
        { q: 'বয়স্ক সহযাত্রী থাকলে সময় কত বাড়ে?', a: 'ছায়ায় বিরতি ও ধীর গতির কারণে ৩০–৫০ শতাংশ পর্যন্ত বেশি লাগতে পারে।' }
      ]
    },
    en: {
      title: 'How long does a visit to the National Martyrs’ Monument take?',
      description: 'How much time to allow at the National Martyrs’ Monument — a short 45-minute stop, a standard hour-and-a-half visit or a slow three-hour study visit, plus travel time from Dhaka.',
      h1: 'How long does a visit take?',
      answer:
        'Allow roughly one and a half to two hours to walk the main structure, the approach paths and the grounds. A quick stop with photographs takes about 45 minutes, while reading the detailed history can stretch to three and a half hours. Neither figure includes travel time from Dhaka.',
      blocks: [
        { type: 'h2', text: 'Three practical plans' },
        {
          type: 'table',
          head: ['Style', 'Time on site', 'Best suited to'],
          rows: [
            ['Short stop', '45–60 minutes', 'A break on a longer journey or a group on a tight schedule'],
            ['Standard visit', '1.5–2 hours', 'Families, friends and first-time visitors'],
            ['Slow study visit', '2.5–3.5 hours', 'Student groups, researchers or keen photographers']
          ]
        },
        { type: 'h2', text: 'Where the time actually goes' },
        { type: 'ul', items: [
          'Walking to the main structure and the approach steps or slopes — slower walking adds time',
          'In large groups, counting members, resting and waiting for toilets',
          'Sheltering from sun or rain',
          'Crowds and security checks on national observance days'
        ] },
        { type: 'callout', tone: 'note', title: 'Time inside is not the same as time away', text: 'Add Dhaka traffic to the mapped distance and a single visit becomes roughly half a day. Plan four to six hours door to door.' },
        { type: 'h2', text: 'Five practical ways to save time' },
        { type: 'steps', items: [
          { title: 'Arrive just after opening', text: 'Fewer people means less waiting and more walking in shade.' },
          { title: 'Split the group deliberately', text: 'Agree in advance who goes to the main structure first and who stays in the grounds.' },
          { title: 'Carry water', text: 'You avoid queueing to buy it and reduce the risk of dehydration.' },
          { title: 'Fix your return transport early', text: 'Everyone leaves in the afternoon; a pre-agreed pickup point can save 20–30 minutes.' },
          { title: 'Wear comfortable shoes', text: 'Stiff or new footwear slows the walk and stretches the visit.' }
        ] },
        { type: 'h2', text: 'Allowing for children or older visitors' },
        { type: 'p', text: 'If you are with children or older relatives, add at least 30–40 per cent to any estimate. Knowing where shade, seating and water points are in advance makes the visit far easier; see the pages on visiting with children and on accessibility for detail.' },
        { type: 'h2', text: 'How much extra time each kind of group needs' },
        {
          type: 'table',
          head: ['Group', 'Extra time', 'Why'],
          rows: [
            ['Solo or a pair', 'None added', 'Faster walking, less waiting'],
            ['Family with small children', '30–40 per cent more', 'Slower pace, rests and toilets'],
            ['With an older visitor', '30–50 per cent more', 'Shaded stops and slower walking'],
            ['School or institutional group', '50–100 per cent more', 'Head counts, group briefings and security checks']
          ]
        },
        { type: 'links', items: [
          { label: 'A half-day Savar itinerary', href: '/en/itineraries/savar-half-day/' },
          { label: 'First visit', href: '/en/visit/first-time/' },
          { label: 'Visiting with children', href: '/en/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'How long does it take to walk around the monument?', a: 'Usually one and a half to two hours; about 45 minutes for a quick stop and up to three and a half hours for a slow, detailed visit.' },
        { q: 'Including travel from Dhaka, how much time should I set aside?', a: 'Plan four to six hours door to door, including transport, traffic and rest stops.' },
        { q: 'What should I prioritise if I have little time?', a: 'The main structure and the grounds in front of it. Reading the full history needs separate time.' },
        { q: 'Does visiting with children take longer?', a: 'Yes — walking pace, rests and toilet stops can add 30–40 per cent.' },
        { q: 'How much extra time does a school group need?', a: 'Allow 50–100 per cent more than a standard estimate for head counts, group briefings and security checks.' },
        { q: 'How much longer with an older visitor?', a: 'Up to 30–50 per cent longer, because of shaded rests and a slower walking pace.' }
      ]
    }
  },
  {
    slug: 'visit/first-time',
    section: 'visit',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['visit/location', 'visit/opening-hours', 'visit/etiquette', 'transport/from-dhaka'],
    bn: {
      title: 'প্রথমবার স্মৃতিসৌধ ভ্রমণ: প্রস্তুতি থেকে ফেরা পর্যন্ত',
      description: 'প্রথমবার সাভারের জাতীয় স্মৃতিসৌধে যাওয়ার আগে কী প্রস্তুতি নেবেন, কোথায় পৌঁছাবেন, কীভাবে ঘুরবেন এবং কীভাবে ফিরবেন।',
      h1: 'প্রথমবার ভ্রমণের পূর্ণ নির্দেশিকা',
      answer:
        'প্রথমবার যাওয়ার সবচেয়ে নিরাপদ পরিকল্পনা—সকালে বের হওয়া, মানচিত্রে স্মৃতিসৌধ নিবন্ধন বা প্লাস কোড W763+GW দিয়ে গন্তব্য ঠিক করা, খোলা সময় সকাল ১০টা–বিকেল ৫টা ধরে সময় ভাগ করা এবং ফেরার যান আগেই ঠিক রাখা। এই চারটি কাজ করলে বাকি প্রস্তুতি সহজ হয়ে যায়।',
      blocks: [
        { type: 'h2', text: 'যাওয়ার আগের রাতে যা ঠিক করবেন' },
        { type: 'ul', items: [
          'গন্তব্য: “জাতীয় স্মৃতিসৌধ” বা W763+GW Savar—শুধু সাভার নয়',
          'সময়: খোলার পরপর পৌঁছানোর লক্ষ্য রাখুন',
          'যান: বাস/রাইড/ব্যক্তিগত গাড়ি—ফেরার ব্যবস্থাও ঠিক রাখুন',
          'সঙ্গে নেবেন: পানি, টুপি বা ছাতা, আরামদায়ক জুতা, পরিচয়পত্র'
        ] },
        { type: 'h2', text: 'পৌঁছে প্রথম ১৫ মিনিট' },
        { type: 'steps', items: [
          { title: 'প্রবেশপথ চিনে নিন', text: 'কোথায় ঢুকলেন, কোথায় বেরোবেন—প্রবেশের সময়ই ঠিক করে নিন; ফেরার সময় বিভ্রান্তি কমবে।' },
          { title: 'নিরাপত্তা নির্দেশনা পড়ুন', text: 'কোন অংশে যাওয়া যাবে না বা ছবি তোলা নিষেধ—এসব নোটিশ প্রবেশপথে দেখে নিন।' },
          { title: 'মূল কাঠামোর দিকে এগোন', text: 'শুরুতে মূল স্মারক দেখে নিলে আলো ও ভিড় দুই দিক থেকেই সুবিধা পাওয়া যায়।' },
          { title: 'বিশ্রাম ও শৌচাগারের অবস্থান দেখে নিন', text: 'স্তম্ভ বা নির্দেশকের অবস্থান মনে রাখলে দলের সদস্য হারিয়ে গেলে খুঁজে পাওয়া সহজ হয়।' }
        ] },
        { type: 'callout', tone: 'note', title: 'পরিচয়পত্র সঙ্গে রাখুন', text: 'সাধারণ দিনে প্রয়োজন নাও হতে পারে, কিন্তু জাতীয় দিবস বা নিরাপত্তা ব্যবস্থায় পরিচয় যাচাই হতে পারে। ছোট ব্যাগ রাখলে তল্লাশি দ্রুত হয়।' },
        { type: 'h2', text: 'কীভাবে ঘুরবেন' },
        { type: 'p', text: 'প্রবেশপথ থেকে সোজা মূল কাঠামোর দিকে এগিয়ে, এরপর পাশের উদ্যান ও জলাশয়ের দিক ঘুরে ফিরে আসা সহজ পথ। সাত জোড়া প্রাচীরের প্রতিটি ধাপ বেশি উঁচু হয়—ধীরে হাঁটলে ইতিহাসের ছন্দ বোঝা যায়।' },
        { type: 'h2', text: 'ফেরার প্রস্তুতি' },
        { type: 'ul', items: [
          'বিকেল ৫টার আগে বেরোনোর লক্ষ্য রাখুন; শেষ সময়ের ভিড়ে যান পাওয়া কঠিন',
          'রাইড সেবা ব্যবহার করলে পিক-আপ পয়েন্ট আগেই নির্দিষ্ট করুন',
          'মহাসড়কে বিকেলের যানজট ধরে অতিরিক্ত সময় রাখুন',
          'প্রয়োজনে খাওয়া-দাওয়া সাভার শহর বা নবীনগরে সেরে নিন'
        ] },
        { type: 'callout', tone: 'warn', title: 'যাচাই করুন, ধরে নেবেন না', text: 'খোলা সময়, প্রবেশ নিয়ম, পার্কিং ও শৌচাগারের অবস্থা বদলাতে পারে। এই গাইড ব্যবস্থাপনার চলতি ঘোষণার বিকল্প নয়।' },
        { type: 'h2', text: 'প্রথমবার যাওয়ার সময় সাধারণ ভুল' },
        { type: 'ul', items: [
          'শুধু “সাভার” লিখে রওনা হয়ে শহরের কেন্দ্রে পৌঁছে যাওয়া',
          'খোলা সময় যাচাই না করে দূর থেকে এসে বন্ধ গেটে পৌঁছানো',
          'ফেরার যান নিশ্চিত না করে ভেতরে ঢুকে পড়া',
          'পানি ও হালকা খাবারের ব্যবস্থা না করে সাইটের দোকানের উপর নির্ভর করা',
          'ছবি তোলার নিয়ম না পড়ে স্মৃতিস্থানে অঙ্গভঙ্গি করা'
        ] },
        { type: 'callout', tone: 'note', title: 'এক মিনিটে ভুল এড়ানোর উপায়', text: 'রওনার আগে চারটি বিষয় মিলিয়ে নিন—গন্তব্য নিবন্ধন, খোলা সময়, ফেরার যান ও সঙ্গে নেওয়ার তালিকা। এগুলো ঠিক থাকলে উপরের ভুলগুলোর সম্ভাবনা অনেক কমে যায়।' },
        { type: 'links', items: [
          { label: 'স্মৃতিসৌধ কোথায়', href: '/visit/location/' },
          { label: 'ঢাকা থেকে যাওয়ার পথ', href: '/transport/from-dhaka/' },
          { label: 'আচরণবিধি', href: '/visit/etiquette/' }
        ] }
      ],
      faq: [
        { q: 'প্রথমবার যাওয়ার জন্য সবচেয়ে গুরুত্বপূর্ণ পরামর্শ কী?', a: 'গন্তব্য ঠিকভাবে মানচিত্রে সেট করা এবং ফেরার যান আগেই নিশ্চিত করা—এই দুইটি কাজ বাকি সব সহজ করে দেয়।' },
        { q: 'কতগুলো জিনিস সঙ্গে নেওয়া দরকার?', a: 'পানি, ছাতা বা টুপি, আরামদায়ক জুতা ও পরিচয়পত্র। বড় ব্যাগ এড়ানো ভালো।' },
        { q: 'একা যাওয়া নিরাপদ কি?', a: 'দিনের আলোয় সাধারণ পরিদর্শনের ক্ষেত্রে সমস্যার কথা জানা যায় না, তবে সন্ধ্যার আগে ফেরার পরিকল্পনা রাখা বুদ্ধিমানের কাজ।' },
        { q: 'ভেতরে গাইড পাওয়া যায় কি?', a: 'নিশ্চিত কোনো গাইড-সেবা বা মূল্যতালিকার তথ্য নেই। প্রস্তুতির জন্য ইতিহাসের পাতা আগে পড়ে যাওয়া ভালো।' },
        { q: 'প্রথমবার যাওয়ার সবচেয়ে বড় ভুল কোনটি?', a: 'শুধু “সাভার” লিখে গন্তব্য ঠিক করা; এতে শহরের কেন্দ্রে পৌঁছে যাওয়ার সম্ভাবনা থাকে। প্লাস কোড W763+GW ব্যবহার করুন।' },
        { q: 'খোলা সময় যাচাই না করে গেলে কী হয়?', a: 'দূর থেকে এসে বন্ধ গেট পেলে পুরো ভ্রমণ নষ্ট হতে পারে; তাই দিনের বর্তমান প্রবেশ-সময় আগে নিশ্চিত করুন।' }
      ]
    },
    en: {
      title: 'First visit to the National Martyrs’ Monument: preparation to return',
      description: 'What to prepare before a first visit to the National Martyrs’ Monument at Savar, where to arrive, how to walk the site and how to get back to Dhaka.',
      h1: 'A complete first-visit guide',
      answer:
        'The safest plan for a first visit: leave in the morning, set your destination to the monument listing or the Plus Code W763+GW rather than “Savar”, plan your time around the listed 10:00–17:00 hours, and fix your return transport in advance. Those four steps make the rest straightforward.',
      blocks: [
        { type: 'h2', text: 'Decide the night before' },
        { type: 'ul', items: [
          'Destination: “National Martyrs’ Monument” or W763+GW Savar — not simply “Savar”',
          'Timing: aim to arrive soon after opening',
          'Transport: bus, ride-hailing or private car, with the return leg decided too',
          'Carry: water, hat or umbrella, comfortable shoes, ID'
        ] },
        { type: 'h2', text: 'Your first 15 minutes on site' },
        { type: 'steps', items: [
          { title: 'Note your entrance', text: 'Identify where you entered and where you will exit. That avoids confusion later when the site is busier.' },
          { title: 'Read the security notices', text: 'Check on-site notices for areas that are off limits or where photography is restricted.' },
          { title: 'Walk towards the main structure first', text: 'Seeing the monument early helps both with the light and with avoiding the worst crowds.' },
          { title: 'Locate rest and toilet points', text: 'Remembering a landmark makes it much easier to regroup if a group member is separated.' }
        ] },
        { type: 'callout', tone: 'note', title: 'Carry identification', text: 'It may not be needed on an ordinary day, but ID checks are possible on national days or during security operations. Small bags clear checks faster.' },
        { type: 'h2', text: 'How to walk the site' },
        { type: 'p', text: 'The simplest route is straight from the entrance towards the main structure, then around the adjoining grounds and water feature, and back. Each successive pair of the seven walls rises higher — walking slowly makes that progression legible.' },
        { type: 'h2', text: 'Planning the return' },
        { type: 'ul', items: [
          'Aim to leave before 17:00; transport is harder to find in the closing rush',
          'If you use ride-hailing, agree a pickup point in advance',
          'Allow extra time for afternoon traffic on the highway',
          'Eat either in Savar town or at Nabinagar on the way back if needed'
        ] },
        { type: 'callout', tone: 'warn', title: 'Verify rather than assume', text: 'Opening hours, access rules, parking and facilities can change. This guide is not a substitute for current notices from the managing authority.' },
        { type: 'h2', text: 'Common first-visit mistakes' },
        { type: 'ul', items: [
          'Setting off with only “Savar” as the destination and ending up in the town centre',
          'Coming from far away without checking the opening hours and reaching a closed gate',
          'Entering the site without having fixed the return transport',
          'Relying on food stalls on site instead of bringing water and a snack',
          'Taking posed photographs without reading the site’s rules'
        ] },
        { type: 'callout', tone: 'note', title: 'A one-minute check that prevents most of these', text: 'Before leaving, confirm four things: the destination listing, the current opening hours, the return transport and what you are carrying. Getting those right removes most of the mistakes above.' },
        { type: 'links', items: [
          { label: 'Where the monument is', href: '/en/visit/location/' },
          { label: 'Getting there from Dhaka', href: '/en/transport/from-dhaka/' },
          { label: 'Etiquette', href: '/en/visit/etiquette/' }
        ] }
      ],
      faq: [
        { q: 'What matters most on a first visit?', a: 'Setting the destination correctly in your map app and arranging your return transport — those two steps make everything else easier.' },
        { q: 'What should I bring?', a: 'Water, an umbrella or hat, comfortable shoes and identification. Large bags are best avoided.' },
        { q: 'Is it safe to visit alone?', a: 'No problems are commonly reported for daytime visits, but plan to return before dark.' },
        { q: 'Are guides available on site?', a: 'No confirmed guide service or price list was found. Reading the history pages before you go is the most reliable preparation.' },
        { q: 'What is the biggest first-visit mistake?', a: 'Setting only “Savar” as the destination, which can take you to the town centre. Use the Plus Code W763+GW instead.' },
        { q: 'What happens if I do not check the opening hours?', a: 'Travelling a long way to a closed gate can waste the whole trip, so confirm the current access time on the day.' }
      ]
    }
  },
  {
    slug: 'visit/with-children',
    section: 'visit',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['itineraries/school-educational-visit', 'visit/how-long', 'visit/accessibility', 'visit/etiquette'],
    bn: {
      title: 'শিশুদের সঙ্গে স্মৃতিসৌধ ভ্রমণ: বয়স অনুযায়ী পরিকল্পনা',
      description: 'শিশুদের নিয়ে স্মৃতিসৌধ ভ্রমণের প্রস্তুতি—বয়স অনুযায়ী কী বলবেন, কত সময় রাখবেন, কোথায় বিশ্রাম নেবেন এবং নিরাপত্তার বিষয়গুলো।',
      h1: 'শিশুদের সঙ্গে স্মৃতিসৌধ ভ্রমণ',
      answer:
        'শিশুদের সঙ্গে গেলে সময় অন্তত ৩০–৪০ শতাংশ বাড়িয়ে ধরুন, পানি ও ছাতা সঙ্গে নিন, এবং মূল কাঠামোর কাছে যাওয়ার আগে সংক্ষেপে বুঝিয়ে দিন যে এটি একটি শোক ও শ্রদ্ধার জায়গা। ছোটদের জন্য সবচেয়ে ভালো সময় সকাল—ভিড় কম, রোদও কম।',
      blocks: [
        { type: 'h2', text: 'বয়স অনুযায়ী কীভাবে কথা বলবেন' },
        {
          type: 'table',
          head: ['বয়স', 'কী বোঝাবেন', 'কত সময়'],
          rows: [
            ['৫–৮ বছর', 'এটি শহীদদের স্মরণের জায়গা; চুপচাপ হাঁটতে হয়', '৪৫–৬০ মিনিট'],
            ['৯–১৩ বছর', '১৯৭১ সালের মুক্তিযুদ্ধ ও সাত অধ্যায়ের গল্প', '১.৫–২ ঘণ্টা'],
            ['১৪+ বছর', 'ইতিহাসের ধারাবাহিকতা ও স্থাপত্যের প্রতীক', '২–৩ ঘণ্টা']
          ]
        },
        { type: 'h2', text: 'নিরাপত্তা ও স্বাচ্ছন্দ্য' },
        { type: 'ul', items: [
          'প্রতিটি শিশুর হাতে পানি ও পরিচয়পত্রে নাম-ফোন থাকা ভালো',
          'দল বড় হলে নির্দিষ্ট পোশাক বা ব্যাজ ঠিক করুন',
          'সিঁড়ি, ঢালু পথ ও জলাশয়ের ধারে হাত ধরে চলুন',
          'প্রবেশপথ ও মিলনস্থল আগেই ঠিক করে নিন, হারিয়ে গেলে কোথায় আসবে তা শিশুদের বলে দিন'
        ] },
        { type: 'callout', tone: 'warn', title: 'শব্দ ও খেলা নয়', text: 'এটি খেলার মাঠ নয়। দৌড়াদৌড়ি, উচ্চ শব্দ বা ছবি তোলার সময় অঙ্গভঙ্গি দিয়ে মজা করার আগে ভেবে দেখুন—অনেকেই এখানে আত্মীয়কে স্মরণ করতে আসেন।' },
        { type: 'h2', text: 'শিশুদের জন্য রুট ও বিশ্রাম' },
        { type: 'steps', items: [
          { title: 'ছোট রুট বাছুন', text: 'প্রবেশপথ → মূল কাঠামো → ফিরতি পথ—তিন ধাপে সীমিত রাখলে শিশুরা ক্লান্ত হয় না।' },
          { title: 'মাঝে বিরতি', text: 'ছায়ায় ১০–১৫ মিনিট বসে পানি খাওয়া সফরকে অনেক সহজ করে।' },
          { title: 'খাবার আগে থেকে ভাবুন', text: 'প্রয়োজনীয় হালকা খাবার সঙ্গে নিন; বাইরের খাবারের দোকান খোলা আছে ধরে নেবেন না।' },
          { title: 'ফেরার সময় বাড়তি রাখুন', text: 'ক্লান্ত শিশুদের নিয়ে ফেরার পথে সময় বেশি লাগে; বিকেলের যানজট ধরেই পরিকল্পনা করুন।' }
        ] },
        { type: 'h2', text: 'স্কুল-দলের সঙ্গে গেলে' },
        { type: 'p', text: 'স্কুল বা প্রতিষ্ঠানের দল নিয়ে গেলে আগেই তালিকা তৈরি করুন, প্রতিটি উপদলের জন্য একজন দায়িত্বপ্রাপ্ত বড় রাখুন এবং কর্তৃপক্ষের কাছে সময় ও প্রবেশ-নিয়ম লিখিতভাবে জেনে নিন। বিস্তারিত নির্দেশনা শিক্ষা-সফর পাতায় আছে।' },
        { type: 'h2', text: 'শিশুরা যে প্রশ্ন করে ও সহজ উত্তর' },
        {
          type: 'table',
          head: ['শিশুর প্রশ্ন', 'সংক্ষিপ্ত উত্তর'],
          rows: [
            ['এটা কী?', 'দেশের শহীদদের স্মরণে গড়া জাতীয় স্মৃতিসৌধ।'],
            ['কোথায়?', 'সাভারের নবীনগরে, ঢাকা–আরিচা মহাসড়কের পাশে।'],
            ['কতটা উঁচু?', 'প্রায় ১৫০ ফুট, অর্থাৎ প্রায় ৪৫.৭ মিটার।'],
            ['সাতটি দেয়াল মানে কী?', '১৯৫২ থেকে ১৯৭১ পর্যন্ত সাতটি পর্যায়—১৯৫২, ১৯৫৪, ১৯৫৬, ১৯৬২, ১৯৬৬, ১৯৬৯ ও ১৯৭১।'],
            ['কে বানিয়েছে?', 'স্থপতি সৈয়দ মইনুল হোসেন।'],
            ['কবে উদ্বোধন হয়?', '১৯৮২ সালের ১৬ ডিসেম্বর, বিজয় দিবসে।']
          ]
        },
        { type: 'links', items: [
          { label: 'স্কুল-শিক্ষা সফর', href: '/itineraries/school-educational-visit/' },
          { label: 'বয়স্ক ও সীমিত চলাচলের দর্শনার্থী', href: '/visit/accessibility/' },
          { label: 'কত সময় লাগে', href: '/visit/how-long/' }
        ] }
      ],
      faq: [
        { q: 'শিশুদের নিয়ে কত সময় ধরা উচিত?', a: 'সাধারণ হিসাবে ৩০–৪০ শতাংশ বেশি; ছোটদের জন্য ৪৫–৬০ মিনিট যথেষ্ট হতে পারে।' },
        { q: 'শিশুদের জন্য প্রবেশ নিয়ম আলাদা কি?', a: 'নিশ্চিত তথ্য নেই। স্কুল-দলের ক্ষেত্রে কর্তৃপক্ষের কাছে আগেই জেনে নেওয়া ভালো।' },
        { q: 'বাচ্চাদের স্মৃতিসৌধে কি নিয়ে যাওয়া ঠিক?', a: 'হ্যাঁ, বয়স অনুযায়ী সংক্ষেপে ইতিহাস বুঝিয়ে দিলে শিক্ষামূলক হয়; তবে শোকের স্থান হিসেবে ভাবমর্যাদা বজায় রাখা জরুরি।' },
        { q: 'শিশুদের জন্য খাবার বা বিনোদনের ব্যবস্থা আছে কি?', a: 'নিশ্চিত সেবার তথ্য নেই। নিজের পানি ও হালকা খাবার সঙ্গে নিয়ে যাওয়া সবচেয়ে নিরাপদ।' },
        { q: 'শিশুদের কীভাবে স্মৃতিসৌধ বোঝাব?', a: 'সংক্ষেপে বলুন এটি শহীদদের স্মরণের জায়গা; উচ্চতা ও স্থপতির নামের মতো সহজ তথ্য দিয়ে ইতিহাস বুঝিয়ে দিন।' },
        { q: 'শিশুদের স্মৃতিসৌধ কত উঁচু বলে জানাব?', a: 'বলতে পারেন এটি প্রায় ১৫০ ফুট, অর্থাৎ প্রায় ৪৫.৭ মিটার উঁচু—সাধারণ ভবনের চেয়ে অনেক বেশি।' }
      ]
    },
    en: {
      title: 'Visiting the National Martyrs’ Monument with children',
      description: 'Practical preparation for a family visit to the National Martyrs’ Monument — what to explain at each age, how much time to allow, where to rest and the safety points that matter.',
      h1: 'Visiting with children',
      answer:
        'With children, add at least 30–40 per cent to your expected time, carry water and sun cover, and briefly explain before you reach the main structure that this is a place of mourning and respect. The morning is the easiest slot: fewer people and less heat.',
      blocks: [
        { type: 'h2', text: 'What to explain, by age' },
        {
          type: 'table',
          head: ['Age', 'What to convey', 'Time on site'],
          rows: [
            ['5–8', 'This is a place to remember martyrs; we walk quietly', '45–60 minutes'],
            ['9–13', 'The 1971 Liberation War and the seven chapters', '1.5–2 hours'],
            ['14+', 'The historical sequence and what the architecture symbolises', '2–3 hours']
          ]
        },
        { type: 'h2', text: 'Safety and comfort' },
        { type: 'ul', items: [
          'Give each child water and a card with their name and your phone number',
          'For larger groups, agree a distinctive item of clothing or a badge',
          'Hold hands on steps, slopes and near the water feature',
          'Fix an entrance and a meeting point in advance and tell the children where to go if separated'
        ] },
        { type: 'callout', tone: 'warn', title: 'Not a playground', text: 'Running, shouting or joking around while taking photographs is out of place here — many visitors come to remember family members.' },
        { type: 'h2', text: 'A shorter route with rests' },
        { type: 'steps', items: [
          { title: 'Pick a short circuit', text: 'Entrance → main structure → return path. Keeping it to three stages prevents fatigue.' },
          { title: 'Rest in the middle', text: 'A 10–15 minute shaded break with water transforms the experience for small children.' },
          { title: 'Plan food ahead', text: 'Bring light snacks; do not assume food stalls are open at the site.' },
          { title: 'Allow extra for the return', text: 'Tired children slow the journey back, so plan on afternoon traffic.' }
        ] },
        { type: 'h2', text: 'If you come as a school group' },
        { type: 'p', text: 'Prepare a roll, assign one responsible adult to each sub-group, and get timings and access rules confirmed in writing by the authority. The school visit page has the full checklist.' },
        { type: 'h2', text: 'Questions children ask, and simple answers' },
        {
          type: 'table',
          head: ['Child’s question', 'Short answer'],
          rows: [
            ['What is this?', 'The national memorial built to remember the country’s martyrs.'],
            ['Where is it?', 'At Nabinagar in Savar, beside the Dhaka–Aricha Highway.'],
            ['How tall is it?', 'About 150 ft, or roughly 45.7 metres.'],
            ['What do the seven walls mean?', 'They stand for seven phases from 1952 to 1971 — 1952, 1954, 1956, 1962, 1966, 1969 and 1971.'],
            ['Who designed it?', 'The architect Syed Mainul Hossain.'],
            ['When was it opened?', 'On 16 December 1982, Victory Day.']
          ]
        },
        { type: 'links', items: [
          { label: 'School and educational visit', href: '/en/itineraries/school-educational-visit/' },
          { label: 'Older visitors and limited mobility', href: '/en/visit/accessibility/' },
          { label: 'How long a visit takes', href: '/en/visit/how-long/' }
        ] }
      ],
      faq: [
        { q: 'How much extra time should I allow with children?', a: 'At least 30–40 per cent more; for very young children, 45–60 minutes on site may be enough.' },
        { q: 'Are the entry rules different for children?', a: 'No confirmed information exists. For school groups, ask the authority in advance.' },
        { q: 'Is the monument suitable for young children?', a: 'Yes, if the history is explained at their level. Maintaining the mood of a memorial site matters more than covering everything.' },
        { q: 'Are there food or play facilities for children?', a: 'No confirmed facilities. Bringing your own water and snacks is safest.' },
        { q: 'How do I explain the monument to a child?', a: 'Say briefly that it is a place to remember martyrs, then use simple facts such as the height and the architect’s name.' },
        { q: 'How tall should I tell a child it is?', a: 'You can say it is about 150 ft (roughly 45.7 metres) tall — much taller than an ordinary building.' }
      ]
    }
  },
  {
    slug: 'visit/accessibility',
    section: 'visit',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['visit/with-children', 'visit/first-time', 'transport/parking-dropoff', 'visit/etiquette'],
    bn: {
      title: 'বয়স্ক ও চলাচলে সীমাবদ্ধ দর্শনার্থীদের জন্য নির্দেশিকা',
      description: 'বয়স্ক, হুইলচেয়ার ব্যবহারকারী বা হাঁটতে অসুবিধা থাকা দর্শনার্থীদের জন্য স্মৃতিসৌধ ভ্রমণের প্রস্তুতি ও যা আগে যাচাই করা দরকার।',
      h1: 'বয়স্ক ও চলাচলে সীমাবদ্ধ দর্শনার্থীদের জন্য নির্দেশিকা',
      answer:
        'স্মৃতিসৌধ চত্বর বড় এবং মূল কাঠামোর দিকে হাঁটার পথ দীর্ঘ, তাই বিশ্রামের পরিকল্পনা আগে করা জরুরি। তবে কোন পথে ঢাল, সিঁড়ি বা র‌্যাম্প আছে এবং হুইলচেয়ারে চলা যায় কি না—এমন নির্ভরযোগ্য বর্তমান তথ্য অনলাইনে পাওয়া যায়নি, তাই যাত্রার আগে সরাসরি ব্যবস্থাপনার কাছে যাচাই করা উচিত।',
      blocks: [
        { type: 'h2', text: 'যা নিশ্চিত করা যায়নি' },
        { type: 'callout', tone: 'warn', title: 'নিশ্চিত তথ্য ছাড়া প্রতিশ্রুতি নয়', text: 'র‌্যাম্পের অবস্থান, হুইলচেয়ার সরবরাহ, হাঁটার সহায়ক যান বা বিশেষ শৌচাগার সম্পর্কে কোনো নির্ভরযোগ্য বর্তমান তথ্য পাওয়া যায়নি। “ব্যবস্থা আছে” ধরে নিয়ে দূর থেকে যাওয়া ঝুঁকিপূর্ণ।' },
        { type: 'h2', text: 'যাত্রার আগে এই ছয়টি প্রশ্ন করুন' },
        { type: 'ol', items: [
          'যানবাহন কত দূর পর্যন্ত প্রবেশপথের কাছে আসতে পারে?',
          'প্রবেশপথ থেকে মূল কাঠামো পর্যন্ত পথে সিঁড়ি আছে কি?',
          'হুইলচেয়ার বা হাঁটার সহায়ক যন্ত্র ভেতরে নেওয়া যাবে কি?',
          'দর্শনার্থীদের জন্য হুইলচেয়ার ধার দেওয়ার ব্যবস্থা আছে কি?',
          'চলাচলে সহায়ক (সুলভ) শৌচাগার কোথায়?',
          'ভিড়ের সময় আসন বা ছায়াযুক্ত বিশ্রামের ব্যবস্থা কোথায়?'
        ] },
        { type: 'h2', text: 'পরিকল্পনায় যে বিষয়গুলো সাহায্য করে' },
        { type: 'ul', items: [
          'সকালে যাওয়া—রোদ কম, ভিড় কম, ছায়ায় বিশ্রামের জায়গা পাওয়ার সম্ভাবনা বেশি',
          'সঙ্গে একজন সহযাত্রী রাখা, যিনি চেয়ার বা পানি বহন করতে পারবেন',
          'হাঁটার সময় দুই ভাগে ভাগ করা—প্রবেশপথ থেকে মূল কাঠামো, তারপর উদ্যান',
          'গাড়ি অপেক্ষা করার স্থান ও প্রস্থানের সময় আগেই নির্দিষ্ট করা',
          'গরমের দিনে ছাতা ও পানি রাখা'
        ] },
        { type: 'h2', text: 'যে দিনগুলো এড়ানো ভালো' },
        { type: 'p', text: 'জাতীয় দিবস, বিশেষ অনুষ্ঠান বা অত্যন্ত গরমের দিনে ভিড় ও নিরাপত্তা নিয়ন্ত্রণ বেড়ে যায়। চলাচলে সীমাবদ্ধতা থাকলে সাধারণ দিনের শান্ত সকাল বেছে নেওয়া সবচেয়ে আরামদায়ক।' },
        { type: 'callout', tone: 'note', title: 'তথ্য হালনাগাদ হবে', text: 'যখন নির্ভরযোগ্য সূত্র থেকে র‌্যাম্প, হুইলচেয়ার সেবা বা সুলভ শৌচাগারের নিশ্চিত তথ্য পাওয়া যাবে, তখন এই পাতায় তারিখসহ যুক্ত করা হবে।' },
        { type: 'h2', text: 'মাঝপথে ক্লান্তি বা অস্বস্তি হলে কী করবেন' },
        { type: 'p', text: 'চলাচলে সীমাবদ্ধতা থাকলে বা দীর্ঘ হাঁটার পর ক্লান্তি এলে আগেই থেমে বিশ্রাম নেওয়া সবচেয়ে নিরাপদ। নিচের ধাপগুলো স্মৃতিসৌধ চত্বরের মতো বড়, খোলা জায়গার জন্য।' },
        { type: 'steps', items: [
          { title: 'সঙ্গে সঙ্গে থামুন', text: 'শ্বাসকষ্ট, মাথা ঘোরা বা পায়ে ব্যথা হলে হাঁটা চালিয়ে যাবেন না; নিকটতম ছায়াযুক্ত জায়গায় বসুন।' },
          { title: 'পানি ও বিশ্রাম', text: 'পানি খেয়ে ১০–১৫ মিনিট বিশ্রাম নিন; দ্রুত সেরে না উঠলে ফেরার পথ ধরুন।' },
          { title: 'নিরাপত্তাকর্মীকে জানান', text: 'অবস্থা না কমলে প্রবেশপথের নিরাপত্তাকর্মী বা তথ্যকেন্দ্রে জানান; দলের অন্তত একজন সঙ্গে থাকুন।' },
          { title: 'ফেরার পরিকল্পনা বদলান', text: 'পরের অংশ বাদ দিয়ে প্রস্থানের দিকে এগোন; গাড়ি অপেক্ষা করার জায়গা আগেই ঠিক থাকলে সুবিধা হয়।' }
        ] },
        { type: 'links', items: [
          { label: 'পার্কিং ও নামানোর স্থান', href: '/transport/parking-dropoff/' },
          { label: 'প্রথমবার ভ্রমণ', href: '/visit/first-time/' },
          { label: 'শিশুদের সঙ্গে ভ্রমণ', href: '/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'হুইলচেয়ারে স্মৃতিসৌধ ঘোরা যায় কি?', a: 'নিশ্চিত বর্তমান তথ্য পাওয়া যায়নি। যাওয়ার আগে ব্যবস্থাপনার কাছে পথ, ঢাল ও প্রবেশপথের অবস্থা জেনে নিন।' },
        { q: 'গাড়ি প্রবেশপথের কত কাছে যেতে পারে?', a: 'এটি যাচাই করা প্রয়োজন—এবং বিশেষ দিনে প্রবেশ নিয়ন্ত্রণে বদলাতে পারে।' },
        { q: 'শৌচাগারে চলাচলে সহায়ক ব্যবস্থা আছে কি?', a: 'নিশ্চিত তথ্য নেই। প্রয়োজন হলে সরাসরি জেনে নেওয়ার পরিকল্পনা করা নিরাপদ।' },
        { q: 'কোন সময়ে যাওয়া সহজ?', a: 'ভিড় ও গরম কম থাকায় সাধারণ দিনের সকাল সবচেয়ে আরামদায়ক।' },
        { q: 'হাঁটতে কষ্ট হলে মাঝপথে থামা যাবে কি?', a: 'হ্যাঁ। ছায়ায় বসে পানি খেয়ে বিশ্রাম নিন; কষ্ট না কমলে ফিরতি পথ ধরুন বা নিরাপত্তাকর্মীকে জানান।' },
        { q: 'ভ্রমণের মাঝপথে কেউ অসুস্থ বোধ করলে কার সাহায্য নেব?', a: 'প্রবেশপথের নিরাপত্তাকর্মী বা তথ্যকেন্দ্রে জানান; দলের অন্তত একজন সঙ্গে থাকা ভালো।' }
      ]
    },
    en: {
      title: 'Guide for older visitors and visitors with limited mobility',
      description: 'What older visitors, wheelchair users and anyone who walks slowly should check before visiting the National Martyrs’ Monument — paths, steps, facilities and rest planning.',
      h1: 'Older visitors and limited mobility',
      answer:
        'The monument complex is large and the walk to the main structure is long, so plan rest points before you set out. However, no reliable current information could be found online about which routes have ramps or steps, or whether a wheelchair can be used throughout — check directly with the managing authority beforehand.',
      blocks: [
        { type: 'h2', text: 'What could not be confirmed' },
        { type: 'callout', tone: 'warn', title: 'No promises without verification', text: 'No reliable current information was found on ramp locations, wheelchair availability, mobility assistance or accessible toilets. Travelling a long distance on the assumption that these exist is a risk.' },
        { type: 'h2', text: 'Six questions to ask before travelling' },
        { type: 'ol', items: [
          'How close can a vehicle get to the entrance?',
          'Are there steps between the entrance and the main structure?',
          'May a wheelchair or walking aid be brought into the grounds?',
          'Is a wheelchair available to borrow on site?',
          'Where are the accessible toilets?',
          'Where are the shaded seated rest points during busy periods?'
        ] },
        { type: 'h2', text: 'Planning choices that help' },
        { type: 'ul', items: [
          'Go in the morning — less heat, fewer people, a better chance of a shaded seat',
          'Bring one companion who can carry a chair or water',
          'Split the walk in two: entrance to main structure, then the grounds',
          'Agree in advance where the vehicle will wait and when you will leave',
          'Carry an umbrella and water in warm weather'
        ] },
        { type: 'h2', text: 'Days worth avoiding' },
        { type: 'p', text: 'National days, special ceremonies and very hot days bring crowds and tighter security control. If mobility is limited, a quiet morning on an ordinary day is the most comfortable choice.' },
        { type: 'callout', tone: 'note', title: 'This page will be updated', text: 'When confirmed information on ramps, wheelchair provision or accessible toilets becomes available from a reliable source, it will be added here with a date.' },
        { type: 'h2', text: 'What to do if someone tires or feels unwell mid-visit' },
        { type: 'p', text: 'With limited mobility, or simply after a long walk, stopping early and resting is the safest choice. The steps below suit a large, open site like the monument grounds.' },
        { type: 'steps', items: [
          { title: 'Stop straight away', text: 'If there is breathlessness, dizziness or leg pain, do not walk on; sit down in the nearest shaded place.' },
          { title: 'Water and rest', text: 'Drink water and rest for 10–15 minutes; if you do not recover quickly, turn back.' },
          { title: 'Tell the security staff', text: 'If the condition does not ease, tell security at the entrance or the information point, and keep someone from the group with you.' },
          { title: 'Change the plan', text: 'Drop the remaining part and head for the exit; it helps if the vehicle’s waiting place was fixed in advance.' }
        ] },
        { type: 'links', items: [
          { label: 'Parking and drop-off', href: '/en/transport/parking-dropoff/' },
          { label: 'First visit', href: '/en/visit/first-time/' },
          { label: 'Visiting with children', href: '/en/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'Can I visit the monument in a wheelchair?', a: 'No confirmed current information. Ask the managing authority about the paths, gradients and entrances before travelling.' },
        { q: 'How close can a car get to the entrance?', a: 'This needs verification, and access control on special days can change it.' },
        { q: 'Are the toilets accessible?', a: 'Not confirmed. If you need this, verify directly in advance.' },
        { q: 'When is the easiest time to go?', a: 'A morning on an ordinary day, when crowds and heat are lowest.' },
        { q: 'Can we stop part-way if walking is hard?', a: 'Yes. Rest in the shade with water; if it does not ease, turn back or tell the security staff.' },
        { q: 'Who should I turn to if someone feels unwell?', a: 'Tell the security staff at the entrance or the information point, and keep at least one member of the group with the person.' }
      ]
    }
  },
  {
    slug: 'visit/weather',
    section: 'visit',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['visit/first-time', 'visit/how-long', 'visit/with-children', 'events/independence-day'],
    bn: {
      title: 'বর্ষা ও গরমে স্মৃতিসৌধ ভ্রমণ: আবহাওয়া অনুযায়ী পরিকল্পনা',
      description: 'বাংলাদেশের ঋতু অনুযায়ী স্মৃতিসৌধ ভ্রমণের প্রস্তুতি—গরম, বর্ষা ও শীতে কী পরিবর্তন করবেন, কী সঙ্গে নেবেন এবং কখন সফর ছোট করবেন।',
      h1: 'বর্ষা ও গরমে ভ্রমণের পরিকল্পনা',
      answer:
        'বাংলাদেশে এপ্রিল–জুন প্রচণ্ড গরম, জুন–সেপ্টেম্বর ভারী বৃষ্টি এবং নভেম্বর–ফেব্রুয়ারি তুলনামূলক আরামদায়ক। সফরের দিন আসল তাপ, বৃষ্টির সম্ভাবনা ও বাতাস দেখে সময় ঠিক করুন; খোলা মাঠে রোদ বা বৃষ্টি দ্রুত পরিস্থিতি বদলে দেয়।',
      blocks: [
        { type: 'h2', text: 'ঋতু অনুযায়ী কী বদলাবেন' },
        {
          type: 'table',
          head: ['ঋতু', 'আবহাওয়ার ধরন', 'পরিকল্পনায় পরিবর্তন'],
          rows: [
            ['গ্রীষ্ম (এপ্রিল–জুন)', 'তীব্র রোদ, উচ্চ তাপমাত্রা', 'ভোর বা সকালে যান; ছাতা ও পানি বাধ্যতামূলক'],
            ['বর্ষা (জুন–সেপ্টেম্বর)', 'ভারী বৃষ্টি, পিচ্ছিল পথ', 'নন-স্লিপ জুতা, রেইনকোট, সফর ছোট রাখুন'],
            ['শরৎ (অক্টোবর–নভেম্বর)', 'তুলনামূলক পরিষ্কার আকাশ', 'ছবি তোলার জন্য ভালো সময়'],
            ['শীত (ডিসেম্বর–ফেব্রুয়ারি)', 'ঠান্ডা সকাল, কুয়াশা', 'দুপুরে যাওয়া আরামদায়ক, ভ্রমণে সময় বাড়তে পারে']
          ]
        },
        { type: 'h2', text: 'গরমে যাওয়ার নিয়ম' },
        { type: 'ul', items: [
          'সকাল ১০টার আগেই পৌঁছানোর চেষ্টা করুন',
          'প্রতি ২০–৩০ মিনিটে পানি খান; তৃষ্ণা না লাগলেও',
          'হালকা রঙের ঢিলেঢালা পোশাক ও মাথা ঢাকার ব্যবস্থা রাখুন',
          'দুপুরে ছায়ায় ১৫ মিনিট বিশ্রাম নিন'
        ] },
        { type: 'h2', text: 'বর্ষায় যাওয়ার নিয়ম' },
        { type: 'ul', items: [
          'নন-স্লিপ তলার জুতা পরুন; পাথর ও সিঁড়ি ভেজা থাকলে পিছলে যাওয়ার ঝুঁকি থাকে',
          'রেইনকোট বা ছাতা নিন; বাতাসে ছাতা উল্টে যেতে পারে',
          'বজ্রপাতের সময় খোলা মাঠ বা জলাশয়ের ধারে থাকবেন না',
          'ভারী বৃষ্টিতে দীর্ঘ দূরত্বের যাত্রা পিছিয়ে দিন'
        ] },
        { type: 'callout', tone: 'warn', title: 'পূর্বাভাস মানে নিশ্চিত প্রবেশ নয়', text: 'আবহাওয়ার পূর্বাভাস সফরের সময় ঠিক করতে সাহায্য করে, কিন্তু প্রবেশপত্র বা পথ খোলা আছে কি না তা নিশ্চিত করে না।' },
        { type: 'h2', text: 'শীতে ও কুয়াশায়' },
        { type: 'p', text: 'ডিসেম্বর–জানুয়ারিতে সকালে কুয়াশা থাকলে মহাসড়কে যানবাহনের গতি কমে এবং সময় বেশি লাগে। দুপুরে তাপমাত্রা আরামদায়ক হলে সফর ভালো হয়, তবে সূর্যাস্ত আগে হওয়ায় খোলা সময়ের ভেতরেই ফেরার পরিকল্পনা করুন।' },
        { type: 'h2', text: 'যাত্রার আগে আবহাওয়া যাচাইয়ের নিয়ম' },
        { type: 'p', text: 'ঋতু জানা থাকলেও সফরের দিনের প্রকৃত অবস্থা আলাদা হতে পারে, তাই রওনার আগে নির্দিষ্ট বিষয়গুলো দেখে নিন।' },
        { type: 'steps', items: [
          { title: 'তাপমাত্রার সীমা দেখুন', text: 'শুধু সর্বোচ্চ নয়, সকাল ও দুপুরের তাপমাত্রার ব্যবধান দেখুন; খোলা মাঠে অনুভূত গরম বেশি হয়।' },
          { title: 'বৃষ্টির সম্ভাবনা ও বাতাস দেখুন', text: 'বৃষ্টির শতাংশ ও বাতাসের গতি দেখুন; ঝড় বা বজ্রপাতের পূর্বাভাস থাকলে দীর্ঘ যাত্রা পিছিয়ে দিন।' },
          { title: 'আগের রাতে আবার দেখুন', text: 'পূর্বাভাস বদলায়; আগের রাতে একবার মিলিয়ে নিলে সকালে সিদ্ধান্ত নেওয়া সহজ হয়।' }
        ] },
        { type: 'links', items: [
          { label: 'প্রথমবার ভ্রমণ', href: '/visit/first-time/' },
          { label: 'ছবি তোলার গাইড', href: '/visit/photography/' },
          { label: 'কত সময় লাগে', href: '/visit/how-long/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধ দেখার সবচেয়ে ভালো মাস কোনটি?', a: 'নভেম্বর থেকে ফেব্রুয়ারি তুলনামূলক আরামদায়ক; বৃষ্টি কম, তাপও নিয়ন্ত্রণে থাকে।' },
        { q: 'বর্ষায় যাওয়া যাবে কি?', a: 'যাওয়া যায়, তবে পথ পিছলে যাওয়ার ঝুঁকি থাকে; নন-স্লিপ জুতা ও রেইনকোট সঙ্গে রাখুন।' },
        { q: 'গরমে কখন যাওয়া ভালো?', a: 'খোলার পরপর, অর্থাৎ সকালে—রোদ কম এবং ছায়ায় হাঁটার সুযোগ বেশি।' },
        { q: 'বৃষ্টিতে স্মৃতিসৌধ বন্ধ থাকে কি?', a: 'সাধারণ বৃষ্টিতে বন্ধ হওয়ার তথ্য নেই, তবে ভারী বৃষ্টি বা ঝড়ে নিরাপত্তার জন্য প্রবেশ সীমিত হতে পারে।' },
        { q: 'রওনার আগে আবহাওয়ার কোন বিষয়গুলো দেখব?', a: 'দিনের তাপমাত্রার সীমা, বৃষ্টির সম্ভাবনা ও বাতাসের গতি দেখুন; বজ্রপাত বা ঝড়ের পূর্বাভাস থাকলে যাত্রা পিছিয়ে দিন।' },
        { q: 'কখন সফর পিছিয়ে দেওয়া উচিত?', a: 'টানা ভারী বৃষ্টি, বজ্রপাত বা ঝড়ের পূর্বাভাস থাকলে; পিচ্ছিল পথে চলাচলে ঝুঁকি বাড়ে।' }
      ]
    },
    en: {
      title: 'Visiting in the rainy season and summer heat',
      description: 'How to plan a visit to the National Martyrs’ Monument around Bangladeshi seasons — heat, monsoon rain and winter fog, what to carry and when to shorten the trip.',
      h1: 'Planning around heat and monsoon rain',
      answer:
        'April to June brings intense heat, June to September heavy rain, and November to February the most comfortable conditions. Decide your timings on the day using actual temperature, rain probability and wind; on an open site the situation changes quickly.',
      blocks: [
        { type: 'h2', text: 'What to change by season' },
        {
          type: 'table',
          head: ['Season', 'Conditions', 'Planning change'],
          rows: [
            ['Summer (April–June)', 'Intense sun, high temperatures', 'Go early morning; umbrella and water essential'],
            ['Monsoon (June–September)', 'Heavy rain, slippery surfaces', 'Non-slip shoes, raincoat, shorter visit'],
            ['Autumn (October–November)', 'Relatively clear skies', 'Best conditions for photography'],
            ['Winter (December–February)', 'Cold mornings, fog', 'Midday is more comfortable; travel can take longer']
          ]
        },
        { type: 'h2', text: 'Rules for hot weather' },
        { type: 'ul', items: [
          'Try to arrive before 10:00',
          'Drink water every 20–30 minutes even if you do not feel thirsty',
          'Wear light, loose clothing and cover your head',
          'Take a 15-minute shaded break at midday'
        ] },
        { type: 'h2', text: 'Rules for the monsoon' },
        { type: 'ul', items: [
          'Wear shoes with a non-slip sole; wet stone and steps are genuinely dangerous',
          'Carry a raincoat or umbrella, and expect wind to turn umbrellas inside out',
          'Stay away from open ground and the water feature during thunder',
          'Postpone long journeys during very heavy rain'
        ] },
        { type: 'callout', tone: 'warn', title: 'A forecast is not an access guarantee', text: 'Weather forecasts help you choose your timing but say nothing about whether the entrance or paths are open that day.' },
        { type: 'h2', text: 'Winter and fog' },
        { type: 'p', text: 'In December and January morning fog slows traffic on the highway and lengthens the journey. Midday is comfortable, but with earlier sunsets plan your return well inside the opening hours.' },
        { type: 'h2', text: 'Checking the weather before you travel' },
        { type: 'p', text: 'Even when you know the season, conditions on the day can differ, so check the specific factors before setting out.' },
        { type: 'steps', items: [
          { title: 'Look at the temperature range', text: 'Check the morning-to-midday spread, not just the maximum; open ground feels hotter than the forecast suggests.' },
          { title: 'Check rain probability and wind', text: 'Look at the chance of rain and the wind speed; if storms or thunder are forecast, postpone a long journey.' },
          { title: 'Recheck the night before', text: 'Forecasts change; one more look the night before makes the morning decision easier.' }
        ] },
        { type: 'links', items: [
          { label: 'First visit', href: '/en/visit/first-time/' },
          { label: 'Photography guide', href: '/en/visit/photography/' },
          { label: 'How long a visit takes', href: '/en/visit/how-long/' }
        ] }
      ],
      faq: [
        { q: 'Which months are best for visiting?', a: 'November to February is generally the most comfortable, with less rain and moderate temperatures.' },
        { q: 'Can you visit during the monsoon?', a: 'Yes, but surfaces get slippery. Bring non-slip shoes and a raincoat.' },
        { q: 'What time of day is best in hot weather?', a: 'Just after opening — less sun and more opportunity to walk in shade.' },
        { q: 'Does the monument close when it rains?', a: 'No information suggests ordinary rain closes it, but heavy rain or storms can restrict access on safety grounds.' },
        { q: 'Which weather factors should I check before leaving?', a: 'The day’s temperature range, the chance of rain and the wind speed; postpone the trip if storms or thunder are forecast.' },
        { q: 'When should I postpone the visit?', a: 'When sustained heavy rain, thunder or storms are forecast — wet, slippery paths raise the risk of a fall.' }
      ]
    }
  },
  {
    slug: 'visit/etiquette',
    section: 'visit',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['events/independence-day', 'events/victory-day', 'visit/photography', 'itineraries/school-educational-visit'],
    bn: {
      title: 'স্মৃতিসৌধে আচরণবিধি ও শ্রদ্ধা জানানোর নিয়ম',
      description: 'জাতীয় স্মৃতিসৌধ শোক ও শ্রদ্ধার স্থান—শ্রদ্ধা নিবেদনের নিয়ম, পোশাক-আচরণ, কী করা উচিত নয় এবং দল নিয়ে যাওয়ার সময় করণীয়।',
      h1: 'আচরণবিধি ও শ্রদ্ধা জানানোর নিয়ম',
      answer:
        'এটি একটি জাতীয় স্মারক, বিনোদনস্থল নয়। নীরব থাকুন, ধীরে চলুন, মূল কাঠামো ও স্মৃতিস্থানের প্রতি সম্মান দেখান এবং নিরাপত্তাকর্মীর নির্দেশনা মেনে চলুন। ভেতরে আনুষ্ঠানিক নিয়মের তালিকা না থাকলেও ভ্রমণকারীর আচরণই স্থানের মর্যাদা ঠিক রাখে।',
      blocks: [
        { type: 'h2', text: 'করণীয়' },
        { type: 'ul', items: [
          'পরিষ্কার, ভদ্র পোশাক পরুন—অনেকেই এখানে পরিবারের সদস্যকে স্মরণ করতে আসেন',
          'নিচু কণ্ঠে কথা বলুন; গান, হাসিঠাট্টা বা উচ্চ শব্দ এড়িয়ে চলুন',
          'যদি ফুল দিতে চান, প্রবেশপথে কর্তৃপক্ষের নির্দেশনা অনুসরণ করুন',
          'শিশুদের আগেই বুঝিয়ে দিন কীভাবে চলতে হবে',
          'নিরাপত্তাকর্মীর নির্দেশ সঙ্গে সঙ্গে মানুন'
        ] },
        { type: 'h2', text: 'যা করা উচিত নয়' },
        { type: 'ul', items: [
          'কাঠামোয় ওঠা, দেওয়ালে ভর দেওয়া বা ঝুলে ছবি তোলা',
          'উচ্চ শব্দে গান, স্লোগান বা সেলফি-অঙ্গভঙ্গি',
          'আবর্জনা ফেলা বা খাবার ছড়িয়ে রাখা',
          'অন্যের শ্রদ্ধা নিবেদনের মাঝখানে চলাফেরা বা ছবি তোলা',
          'কারও ব্যক্তিগত শোক বা প্রার্থনার সময় হস্তক্ষেপ করা'
        ] },
        { type: 'callout', tone: 'warn', title: 'ভাঙচুর বা ঝুঁকিপূর্ণ আচরণ', text: 'কাঠামো বা উদ্যানের কোনো কিছু নষ্ট করা বা ঝুঁকিপূর্ণ স্থানে ওঠা শুধু নিয়মভঙ্গ নয়, নিরাপত্তার জন্যও বিপজ্জনক। নিরাপত্তাকর্মী বাধা দিলে সঙ্গে সঙ্গে থামুন।' },
        { type: 'h2', text: 'শ্রদ্ধা নিবেদনের সাধারণ ধরন' },
        { type: 'p', text: 'দর্শনার্থীরা সাধারণত মূল কাঠামোর সামনে কিছুক্ষণ দাঁড়িয়ে নীরব থাকেন বা ফুল দেন। আনুষ্ঠানিক পুষ্পস্তবক অর্পণ সরকারি বা সাংগঠনিক কর্মসূচির অংশ এবং আলাদা অনুমতি সাপেক্ষ হতে পারে।' },
        { type: 'h2', text: 'স্কুল ও প্রতিষ্ঠানের দল' },
        { type: 'ol', items: [
          'গাইড-শিক্ষক আগে সংক্ষেপে ইতিহাস ও এই স্থানের মর্যাদা বুঝিয়ে দিন',
          'দলকে ছোট উপদলে ভাগ করুন, প্রতিটির দায়িত্বে একজন বড় থাকবেন',
          'ছবি তোলার নিয়ম আগেই ঠিক করুন—কোথায় তোলা যাবে, কোথায় নয়',
          'ভ্রমণের পর শিক্ষার্থীদের অভিজ্ঞতা লিখতে বললে সফর বেশি অর্থবহ হয়'
        ] },
        { type: 'h2', text: 'জাতীয় দিবসের আনুষ্ঠানিকতা চলাকালীন আচরণ' },
        { type: 'p', text: 'স্বাধীনতা দিবস ও বিজয় দিবসে পুষ্পস্তবক অর্পণসহ আনুষ্ঠানিক কর্মসূচি হয়; তখন সাধারণ দর্শনের নিয়মগুলো আরও কঠোরভাবে প্রয়োগ করা হয়।' },
        { type: 'ul', items: [
          'নিরাপত্তা ব্যারিকেড ও নির্ধারিত দর্শক-অঞ্চলের বাইরে যাবেন না',
          'আনুষ্ঠানিকতার সময় নীরব থাকুন; হাততালি বা স্লোগান দেবেন না',
          'শোকাযাত্রা বা পুষ্পস্তবক অর্পণরত দলের সামনে দিয়ে হাঁটবেন না',
          'ছবি তোলার আগে দেখুন রাষ্ট্রীয় কর্মসূচিতে ছবি তোলার অনুমতি আছে কি না',
          'নিরাপত্তাকর্মীর নির্দেশ সঙ্গে সঙ্গে মানুন'
        ] },
        { type: 'links', items: [
          { label: 'স্বাধীনতা দিবস', href: '/events/independence-day/' },
          { label: 'বিজয় দিবস', href: '/events/victory-day/' },
          { label: 'ছবি তোলার গাইড', href: '/visit/photography/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে ফুল দেওয়া যায় কি?', a: 'অনেকেই ফুল দেন, তবে আনুষ্ঠানিক পুষ্পস্তবক অর্পণের জন্য অনুমতি লাগতে পারে। প্রবেশপথে জেনে নিন।' },
        { q: 'কোন পোশাক পরা উচিত?', a: 'পরিষ্কার, ভদ্র ও রোদ-উপযোগী পোশাক; এটি একটি জাতীয় স্মারক, তাই ভাবমর্যাদা রাখার বিষয়টি মনে রাখুন।' },
        { q: 'কাঠামোর উপর ওঠা যায় কি?', a: 'না। কাঠামোয় ওঠা বা ভাঙচুর করা নিয়মভঙ্গ এবং নিরাপত্তার জন্য ঝুঁকিপূর্ণ।' },
        { q: 'ছবি তোলার সময় কী লক্ষ্য রাখব?', a: 'নীরবতা বজায় রাখুন, অন্যের শ্রদ্ধার মধ্যে ঢুকে যাবেন না এবং নিষিদ্ধ অংশে ছবি তুলবেন না।' },
        { q: 'আনুষ্ঠানিকতার সময় ভেতরে থাকা যাবে কি?', a: 'কর্মসূচির ধরন ও নিরাপত্তা ব্যবস্থার উপর নির্ভর করে প্রবেশ সীমিত হতে পারে; নির্ধারিত দর্শক-অঞ্চলের বাইরে যাবেন না।' },
        { q: 'পুষ্পস্তবক অর্পণের সময় ছবি তোলা যাবে?', a: 'আনুষ্ঠানিক কর্মসূচিতে ছবি তোলার নিয়ম আগে যাচাই করুন; সন্দেহ হলে নিরাপত্তাকর্মীর নির্দেশ মেনে চলুন।' }
      ]
    },
    en: {
      title: 'Etiquette and paying respects at the National Martyrs’ Monument',
      description: 'The National Martyrs’ Monument is a place of mourning and remembrance. How to behave, what to wear, what to avoid and how to lead a group respectfully.',
      h1: 'Etiquette and paying respects',
      answer:
        'This is a national memorial, not a leisure park. Keep quiet, walk slowly, treat the main structure and the memorial spaces with respect, and follow instructions from security staff. Even where rules are not posted, visitor behaviour is what preserves the dignity of the place.',
      blocks: [
        { type: 'h2', text: 'Please do' },
        { type: 'ul', items: [
          'Wear clean, modest clothing — many visitors come to remember family members',
          'Talk quietly and avoid music, jokes or shouting',
          'If you wish to lay flowers, follow the instructions given at the entrance',
          'Explain to children in advance how to behave',
          'Comply immediately with security staff instructions'
        ] },
        { type: 'h2', text: 'Please avoid' },
        { type: 'ul', items: [
          'Climbing on the structure, leaning against walls or posing while hanging from anything',
          'Loud music, chanting or staged photographs and gestures',
          'Littering or leaving food around',
          'Walking through or photographing someone else’s act of remembrance',
          'Interrupting another visitor’s private mourning or prayer'
        ] },
        { type: 'callout', tone: 'warn', title: 'Damage and dangerous behaviour', text: 'Damaging the structure or grounds, or climbing into risky positions, is not merely against the rules — it is dangerous. If staff stop you, stop immediately.' },
        { type: 'h2', text: 'How visitors usually pay respects' },
        { type: 'p', text: 'Most visitors stand quietly in front of the main structure for a moment or lay flowers. Formal wreath-laying is part of official or organisational ceremonies and may require separate permission.' },
        { type: 'h2', text: 'For school and institutional groups' },
        { type: 'ol', items: [
          'Have the teacher or group leader explain the history and the significance of the site first',
          'Split the group into small teams, each with a responsible adult',
          'Agree the photography rules in advance — where it is allowed and where it is not',
          'Ask students to write about the visit afterwards; it makes the trip far more meaningful'
        ] },
        { type: 'h2', text: 'Behaviour during national-day ceremonies' },
        { type: 'p', text: 'Independence Day and Victory Day bring formal programmes, including wreath-laying, when the usual visitor rules are applied more strictly.' },
        { type: 'ul', items: [
          'Stay behind security barriers and within the designated visitor areas',
          'Keep silent during the ceremony; do not clap or chant',
          'Do not walk in front of a wreath-laying party or a procession',
          'Before photographing, check whether official ceremonies may be photographed',
          'Follow security staff instructions immediately'
        ] },
        { type: 'links', items: [
          { label: 'Independence Day', href: '/en/events/independence-day/' },
          { label: 'Victory Day', href: '/en/events/victory-day/' },
          { label: 'Photography guide', href: '/en/visit/photography/' }
        ] }
      ],
      faq: [
        { q: 'Can I lay flowers at the monument?', a: 'Many visitors do, but formal wreath-laying may require permission. Ask at the entrance.' },
        { q: 'What should I wear?', a: 'Clean, modest, weather-appropriate clothing. Remember this is a national memorial.' },
        { q: 'Can I climb on the structure?', a: 'No. Climbing or causing damage is against the rules and dangerous.' },
        { q: 'What should I keep in mind when taking photographs?', a: 'Stay quiet, do not intrude on someone’s act of remembrance, and do not photograph restricted areas.' },
        { q: 'Can visitors stay inside during a ceremony?', a: 'Access may be restricted depending on the programme and security arrangements; stay within the designated visitor area.' },
        { q: 'May I photograph a wreath-laying?', a: 'Check the rules for official ceremonies beforehand; when in doubt, follow the security staff’s instruction.' }
      ]
    }
  },
  {
    slug: 'visit/photography',
    section: 'visit',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['visit/etiquette', 'architecture/seven-walls', 'visit/weather', 'events/victory-day'],
    bn: {
      title: 'স্মৃতিসৌধে ছবি তোলার গাইড: সময়, কোণ ও সীমাবদ্ধতা',
      description: 'স্মৃতিসৌধে কখন ও কোন কোণ থেকে ছবি ভালো হয়, কোন ধরনের ছবি তোলা শোভন নয় এবং কোন নিয়ম আগে যাচাই করা দরকার।',
      h1: 'ছবি তোলার গাইড',
      answer:
        'ছবির জন্য সবচেয়ে ভালো আলো ভোর ও বিকেলের দিকে, আর সবচেয়ে ভালো কোণ মূল কাঠামোকে সামনের উদ্যান ও জলাশয়ের সঙ্গে একসঙ্গে ধরার কোণ। তবে আনুষ্ঠানিক বা বাণিজ্যিক ফটোশুট, ড্রোন ব্যবহার ও স্মৃতিস্থানে ছবি তোলার নিয়ম সম্পর্কে নির্ভরযোগ্য বর্তমান তথ্য পাওয়া যায়নি—আগে অনুমতি নিন।',
      blocks: [
        { type: 'h2', text: 'আলো অনুযায়ী সময় নির্বাচন' },
        {
          type: 'table',
          head: ['সময়', 'আলোর ধরন', 'উপযুক্ত'],
          rows: [
            ['খোলার পরপর সকাল', 'নরম, সামনের দিক থেকে আলো', 'মূল কাঠামোর সামগ্রিক ছবি'],
            ['দুপুর', 'তীব্র, ছায়া খাটো', 'কম আকর্ষণীয়; চোখের সমস্যা হয়'],
            ['বিকেল', 'সোনালি আলো', 'সিলুয়েট ও আবেগপূর্ণ ছবি']
          ]
        },
        { type: 'h2', text: 'পাঁচটি ব্যবহারিক পরামর্শ' },
        { type: 'ol', items: [
          'মূল কাঠামোকে একা না তুলে সামনের উদ্যান বা জলাশয়ের সঙ্গে ধরুন—গভীরতা তৈরি হয়',
          'সাত জোড়া প্রাচীরের ধাপ বোঝাতে পাশ থেকে কোণ নিন',
          'মানুষের ভিড় কম থাকলে সকালে চওড়া দৃশ্য তোলা সহজ',
          'সরু পথে বাড়তি যন্ত্রপাতি নিয়ে হাঁটাচলা অন্যদের বাধা দিতে পারে, তাই ছোট ব্যাগ রাখুন',
          'সূর্যাস্তের ছবির জন্য খোলা সময়ের ভেতরে থাকুন; বন্ধের পর ভেতরে থাকা যায় না'
        ] },
        { type: 'callout', tone: 'warn', title: 'আগে অনুমতি নিন', text: 'বাণিজ্যিক ছবি, ড্রোন, ট্রাইপড দিয়ে দীর্ঘ সেশন বা বিবাহ-পূর্ব ফটোশুটের অনুমতি আছে কি না—নিশ্চিত তথ্য নেই। এসব আগে কর্তৃপক্ষের কাছে জেনে নেওয়া উচিত।' },
        { type: 'h2', text: 'যা ছবির মধ্যেও সম্মান রাখে' },
        { type: 'ul', items: [
          'অন্য দর্শনার্থীর শোক বা প্রার্থনার দৃশ্য অনুমতি ছাড়া ছবিতে নেবেন না',
          'কাঠামোয় উঠে বা ঝুলে ভঙ্গি দিয়ে ছবি নয়',
          'কেউ ফুল দিচ্ছেন বা নীরব দাঁড়িয়ে আছেন—তাঁর সামনে দিয়ে হেঁটে যাবেন না',
          'ছবি প্রকাশ করলে স্থানটি মানবিক মর্যাদা নিয়ে উপস্থাপন করুন, হাস্যরসের উপাদান হিসেবে নয়'
        ] },
        { type: 'h2', text: 'যন্ত্রপাতি নিয়ে বাস্তবতা' },
        { type: 'p', text: 'বড় ট্রাইপড বা পেশাদার যন্ত্রপাতি নিরাপত্তা তল্লাশিতে প্রশ্নের কারণ হতে পারে। ছোট ক্যামেরা বা মোবাইল সবচেয়ে সহজ। জরুরি প্রয়োজন হলে আগেই লিখিত অনুমতি নিয়ে যাওয়া নিরাপদ।' },
        { type: 'h2', text: 'ক্যামেরা সেটিংস ও এক্সপোজারের ব্যবহারিক পরামর্শ' },
        {
          type: 'table',
          head: ['শটের ধরন', 'পরামর্শ', 'কারণ'],
          rows: [
            ['চওড়া দৃশ্য (মূল কাঠামো ও উদ্যান)', 'নিচু কোণ, চওড়া লেন্স', 'উদ্যান ও জলাশয় মিলিয়ে গভীরতা তৈরি হয়'],
            ['উজ্জ্বল আকাশ ও গাঢ় সম্মুখভাগ', 'HDR বা ব্র্যাকেটিং ব্যবহার করুন', 'দুই দিকের আলোই একসাথে ধরা যায়'],
            ['সাতটি দেয়ালের বাড়তে থাকা ধাপ', 'পাশ থেকে কোণ, লম্বা ফোকাল', 'প্রতিটি ধাপের উচ্চতা স্পষ্ট হয়'],
            ['সোনালি বিকেলের ছবি', 'আলো পিছনে রেখে সিলুয়েট', 'কাঠামোর রূপরেখা ফুটে ওঠে']
          ]
        },
        { type: 'links', items: [
          { label: 'সাতটি দেয়ালের অর্থ', href: '/architecture/seven-walls/' },
          { label: 'আবহাওয়া অনুযায়ী পরিকল্পনা', href: '/visit/weather/' },
          { label: 'আচরণবিধি', href: '/visit/etiquette/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে ছবি তোলা যায় কি?', a: 'সাধারণ পরিদর্শনের ছবি সাধারণত সমস্যা হয় না, তবে বাণিজ্যিক শুট বা বিশেষ ব্যবস্থার অনুমতি সম্পর্কে নিশ্চিত তথ্য নেই—আগে জেনে নিন।' },
        { q: 'ড্রোন উড়িয়ে ভিডিও করা যাবে?', a: 'এমন অনুমতির নিশ্চিত তথ্য নেই। অনুমতি ছাড়া ড্রোন ব্যবহার করা অনিরাপদ ও নিয়মবিরোধী হতে পারে।' },
        { q: 'সবচেয়ে ভালো সময় কোনটি?', a: 'ভোর বা খোলার পরপর এবং বিকেলের শেষ ভাগে সোনালি আলো—দুই সময়ই ভালো ছবি দেয়।' },
        { q: 'মোবাইল দিয়ে ভালো ছবি পাওয়া যাবে?', a: 'হ্যাঁ। খোলা আকাশের আলো ও বিশাল কাঠামোর তুলনার জন্য নিচু কোণ ব্যবহার করলে মোবাইলেও ভালো ফল পাওয়া যায়।' },
        { q: 'মূল কাঠামোর ছবিতে সেটিংস কেমন রাখব?', a: 'উজ্জ্বল আকাশ ও গাঢ় সম্মুখভাগ একসাথে ধরতে HDR বা ব্র্যাকেটিং ব্যবহার করুন; নিচু কোণে চওড়া দৃশ্য নিলে গভীরতা বাড়ে।' },
        { q: 'সাতটি দেয়ালের বাড়তে থাকা ধাপ কীভাবে দেখাব?', a: 'সম্মুখ থেকে নয়, পাশ থেকে কোণ নিয়ে তুললে প্রতিটি ধাপের বাড়তে থাকা উচ্চতা স্পষ্ট হয়।' }
      ]
    },
    en: {
      title: 'Photography guide for the National Martyrs’ Monument',
      description: 'When and where the light is best at the National Martyrs’ Monument, which angles work, what is inappropriate, and what permissions need checking in advance.',
      h1: 'Photography guide',
      answer:
        'The best light is early and late in the day, and the strongest composition frames the main structure together with the grounds and the water feature in front of it. Reliable current information on formal or commercial shoots, drone use and photography near memorial areas could not be found — obtain permission first.',
      blocks: [
        { type: 'h2', text: 'Choosing your time by the light' },
        {
          type: 'table',
          head: ['Time', 'Quality of light', 'Suited to'],
          rows: [
            ['Early, just after opening', 'Soft, front-lit', 'Overall images of the main structure'],
            ['Midday', 'Harsh, short shadows', 'Least flattering; hard on the eyes'],
            ['Late afternoon', 'Golden light', 'Silhouettes and more emotive images']
          ]
        },
        { type: 'h2', text: 'Five practical suggestions' },
        { type: 'ol', items: [
          'Include the grounds or water feature with the main structure for depth, rather than shooting it alone',
          'Use a side angle to show the rising progression of the seven pairs of walls',
          'Wide shots are easier early, before the crowds arrive',
          'Keep your bag small — long lenses and tripods get in the way on narrow paths',
          'Shoot sunset photographs within opening hours; you cannot stay on site after closing'
        ] },
        { type: 'callout', tone: 'warn', title: 'Ask first', text: 'There is no confirmed information on whether commercial photography, drones, long tripod sessions or pre-wedding shoots are permitted. Check with the authority beforehand.' },
        { type: 'h2', text: 'Photography that still respects the site' },
        { type: 'ul', items: [
          'Do not photograph another visitor’s mourning or prayer without permission',
          'Do not climb on or hang from the structure to create a pose',
          'Do not walk in front of someone laying flowers or standing in silence',
          'If you publish the images, present the place with dignity rather than as a joke'
        ] },
        { type: 'h2', text: 'Equipment realities' },
        { type: 'p', text: 'Large tripods or professional rigs may raise questions at security checks. A small camera or phone is simplest. If you genuinely need more, carrying written permission is safer.' },
        { type: 'h2', text: 'Practical camera and exposure advice' },
        {
          type: 'table',
          head: ['Type of shot', 'Advice', 'Why'],
          rows: [
            ['Wide shot (main structure with the grounds)', 'Low angle, wide lens', 'The grounds and water feature add depth'],
            ['Bright sky with a darker foreground', 'Use HDR or bracketing', 'Holds both ends of the light in one frame'],
            ['The rising progression of the seven walls', 'Side angle, longer focal length', 'Makes each step in height visible'],
            ['Golden-hour images', 'Shoot into the light for a silhouette', 'The outline of the structure stands out']
          ]
        },
        { type: 'links', items: [
          { label: 'The seven walls', href: '/en/architecture/seven-walls/' },
          { label: 'Planning around the weather', href: '/en/visit/weather/' },
          { label: 'Etiquette', href: '/en/visit/etiquette/' }
        ] }
      ],
      faq: [
        { q: 'Is photography allowed at the monument?', a: 'Ordinary visitor photography is generally not a problem, but there is no confirmed information on commercial shoots or special arrangements — ask in advance.' },
        { q: 'Can I fly a drone?', a: 'No confirmed permission exists. Flying without authorisation may be unsafe and against the rules.' },
        { q: 'What is the best time for photographs?', a: 'Early morning and late afternoon, when the light is softer and warmer.' },
        { q: 'Can I get good images with a phone?', a: 'Yes. Use the open sky and the scale of the structure, and shoot from a low angle for a strong composition.' },
        { q: 'What settings work for the main structure?', a: 'Use HDR or bracketing to hold both the bright sky and the darker foreground; a low, wide angle adds depth.' },
        { q: 'How do I show the rising walls?', a: 'Shoot from the side rather than head-on; a side angle makes each step in height clear.' }
      ]
    }
  }
];
