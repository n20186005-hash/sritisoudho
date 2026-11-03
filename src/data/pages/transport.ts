// B. যাতায়াত: ৮টি পাতা (যাওয়া, নামা ও ফেরা)।
import type { ContentPage } from './types';

export const transportPages: ContentPage[] = [
  {
    slug: 'transport/from-dhaka',
    section: 'transport',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['transport/from-gabtoli', 'transport/nabinagar-last-mile', 'transport/by-car', 'visit/location'],
    bn: {
      title: 'ঢাকা থেকে জাতীয় স্মৃতিসৌধে যাওয়ার উপায় ও সময়',
      description: 'ঢাকা থেকে সাভারের জাতীয় স্মৃতিসৌধে বাস, ব্যক্তিগত গাড়ি ও রাইড-সেবায় যাওয়ার সারসংক্ষেপ, সময়ের অনিশ্চয়তা এবং কোথায় নামবেন।',
      h1: 'ঢাকা থেকে জাতীয় স্মৃতিসৌধে কীভাবে যাবেন',
      answer:
        'ঢাকা থেকে জাতীয় স্মৃতিসৌধে যাওয়ার তিনটি প্রধান উপায়—পশ্চিমমুখী টার্মিনাল থেকে বাস, ব্যক্তিগত গাড়ি এবং রাইড-সেবা। স্মৃতিসৌধ ঢাকা শহর থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে, ঢাকা–আরিচা মহাসড়কের পাশে নবীনগরে, তাই গন্তব্য হিসেবে “সাভার” নয়, সরাসরি স্মৃতিসৌধ বা নবীনগর বলুন। সময় যানজট ও দিনভেদে বদলায়—নির্দিষ্ট সংখ্যা ধরে না নিয়ে যাত্রার দিন যাচাই করে বের হন।',
      blocks: [
        { type: 'h2', text: 'ঢাকা থেকে তিনটি প্রধান উপায়' },
        { type: 'ul', items: [
          'বাস — ঢাকার পশ্চিমমুখী টার্মিনাল থেকে ঢাকা–আরিচা করিডরের দিকে ছেড়ে সাভারের দিকে যায়; গাবতলী এই করিডরের পরিচিত প্রস্থানবিন্দু।',
          'ব্যক্তিগত গাড়ি — নিজে চালিয়ে মহাসড়ক ধরে সরাসরি স্মৃতিসৌধের পাশে পৌঁছানো যায়; চালককে প্রবেশপথ চিনিয়ে দিতে হয়।',
          'রাইড-সেবা — অ্যাপে গন্তব্য স্মৃতিসৌধের নিবন্ধন হিসেবে সেট করুন; ফেরার পিক-আপ আগেই ঠিক করে নিন।'
        ] },
        { type: 'h2', text: 'সময় ও খরচ নিয়ে অনিশ্চয়তা কোথায়' },
        { type: 'callout', tone: 'warn', title: 'নির্দিষ্ট সময় বা ভাড়া দেওয়া হয় না', text: 'বাস কোম্পানি, রুট নম্বর, ছাড়ার সময় বা ভাড়া দিনভেদে বদলায়, তাই এখানে কোনো নির্দিষ্ট সংখ্যা দেওয়া হয়নি। চালক বা টার্মিনালের কর্মীর কাছে সেদিনের তথ্য জেনে নিন।' },
        { type: 'h2', text: 'সাধারণত কত সময় লাগতে পারে' },
        { type: 'table', head: ['উপায়', 'সাধারণ ধারণা (যাচাইসাপেক্ষ)', 'নিজে যাচাই করুন'], rows: [
          ['বাস (পশ্চিমমুখী টার্মিনাল থেকে)', 'মহাসড়ক ধরে সাভারের দিকে; ভিড়, স্টপ ও দিনের সময়ভেদে বদলায়', 'ছাড়ার সময়, ভাড়া ও নামার স্থান চালক বা কর্মীর কাছে নিশ্চিত করুন'],
          ['ব্যক্তিগত গাড়ি', 'মহাসড়ক ধরে সরাসরি; যানজটে সময় অনেক বাড়তে পারে', 'রাস্তার অবস্থা, ভিড় ও চলতি প্রবেশপথ যাচাই করুন'],
          ['রাইড-সেবা', 'অ্যাপ দূরত্ব দেখালেও বাস্তব সময় ভিন্ন হয়', 'গন্তব্য নিবন্ধন ও ফেরার পিক-আপ আগেই ঠিক করুন']
        ] },
        { type: 'steps', items: [
          { title: 'কোথা থেকে শুরু করব?', text: 'ঢাকা থেকে ছাড়লে পরিচিত পশ্চিমমুখী করিডর ধরে যাওয়াই সরল; গাবতলী এই করিডরের প্রচলিত প্রস্থানবিন্দু।' },
          { title: 'কোথায় নামব?', text: 'শেষ গন্তব্য সাভার শহর নয়; মহাসড়কের পাশে নবীনগরের স্মৃতিসৌধ-প্রবেশপথ। চালককে স্মৃতিসৌধ ও নবীনগর বলে নামার জায়গা ঠিক করুন।' },
          { title: 'কীভাবে ফিরব?', text: 'ফেরার সময় ভিড় থাকে; ফিরতি বাসের স্থান বা রাইড সেবার পিক-আপ আগেই ঠিক করে রাখুন।' }
        ] },
        { type: 'map' },
        { type: 'h2', text: 'ভিড় এড়াতে কখন বেরোবেন' },
        { type: 'p', text: 'ঢাকা থেকে সাভারের পথে ভিড় সাধারণত সকালে অফিসমুখী সময় ও সন্ধ্যায় ফেরার সময় সবচেয়ে বেশি হয়। সকাল ভোরে বা সকাল গড়িয়ে বেরোলে সাধারণত কম ভিড় পাওয়া যায়, আবার সাপ্তাহিক ছুটির দিনে সকালে সড়কে চাপ তুলনায় কম থাকে। তবে নির্দিষ্ট কোনো সময়সীমা নিশ্চিত তথ্য নয়—দিন, মৌসুম ও বিশেষ অনুষ্ঠানে বদলায়।' },
        { type: 'callout', tone: 'warn', title: 'সন্ধ্যার আগেই ফেরার পরিকল্পনা', text: 'বিকেল গড়িয়ে গেলে মহাসড়কে ফিরতি দর্শনার্থীদের চাপ বাড়ে; নির্দিষ্ট সময়সীমা নিশ্চিত নয়, তাই আলো থাকতে ফিরে আসার পরিকল্পনা করুন, কারণ সন্ধ্যার পর মহাসড়কে যানবাহন পাওয়া কঠিন হতে পারে।' },
        { type: 'links', items: [
          { label: 'গাবতলী থেকে যাওয়ার নিয়ম', href: '/transport/from-gabtoli/' },
          { label: 'নবীনগরে শেষ ধাপ', href: '/transport/nabinagar-last-mile/' }
        ] }
      ],
      faq: [
        { q: 'ঢাকা থেকে স্মৃতিসৌধে যাওয়ার সহজ উপায় কী?', a: 'পশ্চিমমুখী টার্মিনাল থেকে বাস, ব্যক্তিগত গাড়ি বা রাইড-সেবা—তিনটিই চলে। গাবতলী ওই করিডরের পরিচিত প্রস্থানবিন্দু।' },
        { q: 'ঢাকা থেকে কত দূর?', a: 'সরলরৈখিক দূরত্ব প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে; সড়কপথে রুট ও যানজট অনুযায়ী বেশি।' },
        { q: 'নেভিগেশনে কী দেব?', a: '“National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW ব্যবহার করুন; শুধু “সাভার” দিলে শহরে চলে যেতে পারেন।' },
        { q: 'কত সময় লাগবে?', a: 'ভাড়া বা সময় নির্দিষ্ট নয়—শুরুর স্থান, করিডর ও দিনের ভিড়ে বদলায়। ফিরতি যাত্রার সময় ধরে বের হওয়া ভালো।' },
        { q: 'ফেরার সময় ভিড় থাকে কি?', a: 'বিকেলে অনেক দর্শনার্থী একসঙ্গে ফেরেন, তাই ফিরতি বাস বা পিক-আপ আগেই ঠিক করে রাখা নিরাপদ।' },
        { q: 'স্মৃতিসৌধে যাওয়ার জন্য দিনের কোন সময় ভালো?', a: 'সাধারণত সকালে ভিড় কম থাকে, তবে নির্দিষ্ট সময় নিশ্চিত নয়; দিন, ছুটি ও মৌসুমে বদলায়। আলো থাকতেই ফেরার পরিকল্পনা করুন।' },
        { q: 'সন্ধ্যার পর ফিরতে দেরি হলে কী করব?', a: 'সন্ধ্যার পর মহাসড়কে যানবাহন পাওয়া কঠিন হতে পারে, তাই রাইড-সেবা বা পরিচিত গাড়ির ব্যবস্থা আগেই রাখুন এবং ফেরার স্থান আগে ঠিক করুন।' }
      ]
    },
    en: {
      title: 'How to get to the National Martyrs’ Monument from Dhaka',
      description: 'An overview of reaching the National Martyrs’ Monument at Savar from Dhaka by bus, private car and ride-hailing, where the uncertainty lies, and where to get off.',
      h1: 'How to get from Dhaka to the National Martyrs’ Monument',
      answer:
        'You can reach the National Martyrs’ Monument from Dhaka in three main ways: a bus from a western-side terminal, a private car, or a ride-hailing car. The monument is about 35 km north-west of Dhaka city, beside the Dhaka–Aricha Highway at Nabinagar, so ask for the monument or Nabinagar rather than “Savar”. Travel time varies with traffic and the day, so verify on the day rather than relying on a fixed number.',
      blocks: [
        { type: 'h2', text: 'The three main options from Dhaka' },
        { type: 'ul', items: [
          'Bus — buses leave the western-side terminals and run towards Savar along the Dhaka–Aricha corridor; Gabtoli is the well-known departure point for that corridor.',
          'Private car — driving yourself along the highway brings you close to the monument; the driver still needs to be shown the entrance.',
          'Ride-hailing — set the destination to the monument listing and agree the return pickup before you arrive.'
        ] },
        { type: 'h2', text: 'Where the uncertainty lies' },
        { type: 'callout', tone: 'warn', title: 'No fixed times or fares are given here', text: 'Bus operators, route numbers, departure times and fares change from day to day, so no numbers are stated on this page. Confirm the current details with the driver or terminal staff on the day.' },
        { type: 'h2', text: 'How long the journey typically takes' },
        { type: 'table', head: ['Option', 'General picture (to verify)', 'Check yourself'], rows: [
          ['Bus (from a western-side terminal)', 'Along the highway towards Savar; varies with traffic, stops and time of day', 'Confirm departure time, fare and stop with the driver or terminal staff'],
          ['Private car', 'Straight along the highway; traffic can add a lot of time', 'Check road conditions, congestion and which entrance is in use'],
          ['Ride-hailing', 'The app shows distance, but real time often differs', 'Set the correct destination listing and agree the return pickup in advance']
        ] },
        { type: 'steps', items: [
          { title: 'Where do I start from?', text: 'Leaving Dhaka, the familiar western corridor is the simplest; Gabtoli is the usual departure point for it.' },
          { title: 'Where do I get off?', text: 'The destination is not Savar town: it is the monument entrance at Nabinagar beside the highway. Tell the driver “monument, Nabinagar” and agree the stop.' },
          { title: 'How do I get back?', text: 'Return travel is busy in the afternoon. Fix your return bus stop or ride-hailing pickup before you go.' }
        ] },
        { type: 'map' },
        { type: 'h2', text: 'When to set off to avoid the worst of the traffic' },
        { type: 'p', text: 'On the Dhaka–Savar route, traffic is usually heaviest during the morning commute and the evening return. Leaving early in the morning, or after the morning peak has passed, is generally quieter, and weekend mornings tend to be lighter too. No fixed window can be stated as confirmed, though, because it shifts with the day, the season and special events.' },
        { type: 'callout', tone: 'warn', title: 'Plan to return before dark', text: 'As the afternoon wears on, returning visitors add pressure to the highway. No exact cutoff is confirmed, so plan to head back while it is still light, because finding transport on the highway after dark can be difficult.' },
        { type: 'links', items: [
          { label: 'Travelling from Gabtoli', href: '/en/transport/from-gabtoli/' },
          { label: 'The last leg at Nabinagar', href: '/en/transport/nabinagar-last-mile/' }
        ] }
      ],
      faq: [
        { q: 'What is the easiest way to reach the monument from Dhaka?', a: 'A bus from a western-side terminal, a private car or a ride-hailing car all work. Gabtoli is the well-known departure point for that corridor.' },
        { q: 'How far is it from Dhaka?', a: 'About 35 km to the north-west by straight line; longer by road depending on the route and traffic.' },
        { q: 'What should I type into navigation?', a: 'Use “National Martyrs’ Monument” or the Plus Code W763+GW. Typing only “Savar” can take you to the town.' },
        { q: 'How long does it take?', a: 'Fares and times are not fixed — they vary with your starting point, the corridor and the day. Build in time for the return leg.' },
        { q: 'Is the return trip crowded?', a: 'Many visitors leave in the afternoon, so fixing your return bus stop or pickup in advance is safer.' },
        { q: 'What is a good time of day to visit?', a: 'Mornings are generally quieter, but no time is confirmed; it shifts with the day, holidays and season. Plan to return while it is still light.' },
        { q: 'What if I have to return after dark?', a: 'Finding transport on the highway after dark can be difficult, so arrange a ride-hailing car or a known car in advance and fix your return point beforehand.' }
      ]
    }
  },
  {
    slug: 'transport/from-gabtoli',
    section: 'transport',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['transport/from-dhaka', 'transport/from-mirpur', 'transport/nabinagar-last-mile', 'transport/from-savar', 'visit/first-time'],
    bn: {
      title: 'গাবতলী থেকে জাতীয় স্মৃতিসৌধে বাসে যাওয়ার নিয়ম',
      description: 'গাবতলী বাস টার্মিনাল থেকে সাভারের জাতীয় স্মৃতিসৌধে যাওয়ার প্রস্তুতি, চালককে কী বলবেন, কোথায় নামবেন এবং কীভাবে ফিরবেন।',
      h1: 'গাবতলী থেকে জাতীয় স্মৃতিসৌধে যাওয়া',
      answer:
        'গাবতলী ঢাকার পশ্চিম দিকের একটি পরিচিত বাস টার্মিনাল এবং ঢাকা–আরিচা মহাসড়কের দিকে যাওয়ার প্রচলিত প্রস্থানবিন্দু। এখান থেকে সাভারমুখী বাসে উঠলে মহাসড়ক ধরে স্মৃতিসৌধের কাছাকাছি নামা যায়। তবে বাসের রুট, কোম্পানি, ভাড়া বা ছাড়ার সময় নির্দিষ্ট করে বলা যায় না—ওই দিনের তথ্য চালক বা টার্মিনালের কর্মীর কাছে যাচাই করে নিন।',
      blocks: [
        { type: 'h2', text: 'গাবতলী কেন প্রস্থানবিন্দু' },
        { type: 'p', text: 'গাবতলী ঢাকা শহরের পশ্চিম দিকের একটি পরিচিত বাস টার্মিনাল। ঢাকা–আরিচা মহাসড়ক ঢাকা, সাভার ও মানিকগঞ্জের দিকে সংযোগ তৈরি করে, আর গাবতলী ওই করিডরের দিকে যাওয়ার প্রচলিত সূচনাস্থল হিসেবে পরিচিত। তাই ঢাকা থেকে সড়কপথে সাভারের দিকে যাওয়ার কথা ভাবলে গাবতলী প্রথমে মাথায় আসে।' },
        { type: 'h2', text: 'চালককে কী বলে উঠবেন' },
        { type: 'steps', items: [
          { title: '“সাভার” নয়, “নবীনগর/স্মৃতিসৌধ” বলুন', text: 'শুধু “সাভার” বললে বাস সাভার শহরের বাজার এলাকায় নামিয়ে দিতে পারে; স্মৃতিসৌধ শহরের ভেতরে নয়, মহাসড়কের পাশে নবীনগরে।' },
          { title: 'নামার জায়গা ঠিক করুন', text: 'ওঠার আগেই চালক বা সহকারীকে বলে রাখুন আপনি স্মৃতিসৌধের প্রবেশপথের কাছে নামতে চান; সেই অনুযায়ী মহাসড়কের পাশে নামার জায়গা ঠিক হবে।' },
          { title: 'সেদিনের তথ্য যাচাই করুন', text: 'বাসের রুট, ছাড়ার সময় ও ভাড়া নির্দিষ্ট নয়; টার্মিনালে দাঁড়িয়ে যিনি বাস দেখাচ্ছেন বা চালকের কাছে নিশ্চিত হয়ে তারপর উঠুন।' }
        ] },
        { type: 'h2', text: 'কোথায় নামবেন' },
        { type: 'p', text: 'নামার সময় লক্ষ্য রাখবেন বাস যেন মহাসড়কের ওপর দিয়েই চলছে; স্মৃতিসৌধের কাছাকাছি নামলে সামান্য হেঁটে বা স্থানীয় যানবাহনে প্রবেশপথে পৌঁছানো যায়। ঠিক কোন পাশে নামবেন সেটি দিক ও দিনভেদে বদলাতে পারে, তাই চালকের সঙ্গে আগেই বলে রাখা ভালো।' },
        { type: 'callout', tone: 'warn', title: 'রুট বা ভাড়ার সংখ্যা এখানে নেই', text: 'নির্দিষ্ট বাস কোম্পানি, রুট নম্বর, ছাড়ার সময় বা ভাড়া দিনভেদে বদলায়, তাই এখানে কোনো সংখ্যা দেওয়া হয়নি। টার্মিনালে সেদিনের তথ্য জেনে নিন।' },
        { type: 'callout', tone: 'note', title: 'ফেরার যাত্রা', text: 'ফেরার সময় একই মহাসড়ক ধরে ঢাকার দিকে বাস ধরতে হয়; ফিরতি বাসের জন্য কোথায় দাঁড়াবেন তা নামার সময়ই স্থানীয়দের কাছে জেনে রাখুন, কারণ বিকেলে ভিড় বাড়ে।' },
        { type: 'h2', text: 'ভাড়া দেওয়া ও হাতের খরচ: কী মনে রাখবেন' },
        { type: 'p', text: 'গাবতলীর বাসে ভাড়া সাধারণত ওঠার সময় কিংবা নামার আগে চালক বা সহকারীকে নগদে দিতে হয়, তাই হাতের কাছে ছোট নোট ও খুচরা টাকা রাখা সুবিধাজনক। নির্দিষ্ট ভাড়ার অঙ্ক দিনভেদে বদলায় এবং এখানে নিশ্চিত তথ্য হিসেবে দেওয়া হয়নি।' },
        { type: 'callout', tone: 'warn', title: 'ফিরতি খরচের জন্য আলাদা নগদ রাখুন', text: 'ফেরার বাস ও স্থানীয় যানবাহনের খরচ মেটাতে আলাদা নগদ টাকা সঙ্গে রাখা ভালো, কারণ সব স্থানে কার্ড বা মোবাইল পেমেন্ট চলে না; কী গ্রহণ করা হয় তা সেদিন যাচাই করুন।' },
        { type: 'links', items: [
          { label: 'ঢাকা থেকে যাওয়ার সারসংক্ষেপ', href: '/transport/from-dhaka/' },
          { label: 'প্রথমবার এলে যা জানা দরকার', href: '/visit/first-time/' }
        ] }
      ],
      faq: [
        { q: 'গাবতলী থেকে স্মৃতিসৌধে বাস পাওয়া যায়?', a: 'গাবতলী ঢাকা–আরিচা করিডরের দিকে যাওয়ার প্রচলিত প্রস্থানবিন্দু, তাই এখান থেকে সাভারমুখী বাসে ওঠা যায়। রুট ও সময় টার্মিনালে যাচাই করুন।' },
        { q: 'চালককে কী বলব?', a: '“সাভার” নয়; “নবীনগর, জাতীয় স্মৃতিসৌধ” বলে নামার জায়গা ঠিক করুন।' },
        { q: 'ভাড়া কত?', a: 'ভাড়া দিনভেদে বদলায় এবং এখানে নিশ্চিত তথ্য হিসেবে দেওয়া হয়নি; চালক বা টার্মিনালের কর্মীর কাছে জেনে নিন।' },
        { q: 'কত সময় পরপর বাস ছাড়ে?', a: 'নির্দিষ্ট সময়সূচি বলা যায় না; টার্মিনালে দাঁড়িয়ে সেদিনের বাস দেখে উঠুন।' },
        { q: 'ফিরতি বাস কোথায় পাব?', a: 'একই মহাসড়ক ধরে ঢাকার দিকে ফিরতি বাস ধরা যায়; কোথায় দাঁড়াবেন তা নামার সময়ই স্থানীয়দের কাছে জেনে রাখুন।' },
        { q: 'বাসের ভাড়া কীভাবে দিতে হয়?', a: 'গাবতলীর বাসে ভাড়া সাধারণত নগদে চালক বা সহকারীকে দেওয়া হয়; ছোট নোট ও খুচরা টাকা সঙ্গে রাখুন। নির্দিষ্ট ভাড়া দিনভেদে বদলায়, তাই সেদিন যাচাই করুন।' },
        { q: 'সব জায়গায় কার্ড বা মোবাইল পেমেন্ট চলে?', a: 'না, সব জায়গায় নয়; বাস ও স্থানীয় যানবাহনে নগদই প্রচলিত। ফিরতি খরচের জন্য আলাদা নগদ টাকা রাখা ভালো।' }
      ]
    },
    en: {
      title: 'Getting to the National Martyrs’ Monument by bus from Gabtoli',
      description: 'How to travel from Gabtoli bus terminal to the National Martyrs’ Monument at Savar: what to tell the driver, where to get off, and how to return.',
      h1: 'From Gabtoli to the National Martyrs’ Monument',
      answer:
        'Gabtoli is a well-known bus terminal on the western side of Dhaka and the usual departure point for the Dhaka–Aricha Highway corridor. Buses from here run towards Savar, so you can get off near the monument beside the highway. Route, operator, fare and departure times are not fixed, so confirm the day’s details with the driver or terminal staff.',
      blocks: [
        { type: 'h2', text: 'Why Gabtoli matters as a starting point' },
        { type: 'p', text: 'Gabtoli is a well-known bus terminal on the western side of Dhaka city. The Dhaka–Aricha Highway links Dhaka, Savar and Manikganj, and Gabtoli is the familiar place from which that corridor is joined. For a road journey towards Savar, Gabtoli is therefore the first point most travellers think of.' },
        { type: 'h2', text: 'What to tell the driver before you board' },
        { type: 'steps', items: [
          { title: 'Say “Nabinagar / the monument”, not just “Savar”', text: 'Saying only “Savar” can mean being dropped in the town market; the monument is not inside the town but at Nabinagar beside the highway.' },
          { title: 'Agree the drop-off point', text: 'Tell the driver or conductor before boarding that you want to get off near the monument entrance, so the highway-side stop is agreed in advance.' },
          { title: 'Verify the day’s details', text: 'Route, departure time and fare are not fixed. Confirm with the person directing buses at the terminal or with the driver.' }
        ] },
        { type: 'h2', text: 'Where to get off' },
        { type: 'p', text: 'Watch that the bus is running along the highway itself; getting off near the monument leaves a short walk or a short local ride to the entrance. Which side you step out on can change with direction and the day, so it is better to agree it with the driver beforehand.' },
        { type: 'callout', tone: 'warn', title: 'No route or fare numbers here', text: 'Specific operators, route numbers, departure times and fares change from day to day, so none are stated here. Ask at the terminal on the day.' },
        { type: 'callout', tone: 'note', title: 'The return trip', text: 'The return follows the same highway back towards Dhaka. Find out while getting off where to wait for a return bus, because the afternoon becomes busier.' },
        { type: 'h2', text: 'Paying the fare and other small costs' },
        { type: 'p', text: 'On Gabtoli buses the fare is usually paid in cash to the driver or conductor when you board or before you get off, so keeping small notes and change handy helps. The exact fare changes from day to day and is not stated here as confirmed.' },
        { type: 'callout', tone: 'warn', title: 'Keep separate cash for the return', text: 'It is worth keeping separate cash for the return bus and any local transport, because cards and mobile payments are not accepted everywhere; check what is accepted on the day.' },
        { type: 'links', items: [
          { label: 'Dhaka to the monument at a glance', href: '/en/transport/from-dhaka/' },
          { label: 'What to know on a first visit', href: '/en/visit/first-time/' }
        ] }
      ],
      faq: [
        { q: 'Can I catch a bus to the monument from Gabtoli?', a: 'Gabtoli is the usual departure point for the Dhaka–Aricha corridor, so you can board a Savar-bound bus there. Verify the route and timing at the terminal.' },
        { q: 'What should I tell the driver?', a: 'Not just “Savar” — say “Nabinagar, National Martyrs’ Monument” and agree the drop-off point.' },
        { q: 'How much is the fare?', a: 'Fares change from day to day and are not stated here as confirmed; ask the driver or terminal staff.' },
        { q: 'How often do buses leave?', a: 'No fixed timetable can be given; board according to the buses present at the terminal that day.' },
        { q: 'Where do I catch a bus back?', a: 'The return follows the same highway towards Dhaka. Ask locally, while getting off, where to wait.' },
        { q: 'How do I pay the bus fare?', a: 'On Gabtoli buses the fare is usually paid in cash to the driver or conductor; keep small notes and change handy. The exact fare changes from day to day, so check on the day.' },
        { q: 'Are cards or mobile payments accepted everywhere?', a: 'No, not everywhere; cash is the norm on buses and local transport. Keep separate cash for the return leg.' }
      ]
    }
  },
  {
    slug: 'transport/from-mirpur',
    section: 'transport',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['transport/from-dhaka', 'transport/from-gabtoli', 'transport/nabinagar-last-mile', 'transport/by-car'],
    bn: {
      title: 'মিরপুর থেকে জাতীয় স্মৃতিসৌধে যাওয়ার পথ',
      description: 'ঢাকার মিরপুর এলাকা থেকে সাভারের জাতীয় স্মৃতিসৌধে যাওয়ার রুটের সারকথা, উপায় বাছাই, সময় ও ফেরার পরিকল্পনা।',
      h1: 'মিরপুর থেকে জাতীয় স্মৃতিসৌধে যাওয়া',
      answer:
        'মিরপুর ঢাকা শহরের উত্তর-পশ্চিম অংশ। সেখান থেকে স্মৃতিসৌধে যেতে হলে শহরের পশ্চিম দিকের বাহ্যিক পথ ধরে ঢাকা–আরিচা করিডরে মিশে সাভারের দিকে যেতে হয়। বাসে হলে করিডরের পরিচিত প্রস্থানবিন্দু গাবতলী হয়ে যাওয়া সাধারণ, আর ব্যক্তিগত গাড়ি বা রাইড-সেবায় সরাসরি মহাসড়ক ধরে যাওয়া যায়। সময় ও রুট দিনভেদে বদলায়, তাই নির্দিষ্ট সংখ্যা ধরে না নিয়ে যাত্রার দিন যাচাই করে বের হন।',
      blocks: [
        { type: 'h2', text: 'মিরপুর থেকে রুটের সারকথা' },
        { type: 'p', text: 'মিরপুর শহরের উত্তর-পশ্চিমে অবস্থিত, আর স্মৃতিসৌধ শহরের পশ্চিম দিকে সাভারে। তাই মিরপুর থেকে ছাড়লে শহরের একাংশ পেরিয়ে পশ্চিমমুখী করিডরে মিলিত হয়ে ঢাকা–আরিচা মহাসড়ক ধরে সাভারের দিকে যেতে হয়। পুরো যাত্রাটিই কয়েকটি সড়ক ও মোড় পেরোনো জড়িত, তাই একক রুট ধরে নেওয়ার চেয়ে যাত্রার দিন পরিস্থিতি দেখে সিদ্ধান্ত নেওয়া ভালো।' },
        { type: 'h2', text: 'কোন উপায় বেছে নেবেন' },
        { type: 'ul', items: [
          'বাস — করিডরের পরিচিত প্রস্থানবিন্দু গাবতলী হয়ে সাভারমুখী বাস ধরা যায়; রুট ও সময় টার্মিনালে যাচাই করুন।',
          'ব্যক্তিগত গাড়ি — মহাসড়ক ধরে সরাসরি যাওয়া যায়; গন্তব্য স্মৃতিসৌধ হিসেবে সেট করে চালককে প্রবেশপথ চিনিয়ে দিন।',
          'রাইড-সেবা — শহরের ভেতরের রাস্তা চিনতে হয় বলে সময় বেশি লাগতে পারে; ফেরার পিক-আপ আগেই ঠিক করুন।'
        ] },
        { type: 'h2', text: 'সময় ও ভিড়' },
        { type: 'p', text: 'মিরপুর থেকে যাত্রায় শহরের ভেতরের রাস্তা ও তারপর মহাসড়ক—দুই ধাপই থাকে, তাই ভিড়ের সময় সময় অনেক বাড়তে পারে। নির্দিষ্ট কোনো সময়সীমা নিশ্চিত তথ্য হিসেবে বলা যায় না; সকালে বেরোলে সাধারণত তাড়াতাড়ি পৌঁছানো সহজ, তবে রাস্তার অবস্থা যাত্রার দিন দেখে নেওয়া উচিত।' },
        { type: 'callout', tone: 'warn', title: 'সময়সীমা নিশ্চিত নয়', text: 'শহরের ভেতরের ভিড়, রাস্তার কাজ বা বিশেষ দিনের নিয়ন্ত্রণে সময় বদলায়। বাড়তি সময় ধরে পরিকল্পনা করুন।' },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'নির্দিষ্ট রুট বা ভাড়া এখানে দেওয়া হয়নি, কারণ সেগুলো দিনভেদে বদলায়। স্থানীয় সূত্র বা চালকের কাছে চলতি তথ্য নিন।' },
        { type: 'h2', text: 'চালককে গন্তব্য বোঝানোর সহজ নিয়ম' },
        { type: 'p', text: 'মিরপুর থেকে রাইড-সেবা বা নিজের গাড়িতে গেলে চালককে শুধু “সাভার” বললে তিনি শহরের বাজারের দিকে নিয়ে যেতে পারেন। তাই “ঢাকা–আরিচা মহাসড়ক ধরে স্মৃতিসৌধ, নবীনগর” বলে বুঝিয়ে দিন এবং অ্যাপে গন্তব্য জাতীয় স্মৃতিসৌধের নিবন্ধন বা প্লাস কোড W763+GW হিসেবে সেট করুন।' },
        { type: 'callout', tone: 'note', title: 'প্রবেশপথ কাছাকাছি গিয়ে জিজ্ঞেস করুন', text: 'চালক কোন দিক দিয়ে প্রবেশ করা যায় তা জানেন কি না নিশ্চিত না থাকলে, কাছাকাছি পৌঁছে নিরাপত্তাকর্মীর কাছ থেকে চলতি প্রবেশপথ জেনে নিন।' },
        { type: 'links', items: [
          { label: 'নবীনগরে শেষ ধাপ', href: '/transport/nabinagar-last-mile/' },
          { label: 'নিজের গাড়িতে যাওয়া', href: '/transport/by-car/' }
        ] }
      ],
      faq: [
        { q: 'মিরপুর থেকে স্মৃতিসৌধে কীভাবে যাব?', a: 'শহরের পশ্চিম দিকের বাহ্যিক পথ ধরে ঢাকা–আরিচা করিডরে মিলিত হয়ে সাভারের দিকে যেতে হয়; বাস, গাড়ি বা রাইড-সেবা ব্যবহার করা যায়।' },
        { q: 'মিরপুর থেকে স্মৃতিসৌধ কত দূরে?', a: 'শহরের ভেতরের অংশ পেরিয়ে যেতে হয়; নির্দিষ্ট দূরত্ব বা সময় রুটভেদে বদলায়, যাত্রার দিন যাচাই করুন।' },
        { q: 'বাসে যেতে হলে কোথায় উঠব?', a: 'গাবতলী করিডরের পরিচিত প্রস্থানবিন্দু; সেখানে গিয়ে সাভারমুখী বাসে ওঠা সাধারণ প্রবণতা।' },
        { q: 'ফেরার পথ কঠিন?', a: 'বিকেলে ভিড় বাড়ে, তাই ফিরতি বাসের স্থান বা রাইড সেবার পিক-আপ আগেই ঠিক করে রাখা ভালো।' },
        { q: 'গাড়ি নিয়ে গেলে গন্তব্য কী দেব?', a: '“National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW দিন; শুধু “সাভার” দিলে শহরে চলে যেতে পারেন।' },
        { q: 'রাইড-সেবার চালককে কী বলব?', a: '“সাভার” নয়; “ঢাকা–আরিচা মহাসড়ক ধরে স্মৃতিসৌধ, নবীনগর” বলে বুঝিয়ে দিন এবং অ্যাপে স্মৃতিসৌধের নিবন্ধন বা প্লাস কোড W763+GW সেট করুন।' },
        { q: 'শুধু “সাভার” বললে কী সমস্যা?', a: 'চালক শহরের বাজারের দিকে নিয়ে যেতে পারেন; স্মৃতিসৌধ শহরের ভেতরে নয়, মহাসড়কের পাশে নবীনগরে।' }
      ]
    },
    en: {
      title: 'Getting to the National Martyrs’ Monument from Mirpur',
      description: 'Routes, options, timing and the return trip for travelling from the Mirpur area of Dhaka to the National Martyrs’ Monument at Savar.',
      h1: 'From Mirpur to the National Martyrs’ Monument',
      answer:
        'Mirpur lies in the north-western part of Dhaka. To reach the monument you cross towards the western side of the city and join the Dhaka–Aricha corridor, then head on to Savar. By bus, travelling via Gabtoli — the usual departure point for that corridor — is common; a private car or ride-hailing car can go more directly along the highway. Timing and routing vary by day, so verify rather than assuming a fixed number.',
      blocks: [
        { type: 'h2', text: 'The route in short' },
        { type: 'p', text: 'Mirpur sits in the north-west of the city, while the monument is to the west, at Savar. Leaving Mirpur therefore means crossing part of the city, joining the western corridor, and then following the Dhaka–Aricha Highway towards Savar. The whole trip involves several roads and junctions, so it is better to decide on the day than to assume a single fixed route.' },
        { type: 'h2', text: 'Which option to choose' },
        { type: 'ul', items: [
          'Bus — travelling via Gabtoli, the usual departure point for the corridor, is common; verify route and timing at the terminal.',
          'Private car — go straight along the highway; set the monument as the destination and show the driver the entrance.',
          'Ride-hailing — knowing the inner-city roads matters, so allow extra time; agree the return pickup in advance.'
        ] },
        { type: 'h2', text: 'Timing and traffic' },
        { type: 'p', text: 'A trip from Mirpur combines inner-city roads with the highway, so peak-hour traffic can add a great deal of time. No fixed duration can be stated as confirmed; leaving earlier usually makes arrival easier, but check road conditions on the day.' },
        { type: 'callout', tone: 'warn', title: 'No fixed duration', text: 'Inner-city congestion, road works or special-day restrictions can change the time. Allow extra time in your plan.' },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'No specific routes or fares are stated here, because they change from day to day. Get the current picture from a local source or your driver.' },
        { type: 'h2', text: 'The simple way to brief your driver' },
        { type: 'p', text: 'If you take a ride-hailing car or your own car from Mirpur, telling the driver only “Savar” can send you towards the town market. Say “the monument at Nabinagar, along the Dhaka–Aricha Highway”, and set the destination in the app to the National Martyrs’ Monument listing or the Plus Code W763+GW.' },
        { type: 'callout', tone: 'note', title: 'Ask about the entrance as you arrive', text: 'If you are not sure the driver knows which way visitors enter, confirm the current entrance with a security guard once you are close.' },
        { type: 'links', items: [
          { label: 'The last leg at Nabinagar', href: '/en/transport/nabinagar-last-mile/' },
          { label: 'Going by car', href: '/en/transport/by-car/' }
        ] }
      ],
      faq: [
        { q: 'How do I get to the monument from Mirpur?', a: 'Cross towards the western side of the city, join the Dhaka–Aricha corridor and head to Savar; bus, car or ride-hailing all work.' },
        { q: 'How far is it from Mirpur?', a: 'You cross part of the city first; the exact distance and time vary with the route, so verify on the day.' },
        { q: 'Where do I catch a bus?', a: 'Gabtoli is the usual departure point for the corridor; travelling there to board a Savar-bound bus is common.' },
        { q: 'Is the return trip difficult?', a: 'The afternoon gets busier, so fixing your return bus stop or ride-hailing pickup in advance is wise.' },
        { q: 'If I drive, what destination do I set?', a: 'Set “National Martyrs’ Monument” or the Plus Code W763+GW; setting only “Savar” can take you into the town.' },
        { q: 'What should I tell a ride-hailing driver?', a: 'Not just “Savar”; say “the monument at Nabinagar, along the Dhaka–Aricha Highway”, and set the monument listing or the Plus Code W763+GW in the app.' },
        { q: 'What is the problem with saying only “Savar”?', a: 'The driver can head into the town market; the monument is not inside the town but at Nabinagar beside the highway.' }
      ]
    }
  },
  {
    slug: 'transport/from-uttara-airport',
    section: 'transport',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['transport/from-dhaka', 'transport/by-car', 'visit/location', 'transport/parking-dropoff'],
    bn: {
      title: 'উত্তরা ও বিমানবন্দর থেকে স্মৃতিসৌধে যাওয়ার পরিকল্পনা',
      description: 'উত্তরা বা হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর থেকে সাভারের জাতীয় স্মৃতিসৌধে যাওয়ার বাস্তবসম্মত উপায়, ব্যাগ নিয়ে বিবেচনা ও সময়।',
      h1: 'উত্তরা বা বিমানবন্দর থেকে জাতীয় স্মৃতিসৌধে যাওয়া',
      answer:
        'উত্তরা ও হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর ঢাকা শহরের উত্তরে, আর স্মৃতিসৌধ শহরের পশ্চিমে সাভারে। তাই বিমানবন্দর থেকে যেতে হলে প্রায় পুরো শহর পেরিয়ে ঢাকা–আরিচা করিডরে পৌঁছাতে হয়। ব্যাগ নিয়ে বাস বদলানো ঝামেলার, তাই সাধারণত রাইড-সেবা, ট্যাক্সি বা ব্যক্তিগত গাড়িই বাস্তবসম্মত; সময় যানজটে ব্যাপকভাবে বাড়তে পারে, তাই নির্দিষ্ট সংখ্যা ধরে না নিয়ে বাড়তি সময় রাখুন।',
      blocks: [
        { type: 'h2', text: 'দুই প্রান্তের অবস্থান' },
        { type: 'p', text: 'উত্তরা ও বিমানবন্দর শহরের উত্তর প্রান্তে, আর স্মৃতিসৌধ শহরের পশ্চিম দিকে সাভারে—দুই প্রান্ত মোটামুটি বিপরীত দিকে। তাই বিমানবন্দর থেকে স্মৃতিসৌধের যাত্রায় শহরের বড় একটি অংশ পেরোতে হয়, যা যাত্রার সবচেয়ে বড় অনিশ্চয়তার কারণ।' },
        { type: 'h2', text: 'ব্যাগ নিয়ে বাস্তবসম্মত উপায়' },
        { type: 'ul', items: [
          'রাইড-সেবা বা ট্যাক্সি — ব্যাগসহ সবচেয়ে সরল; গন্তব্য স্মৃতিসৌধের নিবন্ধন হিসেবে সেট করুন।',
          'ব্যক্তিগত গাড়ি — পরিচিত চালক থাকলে নির্ভরযোগ্য; মহাসড়ক ধরে সরাসরি যাওয়া যায়।',
          'বাস — সম্ভব হলেও ব্যাগ নিয়ে বদল ও ভিড়ের ঝামেলা থাকে, তাই প্রথম পছন্দ হিসেবে ভাবার প্রয়োজন নেই।'
        ] },
        { type: 'h2', text: 'শহর পেরোনোর সময় সম্পর্কে সৎ ধারণা' },
        { type: 'p', text: 'বিমানবন্দর থেকে সাভারের যাত্রায় শহরের ভেতরের অংশ পেরোতে হয়; ভিড়ের সময় এটি উল্লেখযোগ্যভাবে দীর্ঘ হতে পারে। নির্দিষ্ট কোনো মিনিট বা ঘণ্টা নিশ্চিত তথ্য হিসেবে বলা যায় না; বিমান অবতরণের পরপর টাইট সংযোগ ধরে পরিকল্পনা করবেন না, কারণ যানজট ও যাত্রার দিনের পরিস্থিতি সময় নির্ধারণ করে।' },
        { type: 'callout', tone: 'warn', title: 'টাইট সংযোগ ধরে পরিকল্পনা নয়', text: 'ফ্লাইট বা পরের গন্তব্যের সঙ্গে টানা সময় ধরে পরিকল্পনা করলে যানজটে সমস্যা হতে পারে। সম্ভব হলে স্মৃতিসৌধ-যাত্রার আগে বিশ্রাম নিন।' },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'নির্দিষ্ট ভাড়া, সময় বা রুট এখানে দেওয়া হয়নি। রাইড-সেবার অ্যাপে দূরত্ব দেখুন এবং চালকের সঙ্গে নামার জায়গা আগেই ঠিক করুন।' },
        { type: 'h2', text: 'বিমানবন্দর ছাড়ার আগে যা গুছিয়ে নিন' },
        { type: 'p', text: 'বিমানবন্দর থেকে রওনা হওয়ার আগে ফোনে ম্যাপ অফলাইনে সেভ করে নিন এবং গন্তব্য হিসেবে জাতীয় স্মৃতিসৌধের নিবন্ধন বা প্লাস কোড W763+GW আগেই সেট করে রাখুন। হাতের কাছে কিছু নগদ টাকা রাখাও কাজে দেয়, কারণ সব স্থানীয় যানবাহন বা দোকানে কার্ড ও মোবাইল পেমেন্ট চলে না।' },
        { type: 'ul', items: [
          'ম্যাপ অফলাইনে সেভ করুন — ভিড়ে বা রাস্তায় নেটওয়ার্ক দুর্বল হলে এটি কাজে লাগে।',
          'নগদ টাকা ও পানি সঙ্গে রাখুন — যাত্রা দীর্ঘ হলে বিলম্বে কাজে দেয়; নির্দিষ্ট দোকান বা মূল্য আমাদের জানা নেই।',
          'ফিরতি যোগাযোগ ঠিক করুন — ট্যাক্সি, রাইড-সেবা বা পরিচিত চালকের নম্বর আগেই সংরক্ষণ করুন।'
        ] },
        { type: 'links', items: [
          { label: 'নিজের গাড়িতে যাওয়া', href: '/transport/by-car/' },
          { label: 'পার্কিং ও নামা-ওঠা', href: '/transport/parking-dropoff/' }
        ] }
      ],
      faq: [
        { q: 'বিমানবন্দর থেকে স্মৃতিসৌধে কীভাবে যাব?', a: 'বিমানবন্দর শহরের উত্তরে, স্মৃতিসৌধ পশ্চিমে; তাই প্রায় পুরো শহর পেরোতে হয়। রাইড-সেবা, ট্যাক্সি বা গাড়িই বাস্তবসম্মত।' },
        { q: 'ব্যাগ নিয়ে বাস নেওয়া যায়?', a: 'সম্ভব হলেও বদল ও ভিড়ের ঝামেলা থাকে; ব্যাগসহ রাইড-সেবা বা ট্যাক্সি সাধারণত সহজ।' },
        { q: 'কত সময় লাগবে?', a: 'নির্দিষ্ট সময় নিশ্চিত নয়; শহরের ভিড়ে বদলায়। বাড়তি সময় ধরে পরিকল্পনা করুন।' },
        { q: 'ফ্লাইটের পরপরই যাওয়া উচিত?', a: 'টাইট সংযোগ ধরে না যাওয়াই ভালো; যানজটে সময় বেড়ে যেতে পারে।' },
        { q: 'গন্তব্য অ্যাপে কী দেব?', a: '“National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW দিন।' },
        { q: 'বিমানবন্দর ছাড়ার আগে কী গুছিয়ে নেব?', a: 'গন্তব্য ম্যাপে অফলাইনে সেভ করুন, কিছু নগদ টাকা ও পানি সঙ্গে রাখুন, এবং ফিরতি ট্যাক্সি বা রাইড-সেবার যোগাযোগ আগেই সংরক্ষণ করুন।' },
        { q: 'ফোনে ইন্টারনেট না থাকলে পথ কীভাবে পাব?', a: 'রওনার আগেই অফলাইন ম্যাপে গন্তব্য সেভ করে রাখুন এবং প্লাস কোড W763+GW লিখে রাখুন; নামার জায়গাও চালককে বলে রাখুন।' }
      ]
    },
    en: {
      title: 'Getting to the National Martyrs’ Monument from Uttara or the airport',
      description: 'Realistic transport options, luggage considerations and timing for reaching the National Martyrs’ Monument at Savar from Uttara or Hazrat Shahjalal International Airport.',
      h1: 'From Uttara or the airport to the National Martyrs’ Monument',
      answer:
        'Uttara and Hazrat Shahjalal International Airport are in the north of Dhaka city, while the monument is to the west at Savar. Getting there from the airport means crossing most of the city to reach the Dhaka–Aricha corridor. With luggage, ride-hailing, a taxi or a private car is usually the practical choice; traffic can add a great deal of time, so build in extra rather than relying on a fixed number.',
      blocks: [
        { type: 'h2', text: 'Where the two ends lie' },
        { type: 'p', text: 'Uttara and the airport sit at the northern edge of the city, and the monument is to the west at Savar — roughly opposite ends. A trip from the airport therefore crosses a large part of the city, and that crossing is the biggest source of uncertainty in the journey.' },
        { type: 'h2', text: 'Practical options with luggage' },
        { type: 'ul', items: [
          'Ride-hailing or taxi — the simplest with bags; set the destination to the monument listing.',
          'Private car — reliable if you have a known driver; you can go straight along the highway.',
          'Bus — possible, but transferring and crowding with bags is awkward, so it is not the obvious first choice.'
        ] },
        { type: 'h2', text: 'An honest word on crossing the city' },
        { type: 'p', text: 'An airport-to-Savar trip crosses the inner city, and in peak traffic that can take considerably longer. No fixed number of minutes or hours can be given as confirmed. Do not plan a tight connection straight after landing: congestion and the day’s conditions decide the time.' },
        { type: 'callout', tone: 'warn', title: 'Do not plan tight connections', text: 'Chaining the monument trip tightly to a flight or a next stop can go wrong in traffic. If possible, rest before heading to Savar.' },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'No specific fares, times or routes are stated here. Check distance in your ride-hailing app and agree the drop-off point with the driver in advance.' },
        { type: 'h2', text: 'What to sort out before leaving the airport' },
        { type: 'p', text: 'Before setting off from the airport, save the map offline on your phone and set the destination in advance to the National Martyrs’ Monument listing or the Plus Code W763+GW. Keeping some cash to hand also helps, because cards and mobile payments are not accepted on every local vehicle or in every shop.' },
        { type: 'ul', items: [
          'Save the map offline — it helps when the network is weak in the crowds or along the road.',
          'Carry cash and water — useful if the trip runs long; we do not know of a specific shop or price.',
          'Arrange the return contact — save a taxi, ride-hailing or known driver number in advance.'
        ] },
        { type: 'links', items: [
          { label: 'Going by car', href: '/en/transport/by-car/' },
          { label: 'Parking and drop-off', href: '/en/transport/parking-dropoff/' }
        ] }
      ],
      faq: [
        { q: 'How do I get to the monument from the airport?', a: 'The airport is north and the monument is west, so you cross most of the city; ride-hailing, a taxi or a car is the practical choice.' },
        { q: 'Can I take a bus with luggage?', a: 'It is possible, but transferring and crowding with bags is awkward; ride-hailing or a taxi is generally easier.' },
        { q: 'How long does it take?', a: 'No fixed time is confirmed; it varies with city traffic. Allow extra time.' },
        { q: 'Should I go straight after landing?', a: 'Avoid a tight connection; traffic can push the time out considerably.' },
        { q: 'What destination do I set?', a: 'Set “National Martyrs’ Monument” or the Plus Code W763+GW.' },
        { q: 'What should I sort out before leaving the airport?', a: 'Save the destination map offline, carry some cash and water, and save the contact for a return taxi or ride-hailing car in advance.' },
        { q: 'How do I navigate without internet on my phone?', a: 'Save the destination offline in your map app before you leave and note the Plus Code W763+GW; also tell the driver where you want to get off.' }
      ]
    }
  },
  {
    slug: 'transport/from-savar',
    section: 'transport',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['transport/nabinagar-last-mile', 'transport/from-gabtoli', 'visit/location', 'nearby/food-rest-nabinagar'],
    bn: {
      title: 'সাভার শহর থেকে জাতীয় স্মৃতিসৌধে যাওয়ার উপায়',
      description: 'সাভার শহর থেকে জাতীয় স্মৃতিসৌধের দূরত্বের ধারণা, কোন সড়ক ধরে যাবেন, স্থানীয় যানবাহন এবং শহরে ফেরার পরিকল্পনা।',
      h1: 'সাভার শহর থেকে জাতীয় স্মৃতিসৌধে যাওয়া',
      answer:
        'স্মৃতিসৌধ সাভার শহরের ভেতরে নয়; এটি শহরের বাইরে ঢাকা–আরিচা মহাসড়কের পাশে নবীনগরে। সাভার শহর থেকে মহাসড়ক ধরে সঠিক দিকে গেলে অল্প সময়েই প্রবেশপথের কাছে পৌঁছানো যায়। স্থানীয় যানবাহন বা মহাসড়কগামী বাস ব্যবহার করা যায়, তবে কোন দিকে ও কোন পাশে নামবেন সেটি যাত্রার দিন চালক বা স্থানীয়দের কাছে জেনে নিন।',
      blocks: [
        { type: 'h2', text: 'সাভার শহর থেকে স্মৃতিসৌধের দিক' },
        { type: 'p', text: 'অনেকে ভাবেন স্মৃতিসৌধ সাভার শহরের ভেতরে; আসলে এটি শহরের বাইরে, নবীনগর এলাকায় মহাসড়কের পাশে। তাই সাভার শহর থেকে যাত্রা মানে শহরের বাইরে মহাসড়কের দিকে যাওয়া, সাভার পৌর এলাকার ভেতরে ঘোরা নয়।' },
        { type: 'h2', text: 'কোন সড়ক ধরে যাবেন' },
        { type: 'p', text: 'ঢাকা–আরিচা মহাসড়ক ঢাকা, সাভার ও মানিকগঞ্জের দিকে সংযোগ তৈরি করে এবং স্মৃতিসৌধ এই মহাসড়কের পাশেই অবস্থিত। তাই সাভার শহর থেকে মহাসড়ক ধরে নবীনগরের দিকে গেলে প্রবেশপথের কাছাকাছি পৌঁছানো যায়। স্মৃতিসৌধ কোন পাশে পড়ে সেটি যাত্রার দিক অনুযায়ী বদলায়, তাই নামার আগে চালকের কাছে নিশ্চিত হন।' },
        { type: 'h2', text: 'স্থানীয় যানবাহন ও শহরে ফেরা' },
        { type: 'ul', items: [
          'স্থানীয় যানবাহন — সাভার থেকে নবীনগর ও মহাসড়কের দিকে যাওয়ার জন্য ছোট যানবাহন ব্যবহার করা যায়।',
          'মহাসড়কগামী বাস — মহাসড়ক ধরে চলা বাসে উঠে স্মৃতিসৌধের কাছাকাছি নামা যায়।',
          'ফেরা — শহরে ফিরতে একই মহাসড়ক ধরে উল্টো দিকে যানবাহন ধরতে হয়; বিকেলে ভিড় বাড়ে।'
        ] },
        { type: 'callout', tone: 'warn', title: 'নামার দিক যাচাই করুন', text: 'মহাসড়কের কোন পাশে স্মৃতিসৌধ পড়বে তা যাত্রার দিকভেদে বদলায়; ভুল পাশে নামলে রাস্তা পার হতে হয়, যা নিরাপদ নয়। চালকের সঙ্গে আগেই ঠিক করুন।' },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'নির্দিষ্ট ভাড়া বা সময় এখানে দেওয়া হয়নি; স্থানীয় যানবাহনের ভাড়া ও চলাচল দিনভেদে বদলায়। চালকের কাছে জেনে নিন।' },
        { type: 'h2', text: 'শেষ ধাপে কত সময় হাতে রাখবেন' },
        { type: 'p', text: 'সাভার শহর থেকে স্মৃতিসৌধের দূরত্ব কম হলেও মহাসড়কে যানজট, স্থানীয় যানবাহনের অপেক্ষা বা নিরাপদে নামার জায়গা খোঁজার সময় লাগতে পারে। নির্দিষ্ট কোনো মিনিটের হিসাব আমরা নিশ্চিত তথ্য হিসেবে দিচ্ছি না; যাত্রার দিন ভিড় ও রাস্তার অবস্থা দেখে বাড়তি সময় ধরে বের হন।' },
        { type: 'callout', tone: 'warn', title: 'ছোট যাত্রা, তবু বাড়তি সময়', text: 'শহরের কাছে হলেও মহাসড়কের ভিড়ে ছোট যাত্রাও লম্বা হতে পারে; বিশেষ করে অনুষ্ঠানের দিনে বাড়তি সময় রাখুন এবং আলো থাকতে ফিরুন।' },
        { type: 'links', items: [
          { label: 'নবীনগরে খাবার ও বিশ্রাম', href: '/nearby/food-rest-nabinagar/' },
          { label: 'সাভারে আধা দিনের ভ্রমণ', href: '/itineraries/savar-half-day/' }
        ] }
      ],
      faq: [
        { q: 'সাভার শহর থেকে স্মৃতিসৌধ কি হাঁটা দূরত্বে?', a: 'না, স্মৃতিসৌধ শহরের ভেতরে নয়; মহাসড়কের পাশে নবীনগরে। তাই যানবাহন নিয়ে যাওয়া স্বাভাবিক।' },
        { q: 'কোন সড়ক ধরে যাব?', a: 'ঢাকা–আরিচা মহাসড়ক ধরে নবীনগরের দিকে; স্মৃতিসৌধ এই মহাসড়কের পাশে।' },
        { q: 'স্থানীয় যানবাহন পাওয়া যায়?', a: 'হ্যাঁ, সাভার থেকে নবীনগর ও মহাসড়কের দিকে যাওয়ার জন্য স্থানীয় যানবাহন ব্যবহার করা যায়; ভাড়া যাত্রার দিন জেনে নিন।' },
        { q: 'কোন পাশে নামব?', a: 'স্মৃতিসৌধ কোন পাশে পড়বে তা দিকভেদে বদলায়; ভুল পাশে নামলে মহাসড়ক পার হতে হয়, তাই চালকের সঙ্গে আগেই ঠিক করুন।' },
        { q: 'শহরে ফিরব কীভাবে?', a: 'একই মহাসড়ক ধরে উল্টো দিকে যানবাহন ধরতে হয়; বিকেলে ভিড় বাড়ে, তাই সময় হাতে রাখুন।' },
        { q: 'সাভার থেকে স্মৃতিসৌধ যেতে কত সময় লাগে?', a: 'দূরত্ব কম হলেও মহাসড়কের ভিড়ে সময় বদলায়; নির্দিষ্ট হিসাব নিশ্চিত নয়, তাই বাড়তি সময় হাতে রাখুন।' },
        { q: 'শেষ ধাপে কেন সময় বেশি লাগতে পারে?', a: 'মহাসড়কে যানজট, স্থানীয় যানবাহনের অপেক্ষা এবং নিরাপদে নামার জায়গা খোঁজার কারণে সময় লেগে যেতে পারে।' }
      ]
    },
    en: {
      title: 'Getting from Savar town to the National Martyrs’ Monument',
      description: 'How far the monument is from Savar town, which road to take, the local transport options, and how to get back into town.',
      h1: 'From Savar town to the National Martyrs’ Monument',
      answer:
        'The monument is not inside Savar town: it stands outside it, beside the Dhaka–Aricha Highway at Nabinagar. From Savar town, following the highway in the right direction brings you close to the entrance in a short time. Local transport or a highway bus can be used, but confirm on the day which direction and which side you should get off on.',
      blocks: [
        { type: 'h2', text: 'Which way the monument lies from the town' },
        { type: 'p', text: 'Many people assume the monument is inside Savar town. In fact it is outside the town, at Nabinagar beside the highway. Travelling from the town therefore means heading out to the highway rather than moving around inside the municipal area.' },
        { type: 'h2', text: 'Which road to take' },
        { type: 'p', text: 'The Dhaka–Aricha Highway links Dhaka, Savar and Manikganj, and the monument stands beside this highway. Following the highway towards Nabinagar therefore brings you close to the entrance. Which side of the road the monument falls on changes with your direction of travel, so confirm with the driver before you get off.' },
        { type: 'h2', text: 'Local transport and getting back into town' },
        { type: 'ul', items: [
          'Local transport — small local vehicles can be used for the run from Savar towards Nabinagar and the highway.',
          'Highway bus — boarding a bus running along the highway lets you get off near the monument.',
          'Return — heading back into town means catching transport the other way along the same highway; the afternoon gets busier.'
        ] },
        { type: 'callout', tone: 'warn', title: 'Check which side you get off on', text: 'Which side of the highway the monument falls on changes with direction; getting off on the wrong side means crossing the highway, which is not safe. Agree it with the driver beforehand.' },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'No specific fares or times are stated here; local transport fares and frequency change from day to day. Ask the driver.' },
        { type: 'h2', text: 'How much time to allow for the last leg' },
        { type: 'p', text: 'The monument is close to Savar town, but highway congestion, waiting for local transport or finding a safe place to get off can all add time. No exact number of minutes is stated here as confirmed; set off with extra time and judge the traffic and road conditions on the day.' },
        { type: 'callout', tone: 'warn', title: 'A short trip that can still take longer', text: 'Even close to town, a short trip can stretch out in highway traffic; allow extra time, especially on ceremony days, and return while it is still light.' },
        { type: 'links', items: [
          { label: 'Food and rest at Nabinagar', href: '/en/nearby/food-rest-nabinagar/' },
          { label: 'A half day at Savar', href: '/en/itineraries/savar-half-day/' }
        ] }
      ],
      faq: [
        { q: 'Is the monument within walking distance of Savar town?', a: 'No. It is not inside the town but at Nabinagar beside the highway, so taking transport is normal.' },
        { q: 'Which road do I take?', a: 'Follow the Dhaka–Aricha Highway towards Nabinagar; the monument is beside this highway.' },
        { q: 'Can I get local transport?', a: 'Yes, local vehicles run from Savar towards Nabinagar and the highway; check the fare on the day.' },
        { q: 'Which side should I get off on?', a: 'It depends on your direction of travel; getting off on the wrong side means crossing the highway, so agree with the driver first.' },
        { q: 'How do I get back into town?', a: 'Catch transport the other way along the same highway; the afternoon is busier, so allow time.' },
        { q: 'How long does it take to reach the monument from Savar?', a: 'The distance is short, but highway traffic makes the time vary; no exact figure is confirmed, so allow extra time.' },
        { q: 'Why can the last leg take longer?', a: 'Highway congestion, waiting for local transport and finding a safe place to get off can all add time.' }
      ]
    }
  },
  {
    slug: 'transport/nabinagar-last-mile',
    section: 'transport',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['transport/from-dhaka', 'transport/from-gabtoli', 'visit/location', 'transport/parking-dropoff'],
    bn: {
      title: 'নবীনগরে স্মৃতিসৌধের প্রবেশপথ: শেষ ধাপের নির্দেশনা',
      description: 'নবীনগরে নেমে স্মৃতিসৌধের সঠিক প্রবেশপথ খুঁজে পাওয়া, নিরাপদে নামা এবং কেন মানচিত্রে “সাভার” দিলে ভুল জায়গায় পৌঁছানো হয়।',
      h1: 'নবীনগরে স্মৃতিসৌধের শেষ ধাপ',
      answer:
        'নবীনগরে স্মৃতিসৌধের শেষ ধাপ মানে মহাসড়কের পাশে সঠিক প্রবেশপথ খুঁজে পাওয়া। মানচিত্রে গন্তব্য “সাভার” দিলে আপনি সাভার শহরে নেমে যেতে পারেন, কারণ স্মৃতিসৌধ নবীনগরে মহাসড়কের পাশে। তাই গন্তব্য হিসেবে স্মৃতিসৌধের নিবন্ধন বা প্লাস কোড W763+GW ব্যবহার করুন, নিরাপদ নামার জায়গা চালকের সঙ্গে আগেই ঠিক করুন, আর কোন দিক দিয়ে ঢুকতে হয় সেটি গাড়ি থেকে নামার আগে নিশ্চিত করুন।',
      blocks: [
        { type: 'map' },
        { type: 'h2', text: 'নবীনগর—যাত্রার শেষ ধাপ' },
        { type: 'p', text: 'স্মৃতিসৌধ ঢাকা–আরিচা মহাসড়কের পাশে নবীনগর এলাকায় অবস্থিত। তাই শেষ কয়েক কিলোমিটার গুরুত্বপূর্ণ: গাড়ি মহাসড়ক ছেড়ে যাওয়ার আগেই নিরাপদে নামা, আর দর্শনার্থীদের প্রবেশপথ কোন দিকে সেটি চালক বা নিরাপত্তাকর্মীর কাছে নিশ্চিত করা।' },
        { type: 'h2', text: 'কেন “সাভার” লিখলে ভুল জায়গায় নামেন' },
        { type: 'p', text: 'মানচিত্রে শুধু “সাভার” বা “সাভার বাজার” লিখলে ফলাফল সাধারণত সাভার শহরের দিকে দেখায়। কিন্তু স্মৃতিসৌধ শহরের ভেতরে নয়; এটাই সবচেয়ে পরিচিত ভুল। তাই গন্তব্য হিসেবে “National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” নিবন্ধন বা প্লাস কোড ব্যবহার করুন, যাতে গাড়ি স্মৃতিসৌধের কাছে গিয়ে থামে।' },
        { type: 'callout', tone: 'warn', title: 'প্রবেশপথ বদলাতে পারে', text: 'দর্শনার্থীদের প্রবেশ কোন দিক দিয়ে হবে তা দিন ও অনুষ্ঠানের ভিত্তিতে বদলাতে পারে। গাড়ি থেকে নামার আগে নিরাপত্তাকর্মী বা স্থানীয়দের কাছে চলতি প্রবেশপথ নিশ্চিত করুন, কোনো একটি গেট ধরে নেবেন না।' },
        { type: 'steps', items: [
          { title: 'সঠিক প্রবেশপথ চিনুন', text: 'কোন দিক দিয়ে দর্শনার্থীদের ঢুকতে হয় সেটি গাড়ি থেকে নামার আগে নিরাপত্তাকর্মী বা স্থানীয়দের কাছে নিশ্চিত করুন; নির্দিষ্ট একটি গেট আগেই ধরে নেবেন না।' },
          { title: 'নিরাপদে নামুন', text: 'মহাসড়কের চলতি লেনে হুট করে নামবেন না; চালককে বলুন এমন জায়গায় থামাতে যেখানে পাশে নিরাপদে দাঁড়ানো যায় এবং যান চলাচলে বাধা হয় না।' },
          { title: 'ফেরার পিক-আপ ঠিক করুন', text: 'রাইড সেবা বা নিজের গাড়ি থাকলে ফেরার সময় কোথায় আবার উঠবেন তা আগেই বলে রাখুন; ব্যস্ত সময়ে নির্দিষ্ট জায়গায় গাড়ি পাওয়া সহজ হয়।' }
        ] },
        { type: 'callout', tone: 'note', title: 'ফেরার আগে', text: 'নবীনগর এলাকায় ফিরতি যানবাহন পাওয়া যায়, তবে বিকেলে ভিড় বাড়ে। ফেরার স্থান ও সময় আগে থেকে ঠিক করে রাখলে দেরি কম হয়।' },
        { type: 'h2', text: 'রোদ-বৃষ্টিতে শেষ ধাপের প্রস্তুতি' },
        { type: 'p', text: 'স্মৃতিসৌধ মহাসড়কের পাশে খোলা জায়গায় হওয়ায় শেষ ধাপে রোদ বা বৃষ্টি সরাসরি লাগতে পারে। বর্ষায় মহাসড়কে যান চলাচল ধীর হতে পারে এবং নামার পর ভিজে যাওয়ার ঝুঁকি থাকে; গরমে ছাতা, পানি ও টুপি সঙ্গে রাখা আরামদায়ক।' },
        { type: 'callout', tone: 'note', title: 'নামার জায়গা আগেই বলে রাখুন', text: 'রোদ বা বৃষ্টিতে অপেক্ষা কমাতে নামার আগে চালককে বলে রাখুন যেন তিনি হাঁটার জন্য সুবিধাজনক জায়গায় থামান; কড়া রোদ বা ভারী বৃষ্টিতে দ্রুত গাড়িতে ওঠা-নামার চেষ্টা করুন।' },
        { type: 'links', items: [
          { label: 'আবহাওয়া ও ঋতু', href: '/visit/weather/' },
          { label: 'ঢাকা থেকে যাওয়ার উপায়', href: '/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'নবীনগরে নামার পর কী করব?', a: 'মহাসড়কের পাশে সঠিক প্রবেশপথ চিনে নিন, নিরাপদে নামুন এবং ফেরার পিক-আপ আগেই ঠিক করুন।' },
        { q: 'মানচিত্রে “সাভার” দিলে কী হয়?', a: 'সাধারণত গাড়ি সাভার শহরের দিকে যায়; কিন্তু স্মৃতিসৌধ শহরের ভেতরে নয়, মহাসড়কের পাশে নবীনগরে।' },
        { q: 'প্রবেশপথ কি একটিই?', a: 'কোন দিক দিয়ে দর্শনার্থীদের ঢুকতে হয় তা দিন ও অনুষ্ঠানের ভিত্তিতে বদলাতে পারে; কোনো একটি গেট ধরে না নিয়ে ঘটনাস্থলে যাচাই করুন।' },
        { q: 'গাড়ি কোথায় থামাব?', a: 'মহাসড়কের চলতি লেনে নয়; এমন জায়গায় যেখানে পাশে নিরাপদে দাঁড়ানো যায়। চালকের সঙ্গে আগেই ঠিক করুন।' },
        { q: 'ফেরার সময় কী মনে রাখব?', a: 'বিকেলে ভিড় বাড়ে, তাই ফেরার স্থান ও রাইড সেবার পিক-আপ আগে থেকে ঠিক করে রাখুন।' },
        { q: 'বৃষ্টি বা কড়া রোদে শেষ ধাপের প্রস্তুতি কী?', a: 'ছাতা, পানি ও টুপি সঙ্গে রাখুন এবং নামার আগে চালককে হাঁটার সুবিধাজনক জায়গায় থামতে বলুন; বর্ষায় যান চলাচল ধীর হতে পারে।' },
        { q: 'রোদ বা বৃষ্টিতে অপেক্ষা কমাতে কী করব?', a: 'নামার জায়গা আগেই চালককে বলে রাখুন, যাতে গাড়ি হাঁটার সুবিধাজনক স্থানে থামে এবং অপেক্ষা কম হয়।' }
      ]
    },
    en: {
      title: 'The last leg at Nabinagar: finding the National Martyrs’ Monument entrance',
      description: 'How to identify the right entrance at Nabinagar, where it is safe to be dropped off, and why setting “Savar” in a map app takes you to the wrong place.',
      h1: 'The last leg to the monument at Nabinagar',
      answer:
        'The last leg at Nabinagar is about finding the right entrance beside the highway. If you set the destination to “Savar” in a map app, you may be dropped in Savar town, because the monument is at Nabinagar beside the highway. Use the monument listing or Plus Code W763+GW, agree a safe drop-off point with the driver in advance, and confirm which way visitors enter before you step out of the car.',
      blocks: [
        { type: 'map' },
        { type: 'h2', text: 'Nabinagar — the final stage of the journey' },
        { type: 'p', text: 'The monument stands beside the Dhaka–Aricha Highway in the Nabinagar locality. The last few kilometres therefore matter: get out safely before the car leaves the highway, and confirm with the driver or a security guard which side visitors enter from.' },
        { type: 'h2', text: 'Why “Savar” in a map app takes you to the wrong place' },
        { type: 'p', text: 'Typing only “Savar” or “Savar Bazar” into a map app usually points towards Savar town. The monument, however, is not inside the town — that is the most common mistake. Set the destination to the “National Martyrs’ Monument” listing or the Plus Code, so the car stops near the monument itself.' },
        { type: 'callout', tone: 'warn', title: 'The entrance can change', text: 'Which way visitors enter can vary with the day and with ceremonies. Confirm the current entrance with a security guard or local person before you get out of the car, rather than assuming a particular gate.' },
        { type: 'steps', items: [
          { title: 'Identify the right entrance', text: 'Before leaving the car, confirm with a security guard or local person which way visitors go in; do not assume a specific gate.' },
          { title: 'Get out safely', text: 'Do not step out into a live lane of the highway; ask the driver to stop somewhere you can stand safely without obstructing traffic.' },
          { title: 'Fix the return pickup', text: 'If using a ride-hailing car or your own vehicle, agree in advance where you will be picked up again; a fixed point is easier to find when it is busy.' }
        ] },
        { type: 'callout', tone: 'note', title: 'Before you head back', text: 'Return transport can be found in the Nabinagar area, but the afternoon gets busier. Fixing your return point and timing in advance saves delay.' },
        { type: 'h2', text: 'Preparing for sun or rain on the last leg' },
        { type: 'p', text: 'Because the monument stands in the open beside the highway, sun or rain can hit you directly on the last leg. In the monsoon, highway traffic may slow down and there is a risk of getting soaked after you get off; in the heat, an umbrella, water and a hat make things more comfortable.' },
        { type: 'callout', tone: 'note', title: 'Agree the drop-off in advance', text: 'To cut down waiting in sun or rain, tell the driver before you arrive to stop somewhere convenient for walking; in strong sun or heavy rain, get in and out quickly.' },
        { type: 'links', items: [
          { label: 'Weather and seasons', href: '/en/visit/weather/' },
          { label: 'Getting there from Dhaka', href: '/en/transport/from-dhaka/' }
        ] }
      ],
      faq: [
        { q: 'What do I do after getting off at Nabinagar?', a: 'Identify the correct entrance beside the highway, get out safely, and fix your return pickup in advance.' },
        { q: 'What happens if I set “Savar” in the map?', a: 'The car usually heads into Savar town; but the monument is not inside the town — it is at Nabinagar beside the highway.' },
        { q: 'Is there a single entrance?', a: 'Which way visitors enter can change with the day and ceremonies; verify on site rather than assuming one gate.' },
        { q: 'Where should the car stop?', a: 'Not in a live lane of the highway, but somewhere you can stand safely at the roadside. Agree this with the driver beforehand.' },
        { q: 'What should I remember for the return?', a: 'The afternoon is busier, so fix your return point and ride-hailing pickup in advance.' },
        { q: 'How do I prepare for rain or strong sun on the last leg?', a: 'Carry an umbrella, water and a hat, and ask the driver to stop somewhere convenient for walking before you get off; monsoon traffic may slow down.' },
        { q: 'How can I avoid waiting in sun or rain?', a: 'Agree the drop-off point with the driver in advance, so the car stops somewhere convenient for walking and the wait is shorter.' }
      ]
    }
  },
  {
    slug: 'transport/by-car',
    section: 'transport',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['transport/parking-dropoff', 'transport/from-uttara-airport', 'transport/nabinagar-last-mile', 'visit/opening-hours', 'transport/from-dhaka'],
    bn: {
      title: 'নিজের গাড়ি বা রাইড-সেবায় স্মৃতিসৌধে যাওয়ার নিয়ম',
      description: 'নিজে গাড়ি চালিয়ে বা রাইড-সেবা নিয়ে স্মৃতিসৌধে যাওয়ার সময় গন্তব্য সেট করা, নামা-ওঠা, ফেরা এবং যানজট ও টোল-সংক্রান্ত সতর্কতা।',
      h1: 'নিজের গাড়ি বা রাইড-সেবায় স্মৃতিসৌধে যাওয়া',
      answer:
        'নিজে গাড়ি চালালে বা রাইড-সেবার গাড়ি নিলে অ্যাপে গন্তব্য “National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW সেট করুন—শুধু “সাভার” দিলে শহরে চলে যাওয়ার সম্ভাবনা থাকে। মহাসড়কের পাশে নিরাপদ নামার ও ফেরার পিক-আপের জায়গা চালকের সঙ্গে আগেই ঠিক করে নিন। রাস্তায় যানজট বা টোল-ফি থাকতে পারে; নির্দিষ্ট টোল, ভাড়া বা সময় নিশ্চিত তথ্য ধরে না নিয়ে যাত্রার দিন যাচাই করুন।',
      blocks: [
        { type: 'h2', text: 'গন্তব্য সেট করা' },
        { type: 'steps', items: [
          { title: 'সঠিক নিবন্ধন বেছে নিন', text: '“National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW ব্যবহার করুন; “সাভার” লিখলে শহরে চলে যেতে পারেন।' },
          { title: 'চালককে প্রবেশপথ চিনিয়ে দিন', text: 'শেষ ধাপে কোন দিক দিয়ে দর্শনার্থীদের ঢুকতে হয় সেটি চালককে বলে দিন, যাতে তিনি সঠিক জায়গায় গাড়ি থামান।' },
          { title: 'ফেরার পিক-আপ ঠিক করুন', text: 'ব্যস্ত সময়ে একই জায়গায় গাড়ি পাওয়া সহজ হয়, তাই ফেরার পিক-আপের স্থান আগেই বলে রাখুন।' }
        ] },
        { type: 'h2', text: 'নামার ও ওঠার জায়গা' },
        { type: 'p', text: 'স্মৃতিসৌধ মহাসড়কের পাশে হওয়ায় নিরাপদে গাড়ি থামানোর জায়গা সীমিত হতে পারে। মহাসড়কের চলতি লেনে হুট করে থামবেন না; চালকের সঙ্গে এমন জায়গা ঠিক করুন যেখানে পাশে নিরাপদে নামা ও ওঠা যায় এবং যান চলাচলে বাধা হয় না।' },
        { type: 'h2', text: 'ফেরার যাত্রা ও যানজট' },
        { type: 'p', text: 'ফেরার সময় অনেক দর্শনার্থী একসঙ্গে বের হন, তাই মহাসড়কে ভিড় বাড়ে। নির্দিষ্ট সময় বা গতি ধরে নয়, বাড়তি সময় ধরে ফেরার পরিকল্পনা করুন; যাত্রার দিন রাস্তার অবস্থা দেখে সিদ্ধান্ত নিন।' },
        { type: 'callout', tone: 'warn', title: 'টোল, ভাড়া ও সময় নিশ্চিত নয়', text: 'সড়কে টোল বা ফি থাকতে পারে, তবে কোন নির্দিষ্ট টোলের অস্তিত্ব বা অঙ্ক আমরা নিশ্চিত তথ্য হিসেবে দিচ্ছি না; ভাড়াও দিনভেদে বদলায়। যাত্রার দিন চালক বা সংশ্লিষ্ট সূত্রে যাচাই করুন।' },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'এই পাতায় কোনো নির্দিষ্ট সময় বা ভাড়ার সংখ্যা নেই, কারণ তা দিনভেদে বদলায়। রাইড-সেবার অ্যাপে দূরত্ব দেখুন এবং নামার জায়গা চালকের সঙ্গে ঠিক করুন।' },
        { type: 'h2', text: 'রাস্তায় বিরতি ও জ্বালানি' },
        { type: 'p', text: 'নিজে গাড়ি চালালে বেরোনোর আগে জ্বালানি ভরে নেওয়া এবং মহাসড়কে পরিচিত বা নির্ভরযোগ্য পাম্পে থামার পরিকল্পনা করা সুবিধাজনক। স্মৃতিসৌধ মহাসড়কের পাশে হওয়ায় সামান্য পথেই মহাসড়ক ধরে চলা যায়; অপ্রয়োজনীয় বিরতি কমালে ভিড় এড়ানো সহজ হয়।' },
        { type: 'callout', tone: 'warn', title: 'নির্দিষ্ট পাম্প বা দাম আমাদের জানা নেই', text: 'কোথায় জ্বালানি পাম্প আছে বা জ্বালানির দাম কত, তা এই পাতায় নিশ্চিত তথ্য হিসেবে দেওয়া হয়নি; রাস্তায় দেখা পাম্প ও চলতি দাম যাত্রার দিন যাচাই করে নিন।' },
        { type: 'links', items: [
          { label: 'প্রবেশপথ ও শেষ ধাপ', href: '/transport/nabinagar-last-mile/' },
          { label: 'খোলার সময় ও দিন', href: '/visit/opening-hours/' }
        ] }
      ],
      faq: [
        { q: 'গাড়ি নিয়ে গেলে গন্তব্য কী দেব?', a: '“National Martyrs’ Monument / জাতীয় স্মৃতিসৌধ” বা প্লাস কোড W763+GW; শুধু “সাভার” দিলে শহরে চলে যেতে পারেন।' },
        { q: 'গাড়ি কোথায় থামাব?', a: 'মহাসড়কের চলতি লেনে নয়; এমন জায়গায় যেখানে পাশে নিরাপদে নামা যায়। চালকের সঙ্গে আগেই ঠিক করুন।' },
        { q: 'টোল বা ফি লাগবে?', a: 'টোল বা ফি থাকতে পারে, তবে নির্দিষ্ট অঙ্ক আমরা নিশ্চিত তথ্য হিসেবে দিচ্ছি না; যাত্রার দিন যাচাই করুন।' },
        { q: 'কত সময় লাগবে?', a: 'নির্দিষ্ট সময় নিশ্চিত নয়; যানজটে বদলায়। বাড়তি সময় ধরে পরিকল্পনা করুন।' },
        { q: 'ফেরার সময় ভিড় থাকে?', a: 'বিকেলে ভিড় বাড়ে; ফেরার পিক-আপের স্থান ও সময় আগেই ঠিক করে রাখা ভালো।' },
        { q: 'নিজের গাড়িতে বেরোনোর আগে কী দেখে নেব?', a: 'জ্বালানি ভরে নেওয়া, ম্যাপে গন্তব্য সেট করা এবং ফেরার পিক-আপের জায়গা ঠিক করা ভালো।' },
        { q: 'রাস্তায় জ্বালানি পাম্প কোথায়?', a: 'নির্দিষ্ট পাম্প বা দাম এই পাতায় নিশ্চিত তথ্য হিসেবে নেই; মহাসড়কে দেখা চলতি পাম্প ও দাম যাত্রার দিন যাচাই করুন।' }
      ]
    },
    en: {
      title: 'Driving or taking a ride-hailing car to the National Martyrs’ Monument',
      description: 'Setting the destination, pickup and drop-off, the return trip, and caveats about traffic and tolls when driving or taking a car to the monument at Savar.',
      h1: 'Driving or taking a ride-hailing car to the monument',
      answer:
        'If you drive yourself or take a ride-hailing car, set the destination to the “National Martyrs’ Monument” listing or the Plus Code W763+GW — setting only “Savar” may take you into the town. Agree a safe drop-off and return pickup point with the driver beforehand. There may be traffic and tolls on the way; rather than assuming a specific toll, fare or time, verify on the day.',
      blocks: [
        { type: 'h2', text: 'Setting the destination' },
        { type: 'steps', items: [
          { title: 'Choose the correct listing', text: 'Use “National Martyrs’ Monument” or the Plus Code W763+GW; typing “Savar” can take you into the town.' },
          { title: 'Show the driver the entrance', text: 'At the last stage, tell the driver which way visitors go in, so the car stops in the right place.' },
          { title: 'Fix the return pickup', text: 'A fixed point is easier to find when it is busy, so agree the return pickup in advance.' }
        ] },
        { type: 'h2', text: 'Drop-off and pickup points' },
        { type: 'p', text: 'Because the monument stands beside the highway, safe stopping space may be limited. Do not stop abruptly in a live lane; agree a spot with the driver where you can get in and out safely at the roadside without obstructing traffic.' },
        { type: 'h2', text: 'The return trip and traffic' },
        { type: 'p', text: 'Many visitors leave together in the afternoon, so the highway gets busier. Rather than assuming a fixed time or speed, plan the return with extra time and decide on the day based on road conditions.' },
        { type: 'callout', tone: 'warn', title: 'Tolls, fares and times are not fixed', text: 'There may be tolls or fees on the road, but we do not state any specific toll as confirmed, and fares change from day to day. Verify with the driver or the relevant source on the day.' },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'This page gives no specific times or fares, because they change from day to day. Check distance in your ride-hailing app and agree the drop-off point with the driver.' },
        { type: 'h2', text: 'Stops and fuel on the road' },
        { type: 'p', text: 'If you drive yourself, filling up before you set off and planning to stop at a familiar or trusted fuel station is convenient. Because the monument stands beside the highway, you only have a short stretch to reach it; keeping unnecessary stops to a minimum makes it easier to avoid the worst of the traffic.' },
        { type: 'callout', tone: 'warn', title: 'We do not know of specific stations or prices', text: 'Where fuel stations are and what fuel costs are not stated on this page as confirmed; check the stations you pass and the current prices on the day.' },
        { type: 'links', items: [
          { label: 'The entrance and the last leg', href: '/en/transport/nabinagar-last-mile/' },
          { label: 'Opening hours and days', href: '/en/visit/opening-hours/' }
        ] }
      ],
      faq: [
        { q: 'If I drive, what destination do I set?', a: 'Set “National Martyrs’ Monument” or the Plus Code W763+GW; setting only “Savar” can take you into the town.' },
        { q: 'Where should I stop the car?', a: 'Not in a live lane of the highway, but somewhere you can get out safely at the roadside. Agree this with the driver in advance.' },
        { q: 'Will there be a toll or fee?', a: 'There may be tolls or fees, but we do not state a specific amount as confirmed; verify on the day.' },
        { q: 'How long does it take?', a: 'No fixed time is confirmed; it varies with traffic. Allow extra time.' },
        { q: 'Is the return crowded?', a: 'The afternoon gets busier; fixing your return pickup point and timing in advance is wise.' },
        { q: 'What should I check before driving off?', a: 'Fill up with fuel, set the destination in your map, and agree the return pickup point.' },
        { q: 'Where are the fuel stations on the road?', a: 'No specific station or price is stated on this page as confirmed; check the stations you pass and the current prices on the day.' }
      ]
    }
  },
  {
    slug: 'transport/parking-dropoff',
    section: 'transport',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['transport/nabinagar-last-mile', 'transport/by-car', 'events/independence-day', 'events/victory-day'],
    bn: {
      title: 'স্মৃতিসৌধে পার্কিং ও নামা-ওঠার নিরাপদ নিয়ম',
      description: 'স্মৃতিসৌধে পার্কিং ও ড্রপ-অফ নিয়ে কোন তথ্য নিশ্চিত আর কোনটি অনিশ্চিত, বিশেষ দিনের নিষেধাজ্ঞা এবং নিরাপদ অভ্যাস।',
      h1: 'পার্কিং ও নামা-ওঠা: যা জানা আর যা জানা নেই',
      answer:
        'স্মৃতিসৌধে নির্দিষ্ট কোনো পার্কিং এলাকা, ধারণক্ষমতা বা পার্কিং ফি-এর নিশ্চিত অনলাইন তথ্য নেই, তাই এই পাতায় কোনো সংখ্যা দেওয়া হয়নি। যা নিশ্চিত—স্মৃতিসৌধ ঢাকা–আরিচা মহাসড়কের পাশে, তাই নিরাপদে গাড়ি থামানো ও নামা-ওঠা সময়ভেদে সীমিত হতে পারে। ২৬ মার্চ ও ১৬ ডিসেম্বরের মতো দিনে সরকারি অনুষ্ঠান ও নিরাপত্তার কারণে প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে।',
      blocks: [
        { type: 'h2', text: 'যা নিশ্চিত, যা নিশ্চিত নয়' },
        { type: 'table', head: ['বিষয়', 'অবস্থা'], rows: [
          ['নির্দিষ্ট পার্কিং এলাকা', 'নিশ্চিত অনলাইন তথ্য পাওয়া যায়নি'],
          ['পার্কিং ধারণক্ষমতা বা ফি', 'নিশ্চিত তথ্য পাওয়া যায়নি; কোনো সংখ্যা দেওয়া হয়নি'],
          ['শৌচাগার বা খাবারের দোকান প্রাঙ্গণে আছে কি না', 'নিশ্চিত তথ্য নেই'],
          ['নামার/ওঠার নিরাপদ স্থান', 'মহাসড়কের পাশে; দিন ও প্রবেশপথভেদে বদলায়'],
          ['বিশেষ দিনের নিয়ন্ত্রণ', '২৬ মার্চ ও ১৬ ডিসেম্বরসহ জাতীয় দিবসে সম্ভব']
        ] },
        { type: 'h2', text: 'বিশেষ দিনে নিষেধাজ্ঞা' },
        { type: 'p', text: '২৬ মার্চ স্বাধীনতা দিবস ও ১৬ ডিসেম্বর বিজয় দিবসে সরকারি শ্রদ্ধা নিবেদনের কর্মসূচি হয়, যা যান চলাচল ও প্রবেশকে প্রভাবিত করতে পারে। এসব দিনে পার্কিং ও নামা-ওঠার বিধি কঠোর হতে পারে এবং রাস্তা ঘিরে নিয়ন্ত্রণ থাকতে পারে, তাই আগেই সরকারি ঘোষণা দেখে নেওয়া ভালো।' },
        { type: 'callout', tone: 'warn', title: 'নির্দিষ্ট পার্কিং বা গেটের নিশ্চয়তা নেই', text: 'কোনো নির্দিষ্ট গেট, পার্কিং এলাকা বা ধারণক্ষমতা আমরা নিশ্চিত তথ্য হিসেবে দিচ্ছি না। ঘটনাস্থলে নিরাপত্তাকর্মীর নির্দেশ মেনে চলুন।' },
        { type: 'h2', text: 'নিরাপদ অভ্যাস' },
        { type: 'ul', items: [
          'চালকের সঙ্গে আগেই নামার ও ওঠার স্থান ঠিক করুন',
          'মহাসড়কের চলতি লেনে হুট করে গাড়ি থামাবেন না',
          'গাড়িতে কেউ থাকলে ছোট সময়ের জন্যও দরজা লক রাখুন',
          'বিশেষ দিনে আগেই সরকারি ঘোষণা দেখে নিন',
          'নিশ্চিত না হলে নিরাপত্তাকর্মী বা স্থানীয়দের কাছে জায়গা জিজ্ঞেস করুন'
        ] },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'পার্কিং, গেট ও সুবিধা সময়ের সঙ্গে বদলাতে পারে। যাত্রার দিন ঘটনাস্থলের নিরাপত্তাকর্মী বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্য দেখুন।' },
        { type: 'h2', text: 'শিশু ও বয়স্কদের সঙ্গে নামা-ওঠা' },
        { type: 'p', text: 'পরিবারের সঙ্গে এলে মহাসড়কের পাশে নিরাপদে থামা আরও জরুরি। চালককে অনুরোধ করুন যেন তিনি চলতি লেন থেকে দূরে, পাশে দাঁড়ানোর মতো জায়গায় গাড়ি থামান; গাড়ি থেকে নামার আগে শিশুর হাত ধরিয়ে রাখুন। প্রাঙ্গণে হুইলচেয়ার বা ঢালু পথ আছে কি না, তা এই পাতায় নিশ্চিত তথ্য নয়; দরকার হলে ঘটনাস্থলে যাচাই করুন।' },
        { type: 'ul', items: [
          'গাড়ি থামানোর সময় শিশু ও বয়স্কদের গাড়িতে অপেক্ষা করান, রাস্তার পাশে নয়।',
          'নামার আগে চালককে চলতি লেন থেকে দূরে, নিরাপদে থামতে অনুরোধ করুন।',
          'হুইলচেয়ার, শৌচাগার বা ঢালু পথ আছে কি না আগেই ধরে না নিয়ে ঘটনাস্থলে জেনে নিন।'
        ] },
        { type: 'links', items: [
          { label: 'প্রতিবন্ধী-বান্ধব পরিকল্পনা', href: '/visit/accessibility/' },
          { label: 'শিশুদের সঙ্গে ভ্রমণ', href: '/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে পার্কিং আছে কি?', a: 'নির্দিষ্ট পার্কিং এলাকা, ধারণক্ষমতা বা ফি-এর নিশ্চিত অনলাইন তথ্য পাওয়া যায়নি; ঘটনাস্থলে যাচাই করুন।' },
        { q: 'পার্কিং ফি কত?', a: 'নিশ্চিত তথ্য নেই, তাই এখানে কোনো অঙ্ক দেওয়া হয়নি; ঘটনাস্থলে বা প্রশাসনের কাছে যাচাই করুন।' },
        { q: 'জাতীয় দিবসে পার্কিং বা প্রবেশে বাধা থাকে?', a: '২৬ মার্চ ও ১৬ ডিসেম্বরসহ জাতীয় দিবসে সরকারি অনুষ্ঠান ও নিরাপত্তার কারণে প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে।' },
        { q: 'গাড়ি কোথায় থামাব?', a: 'মহাসড়কের চলতি লেনে নয়; নিরাপদে থামার জায়গা চালকের সঙ্গে আগেই ঠিক করুন এবং নিরাপত্তাকর্মীর নির্দেশ মানুন।' },
        { q: 'প্রাঙ্গণে শৌচাগার বা খাবার আছে?', a: 'এ বিষয়ে নিশ্চিত তথ্য নেই; তাই আগেই ধরে নেওয়ার চেয়ে ঘটনাস্থলে যাচাই করা ভালো।' },
        { q: 'শিশু বা বয়স্কদের সঙ্গে নামা-ওঠার সময় কী খেয়াল রাখব?', a: 'চালককে চলতি লেন থেকে দূরে থামতে বলুন, গাড়ি থেকে নামার আগে শিশুর হাত ধরুন এবং সুবিধা সম্পর্কে আগেই ধরে না নিয়ে ঘটনাস্থলে যাচাই করুন।' },
        { q: 'প্রাঙ্গণে হুইলচেয়ার বা ঢালু পথ আছে কি?', a: 'এই পাতায় সে বিষয়ে নিশ্চিত তথ্য নেই; দরকার হলে ঘটনাস্থলে নিরাপত্তাকর্মী বা প্রশাসনের কাছে জেনে নিন।' }
      ]
    },
    en: {
      title: 'Parking and drop-off at the National Martyrs’ Monument',
      description: 'What is verified and what is not about parking and drop-off at the monument, restrictions on special days, and safe practice.',
      h1: 'Parking and drop-off: what is known and what is not',
      answer:
        'There is no confirmed online information about a specific parking area, capacity or parking fee at the monument, so no numbers are stated on this page. What is certain is that the monument stands beside the Dhaka–Aricha Highway, so safe stopping and drop-off space may be limited at times. On days such as 26 March and 16 December, official ceremonies and security can affect access and vehicle movement.',
      blocks: [
        { type: 'h2', text: 'What is verified and what is not' },
        { type: 'table', head: ['Item', 'Status'], rows: [
          ['A specific parking area', 'No confirmed online information found'],
          ['Parking capacity or fee', 'Not confirmed; no number stated'],
          ['Toilets or food stalls in the grounds', 'No confirmed information'],
          ['A safe drop-off/pickup point', 'Beside the highway; varies with the day and entrance'],
          ['Special-day restrictions', 'Possible on national days such as 26 March and 16 December']
        ] },
        { type: 'h2', text: 'Restrictions on special days' },
        { type: 'p', text: 'On 26 March (Independence Day) and 16 December (Victory Day), official tribute ceremonies take place, which can affect traffic and access. On such days parking and drop-off rules may be stricter and control may be in place around the roads, so checking the official notice in advance is wise.' },
        { type: 'callout', tone: 'warn', title: 'No guaranteed parking or gate', text: 'We do not state any specific gate, parking area or capacity as confirmed. Follow the instructions of security staff on site.' },
        { type: 'h2', text: 'Safe practice' },
        { type: 'ul', items: [
          'Agree the drop-off and pickup point with the driver in advance',
          'Do not stop abruptly in a live lane of the highway',
          'Keep the doors locked for even short periods if people stay in the car',
          'Check the official notice in advance on special days',
          'If unsure, ask security staff or local people where to stop'
        ] },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'Parking, gates and facilities can change over time. On the day, check updated information from on-site security or the Savar Upazila Administration.' },
        { type: 'h2', text: 'Dropping off with children or older people' },
        { type: 'p', text: 'With family along, stopping safely beside the highway matters even more. Ask the driver to stop away from a live lane, at a spot where you can stand at the roadside, and hold a child’s hand before they step out of the car. Whether there is a wheelchair or a ramp in the grounds is not confirmed on this page; if it matters, verify on site.' },
        { type: 'ul', items: [
          'While stopping, have children and older people wait in the car, not beside the road.',
          'Ask the driver to stop away from a live lane, somewhere safe, before anyone gets out.',
          'Do not assume a wheelchair, toilet or ramp is available; ask on site.'
        ] },
        { type: 'links', items: [
          { label: 'Accessibility planning', href: '/en/visit/accessibility/' },
          { label: 'Visiting with children', href: '/en/visit/with-children/' }
        ] }
      ],
      faq: [
        { q: 'Is there parking at the monument?', a: 'No confirmed online information about a specific parking area, capacity or fee was found; verify on site.' },
        { q: 'How much is the parking fee?', a: 'Not confirmed, so no amount is stated here; check on site or with the administration.' },
        { q: 'Are there parking or access restrictions on national days?', a: 'On days such as 26 March and 16 December, official ceremonies and security can affect access and vehicle movement.' },
        { q: 'Where should I stop the car?', a: 'Not in a live lane of the highway; agree a safe stopping place with the driver in advance and follow security staff.' },
        { q: 'Are there toilets or food in the grounds?', a: 'There is no confirmed information; rather than assuming, verify on site.' },
        { q: 'What should I watch for when dropping off children or older people?', a: 'Ask the driver to stop away from a live lane, hold a child’s hand before they get out, and verify facilities on site rather than assuming.' },
        { q: 'Is there a wheelchair or a ramp in the grounds?', a: 'There is no confirmed information on this page; if it matters, ask on-site security or the administration.' }
      ]
    }
  }
];
