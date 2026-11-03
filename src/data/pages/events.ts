// E. ঘটনা ও জাতীয় দিবস: ২টি পাতা (স্বাধীনতা দিবস ও বিজয় দিবস)।
import type { ContentPage } from './types';

export const eventPages: ContentPage[] = [
  {
    slug: 'events/independence-day',
    section: 'events',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['events/victory-day', 'visit/opening-hours', 'visit/etiquette', 'transport/from-dhaka'],
    bn: {
      title: 'স্বাধীনতা দিবসে (২৬ মার্চ) স্মৃতিসৌধ দর্শন',
      description: '২৬ মার্চ স্বাধীনতা দিবসে জাতীয় স্মৃতিসৌধে শ্রদ্ধা নিবেদনের দিনে প্রবেশ, যান চলাচল ও পরিকল্পনা—যাত্রার আগে কী যাচাই করবেন এবং কীভাবে শ্রদ্ধাশীল থাকবেন।',
      h1: 'স্বাধীনতা দিবসে (২৬ মার্চ) স্মৃতিসৌধ দর্শন',
      answer:
        '২৬ মার্চ বাংলাদেশের স্বাধীনতা দিবস—১৯৭১ সালের মুক্তিযুদ্ধের মধ্য দিয়ে অর্জিত স্বাধীনতার জাতীয় স্মারক দিবস। এই দিনে জাতীয় স্মৃতিসৌধে সরকারি শ্রদ্ধা নিবেদন ও পুষ্পস্তবক অর্পণের কর্মসূচি হয়, তাই প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে। দর্শনার্থী হিসেবে যেতে চাইলে আগেই ওই দিনের প্রবেশ-নিয়ম যাচাই করুন এবং ভিড় ও রাস্তা বন্ধের কথা ধরে বাড়তি সময় রাখুন।',
      blocks: [
        { type: 'h2', text: 'স্বাধীনতা দিবস কী স্মরণ করায়' },
        { type: 'p', text: '২৬ মার্চ বাংলাদেশের স্বাধীনতা দিবস। ১৯৭১ সালের মুক্তিযুদ্ধের মধ্য দিয়ে অর্জিত স্বাধীনতার কথা জাতীয়ভাবে স্মরণ করা হয়। জাতীয় স্মৃতিসৌধ এই স্মরণের প্রধান স্থান এবং সারাদেশ থেকে শ্রদ্ধা নিবেদনের কেন্দ্র।' },
        { type: 'h2', text: 'কর্মসূচি ও পুষ্পস্তবক অর্পণ' },
        { type: 'p', text: 'স্বাধীনতা দিবসে জাতীয় স্মৃতিসৌধে সরকারি শ্রদ্ধা নিবেদন ও পুষ্পস্তবক অর্পণের কর্মসূচি হয়। এই ধরনের কর্মসূচির সময় সাধারণ দর্শনার্থীদের প্রবেশ ও চলাচল নির্দিষ্ট নিয়মের মধ্যে রাখা হতে পারে।' },
        { type: 'callout', tone: 'warn', title: 'কর্মসূচির বিস্তারিত আগে থেকে নিশ্চিত নয়', text: 'যে বছর আপনি যাচ্ছেন, ওই বছরের কর্মসূচি, সময় ও প্রবেশ-নিয়ম আগে থেকে নিশ্চিত ধরে নেবেন না। জাতীয় দিবসের সরকারি ঘোষণা, সাভার উপজেলা প্রশাসনের নোটিশ এবং ঘটনাস্থলের নিরাপত্তাকর্মীর নির্দেশই চূড়ান্ত।' },
        { type: 'h2', text: 'যান চলাচল, প্রবেশ ও পরিকল্পনা' },
        { type: 'steps', items: [
          { title: 'সরকারি ঘোষণা দেখুন', text: 'ওই বছরের জাতীয় দিবসের কর্মসূচি ও প্রবেশ-নিয়ম সরকারি ঘোষণা বা সাভার উপজেলা প্রশাসনের নোটিশে যাচাই করুন।' },
          { title: 'বাড়তি সময় রাখুন', text: 'মহাসড়কে যানজট ও প্রবেশ নিয়ন্ত্রণ হতে পারে; স্বাভাবিক দিনের চেয়ে বেশি সময় ধরে নিয়ে রওনা দিন।' },
          { title: 'প্রবেশপথ ঘটনাস্থলে নিশ্চিত করুন', text: 'কোন গেট খোলা এবং কোথায় দাঁড়ানো যাবে তা ঘটনাস্থলের নিরাপত্তাকর্মীর কাছে জেনে নিন; কোনো নির্দিষ্ট গেট ধরে নিয়ে যাবেন না।' }
        ] },
        { type: 'h2', text: 'শ্রদ্ধাশীল থাকার নিয়ম' },
        { type: 'ul', items: [
          'এটি মূলত স্মরণের ও শ্রদ্ধা নিবেদনের স্থান, তাই শান্ত ও সংযত থাকুন',
          'নিরাপত্তাকর্মীর নির্দেশ মেনে চলুন এবং ব্যারিকেড বা বাধা অতিক্রম করবেন না',
          'অনুষ্ঠান চলাকালে ভিড়ের সামনে দাঁড়িয়ে ছবি তোলা এড়িয়ে চলুন',
          'পুষ্পস্তবক বা শ্রদ্ধার সামগ্রী থাকলে কর্তৃপক্ষের বলে দেওয়া স্থান অনুসরণ করুন'
        ] },
        { type: 'h2', text: '২৬ মার্চ ও ১৬ ডিসেম্বরের পার্থক্য' },
        { type: 'p', text: '২৬ মার্চ স্বাধীনতা দিবস এবং ১৬ ডিসেম্বর বিজয় দিবস—দুটি আলাদা জাতীয় দিবস, দুটি আলাদা স্মরণ। ২৬ মার্চ স্বাধীনতার ঘোষণা ও সংগ্রামের সূচনার সঙ্গে যুক্ত, অন্যদিকে ১৬ ডিসেম্বর ১৯৭১ সালের মুক্তিযুদ্ধের বিজয়ের সঙ্গে যুক্ত। একই স্মৃতিসৌধে দুটি দিনেই শ্রদ্ধা নিবেদন হয়, তবে দিন দুটির তাৎপর্য ভিন্ন।' },
        { type: 'ul', items: [
          '২৬ মার্চ: স্বাধীনতা দিবস—স্বাধীনতার ঘোষণা ও সংগ্রামের সূচনা',
          '১৬ ডিসেম্বর: বিজয় দিবস—১৯৭১ সালের মুক্তিযুদ্ধের বিজয়',
          '১৯৮২ সালের ১৬ ডিসেম্বর স্মৃতিসৌধ উদ্বোধন হওয়ায় বিজয় দিবসের সঙ্গে স্থানটির সরাসরি যোগ'
        ] }
      ],
      faq: [
        { q: '২৬ মার্চ স্মৃতিসৌধে কী হয়?', a: 'স্বাধীনতা দিবস উপলক্ষে এখানে সরকারি শ্রদ্ধা নিবেদন ও পুষ্পস্তবক অর্পণের কর্মসূচি হয়। সেই সঙ্গে প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে।' },
        { q: '২৬ মার্চ স্মৃতিসৌধ খোলা থাকে কি?', a: 'সাধারণত শ্রদ্ধা নিবেদনের কর্মসূচি হয়, তবে প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে। ওই দিনের সরকারি ঘোষণা বা সাভার উপজেলা প্রশাসনের নোটিশে যাচাই করুন।' },
        { q: 'এই দিনে যেতে কত সময় লাগতে পারে?', a: 'মহাসড়কে যানজট ও প্রবেশ নিয়ন্ত্রণের কারণে স্বাভাবিক দিনের চেয়ে বেশি সময় লাগতে পারে; বাড়তি সময় ধরে রওনা দেওয়া বুদ্ধিমানের কাজ।' },
        { q: 'স্বাধীনতা দিবস কী স্মরণ করায়?', a: '১৯৭১ সালের মুক্তিযুদ্ধের মধ্য দিয়ে অর্জিত স্বাধীনতার কথা। ২৬ মার্চ বাংলাদেশের স্বাধীনতা দিবস।' },
        { q: 'প্রবেশ নিয়ে তথ্য কোথায় পাব?', a: 'ওই বছরের জাতীয় দিবসের সরকারি ঘোষণা ও সাভার উপজেলা প্রশাসনের নোটিশে; ঘটনাস্থলে নিরাপত্তাকর্মীর কাছেও চলতি নিয়ম জেনে নিতে পারেন।' },
        { q: '২৬ মার্চ আর ১৬ ডিসেম্বরের পার্থক্য কী?', a: '২৬ মার্চ স্বাধীনতা দিবস—স্বাধীনতার ঘোষণা ও সংগ্রামের সূচনার সঙ্গে যুক্ত; ১৬ ডিসেম্বর বিজয় দিবস—১৯৭১ সালের মুক্তিযুদ্ধের বিজয়ের সঙ্গে যুক্ত। দুটি আলাদা জাতীয় দিবস।' }
      ]
    },
    en: {
      title: 'Visiting the National Martyrs’ Monument on Independence Day (26 March)',
      description: 'Access, traffic and planning for Independence Day on 26 March at the National Martyrs’ Monument — what to verify before you travel and how to remain respectful.',
      h1: 'Visiting the National Martyrs’ Monument on Independence Day (26 March)',
      answer:
        '26 March is Bangladesh’s Independence Day, the national day marking the independence achieved through the 1971 Liberation War. On this day official tributes and wreath-laying take place at the National Martyrs’ Monument, so access and vehicle movement may be restricted. If you plan to visit, verify that day’s access arrangements in advance and allow extra time for crowds and road closures.',
      blocks: [
        { type: 'h2', text: 'What Independence Day commemorates' },
        { type: 'p', text: '26 March is Bangladesh’s Independence Day. It is the national day on which the independence achieved through the 1971 Liberation War is remembered. The National Martyrs’ Monument is the central place of that remembrance and the focus of tributes from across the country.' },
        { type: 'h2', text: 'Ceremonies and wreath-laying' },
        { type: 'p', text: 'On Independence Day, official tributes and wreath-laying take place at the National Martyrs’ Monument. During programmes of this kind, access and movement for ordinary visitors may be kept within specific arrangements.' },
        { type: 'callout', tone: 'warn', title: 'Programme details are not fixed in advance', text: 'Do not assume the programme, timings or access rules for the year you plan to visit. National-day notices, the Savar Upazila Administration and on-site security staff are the final authority.' },
        { type: 'h2', text: 'Traffic, access and planning' },
        { type: 'steps', items: [
          { title: 'Check official notices', text: 'Verify that year’s national-day programme and access rules through official notices or the Savar Upazila Administration.' },
          { title: 'Allow extra time', text: 'Traffic on the highway and access control can be heavy; budget more time than on an ordinary day.' },
          { title: 'Confirm the entrance on site', text: 'Ask on-site security staff which gate is open and where visitors may stand; do not assume a fixed gate.' }
        ] },
        { type: 'h2', text: 'How to remain respectful' },
        { type: 'ul', items: [
          'This is primarily a place of remembrance and tribute, so stay calm and restrained',
          'Follow the directions of security staff and do not cross barriers',
          'Avoid standing in front of the crowd to take photographs during a ceremony',
          'If you bring flowers or tributes, follow the place indicated by the authorities'
        ] },
        { type: 'h2', text: 'The difference between 26 March and 16 December' },
        { type: 'p', text: '26 March is Independence Day and 16 December is Victory Day — two distinct national days with two distinct meanings. 26 March is tied to the declaration of independence and the beginning of the struggle, while 16 December is tied to the victory of the 1971 Liberation War. At the same monument, tributes are paid on both days, but the meaning of each day is different.' },
        { type: 'ul', items: [
          '26 March: Independence Day — the declaration of independence and the start of the struggle',
          '16 December: Victory Day — the victory of the 1971 Liberation War',
          'The monument was inaugurated on 16 December 1982, so it has a direct link to Victory Day'
        ] }
      ],
      faq: [
        { q: 'What happens at the monument on 26 March?', a: 'Official tributes and wreath-laying take place for Independence Day, and access and vehicle movement may be restricted.' },
        { q: 'Is the monument open on 26 March?', a: 'Ceremonies are usually held, but access and traffic may be restricted. Check that day’s official notice or the Savar Upazila Administration.' },
        { q: 'How long could a visit take on this day?', a: 'Highway traffic and access control can make it take longer than on an ordinary day, so allow extra time.' },
        { q: 'What does Independence Day commemorate?', a: 'The independence achieved through the 1971 Liberation War. 26 March is Bangladesh’s Independence Day.' },
        { q: 'Where can I find access information?', a: 'In that year’s national-day official notices and the Savar Upazila Administration; on the day, on-site security staff can also advise on current rules.' },
        { q: 'What is the difference between 26 March and 16 December?', a: '26 March is Independence Day, tied to the declaration of independence and the start of the struggle; 16 December is Victory Day, tied to the victory of the 1971 Liberation War. They are two distinct national days.' }
      ]
    }
  },
  {
    slug: 'events/victory-day',
    section: 'events',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['events/independence-day', 'history/construction-timeline', 'visit/opening-hours', 'visit/etiquette'],
    bn: {
      title: 'বিজয় দিবসে (১৬ ডিসেম্বর) স্মৃতিসৌধ দর্শন',
      description: '১৬ ডিসেম্বর বিজয় দিবসে জাতীয় স্মৃতিসৌধ দর্শন—দিনটির তাৎপর্য, স্মৃতিসৌধের সঙ্গে সম্পর্ক, প্রবেশ ও যান চলাচল এবং যাত্রার পরিকল্পনা।',
      h1: 'বিজয় দিবসে (১৬ ডিসেম্বর) স্মৃতিসৌধ দর্শন',
      answer:
        '১৬ ডিসেম্বর বাংলাদেশের বিজয় দিবস—১৯৭১ সালের মুক্তিযুদ্ধের বিজয়ের জাতীয় স্মারক দিবস। একই দিনে, ১৯৮২ সালের ১৬ ডিসেম্বর, জাতীয় স্মৃতিসৌধ উদ্বোধন করা হয়। এই দিনে স্মৃতিসৌধে সরকারি শ্রদ্ধা ও জনসাধারণের পুষ্পস্তবক অর্পণ হয়, তাই প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে; আগেই নিয়ম যাচাই করে বাড়তি সময় নিয়ে চলা ভালো।',
      blocks: [
        { type: 'h2', text: 'বিজয় দিবস কী স্মরণ করায়' },
        { type: 'p', text: '১৬ ডিসেম্বর বাংলাদেশের বিজয় দিবস। ১৯৭১ সালের মুক্তিযুদ্ধের বিজয়ের কথা এই দিনে জাতীয়ভাবে স্মরণ করা হয়। স্বাধীনতার অর্জনকে শ্রদ্ধা জানানোর জন্য এটি অন্যতম প্রধান জাতীয় দিবস।' },
        { type: 'h2', text: 'স্মৃতিসৌধের সঙ্গে বিজয় দিবসের সম্পর্ক' },
        { type: 'p', text: 'জাতীয় স্মৃতিসৌধের সঙ্গে বিজয় দিবসের সরাসরি যোগ রয়েছে: ১৯৮২ সালের ১৬ ডিসেম্বর, অর্থাৎ বিজয় দিবসেই স্মৃতিসৌধ উদ্বোধন করা হয়। তাই এই দিনে স্মৃতিসৌধে শ্রদ্ধা নিবেদনের তাৎপর্য বিশেষ।' },
        { type: 'h2', text: 'কর্মসূচি, প্রবেশ ও যান চলাচল' },
        { type: 'p', text: 'বিজয় দিবসে স্মৃতিসৌধে সরকারি শ্রদ্ধা এবং জনসাধারণের পুষ্পস্তবক অর্পণ হয়। দিনটি জুড়ে ভিড় ও প্রবেশ নিয়ন্ত্রণ থাকতে পারে, আর ঢাকা–আরিচা মহাসড়কে যানজট বাড়তে পারে।' },
        { type: 'steps', items: [
          { title: 'সরকারি ঘোষণা যাচাই করুন', text: 'ওই বছরের বিজয় দিবসের কর্মসূচি ও প্রবেশ-নিয়ম সরকারি নোটিশ বা সাভার উপজেলা প্রশাসনের তথ্যে দেখে নিন।' },
          { title: 'বাড়তি সময় নিয়ে রওনা দিন', text: '১৬ ডিসেম্বর মহাসড়কে যানজট ও প্রবেশ নিয়ন্ত্রণ বেশি হতে পারে; স্বাভাবিক দিনের চেয়ে বেশি সময় ধরে নিন।' },
          { title: 'প্রবেশপথ ঘটনাস্থলে নিশ্চিত করুন', text: 'কোন গেট খোলা ও কোথায় দাঁড়ানো যাবে তা নিরাপত্তাকর্মীর কাছে জেনে নিন; নির্দিষ্ট গেট ধরে নিয়ে যাবেন না।' }
        ] },
        { type: 'callout', tone: 'warn', title: 'জনসমাগম ও প্রবেশ নিয়ন্ত্রণ', text: 'বিজয় দিবসে স্মৃতিসৌধ এলাকায় ব্যাপক জনসমাগম হওয়া স্বাভাবিক এবং প্রবেশপথ বদলাতে পারে। কোনো নির্দিষ্ট সময়, গেট বা কর্মসূচি আগে থেকে নিশ্চিত ধরে নেবেন না; জাতীয় দিবসের সরকারি ঘোষণা ও ঘটনাস্থলের নিরাপত্তাকর্মীর নির্দেশই চূড়ান্ত।' },
        { type: 'h2', text: 'শ্রদ্ধাশীল থাকা ও পরিকল্পনা' },
        { type: 'ul', items: [
          'স্মরণের ও শ্রদ্ধা নিবেদনের স্থান হিসেবে শান্ত ও সংযত থাকুন',
          'নিরাপত্তাকর্মীর নির্দেশ মেনে চলুন এবং ব্যারিকেড অতিক্রম করবেন না',
          'অনুষ্ঠান চলাকালে ভিড়ের সামনে দাঁড়িয়ে ছবি তোলা এড়িয়ে চলুন',
          'পরিবার নিয়ে গেলে ভিড়ের কথা ধরে প্রস্থান ও ফেরার সময় আগেই ঠিক করুন'
        ] },
        { type: 'h2', text: '১৬ ডিসেম্বর ১৯৭১: যুদ্ধের সমাপ্তি ও বিজয়' },
        { type: 'p', text: '১৬ ডিসেম্বর ১৯৭১ সালের মুক্তিযুদ্ধের সমাপ্তি ও বিজয়ের দিন হিসেবে স্মরণ করা হয়, যে দিনে যুদ্ধ গিয়ে ঠেকে স্বাধীনতার বিজয়ে। এই কারণেই দিনটি বিজয় দিবস, এবং সারাদেশে শ্রদ্ধা ও আনুষ্ঠানিকতার মধ্য দিয়ে দিনটি পালিত হয়। জাতীয় স্মৃতিসৌধে এই দিনে শহীদদের স্মরণ করা হয়।' },
        { type: 'callout', tone: 'note', title: 'তারিখটির দ্বৈত তাৎপর্য', text: 'একইসঙ্গে ঠিক এই তারিখেই, ১৯৮২ সালের ১৬ ডিসেম্বর, জাতীয় স্মৃতিসৌধ উদ্বোধন করা হয়। তাই যুদ্ধের বিজয় এবং স্মৃতিস্থানের নিজের সূচনা—দুটি ঘটনাই ১৬ ডিসেম্বরের সঙ্গে জড়িত।' }
      ],
      faq: [
        { q: '১৬ ডিসেম্বর স্মৃতিসৌধে কী হয়?', a: 'বিজয় দিবস উপলক্ষে এখানে সরকারি শ্রদ্ধা ও জনসাধারণের পুষ্পস্তবক অর্পণ হয়, এবং প্রবেশ ও যান চলাচল নিয়ন্ত্রিত হতে পারে।' },
        { q: 'স্মৃতিসৌধের সঙ্গে বিজয় দিবসের সম্পর্ক কী?', a: '১৯৮২ সালের ১৬ ডিসেম্বর, অর্থাৎ বিজয় দিবসেই জাতীয় স্মৃতিসৌধ উদ্বোধন করা হয়।' },
        { q: '১৬ ডিসেম্বর খোলা থাকে কি?', a: 'সাধারণত শ্রদ্ধা নিবেদনের কর্মসূচি হয়, তবে প্রবেশ নিয়ন্ত্রিত হতে পারে। ওই দিনের সরকারি ঘোষণা ও সাভার উপজেলা প্রশাসনের নোটিশে যাচাই করুন।' },
        { q: 'এই দিনে কীভাবে পরিকল্পনা করব?', a: 'আগেই সরকারি নোটিশে প্রবেশ-নিয়ম দেখে নিন, বাড়তি সময় ধরে রওনা দিন, এবং প্রবেশপথ ঘটনাস্থলে নিরাপত্তাকর্মীর কাছে নিশ্চিত করুন।' },
        { q: 'বিজয় দিবস কী স্মরণ করায়?', a: '১৯৭১ সালের মুক্তিযুদ্ধের বিজয়ের কথা। ১৬ ডিসেম্বর বাংলাদেশের বিজয় দিবস।' },
        { q: '১৬ ডিসেম্বর ১৯৭১-এ কী ঘটেছিল?', a: 'এই দিনে ১৯৭১ সালের মুক্তিযুদ্ধের সমাপ্তি ঘটে ও বিজয় অর্জিত হয়; সেই কারণেই দিনটি বিজয় দিবস হিসেবে স্মরণ করা হয়।' }
      ]
    },
    en: {
      title: 'Visiting the National Martyrs’ Monument on Victory Day (16 December)',
      description: 'Visiting the National Martyrs’ Monument on Victory Day, 16 December — the significance of the day, its link to the monument, access and traffic, and how to plan your trip.',
      h1: 'Visiting the National Martyrs’ Monument on Victory Day (16 December)',
      answer:
        '16 December is Bangladesh’s Victory Day, the national day marking the victory of the 1971 Liberation War. On the same date, 16 December 1982, the National Martyrs’ Monument was inaugurated. On this day official tributes and public wreath-laying take place at the monument, so access and vehicle movement may be restricted; verify the arrangements in advance and allow extra time.',
      blocks: [
        { type: 'h2', text: 'What Victory Day commemorates' },
        { type: 'p', text: '16 December is Bangladesh’s Victory Day. The victory of the 1971 Liberation War is remembered nationally on this day. It is one of the principal national days for paying tribute to the achievement of independence.' },
        { type: 'h2', text: 'The link between the monument and Victory Day' },
        { type: 'p', text: 'The National Martyrs’ Monument has a direct link to Victory Day: the monument was inaugurated on 16 December 1982 — Victory Day itself. Tributes at the monument therefore carry particular meaning on this date.' },
        { type: 'h2', text: 'Ceremonies, access and traffic' },
        { type: 'p', text: 'On Victory Day, official tributes and public wreath-laying take place at the monument. Crowds and access control can last through the day, and traffic on the Dhaka–Aricha Highway can increase.' },
        { type: 'steps', items: [
          { title: 'Check official notices', text: 'Look at that year’s Victory Day programme and access rules in official notices or information from the Savar Upazila Administration.' },
          { title: 'Set off with time to spare', text: 'On 16 December, highway traffic and access control can be heavier; budget more time than on an ordinary day.' },
          { title: 'Confirm the entrance on site', text: 'Ask security staff which gate is open and where visitors may stand; do not assume a fixed gate.' }
        ] },
        { type: 'callout', tone: 'warn', title: 'Crowds and access control', text: 'Large crowds at the monument on Victory Day are normal, and the open entrance may change. Do not assume a specific time, gate or programme in advance; national-day official notices and on-site security staff are the final authority.' },
        { type: 'h2', text: 'Staying respectful and planning ahead' },
        { type: 'ul', items: [
          'This is a place of remembrance and tribute, so stay calm and restrained',
          'Follow the directions of security staff and do not cross barriers',
          'Avoid standing in front of the crowd to take photographs during a ceremony',
          'If you come with family, agree departure and return timings in advance given the crowds'
        ] },
        { type: 'h2', text: '16 December 1971: the end of the war and the victory' },
        { type: 'p', text: '16 December is remembered as the day the 1971 Liberation War ended and the victory was won, the day the war came to a close in the victory of independence. That is why it is Victory Day, and the day is observed across the country with tributes and formal ceremonies. At the National Martyrs’ Monument, the martyrs are remembered on this day.' },
        { type: 'callout', tone: 'note', title: 'The double significance of the date', text: 'At the same time, on this very date — 16 December 1982 — the National Martyrs’ Monument was inaugurated. So both the victory of the war and the beginning of the memorial itself are bound to 16 December.' }
      ],
      faq: [
        { q: 'What happens at the monument on 16 December?', a: 'Official tributes and public wreath-laying take place for Victory Day, and access and vehicle movement may be restricted.' },
        { q: 'What is the link between the monument and Victory Day?', a: 'The National Martyrs’ Monument was inaugurated on 16 December 1982 — Victory Day itself.' },
        { q: 'Is it open on 16 December?', a: 'Ceremonies are usually held, but access may be restricted. Check that day’s official notice and the Savar Upazila Administration.' },
        { q: 'How should I plan for this day?', a: 'Check access rules in official notices in advance, allow extra travel time, and confirm the entrance with on-site security staff.' },
        { q: 'What does Victory Day commemorate?', a: 'The victory of the 1971 Liberation War. 16 December is Bangladesh’s Victory Day.' },
        { q: 'What happened on 16 December 1971?', a: 'On this day the 1971 Liberation War ended and the victory was won, which is why the day is remembered as Victory Day.' }
      ]
    }
  }
];
