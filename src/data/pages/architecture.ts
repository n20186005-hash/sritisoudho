// D. স্থাপত্য: ৫টি পাতা।
// স্মৃতিসৌধের মূল কাঠামো, স্থপতি, নকশা প্রতিযোগিতা, মাপজোক ও প্রাঙ্গণ।
// কেবল নথিভুক্ত তথ্য; অনিশ্চিত বিবরণ স্পষ্টভাবে অনিশ্চিত বলা হয়েছে।
import type { ContentPage } from './types';

export const architecturePages: ContentPage[] = [
  {
    slug: 'architecture/seven-walls',
    section: 'architecture',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['history/1952-1971', 'architecture/height-dimensions', 'architecture/design-competition-1978', 'visit/location'],
    bn: {
      title: 'সাত জোড়া প্রাচীর: জাতীয় স্মৃতিসৌধের মূল স্থাপত্য',
      description: 'জাতীয় স্মৃতিসৌধের সাত জোড়া ত্রিভুজাকার কংক্রিট প্রাচীর কীভাবে উচ্চতা ক্রমে বাড়ে, সাতটি ঐতিহাসিক অধ্যায় কী বোঝায় এবং হাঁটার সময় এই স্থাপত্য কীভাবে পড়তে হয়।',
      h1: 'সাত জোড়া প্রাচীর: স্মৃতিসৌধের মূল স্থাপত্য',
      answer:
        'জাতীয় স্মৃতিসৌধের মূল কাঠামো সাত জোড়া ত্রিভুজাকার কংক্রিট প্রাচীর দিয়ে গঠিত। প্রতিটি পরবর্তী জোড়া আগেরটির চেয়ে উঁচু এবং সর্বোচ্চ বিন্দু বাংলাপিডিয়া অনুসারে প্রায় ১৫০ ফুট (৪৫.৭২ মিটার)। সাত জোড়া সাতটি ঐতিহাসিক অধ্যায়ের প্রতীক—১৯৫২ থেকে ১৯৭১ পর্যন্ত সংগ্রামের ধারাবাহিকতা।',
      blocks: [
        { type: 'h2', text: 'সাত জোড়া প্রাচীরের মূল জ্যামিতি' },
        { type: 'p', text: 'মূল কাঠামোটি সাত জোড়া ত্রিভুজাকার প্রাচীরের সমন্বয়ে গড়া, এবং প্রতিটি জোড়া একটির পর একটি বসানো—প্রথম জোড়া সবচেয়ে ছোট, শেষ জোড়া সবচেয়ে বড়। প্রতিটি জোড়া দুই দিক থেকে উঠে শীর্ষে মিলিত হয়, তাই সামনের ও পেছনের দিক থেকে দেখলে ধারালো ত্রিভুজ আর পাশ থেকে দেখলে ক্রমবর্ধমান ধাপচিত্র ধরা পড়ে। প্রতিটি পরবর্তী জোড়া আরও উঁচু হওয়ায় কাঠামোর সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট (৪৫.৭২ মিটার) পর্যন্ত যায়—এই সংখ্যাটি বাংলাপিডিয়ায় দেওয়া। প্রাচীরগুলো কংক্রিটে নির্মিত; এটিই এখানে নথিভুক্ত উপাদান।' },
        { type: 'h2', text: 'সাত জোড়া কোন কোন অধ্যায়ের প্রতীক' },
        {
          type: 'table',
          head: ['ক্রম', 'অধ্যায়', 'সময়কাল'],
          rows: [
            ['১', 'ভাষা আন্দোলন', '১৯৫২'],
            ['২', 'যুক্তফ্রন্ট নির্বাচন', '১৯৫৪'],
            ['৩', 'শাসনতান্ত্রিক আন্দোলন', '১৯৫৬'],
            ['৪', 'শিক্ষা আন্দোলন', '১৯৬২'],
            ['৫', 'ছয় দফা', '১৯৬৬'],
            ['৬', 'গণঅভ্যুত্থান', '১৯৬৯'],
            ['৭', 'মুক্তিযুদ্ধ', '১৯৭১']
          ]
        },
        { type: 'h2', text: 'উচ্চতা ক্রমে বাড়ার অর্থ' },
        { type: 'p', text: 'প্রতিটি পরবর্তী জোড়া আগেরটির চেয়ে উঁচু হওয়াটা নিছক নান্দনিক সিদ্ধান্ত নয়—এটি একটি ক্রমবর্ধমান আখ্যান। সংগ্রামের ধাপগুলো একটির পর একটি বেড়েছে, আর স্থাপত্য সেই আরোহণকে দৃশ্যমান করেছে। দর্শনার্থী সমতল থেকে যত এগোয়, প্রাচীর তত উঁচু হয়; আর এই ধীর বৃদ্ধিই কাঠামোর প্রকৃত পাঠ।' },
        { type: 'h2', text: 'হেঁটে হেঁটে স্থাপত্য কীভাবে পড়বেন' },
        {
          type: 'steps',
          items: [
            { title: 'প্রথমে দূরে দাঁড়ান', text: 'প্রবেশস্থল থেকে কিছুটা দূরে দাঁড়িয়ে পুরো সাত জোড়া একসঙ্গে দেখে নিন—তাহলেই উচ্চতার পার্থক্য বোঝা যায়।' },
            { title: 'ধাপে ধাপে এগোন', text: 'হাঁটার সময় লক্ষ্য করুন প্রতিটি জোড়া আগেরটির চেয়ে কতটা উঁচু; এটিই স্থাপত্যের মূল ভাষা।' },
            { title: 'পাশ থেকে দেখুন', text: 'সামনের দিক থেকে ত্রিভুজ, পাশ থেকে ক্রমবর্ধমান ঢাল—দুটি দৃশ্য একসঙ্গে নিলে জ্যামিতি স্পষ্ট হয়।' },
            { title: 'নীরব থাকার জায়গা রাখুন', text: 'শেষের দিকের জোড়ার কাছে থেমে সাতটি অধ্যায়ের ধারাবাহিকতা স্মরণ করা এই স্থানের উদ্দেশ্যের সঙ্গে মানানসই।' }
          ]
        },
        { type: 'callout', tone: 'warn', title: 'যা এই পাতা নিশ্চিত করে না', text: 'প্রতিটি জোড়ার আলাদা উচ্চতা, ধাপের সংখ্যা বা চত্বরের উপাদান সম্পর্কে সুনির্দিষ্ট নথিভুক্ত তথ্য এখানে নিশ্চিত করা যায়নি। সাত জোড়া যে সাত অধ্যায়ের প্রতীক, তা বাংলাদেশ ট্যুরিজম বোর্ডের উল্লেখ অনুসারে বলা হয়েছে; কোন নির্দিষ্ট জোড়া কোন অধ্যায়ের, সেই সূক্ষ্ম মিল নিশ্চিত নয়।' },
        { type: 'h2', text: 'সাত জোড়া কেন—‘জোড়া’ বলতে কী বোঝায়' },
        { type: 'p', text: 'স্মৃতিসৌধে সাতটি আলাদা দেয়াল নয়, সাত জোড়া দেয়াল রয়েছে। প্রতিটি জোড়ার দুটি প্রাচীর দুই দিক থেকে উঠে এক শীর্ষে মিলিত হয়ে একটি ত্রিভুজাকার রূপ তৈরি করে। অর্থাৎ একটি জোড়া মিলে একটি রূপ, আর সাতটি জোড়া মিলে সাতটি অধ্যায়ের সাতটি রূপ—তাই সাত জোড়ার হিসাব মানে সাতটি অধ্যায়, আলাদা সাতটি প্রতীক নয়।' },
        { type: 'ul', items: [
          'প্রতিটি জোড়ার দুটি প্রাচীর মিলে একটি ত্রিভুজাকার রূপ গঠন করে',
          'একটি জোড়া একটি ঐতিহাসিক অধ্যায়ের প্রতীক',
          'প্রথম জোড়া সবচেয়ে ছোট, শেষ জোড়া সবচেয়ে বড়'
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে কত জোড়া প্রাচীর আছে?', a: 'সাত জোড়া ত্রিভুজাকার কংক্রিট প্রাচীর।' },
        { q: 'সাত জোড়া কী বোঝায়?', a: 'সাতটি ঐতিহাসিক অধ্যায়—১৯৫২-এর ভাষা আন্দোলন থেকে ১৯৭১-এর মুক্তিযুদ্ধ পর্যন্ত।' },
        { q: 'সর্বোচ্চ বিন্দু কত উঁচু?', a: 'বাংলাপিডিয়া অনুসারে প্রায় ১৫০ ফুট, অর্থাৎ ৪৫.৭২ মিটার।' },
        { q: 'প্রতিটি জোড়ার আলাদা উচ্চতা জানা যায় কি?', a: 'না। প্রতিটি জোড়ার সুনির্দিষ্ট উচ্চতার নথিভুক্ত তথ্য এখানে নিশ্চিত করা যায়নি।' },
        { q: 'প্রাচীর কী দিয়ে তৈরি?', a: 'নথিভুক্ত উপাদান হিসেবে কংক্রিট উল্লেখ করা হয়।' },
        { q: 'সাতটি দেয়াল না সাত জোড়া দেয়াল?', a: 'সাত জোড়া দেয়াল; প্রতিটি জোড়ার দুটি প্রাচীর মিলে একটি ত্রিভুজাকার রূপ গঠন করে, আর একটি জোড়া একটি ঐতিহাসিক অধ্যায়ের প্রতীক।' }
      ]
    },
    en: {
      title: 'Seven walls: the architecture of the National Martyrs’ Monument',
      description: 'How the seven pairs of triangular concrete walls of the National Martyrs’ Monument rise in height, which seven historical chapters they represent, and how to read the architecture while walking the site.',
      h1: 'The seven pairs of walls at the heart of the monument',
      answer:
        'The main structure of the National Martyrs’ Monument is formed by seven pairs of triangular concrete walls. Each successive pair is taller than the one before it, and the highest point is about 150 ft (45.72 m) according to Banglapedia. The seven pairs stand for seven historical chapters, tracing the struggle from 1952 to 1971.',
      blocks: [
        { type: 'h2', text: 'The basic geometry of the seven pairs' },
        { type: 'p', text: 'The main structure is built from seven pairs of triangular walls, set one pair behind another — the first pair the smallest, the last the largest. Each pair rises from both sides to meet at a peak, so the front and rear views read as a sharp triangle while a side view shows a rising staircase of forms. Because every pair is taller than the one before it, the structure reaches its highest point at about 150 ft (45.72 m), the figure given by Banglapedia. The walls are of concrete, which is the documented material.' },
        { type: 'h2', text: 'Which chapters the seven pairs represent' },
        {
          type: 'table',
          head: ['Order', 'Chapter', 'Period'],
          rows: [
            ['1', 'Language Movement', '1952'],
            ['2', 'United Front election', '1954'],
            ['3', 'Constitutional movement', '1956'],
            ['4', 'Education movement', '1962'],
            ['5', 'Six Point Movement', '1966'],
            ['6', 'Mass Uprising', '1969'],
            ['7', 'Liberation War', '1971']
          ]
        },
        { type: 'h2', text: 'Why the walls rise' },
        { type: 'p', text: 'Each successive pair being taller than the last is not a purely aesthetic choice: it is a rising narrative. The stages of the struggle came one after another, and the architecture makes that ascent visible. The further a visitor walks from the level ground, the taller the walls become — and that slow progression is the real text of the structure.' },
        { type: 'h2', text: 'Reading the architecture as you walk' },
        {
          type: 'steps',
          items: [
            { title: 'Stand back first', text: 'Before walking in, stand back and take in all seven pairs at once — that is what makes the changing height legible.' },
            { title: 'Move forward pair by pair', text: 'As you walk, note how much taller each pair is than the one before it. That progression is the core of the design.' },
            { title: 'Look from the side', text: 'From the front the forms read as triangles; from the side they read as a rising slope. Taking both views together makes the geometry clear.' },
            { title: 'Leave room for silence', text: 'Pausing near the final pairs to remember the seven chapters in sequence suits the purpose of the place.' }
          ]
        },
        { type: 'callout', tone: 'warn', title: 'What this page does not establish', text: 'Specific documented detail such as the height of each individual pair, the number of steps, or the materials of the plaza could not be confirmed here. That the seven pairs represent seven chapters follows the Bangladesh Tourism Board’s account; the exact pairing of a given wall with a given chapter is not confirmed.' },
        { type: 'h2', text: 'Why pairs? What “pair” means here' },
        { type: 'p', text: 'The monument has seven pairs of walls, not seven single walls. The two walls of each pair rise from the two sides and meet at one peak, forming a single triangular form. So one pair makes one form, and seven pairs make the seven forms of the seven chapters — the count of seven pairs means seven chapters, not seven separate symbols.' },
        { type: 'ul', items: [
          'The two walls of each pair meet to form a single triangular form',
          'One pair stands for one historical chapter',
          'The first pair is the smallest and the last the largest'
        ] }
      ],
      faq: [
        { q: 'How many pairs of walls does the monument have?', a: 'Seven pairs of triangular concrete walls.' },
        { q: 'What do the seven pairs represent?', a: 'Seven historical chapters, from the 1952 Language Movement to the 1971 Liberation War.' },
        { q: 'How tall is the highest point?', a: 'About 150 ft (45.72 m), according to Banglapedia.' },
        { q: 'Is the height of each pair known?', a: 'No. Specific documented heights for each individual pair could not be confirmed here.' },
        { q: 'What are the walls made of?', a: 'Concrete is the documented material.' },
        { q: 'Is it seven walls or seven pairs of walls?', a: 'Seven pairs of walls; the two walls of each pair meet to form a single triangular form, and one pair stands for one historical chapter.' }
      ]
    }
  },
  {
    slug: 'architecture/syed-mainul-hossain',
    section: 'architecture',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['architecture/design-competition-1978', 'architecture/seven-walls', 'history/why-built'],
    bn: {
      title: 'স্থপতি সৈয়দ মাইনুল হোসেন: নকশা ও নথিভুক্ত তথ্য',
      description: 'জাতীয় স্মৃতিসৌধের স্থপতি সৈয়দ মাইনুল হোসেনের নকশা ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায় নির্বাচিত হয়। কোন তথ্য নথিভুক্ত আর কোন ব্যক্তিগত বিবরণ অনিশ্চিত, তা এখানে স্পষ্ট করা হয়েছে।',
      h1: 'স্থপতি সৈয়দ মাইনুল হোসেন',
      answer:
        'জাতীয় স্মৃতিসৌধের নকশা করেছিলেন স্থপতি সৈয়দ মাইনুল হোসেন, এবং তাঁর প্রস্তাব ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায় নির্বাচিত হয়েছিল। এটুকুই এখানে নিশ্চিতভাবে বলা যায়। জন্মসাল, শিক্ষা, কর্মজীবন বা অন্য স্থাপত্যকর্মের মতো ব্যক্তিগত বিবরণ এই পাতায় যাচাই করা হয়নি।',
      blocks: [
        { type: 'h2', text: 'নথিভুক্ত যা জানা যায়' },
        { type: 'p', text: 'স্থপতির নাম সৈয়দ মাইনুল হোসেন এবং স্মৃতিসৌধের নকশার কৃতিত্ব তাঁর—এই তথ্য নথিভুক্ত। তাঁর প্রস্তাব ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায় নির্বাচিত হয়েছিল, যেখানে মোট ৫৭টি প্রস্তাব জমা পড়েছিল। বাংলাপিডিয়ার বর্ণনায় নির্মাণকাজ গণপূর্ত অধিদপ্তর (পিডব্লিউডি) তত্ত্বাবধান করেছিল এবং স্মৃতিসৌধ ১৬ ডিসেম্বর ১৯৮২ (বিজয় দিবস) উদ্বোধন করা হয়।' },
        {
          type: 'table',
          head: ['বিষয়', 'নথিভুক্ত তথ্য'],
          rows: [
            ['স্থপতির নাম', 'সৈয়দ মাইনুল হোসেন'],
            ['ভূমিকা', 'জাতীয় স্মৃতিসৌধের নকশাকার'],
            ['নির্বাচনের প্রক্রিয়া', '১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতা'],
            ['প্রতিযোগিতায় প্রস্তাব', '৫৭টি'],
            ['নির্মাণ তত্ত্বাবধান', 'গণপূর্ত অধিদপ্তর (বাংলাপিডিয়া)'],
            ['উদ্বোধন', '১৬ ডিসেম্বর ১৯৮২']
          ]
        },
        { type: 'h2', text: 'নির্বাচন সম্পর্কে যা নথিভুক্ত' },
        { type: 'p', text: 'নথিভুক্ত তথ্য অনুসারে, স্মৃতিসৌধের নকশার জন্য ১৯৭৮ সালে একটি জাতীয় প্রতিযোগিতা হয় এবং সেই প্রতিযোগিতায় ৫৭টি প্রস্তাব জমা পড়ে; বিচার শেষে সৈয়দ মাইনুল হোসেনের প্রস্তাব নির্বাচিত হয়। বিচারকমণ্ডলী কারা ছিলেন, কত তারিখে জমা নেওয়া হয়েছিল বা কোন শর্তে বিচার হয়েছিল—এসব বিস্তারিত এই পাতায় নিশ্চিত করা যায়নি।' },
        { type: 'callout', tone: 'warn', title: 'অনিশ্চিত ব্যক্তিগত বিবরণ', text: 'স্থপতির জন্মসাল, শিক্ষাপ্রতিষ্ঠান, কর্মজীবন, অন্য স্থাপত্যকর্ম বা পুরস্কার সম্পর্কে নির্ভরযোগ্য তথ্য এখানে যাচাই করা হয়নি। এমন বিবরণ লিখে দিলে সেটি সত্য বলে দাবি করা হয়ে যায়—তাই এখানে সেটি ইচ্ছাকৃতভাবে বাদ দেওয়া হয়েছে।' },
        { type: 'h2', text: 'তথ্যসূত্র কীভাবে যাচাই করবেন' },
        {
          type: 'ul',
          items: [
            'নাম ও নকশা: বাংলাপিডিয়া ও বাংলাদেশ ট্যুরিজম বোর্ডের স্মৃতিসৌধ-এন্ট্রি',
            'প্রতিযোগিতার প্রসঙ্গ: যে নথি বা সংবাদ-প্রতিবেদনে প্রতিযোগিতার উল্লেখ আছে',
            'অন্যান্য জীবনের তথ্য: স্থাপত্য-সংশ্লিষ্ট প্রকাশনা বা প্রতিষ্ঠানভিত্তিক নথি',
            'সন্দেহ হলে: প্রাথমিক সূত্রের বাইরের দাবি প্রমাণ হিসেবে গ্রহণ করবেন না'
          ]
        },
        { type: 'h2', text: 'নকশাকার ও তদারককারী প্রতিষ্ঠানের পার্থক্য' },
        { type: 'p', text: 'স্মৃতিসৌধের ক্ষেত্রে দুটি আলাদা ভূমিকা আছে: নকশা করা এবং নির্মাণ তদারকি করা। স্থপতি সৈয়দ মাইনুল হোসেনের নাম যুক্ত নকশার সঙ্গে—তিনি স্মৃতিসৌধের রূপটি পরিকল্পনা করেন এবং তাঁর প্রস্তাব ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায় নির্বাচিত হয়। অন্যদিকে নির্মাণকাজের তদারকি করে একটি সরকারি প্রতিষ্ঠান—বাংলাপিডিয়া অনুসারে পাবলিক ওয়ার্কস ডিপার্টমেন্ট (গণপূর্ত অধিদপ্তর)।' },
        { type: 'callout', tone: 'note', title: 'ভূমিকা দুটি এক নয়', text: 'নকশাকার ও তদারককারী প্রতিষ্ঠান এক নয়। নকশার কৃতিত্ব স্থপতির, আর নির্মাণ তদারকির তথ্য বাংলাপিডিয়াসহ সংশ্লিষ্ট সূত্রে পাওয়া যায়।' }
      ],
      faq: [
        { q: 'স্মৃতিসৌধের স্থপতি কে?', a: 'স্থপতি সৈয়দ মাইনুল হোসেন।' },
        { q: 'তাঁর নকশা কীভাবে নির্বাচিত হয়েছিল?', a: '১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায়, যেখানে ৫৭টি প্রস্তাব জমা পড়েছিল।' },
        { q: 'তাঁর জন্মসাল বা শিক্ষা সম্পর্কে জানা যায়?', a: 'এই পাতায় তা যাচাই করা হয়নি; এখানে কেবল নকশা ও প্রতিযোগিতা-সংক্রান্ত নথিভুক্ত তথ্য দেওয়া হয়েছে।' },
        { q: 'নির্মাণ কে তত্ত্বাবধান করেছিল?', a: 'বাংলাপিডিয়া অনুসারে গণপূর্ত অধিদপ্তর (পিডব্লিউডি)।' },
        { q: 'স্মৃতিসৌধ কবে উদ্বোধন হয়?', a: '১৬ ডিসেম্বর ১৯৮২, বিজয় দিবসে।' },
        { q: 'নকশা করা আর নির্মাণ তদারকি কি একই কাজ?', a: 'না। নকশার কৃতিত্ব স্থপতি সৈয়দ মাইনুল হোসেনের; অন্যদিকে বাংলাপিডিয়া অনুসারে নির্মাণকাজ তদারকি করে পাবলিক ওয়ার্কস ডিপার্টমেন্ট (গণপূর্ত অধিদপ্তর)।' }
      ]
    },
    en: {
      title: 'Architect Syed Mainul Hossain: the design and what is documented',
      description: 'The architect of the National Martyrs’ Monument is Syed Mainul Hossain, whose design won the 1978 national competition. What is documented, and which biographical details are not confirmed here.',
      h1: 'Architect Syed Mainul Hossain',
      answer:
        'The National Martyrs’ Monument was designed by the architect Syed Mainul Hossain, and his scheme was selected in the 1978 national design competition. That is what can be stated with confidence here. Biographical detail such as his year of birth, education, career or other works is not verified on this page.',
      blocks: [
        { type: 'h2', text: 'What is documented' },
        { type: 'p', text: 'The architect’s name is Syed Mainul Hossain, and the design of the monument is credited to him — that is documented. His scheme was selected in a national design competition held in 1978, which received 57 proposals in total. Banglapedia records that the Public Works Department supervised the construction and that the monument was inaugurated on 16 December 1982, Victory Day.' },
        {
          type: 'table',
          head: ['Item', 'Documented detail'],
          rows: [
            ['Architect’s name', 'Syed Mainul Hossain'],
            ['Role', 'Designer of the National Martyrs’ Monument'],
            ['Selection process', '1978 national design competition'],
            ['Proposals received', '57'],
            ['Construction supervision', 'Public Works Department (Banglapedia)'],
            ['Inauguration', '16 December 1982']
          ]
        },
        { type: 'h2', text: 'What is documented about the selection' },
        { type: 'p', text: 'According to the documented account, a national competition for the monument’s design was held in 1978 and received 57 proposals; after judging, Syed Mainul Hossain’s proposal was selected. Who sat on the jury, the exact submission dates, or the terms on which proposals were judged could not be confirmed for this page.' },
        { type: 'callout', tone: 'warn', title: 'Unverified biographical detail', text: 'Reliable information on the architect’s year of birth, education, career, other architectural works or awards was not verified here. Stating such detail would amount to claiming it as fact, so it is deliberately left out.' },
        { type: 'h2', text: 'How to check the sources' },
        {
          type: 'ul',
          items: [
            'Name and design: the monument entries in Banglapedia and on the Bangladesh Tourism Board site',
            'Competition detail: documents or press reports that cite the competition itself',
            'Other life detail: architectural publications or institutional records',
            'When in doubt: treat claims that go beyond primary sources as unproven'
          ]
        },
        { type: 'h2', text: 'The designer and the supervising body are not the same' },
        { type: 'p', text: 'There are two separate roles here: designing the monument, and supervising its construction. The name of the architect Syed Mainul Hossain belongs to the design — he planned the form of the monument, and his scheme was selected in the 1978 national design competition. The supervision of the building work, on the other hand, was carried out by a government body — the Public Works Department, according to Banglapedia.' },
        { type: 'callout', tone: 'note', title: 'Two roles, not one', text: 'The designer and the supervising body are not the same. The credit for the design belongs to the architect, while the detail of construction supervision is found in sources such as Banglapedia.' }
      ],
      faq: [
        { q: 'Who designed the National Martyrs’ Monument?', a: 'The architect Syed Mainul Hossain.' },
        { q: 'How was his design selected?', a: 'Through a national design competition held in 1978, which received 57 proposals.' },
        { q: 'Do we know his year of birth or education?', a: 'Not verified here. This page records only the documented design and competition facts.' },
        { q: 'Who supervised the construction?', a: 'The Public Works Department, according to Banglapedia.' },
        { q: 'When was the monument inaugurated?', a: 'On 16 December 1982, Victory Day.' },
        { q: 'Are designing and supervising the construction the same thing?', a: 'No. The credit for the design belongs to the architect Syed Mainul Hossain, while the construction was supervised by the Public Works Department, according to Banglapedia.' }
      ]
    }
  },
  {
    slug: 'architecture/design-competition-1978',
    section: 'architecture',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['architecture/syed-mainul-hossain', 'history/construction-timeline', 'history/why-built', 'architecture/seven-walls'],
    bn: {
      title: '১৯৭৮ সালের নকশা প্রতিযোগিতা: ৫৭টি প্রস্তাব ও নির্বাচন',
      description: 'জাতীয় স্মৃতিসৌধের নকশার জন্য ১৯৭৮ সালের জাতীয় প্রতিযোগিতা—৫৭টি প্রস্তাব জমা পড়েছিল এবং সৈয়দ মাইনুল হোসেনের নকশা নির্বাচিত হয়। খোলা প্রতিযোগিতা কেন গুরুত্বপূর্ণ ছিল এবং কোন তথ্য অনুপলব্ধ।',
      h1: '১৯৭৮ সালের নকশা প্রতিযোগিতা',
      answer:
        '১৯৭৮ সালে জাতীয় স্মৃতিসৌধের নকশার জন্য একটি জাতীয় প্রতিযোগিতা আয়োজিত হয়, যেখানে ৫৭টি প্রস্তাব জমা পড়ে এবং স্থপতি সৈয়দ মাইনুল হোসেনের প্রস্তাব নির্বাচিত হয়। খোলা প্রতিযোগিতা মানে ছিল—স্মারকটির রূপ একজনের সিদ্ধান্তে নয়, বরং বহু নকশাকারীর প্রস্তাবের মধ্য থেকে বেছে নেওয়া।',
      blocks: [
        { type: 'h2', text: 'প্রতিযোগিতাটি কী ছিল' },
        { type: 'p', text: 'নথিভুক্ত তথ্য অনুসারে, স্বাধীনতার পর জাতীয় স্মারকের জন্য ১৯৭৮ সালে একটি নকশা প্রতিযোগিতা আয়োজিত হয়। প্রতিযোগিতায় ৫৭টি প্রস্তাব জমা পড়ে এবং বিচার শেষে সৈয়দ মাইনুল হোসেনের প্রস্তাব নির্বাচিত হয়। অংশগ্রহণকারীরা ছিলেন কর্মরত নকশাকার ও স্থপতি, যাঁরা একই বিবরণীর ভিত্তিতে ভিন্ন ভিন্ন পরিকল্পনা জমা দেন।' },
        {
          type: 'table',
          head: ['বিষয়', 'নথিভুক্ত তথ্য', 'মন্তব্য'],
          rows: [
            ['আয়োজনের বছর', '১৯৭৮', 'নথিভুক্ত'],
            ['জমা পড়া প্রস্তাব', '৫৭টি', 'নথিভুক্ত'],
            ['নির্বাচিত নকশা', 'সৈয়দ মাইনুল হোসেন', 'নথিভুক্ত'],
            ['বিচারকমণ্ডলী', 'নিশ্চিত তথ্য নেই', 'এখানে যাচাই করা যায়নি'],
            ['জমার তারিখ ও শর্ত', 'নিশ্চিত তথ্য নেই', 'এখানে যাচাই করা যায়নি'],
            ['অংশগ্রহণ ফি', 'নিশ্চিত তথ্য নেই', 'এখানে যাচাই করা যায়নি']
          ]
        },
        { type: 'h2', text: 'খোলা প্রতিযোগিতা কেন গুরুত্বপূর্ণ ছিল' },
        { type: 'p', text: '১৯৭১-এর পর একটি নতুন জাতিকে নিজের স্মৃতি ও পরিচয়কে রূপ দিতে হয়েছিল। এমন একটি স্মারকের রূপ যদি কেবল একজন কর্মকর্তা বা একটি গোষ্ঠীর সিদ্ধান্তে ঠিক হয়ে যেত, তবে তা সমাজের বিস্তার ধারণ করত না। খোলা প্রতিযোগিতা বহু নকশাকারীর ধারণা তুলনা করার সুযোগ দেয়, আর নির্বাচিত নকশা একটি প্রকাশ্য প্রক্রিয়ার ফসল হিসেবে দাঁড়ায়।' },
        { type: 'h2', text: 'যা নথিভুক্ত নয়' },
        {
          type: 'ul',
          items: [
            'বিচারকমণ্ডলীর সদস্যদের নাম',
            'জমা দেওয়ার সুনির্দিষ্ট শেষ তারিখ',
            'প্রতিযোগিতার বিধি বা শর্তাবলি',
            'অংশগ্রহণ বা পুরস্কারের আর্থিক বিবরণ'
          ]
        },
        { type: 'callout', tone: 'warn', title: 'নিশ্চিত না হলে দাবি করবেন না', text: 'প্রতিযোগিতার বিধি, বিচারক বা তারিখ সংক্রান্ত অনেক বিবরণ ইন্টারনেটে ঘুরে বেড়ায়, কিন্তু নির্ভরযোগ্য প্রাথমিক সূত্রে এখানে তা যাচাই করা যায়নি। তাই এই পাতায় শুধু ৫৭টি প্রস্তাব ও নির্বাচনের কথা নথিভুক্ত হিসেবে রাখা হয়েছে।' },
        { type: 'h2', text: 'নির্বাচিত নকশা আজ কীভাবে দেখা যায়' },
        { type: 'p', text: '১৯৭৮ সালে নির্বাচিত নকশাটিই আজ স্মৃতিসৌধের রূপে দাঁড়িয়ে আছে। মূল কাঠামো সাত জোড়া ত্রিভুজাকার প্রাচীর দিয়ে গড়া, প্রতিটি পরবর্তী জোড়া আগেরটির চেয়ে উঁচু, আর সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট (৪৫.৭২ মিটার)। সাত জোড়া সাতটি ঐতিহাসিক অধ্যায়ের প্রতীক—১৯৫২ থেকে ১৯৭১ পর্যন্ত।' },
        { type: 'ul', items: [
          'মূল কাঠামো সাত জোড়া ত্রিভুজাকার প্রাচীরের সমন্বয়ে গড়া',
          'প্রতিটি পরবর্তী জোড়া আগেরটির চেয়ে উঁচু',
          'সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট (৪৫.৭২ মিটার)',
          'সাত জোড়া সাতটি ঐতিহাসিক অধ্যায়ের প্রতীক'
        ] }
      ],
      faq: [
        { q: '১৯৭৮ সালের প্রতিযোগিতায় কতটি প্রস্তাব জমা পড়েছিল?', a: '৫৭টি প্রস্তাব।' },
        { q: 'কোন নকশা নির্বাচিত হয়েছিল?', a: 'স্থপতি সৈয়দ মাইনুল হোসেনের নকশা।' },
        { q: 'বিচারকমণ্ডলী কারা ছিলেন?', a: 'নির্ভরযোগ্য নথিভুক্ত তথ্য এখানে নেই; তাই এই পাতায় নাম উল্লেখ করা হয়নি।' },
        { q: 'খোলা প্রতিযোগিতা কেন হয়েছিল?', a: 'বহু নকশাকারীর প্রস্তাব তুলনা করে একটি প্রকাশ্য প্রক্রিয়ায় জাতীয় স্মারকের রূপ নির্ধারণের জন্য।' },
        { q: 'প্রতিযোগিতায় অংশ নিতে ফি লাগত কি?', a: 'এমন নিশ্চিত তথ্য পাওয়া যায়নি; তাই কিছু বলা হয়নি।' },
        { q: 'নির্বাচিত নকশাটি আজ কোথায় দেখা যায়?', a: 'সাভারে জাতীয় স্মৃতিসৌধের মূল কাঠামোর মধ্যেই; সাত জোড়া ত্রিভুজাকার প্রাচীর ও ধাপে ধাপে বাড়তে থাকা উচ্চতাই সেই নির্বাচিত নকশার রূপ।' }
      ]
    },
    en: {
      title: 'The 1978 design competition: 57 proposals and the selection',
      description: 'The national competition for the National Martyrs’ Monument design was held in 1978, received 57 proposals, and selected Syed Mainul Hossain’s scheme. Why an open competition mattered, and what is not documented.',
      h1: 'The 1978 design competition',
      answer:
        'A national design competition for the National Martyrs’ Monument was held in 1978, receiving 57 proposals; the scheme by the architect Syed Mainul Hossain was selected. An open competition meant the form of the memorial was chosen from among many designers’ proposals rather than settled by a single decision.',
      blocks: [
        { type: 'h2', text: 'What the competition was' },
        { type: 'p', text: 'According to the documented account, a design competition for the national memorial was held in 1978, after independence. It received 57 proposals, and after judging, Syed Mainul Hossain’s scheme was chosen. The entrants were working designers and architects submitting competing ideas against the same brief.' },
        {
          type: 'table',
          head: ['Item', 'Documented detail', 'Note'],
          rows: [
            ['Year held', '1978', 'documented'],
            ['Proposals received', '57', 'documented'],
            ['Selected design', 'Syed Mainul Hossain', 'documented'],
            ['Jury members', 'no confirmed information', 'not verified here'],
            ['Submission dates and rules', 'no confirmed information', 'not verified here'],
            ['Entry fee', 'no confirmed information', 'not verified here']
          ]
        },
        { type: 'h2', text: 'Why an open competition mattered' },
        { type: 'p', text: 'After 1971 a new nation had to give form to its own memory and identity. Had the shape of such a memorial been fixed by a single official or a single group, it would not have carried the breadth of that society. An open competition allowed many designers’ ideas to be compared and produced a chosen design that stands as the outcome of a public process.' },
        { type: 'h2', text: 'What is not documented' },
        {
          type: 'ul',
          items: [
            'The names of the jury members',
            'The exact final submission date',
            'The rules or conditions of the competition',
            'Any financial detail of participation or prizes'
          ]
        },
        { type: 'callout', tone: 'warn', title: 'Do not assert what is unconfirmed', text: 'Many details about the competition’s rules, jury or dates circulate online, but none were verifiable here from a reliable primary source. This page therefore keeps only the documented facts: the 57 proposals and the selection.' },
        { type: 'h2', text: 'How the selected design can be seen today' },
        { type: 'p', text: 'The design selected in 1978 is the monument that stands today. Its main structure is built from seven pairs of triangular walls, each successive pair taller than the one before it, and the highest point reaches about 150 ft (45.72 m). The seven pairs stand for seven historical chapters, from 1952 to 1971.' },
        { type: 'ul', items: [
          'The main structure is formed from seven pairs of triangular walls',
          'Each successive pair is taller than the one before it',
          'The highest point is about 150 ft (45.72 m)',
          'The seven pairs stand for seven historical chapters'
        ] }
      ],
      faq: [
        { q: 'How many proposals did the 1978 competition receive?', a: '57 proposals.' },
        { q: 'Which design was selected?', a: 'The design by the architect Syed Mainul Hossain.' },
        { q: 'Who were the jury members?', a: 'No reliable documented information was found, so no names are given here.' },
        { q: 'Why was it an open competition?', a: 'To choose the form of a national memorial through a public process, comparing many designers’ proposals.' },
        { q: 'Was there an entry fee?', a: 'No confirmed information was found, so nothing is stated.' },
        { q: 'Where can the selected design be seen today?', a: 'In the main structure of the National Martyrs’ Monument at Savar: the seven pairs of triangular walls and the rising height are the form of that selected design.' }
      ]
    }
  },
  {
    slug: 'architecture/height-dimensions',
    section: 'architecture',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['architecture/seven-walls', 'architecture/grounds-mass-graves', 'visit/location'],
    bn: {
      title: 'স্মৃতিসৌধের উচ্চতা ও আয়তন: ১৫০ ফুট ও ৩৪ হেক্টর',
      description: 'জাতীয় স্মৃতিসৌধের সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট (৪৫.৭২ মিটার) এবং কমপ্লেক্স প্রায় ৩৪ হেক্টর (৮৪ একর), এর বাইরে আরও সবুজ এলাকা। কাঠামোর উচ্চতা ও জমির আয়তন কেন আলাদা এবং কোন সংখ্যা প্রায়ই ভুল উদ্ধৃত হয়।',
      h1: 'উচ্চতা, আয়তন ও মাপজোক',
      answer:
        'জাতীয় স্মৃতিসৌধের সর্বোচ্চ বিন্দু বাংলাপিডিয়া অনুসারে প্রায় ১৫০ ফুট, অর্থাৎ ৪৫.৭২ মিটার। স্মৃতিসৌধ কমপ্লেক্সের আয়তন প্রায় ৩৪ হেক্টর (৮৪ একর), এবং এর বাইরে আরও একটি সবুজ এলাকা রয়েছে। কাঠামোর উচ্চতা আর জমির আয়তন দুটি ভিন্ন বিষয়—বাইরের সবুজ এলাকা কমপ্লেক্সের আয়তনের সঙ্গে যোগ করা যায় না।',
      blocks: [
        { type: 'h2', text: 'উচ্চতা: প্রায় ১৫০ ফুট' },
        { type: 'p', text: 'কাঠামোর সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট, অর্থাৎ ৪৫.৭২ মিটার—এই সংখ্যাটি বাংলাপিডিয়ায় দেওয়া। সাত জোড়া প্রাচীরের প্রতিটি পরবর্তী জোড়া আরও উঁচু হওয়ায় কাঠামোটি এই সর্বোচ্চ বিন্দুতে পৌঁছায়। কেউ কেউ এই উচ্চতাকে “প্রায় ৫০ মিটার” বলে গড়িয়ে দেন, যা প্রকৃত রূপান্তর নয়।' },
        { type: 'h2', text: 'আয়তন: কমপ্লেক্স ও বাইরের সবুজ এলাকা' },
        { type: 'p', text: 'স্মৃতিসৌধ কমপ্লেক্সের আয়তন প্রায় ৩৪ হেক্টর, অর্থাৎ প্রায় ৮৪ একর। এই কমপ্লেক্সের বাইরে আরও একটি সবুজ এলাকা রয়েছে। দুটি এলাকা এক নয়—কেউ কেউ বাইরের সবুজ অংশকে কমপ্লেক্সের ভেতরে ধরে নিয়ে সংখ্যা বাড়িয়ে ফেলেন, যা প্রকৃত তথ্য নয়।' },
        {
          type: 'table',
          head: ['বিষয়', 'নথিভুক্ত পরিমাণ', 'মন্তব্য'],
          rows: [
            ['সর্বোচ্চ উচ্চতা', 'প্রায় ১৫০ ফুট (৪৫.৭২ মিটার)', 'বাংলাপিডিয়া'],
            ['কমপ্লেক্সের আয়তন', 'প্রায় ৩৪ হেক্টর (৮৪ একর)', 'নথিভুক্ত'],
            ['বাইরের সবুজ এলাকা', 'কমপ্লেক্সের বাইরে আলাদা', 'আয়তনের সঙ্গে যোগ করা যায় না'],
            ['প্রতিটি জোড়ার আলাদা উচ্চতা', 'নিশ্চিত তথ্য নেই', 'উচ্চতা ক্রমে বাড়ে, তবে সংখ্যা অনুপলব্ধ'],
            ['প্রবেশমূল্য', 'যাচাই করা যায়নি', 'ফি উল্লেখ না থাকা মানেই বিনামূল্যে নয়']
          ]
        },
        { type: 'h2', text: 'এই সংখ্যাগুলো কেন প্রায়ই ভুল উদ্ধৃত হয়' },
        {
          type: 'ul',
          items: [
            'ফুট ও মিটারের রূপান্তরে গোলমাল—১৫০ ফুট ঠিক ৪৫.৭২ মিটার, অথচ অনেকেই এটিকে “প্রায় ৫০ মিটার” বলে গড়িয়ে দেন',
            'উচ্চতা ও জমির আয়তনকে একই সংখ্যা ভেবে ভুল—দুটি সম্পূর্ণ আলাদা মাপ',
            'কমপ্লেক্সের ৩৪ হেক্টরের সঙ্গে বাইরের সবুজ এলাকা জুড়ে বড় সংখ্যা তৈরি করা হয়',
            '“স্মৃতিসৌধ” বলতে কেবল মূল কাঠামো না পুরো কমপ্লেক্স, তা না ঠিক করলে আকার-সংখ্যা গুলিয়ে যায়'
          ]
        },
        { type: 'callout', tone: 'warn', title: 'আয়তন অনেক বড়, তবু প্রকৃত সীমানা যাচাই করুন', text: '৩৪ হেক্টর কমপ্লেক্স এবং বাইরের সবুজ এলাকার প্রকৃত সীমানা এবং বর্তমানে কোন অংশে প্রবেশ করা যায়, তা নির্ভরযোগ্য হালনাগাদ সূত্রে এখানে নিশ্চিত করা যায়নি। মাপজোকের হিসাব নেওয়ার সময় কমপ্লেক্স আর বাইরের এলাকা আলাদা করে ধরুন।' },
        { type: 'h2', text: 'উচ্চতাটা বাস্তবে কতটা—পরিচিত মাপের সঙ্গে তুলনা' },
        { type: 'p', text: 'কাঠামোর সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট (৪৫.৭২ মিটার), যা কাছাকাছি গিয়ে দাঁড়ালে উঁচু ভবনের মতোই বড় মনে হয়। তবে স্মৃতিসৌধে দর্শনার্থী সাধারণত প্রাঙ্গণের সমতল থেকে কাঠামোটি দেখেন, তাই উচ্চতার অনুভব নির্ভর করে আপনি কতটা কাছে দাঁড়িয়ে দেখছেন তার উপর।' },
        { type: 'callout', tone: 'warn', title: 'তুলনা আনুমানিক, যা নিশ্চিত তথ্য নয়', text: '১৫০ ফুট উচ্চতাকে আন্দাজে “প্রায় ১৫ তলা ভবনের সমান” বলে বর্ণনা করা যায়, তবে এটি কেবল একটি আনুমানিক তুলনা—প্রকৃত ভবনের উচ্চতা নির্মাণ-মানদণ্ডে ভিন্ন হয়। নির্ভরযোগ্য সংখ্যা হিসেবে ধরে নিন প্রায় ১৫০ ফুট, অর্থাৎ ৪৫.৭২ মিটার।' }
      ],
      faq: [
        { q: 'স্মৃতিসৌধ কত উঁচু?', a: 'সর্বোচ্চ বিন্দু প্রায় ১৫০ ফুট, অর্থাৎ ৪৫.৭২ মিটার—বাংলাপিডিয়া অনুসারে।' },
        { q: 'কমপ্লেক্সের আয়তন কত?', a: 'প্রায় ৩৪ হেক্টর, অর্থাৎ প্রায় ৮৪ একর।' },
        { q: 'বাইরের সবুজ এলাকা কি কমপ্লেক্সের অংশ?', a: 'না। কমপ্লেক্সের বাইরে আরও একটি সবুজ এলাকা রয়েছে; দুটিকে এক করে দেখা যায় না।' },
        { q: '১৫০ ফুট কি ৫০ মিটার?', a: 'না। ১৫০ ফুট ঠিক ৪৫.৭২ মিটার; “প্রায় ৫০ মিটার” বলা একটি সাধারণ গড়মিল।' },
        { q: 'প্রবেশমূল্য কত?', a: 'যাচাই করা যায়নি। ফি উল্লেখ না থাকা মানেই বিনামূল্যে নয়।' },
        { q: '১৫০ ফুট উচ্চতা বাস্তবে কতটা বোঝায়?', a: 'প্রায় ৪৫.৭২ মিটার; আন্দাজে এটিকে “প্রায় ১৫ তলা ভবনের সমান” বলা যায়, তবে তা কেবল আনুমানিক তুলনা। নির্ভরযোগ্য সংখ্যা প্রায় ১৫০ ফুট বা ৪৫.৭২ মিটার।' }
      ]
    },
    en: {
      title: 'Height and dimensions of the National Martyrs’ Monument',
      description: 'The highest point of the National Martyrs’ Monument is about 150 ft (45.72 m) and the complex covers about 34 hectares (84 acres), with further green area outside. Why the structure’s height and the site’s area are different things, and which figures are often misquoted.',
      h1: 'Height, area and measurements',
      answer:
        'The highest point of the National Martyrs’ Monument is about 150 ft, or 45.72 m, according to Banglapedia. The monument complex covers about 34 hectares (84 acres), with a further green area outside it. The structure’s height and the site’s area are two different measurements, and the outer green area cannot simply be added to the complex.',
      blocks: [
        { type: 'h2', text: 'Height: about 150 ft' },
        { type: 'p', text: 'The highest point of the structure is about 150 ft, or 45.72 m — the figure given by Banglapedia. Because each successive pair of the seven walls is taller than the one before it, the structure reaches this highest point. It is sometimes rounded off loosely to “about 50 m”, which is not the actual conversion.' },
        { type: 'h2', text: 'Area: the complex and the green area outside' },
        { type: 'p', text: 'The monument complex covers about 34 hectares, roughly 84 acres. Beyond the complex there is a further green area. The two are not the same: treating the outer green space as part of the complex inflates the figure, which is a common error.' },
        {
          type: 'table',
          head: ['Item', 'Documented figure', 'Note'],
          rows: [
            ['Highest point', 'about 150 ft (45.72 m)', 'Banglapedia'],
            ['Complex area', 'about 34 hectares (84 acres)', 'documented'],
            ['Green area outside', 'separate, outside the complex', 'not added to the complex figure'],
            ['Height of each pair', 'no confirmed figure', 'the pairs rise in steps, but the figure is unavailable'],
            ['Entry fee', 'not verified', 'no fee shown does not mean entry is free']
          ]
        },
        { type: 'h2', text: 'Why these figures are often misquoted' },
        {
          type: 'ul',
          items: [
            'Feet and metres get blurred — 150 ft is exactly 45.72 m, yet it is often rounded to “about 50 m”',
            'Height and area are mistaken for one another — they are entirely different measurements',
            'The 34-hectare complex is inflated by adding the green area outside it',
            'Unless it is clear whether “the monument” means the structure or the whole complex, the figures get confused'
          ]
        },
        { type: 'callout', tone: 'warn', title: 'A large area, but confirm the real boundaries', text: 'The actual boundaries of the 34-hectare complex and of the outer green area, and which parts visitors may currently enter, could not be confirmed here from a reliable current source. When quoting figures, keep the complex and the outer area separate.' },
        { type: 'h2', text: 'How tall that really is — a comparison with familiar measures' },
        { type: 'p', text: 'The highest point of the structure is about 150 ft (45.72 m), which looks every bit as large as a tall building when you stand near it. In practice, though, visitors usually view the structure from the level ground of the grounds, so the sense of height also depends on how close you stand.' },
        { type: 'callout', tone: 'warn', title: 'A comparison is an estimate, not a fact', text: 'A height of 150 ft can loosely be described as “about the same as a 15-storey building”, but that is only a rough comparison — real buildings vary in height according to construction standards. Treat the reliable figure as about 150 ft, or 45.72 m.' }
      ],
      faq: [
        { q: 'How tall is the monument?', a: 'Its highest point is about 150 ft, or 45.72 m, according to Banglapedia.' },
        { q: 'How large is the complex?', a: 'About 34 hectares, roughly 84 acres.' },
        { q: 'Is the green area outside part of the complex?', a: 'No. There is a further green area outside the complex; the two should not be combined.' },
        { q: 'Is 150 ft the same as 50 m?', a: 'No. 150 ft is exactly 45.72 m; describing it as “about 50 m” is a common rounding error.' },
        { q: 'What is the entry fee?', a: 'Not verified. No fee shown does not mean entry is free.' },
        { q: 'What does a height of 150 ft feel like in practice?', a: 'About 45.72 m; it can loosely be thought of as “about the same as a 15-storey building”, but that is only a rough comparison. The reliable figure is about 150 ft, or 45.72 m.' }
      ]
    }
  },
  {
    slug: 'architecture/grounds-mass-graves',
    section: 'architecture',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['architecture/seven-walls', 'architecture/height-dimensions', 'visit/etiquette', 'history/1952-1971'],
    bn: {
      title: 'স্মৃতিসৌধের প্রাঙ্গণ: জলাশয়, উদ্যান ও স্মৃতিস্থান',
      description: 'জাতীয় স্মৃতিসৌধের প্রাঙ্গণে কৃত্রিম জলাশয় বা প্রতিফলন পুকুর, হাঁটার পথ, উদ্যান ও খোলা চত্বর রয়েছে। বিন্যাস, সীমানা ও বর্তমান প্রবেশ-শর্ত নির্ভরযোগ্য সূত্রে যাচাই করা যায়নি—ঘটনাস্থলে যাচাই করুন।',
      h1: 'প্রাঙ্গণ, জলাশয় ও স্মৃতিস্থান',
      answer:
        'স্মৃতিসৌধের প্রাঙ্গণে একটি কৃত্রিম জলাশয় বা প্রতিফলন পুকুর, হাঁটার পথ, উদ্যান এবং খোলা চত্বর রয়েছে। শহীদদের স্মরণের সঙ্গে সম্পর্কিত স্মৃতিস্থানও এই স্থানের উদ্দেশ্যের অংশ। তবে প্রাঙ্গণের সঠিক বিন্যাস, সীমানা এবং বর্তমানে কোন অংশে প্রবেশ করা যায়, তা নির্ভরযোগ্য হালনাগাদ সূত্রে যাচাই করা যায়নি—ঘটনাস্থলে যাচাই করে নেওয়া দরকার।',
      blocks: [
        { type: 'h2', text: 'প্রাঙ্গণে কী কী অন্তর্ভুক্ত' },
        { type: 'p', text: 'নথিভুক্ত তথ্য অনুসারে স্মৃতিসৌধ এলাকায় একটি কৃত্রিম জলাশয় বা প্রতিফলন পুকুর, হাঁটার পথ এবং উদ্যান রয়েছে। মূল কাঠামোর চারপাশে এই প্রাঙ্গণ ছড়িয়ে আছে, আর এর বাইরে আরও সবুজ এলাকা রয়েছে।' },
        { type: 'h2', text: 'কৃত্রিম জলাশয় ও হাঁটার পথ' },
        { type: 'p', text: 'জলাশয়টি প্রতিফলনের জন্য ব্যবহৃত হয়—শান্ত জলে কাঠামোর প্রতিরূপ ধরা পড়ে। হাঁটার পথগুলো দর্শনার্থীদের মূল কাঠামো ও উদ্যানের মধ্যে দিয়ে নিয়ে যায়। তবে জলাশয়ের প্রকৃত আকার, গভীরতা বা পথের সুনির্দিষ্ট দৈর্ঘ্যের নথিভুক্ত তথ্য এখানে নিশ্চিত করা যায়নি।' },
        { type: 'h2', text: 'উদ্যান, খোলা চত্বর ও স্মৃতিস্থান' },
        { type: 'p', text: 'উদ্যান ও খোলা চত্বর দর্শনার্থীদের হাঁটার ও দাঁড়ানোর জায়গা দেয়; স্মৃতিসৌধের উদ্দেশ্য কেবল একটি স্থাপনা নয়, বরং শহীদদের স্মরণ। এই কারণেই স্থানটিতে শহীদদের সঙ্গে সম্পর্কিত স্মৃতিস্থানের কথা বলা হয়। তবে গণকবর আছে কি না, থাকলে কোথায় এবং তা দর্শনার্থীদের জন্য খোলা কি না—এমন কোনো দাবি এই পাতায় করা হয় না, কারণ নির্ভরযোগ্য তথ্য যাচাই করা যায়নি।' },
        { type: 'callout', tone: 'warn', title: 'বিন্যাস, সীমানা ও প্রবেশ যাচাই করুন', text: 'প্রাঙ্গণের সঠিক বিন্যাস, সীমানা এবং বর্তমানে কোন অংশে সাধারণ দর্শনার্থীরা প্রবেশ করতে পারেন—তা নির্ভরযোগ্য হালনাগাদ সূত্রে এখানে নিশ্চিত করা যায়নি। কোনো নির্দিষ্ট স্থান বা স্মৃতিস্থানে যাওয়ার আগে ঘটনাস্থলের নিরাপত্তাকর্মী বা ব্যবস্থাপনার কাছ থেকে বর্তমান অবস্থা জেনে নিন।' },
        { type: 'callout', tone: 'warn', title: 'গণকবর সম্পর্কে সতর্কতা', text: 'শহীদদের স্মৃতির সঙ্গে সম্পর্কিত স্থান থাকলেও, গণকবর উপস্থিত আছে কি না, তার সঠিক অবস্থান কী, বা তা দর্শনার্থীদের জন্য খোলা কি না—এসব এই পাতায় নিশ্চিত করা হয়নি। এ ধরনের কোনো দাবি সত্য বলে ধরে নেবেন না; ঘুরে দেখার সময় স্মৃতির প্রতি সম্মান রাখুন এবং চিহ্নিত সীমানা ও নিয়ম মেনে চলুন।' },
        { type: 'h2', text: 'প্রাঙ্গণের উপাদান এক নজরে' },
        { type: 'p', text: 'প্রাঙ্গণে কী কী আছে, তা এক নজরে দেখার জন্য নিচের তালিকাটি দেওয়া হলো। কোন উপাদান সম্পর্কে নথিভুক্ত তথ্য পাওয়া যায় আর কোনটি যাচাই করা যায়নি, পাশের কলামে সেটিও উল্লেখ করা হয়েছে।' },
        { type: 'table', head: ['উপাদান', 'তথ্যের অবস্থা'], rows: [
          ['কৃত্রিম জলাশয় / প্রতিফলন পুকুর', 'নথিভুক্ত'],
          ['হাঁটার পথ', 'নথিভুক্ত'],
          ['উদ্যান ও খোলা চত্বর', 'নথিভুক্ত'],
          ['জলাশয়ের আকার ও গভীরতা', 'যাচাই করা যায়নি'],
          ['স্মৃতিস্থান ও প্রবেশ-সীমানা', 'ঘটনাস্থলে যাচাই করুন']
        ] }
      ],
      faq: [
        { q: 'স্মৃতিসৌধের প্রাঙ্গণে কী কী আছে?', a: 'নথিভুক্ত তথ্য অনুসারে কৃত্রিম জলাশয় বা প্রতিফলন পুকুর, হাঁটার পথ, উদ্যান ও খোলা চত্বর রয়েছে।' },
        { q: 'জলাশয়টি কত বড়?', a: 'জলাশয়ের প্রকৃত আকার বা গভীরতার নথিভুক্ত তথ্য এখানে নিশ্চিত করা যায়নি।' },
        { q: 'এখানে গণকবর আছে কি?', a: 'এমন কোনো দাবি এই পাতায় করা হয় না। শহীদদের সঙ্গে সম্পর্কিত স্মৃতিস্থান থাকলেও গণকবরের উপস্থিতি বা অবস্থান যাচাই করা যায়নি।' },
        { q: 'প্রাঙ্গণের কোন অংশে ঘোরা যাবে?', a: 'সঠিক সীমানা ও বর্তমান প্রবেশ-শর্ত নির্ভরযোগ্য সূত্রে যাচাই করা যায়নি; ঘটনাস্থলে ব্যবস্থাপনার কাছ থেকে জেনে নিন।' },
        { q: 'শহীদদের স্মৃতিস্থান পরিদর্শন করা যাবে?', a: 'তা নিশ্চিত নয়। স্মৃতির প্রতি সম্মান রাখুন এবং চিহ্নিত সীমানার বাইরে যাওয়া বা নিষিদ্ধ অংশে প্রবেশ করা এড়িয়ে চলুন।' },
        { q: 'প্রাঙ্গণে কী কী আছে এক নজরে?', a: 'নথিভুক্ত হিসেবে কৃত্রিম জলাশয় বা প্রতিফলন পুকুর, হাঁটার পথ, উদ্যান ও খোলা চত্বর; জলাশয়ের আকার-গভীরতা এবং প্রবেশ-সীমানা যাচাই করা যায়নি।' }
      ]
    },
    en: {
      title: 'The grounds of the National Martyrs’ Monument: lake, gardens and memorial areas',
      description: 'The grounds of the National Martyrs’ Monument include an artificial lake or reflection pool, walkways, gardens and an open plaza, with memorial areas associated with the martyrs. The exact arrangement, boundaries and current access could not be verified — check on site.',
      h1: 'Grounds, water feature and memorial areas',
      answer:
        'The grounds of the monument include an artificial lake or reflection pool, walkways, gardens and an open plaza, and memorial areas associated with the martyrs form part of the site’s purpose. The exact arrangement, boundaries and current access conditions could not be verified from an authoritative current source, so they must be checked on site.',
      blocks: [
        { type: 'h2', text: 'What the grounds include' },
        { type: 'p', text: 'According to the documented account, the monument site includes an artificial lake or reflection pool, walkways and gardens. These grounds spread around the main structure, and a further green area lies outside them.' },
        { type: 'h2', text: 'The water feature and the walkways' },
        { type: 'p', text: 'The pool is used for reflection — still water catches the shape of the structure. Walkways carry visitors through the grounds and past the main structure. However, documented detail such as the precise size or depth of the pool, or the exact length of the paths, could not be confirmed here.' },
        { type: 'h2', text: 'Gardens, the open plaza and memorial areas' },
        { type: 'p', text: 'Gardens and an open plaza give visitors space to walk and to stand; the purpose of the monument is not only a structure but the remembrance of the martyrs. That is why memorial areas associated with the martyrs are described as part of the site. This page makes no claim about whether a mass grave is present, where it lies, or whether it can be visited, because no reliable information could be verified.' },
        { type: 'callout', tone: 'warn', title: 'Verify the arrangement, boundaries and access', text: 'The exact arrangement of the grounds, their boundaries, and which parts ordinary visitors may currently enter could not be confirmed here from a reliable current source. Before heading to any particular spot or memorial area, check the current position with on-site security staff or the managing authority.' },
        { type: 'callout', tone: 'warn', title: 'A warning about mass graves', text: 'Although memorial spaces connected with the martyrs exist, whether any mass grave is present, its exact location, or whether it is open to visitors, is not confirmed here. Do not assume such claims are true; keep a respectful distance, and follow the site rules and any marked boundaries.' },
        { type: 'h2', text: 'The elements of the grounds at a glance' },
        { type: 'p', text: 'The table below sets out what is in the grounds at a glance. The right-hand column notes whether there is documented information about an element or whether it could not be verified.' },
        { type: 'table', head: ['Element', 'Status of information'], rows: [
          ['Artificial lake / reflection pool', 'documented'],
          ['Walkways', 'documented'],
          ['Gardens and open plaza', 'documented'],
          ['Size and depth of the pool', 'could not be verified'],
          ['Memorial areas and access boundaries', 'check on site']
        ] }
      ],
      faq: [
        { q: 'What is there in the monument grounds?', a: 'According to the documented account: an artificial lake or reflection pool, walkways, gardens and an open plaza.' },
        { q: 'How large is the lake?', a: 'The documented size or depth of the pool could not be confirmed here.' },
        { q: 'Is there a mass grave here?', a: 'No such claim is made on this page. Memorial areas associated with the martyrs exist, but whether any mass grave is present or where it lies was not verified.' },
        { q: 'Which parts of the grounds can I walk?', a: 'The exact boundaries and current access conditions could not be verified; ask on site.' },
        { q: 'Can I visit the memorial areas?', a: 'That is not confirmed. Be respectful, follow the rules and avoid entering restricted or marked-off areas.' },
        { q: 'What is in the grounds at a glance?', a: 'Documented: an artificial lake or reflection pool, walkways, gardens and an open plaza. The size and depth of the pool, and the access boundaries, could not be verified.' }
      ]
    }
  }
];
