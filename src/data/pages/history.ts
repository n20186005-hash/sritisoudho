// D. ইতিহাস: ৪টি পাতা (কেন নির্মিত, সাত ধাপ, নির্মাণকাল, তুলনা)।
import type { ContentPage } from './types';

export const historyPages: ContentPage[] = [
  {
    slug: 'history/why-built',
    section: 'history',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['history/1952-1971', 'architecture/seven-walls', 'architecture/grounds-mass-graves', 'visit/etiquette'],
    bn: {
      title: 'জাতীয় স্মৃতিসৌধ কেন নির্মিত হয়েছিল',
      description: 'জাতীয় স্মৃতিসৌধ কাদের স্মরণে তৈরি, কেন সাভারের নবীনগরে এর স্থান এবং আজ এই স্মৃতিসৌধ জাতীয় স্মৃতিস্থান হিসেবে কী কাজ করে।',
      h1: 'জাতীয় স্মৃতিসৌধ কেন নির্মিত হয়েছিল',
      answer:
        'জাতীয় স্মৃতিসৌধ ১৯৭১ সালের বাংলাদেশের মুক্তিযুদ্ধে নিহত শহীদদের স্মরণে নির্মিত হয়েছে। এটি কোনো ব্যক্তি বা একটি ঘটনার স্মারক নয়, বরং সমগ্র জাতির পক্ষ থেকে শ্রদ্ধা নিবেদনের জাতীয় স্মৃতিস্থান। স্মৃতিসৌধের স্থান সাভার উপজেলার নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে, আর ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতা থেকে স্থপতি সৈয়দ মাইনুল হোসেনের নকশা নির্বাচিত হয়।',
      blocks: [
        { type: 'h2', text: 'কার স্মরণে স্মৃতিসৌধটি নির্মিত' },
        { type: 'p', text: 'স্মৃতিসৌধটি ১৯৭১ সালের মুক্তিযুদ্ধে প্রাণ দেওয়া শহীদদের স্মরণে। এটি জাতীয় স্মৃতিস্থান—রাষ্ট্রীয় শ্রদ্ধা নিবেদন ও জনসাধারণের স্মরণের কেন্দ্র। এখানে প্রতি জাতীয় দিবসে শ্রদ্ধা জানানো হয়, আর সাধারণ দর্শনার্থীও স্মরণ করতে আসেন।' },
        { type: 'h2', text: 'কেন সাভারের নবীনগরে স্থান বেছে নেওয়া হয়েছিল' },
        { type: 'p', text: 'স্মৃতিসৌধ ঢাকা–আরিচা মহাসড়কের পাশে নবীনগরে, ঢাকা শহর থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে অবস্থিত। শহরের বাইরে খোলা মাঠে মহাসড়কের পাশে থাকায় কাঠামোটি দূর থেকেই দেখা যায় এবং সড়কপথে পৌঁছানো সহজ।' },
        { type: 'callout', tone: 'note', title: 'স্থান নির্বাচনের লিখিত কারণ সীমিত', text: 'যাচাইযোগ্য নথিতে স্থান নির্বাচনের বিস্তারিত লিখিত ব্যাখ্যা পাওয়া যায় না; নিশ্চিত তথ্য হলো এর অবস্থান, আশপাশের খোলা মাঠ ও পাশের মহাসড়ক। তাই এখানে অনুমান নয়, বর্ণনাই দেওয়া হয়েছে।' },
        { type: 'h2', text: 'আজ স্মৃতিসৌধ কী উদ্দেশ্য পূরণ করে' },
        { type: 'ul', items: [
          'জাতীয় দিবসে রাষ্ট্রীয় ও জনসাধারণের শ্রদ্ধা নিবেদনের স্থান',
          '১৯৭১ ও তার আগের আন্দোলনের ইতিহাস স্মরণের কেন্দ্র',
          'শিক্ষার্থী ও দর্শনার্থীদের জন্য ইতিহাস জানার স্থান',
          'বাংলাদেশের স্বাধীনতার জাতীয় প্রতীক'
        ] },
        { type: 'table', head: ['বিষয়', 'তথ্য'], rows: [
          ['স্মরণে', '১৯৭১ সালের মুক্তিযুদ্ধের শহীদ'],
          ['স্থপতি', 'সৈয়দ মাইনুল হোসেন'],
          ['নকশা প্রতিযোগিতা', '১৯৭৮; জমা পড়েছিল ৫৭টি প্রস্তাব'],
          ['উদ্বোধন', '১৬ ডিসেম্বর ১৯৮২ (বিজয় দিবস)']
        ] },
        { type: 'callout', tone: 'note', title: 'যাচাইয়ের নীতি', text: 'জাতীয় দিবসের কর্মসূচি ও প্রবেশ-নিয়ম প্রতি বছর বদলাতে পারে। যাত্রার আগে সরকারি ঘোষণা বা সাভার উপজেলা প্রশাসনের হালনাগাদ তথ্যে যাচাই করুন।' },
        { type: 'h2', text: 'স্মৃতিসৌধ কি কোনো ব্যক্তির সমাধি' },
        { type: 'p', text: 'জাতীয় স্মৃতিসৌধ একটি জাতীয় স্মারক, কোনো ব্যক্তির সমাধি বা মাজার নয়। এখানে ১৯৭১ সালের মুক্তিযুদ্ধে নিহত শহীদদের সামগ্রিকভাবে স্মরণ করা হয়, তাই স্থানটি একটি নির্দিষ্ট সমাধিক্ষেত্র নয়—এটি জাতির পক্ষ থেকে সবার প্রতি শ্রদ্ধা নিবেদনের কেন্দ্র।' },
        { type: 'callout', tone: 'note', title: 'স্মরণের ধরন সম্পর্কে নোট', text: 'স্মৃতিসৌধের উদ্দেশ্য সামগ্রিকভাবে শহীদদের স্মরণ করা। এই পাতায় কোনো নির্দিষ্ট সমাধি বা কবরের অবস্থান সম্পর্কে দাবি করা হয় না; নির্দিষ্ট বিবরণ প্রয়োজন হলে সংশ্লিষ্ট কর্তৃপক্ষ বা নির্ভরযোগ্য সূত্রে যাচাই করুন।' }
      ],
      faq: [
        { q: 'জাতীয় স্মৃতিসৌধ কাদের স্মরণে নির্মিত?', a: '১৯৭১ সালের বাংলাদেশের মুক্তিযুদ্ধে নিহত শহীদদের স্মরণে। এটি কোনো ব্যক্তির স্মারক নয়, জাতীয় স্মৃতিস্থান।' },
        { q: 'স্মৃতিসৌধ কেন সাভারে, ঢাকার ভেতরে নয়?', a: 'স্মৃতিসৌধ সাভার উপজেলার নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে, ঢাকা থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে। শহরের বাইরে খোলা মাঠে মহাসড়কের পাশে অবস্থিত।' },
        { q: 'স্মৃতিসৌধের নকশা কে করেছেন?', a: 'স্থপতি সৈয়দ মাইনুল হোসেন। ১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতায় জমা পড়া ৫৭টি প্রস্তাব থেকে তাঁর নকশা নির্বাচিত হয়।' },
        { q: 'স্মৃতিসৌধ কবে উদ্বোধন করা হয়?', a: '১৬ ডিসেম্বর ১৯৮২, বিজয় দিবসে।' },
        { q: 'স্মৃতিসৌধ কি শুধু ঘুরে দেখার জায়গা?', a: 'না। এটি প্রধানত স্মরণের স্থান; জাতীয় দিবসে এখানে শ্রদ্ধা নিবেদনের কর্মসূচি হয়।' },
        { q: 'স্মৃতিসৌধ কি কোনো ব্যক্তির সমাধি?', a: 'না। এটি ১৯৭১ সালের মুক্তিযুদ্ধে নিহত শহীদদের সামগ্রিকভাবে স্মরণ করার জাতীয় স্মৃতিস্থান; কোনো ব্যক্তির সমাধি বা মাজার নয়।' }
      ]
    },
    en: {
      title: 'Why was the National Martyrs’ Monument built?',
      description: 'Who the National Martyrs’ Monument commemorates, why the site at Nabinagar in Savar was chosen, and what purpose the memorial serves as a national place of remembrance.',
      h1: 'Why the National Martyrs’ Monument was built',
      answer:
        'The National Martyrs’ Monument was built to commemorate the martyrs of the 1971 Bangladesh Liberation War. It is not a memorial to an individual or a single event: it is the national place where the whole country pays its respects. It stands at Nabinagar in Savar Upazila, beside the Dhaka–Aricha Highway, and the design chosen was that of the architect Syed Mainul Hossain after a 1978 national design competition.',
      blocks: [
        { type: 'h2', text: 'Who the monument commemorates' },
        { type: 'p', text: 'The monument commemorates the martyrs of the 1971 Liberation War. It is the national place of remembrance — the focus of state tributes and of public remembrance. Wreaths are laid here on national days, and ordinary visitors also come to pay their respects.' },
        { type: 'h2', text: 'Why the site at Nabinagar, Savar, was chosen' },
        { type: 'p', text: 'The monument stands beside the Dhaka–Aricha Highway at Nabinagar, about 35 km north-west of Dhaka city. Placed outside the city on open ground beside a major highway, the structure can be seen from a distance and is straightforward to reach by road.' },
        { type: 'callout', tone: 'note', title: 'A limited written record on the site choice', text: 'The verifiable record does not document a detailed written rationale for choosing this site. What is documented is its location, the open ground around it and the adjacent highway. So this page describes rather than speculates.' },
        { type: 'h2', text: 'What purpose the monument serves today' },
        { type: 'ul', items: [
          'A place of state and public tribute on national days',
          'A centre for remembering the history of 1971 and the movements before it',
          'A place for students and visitors to learn that history',
          'A national symbol of Bangladesh’s independence'
        ] },
        { type: 'table', head: ['Item', 'Detail'], rows: [
          ['Commemorates', 'the martyrs of the 1971 Liberation War'],
          ['Architect', 'Syed Mainul Hossain'],
          ['Design competition', '1978; 57 proposals received'],
          ['Inaugurated', '16 December 1982 (Victory Day)']
        ] },
        { type: 'callout', tone: 'note', title: 'Verification policy', text: 'National-day programmes and access rules can change from year to year. Before travelling, check official notices or updated information from the Savar Upazila Administration.' },
        { type: 'h2', text: 'Is the monument anyone’s tomb?' },
        { type: 'p', text: 'The National Martyrs’ Monument is a national memorial, not an individual’s tomb or grave. It commemorates the martyrs of the 1971 Liberation War collectively, so the site is not a particular burial ground — it is the place where the nation as a whole pays its respects to all of them.' },
        { type: 'callout', tone: 'note', title: 'A note on the nature of the remembrance', text: 'The purpose of the monument is to remember the martyrs collectively. This page makes no claim about the location of any particular grave or tomb; if you need that detail, check with the relevant authority or a reliable source.' }
      ],
      faq: [
        { q: 'Who does the National Martyrs’ Monument commemorate?', a: 'The martyrs of the 1971 Bangladesh Liberation War. It is not a memorial to an individual but a national place of remembrance.' },
        { q: 'Why is it in Savar rather than inside Dhaka?', a: 'It stands beside the Dhaka–Aricha Highway at Nabinagar in Savar Upazila, about 35 km north-west of Dhaka, on open ground outside the city beside a major highway.' },
        { q: 'Who designed the monument?', a: 'The architect Syed Mainul Hossain. His design was selected from 57 proposals in the 1978 national design competition.' },
        { q: 'When was the monument inaugurated?', a: 'On 16 December 1982, on Victory Day.' },
        { q: 'Is the monument only a sightseeing spot?', a: 'No. It is primarily a place of remembrance, and official tributes are laid here on national days.' },
        { q: 'Is the monument anyone’s tomb?', a: 'No. It is the national place for remembering the martyrs of the 1971 Liberation War collectively; it is not an individual’s tomb or grave.' }
      ]
    }
  },
  {
    slug: 'history/1952-1971',
    section: 'history',
    priority: 'P1',
    updated: '2026-11-03',
    related: ['history/why-built', 'architecture/seven-walls', 'history/memorial-comparison', 'history/construction-timeline'],
    bn: {
      title: '১৯৫২ থেকে ১৯৭১: স্মৃতিসৌধের সাতটি অধ্যায়',
      description: 'ভাষা আন্দোলন ১৯৫২ থেকে মুক্তিযুদ্ধ ১৯৭১ পর্যন্ত সাতটি রাজনৈতিক ধাপ—যেগুলো জাতীয় স্মৃতিসৌধের সাত জোড়া দেয়ালে রূপায়িত হয়েছে।',
      h1: '১৯৫২ থেকে ১৯৭১: স্বাধীনতার দিকে সাতটি ধাপ',
      answer:
        'স্মৃতিসৌধের সাত জোড়া ত্রিভুজাকার দেয়াল বাংলাদেশের স্বাধীনতার দিকে নিয়ে যাওয়া সাতটি রাজনৈতিক ধাপের প্রতীক: ১৯৫২-এর ভাষা আন্দোলন, ১৯৫৪-এর যুক্তফ্রন্ট নির্বাচন, ১৯৫৬-এর শাসনতান্ত্রিক আন্দোলন, ১৯৬২-এর শিক্ষা আন্দোলন, ১৯৬৬-এর ছয় দফা, ১৯৬৯-এর গণঅভ্যুত্থান এবং ১৯৭১-এর মুক্তিযুদ্ধ। প্রতিটি ধাপ আগের অভিজ্ঞতা থেকে এগিয়ে পরের ধাপকে সম্ভব করেছে।',
      blocks: [
        { type: 'p', text: 'স্মৃতিসৌধের সাত জোড়া দেয়াল শুধু স্থাপত্য নয়—এগুলো ১৯৫২ থেকে ১৯৭১ পর্যন্ত প্রায় দুই দশকের রাজনৈতিক ধারাবাহিকতার প্রতীক। নিচে ধাপগুলো ক্রমানুসারে দেওয়া হলো, যাতে বোঝা যায় কীভাবে একটি আন্দোলন পরেরটির পটভূমি তৈরি করেছে।' },
        { type: 'h2', text: 'প্রথম ধাপ: ১৯৫২-এর ভাষা আন্দোলন' },
        { type: 'p', text: 'বাংলাকে রাষ্ট্রভাষা করার দাবিতে গড়ে ওঠা আন্দোলন ১৯৫২ সালে ঢাকায় প্রতিবাদকারীদের নিহত হওয়ার মধ্য দিয়ে চিহ্নিত হয়। সেই দিনটি পরে আন্তর্জাতিকভাবে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্মরণ করা হয়। ভাষার প্রশ্নকে কেন্দ্র করে গড়ে ওঠা এই ধাপটিই স্মৃতিসৌধের প্রথম অধ্যায়।' },
        { type: 'h2', text: 'দ্বিতীয় ধাপ: ১৯৫৪-এর যুক্তফ্রন্ট নির্বাচন' },
        { type: 'p', text: '১৯৫৪ সালের যুক্তফ্রন্ট নির্বাচন পূর্ব বাংলার রাজনীতিতে দলীয় ঐক্যের একটি গুরুত্বপূর্ণ ধাপ। ভাষা আন্দোলনের পর রাজনৈতিক শক্তিগুলো এক প্ল্যাটফর্মে আসার এই প্রক্রিয়াই স্মৃতিসৌধের দ্বিতীয় অধ্যায়ে চিহ্নিত।' },
        { type: 'h2', text: 'তৃতীয় ধাপ: ১৯৫৬-এর শাসনতান্ত্রিক আন্দোলন' },
        { type: 'p', text: '১৯৫৬ সালের শাসনতান্ত্রিক আন্দোলন শাসনব্যবস্থা ও সাংবিধানিক প্রশ্নকে কেন্দ্র করে গড়ে ওঠে। স্বাধীনতার পথে এটি একটি রাজনৈতিক ধাপ, এবং স্মৃতিসৌধের তৃতীয় অধ্যায়।' },
        { type: 'h2', text: 'চতুর্থ ধাপ: ১৯৬২-এর শিক্ষা আন্দোলন' },
        { type: 'p', text: '১৯৬২ সালের শিক্ষা আন্দোলন শিক্ষাব্যবস্থা ও শিক্ষার অধিকারকে কেন্দ্র করে গড়ে ওঠে। এই ধাপটি দেখায়, স্বাধীনতার পথে শিক্ষা ও ভাষার প্রশ্ন বারবার কেন্দ্রে ফিরে এসেছে; এটি স্মৃতিসৌধের চতুর্থ অধ্যায়।' },
        { type: 'h2', text: 'পঞ্চম ধাপ: ১৯৬৬-এর ছয় দফা' },
        { type: 'p', text: '১৯৬৬ সালের ছয় দফা আন্দোলন শুরু হয় শেখ মুজিবুর রহমানের নেতৃত্বে। স্বাধীনতার পথে এটি একটি নির্ণায়ক রাজনৈতিক ধাপ হিসেবে স্মৃতিসৌধের পঞ্চম অধ্যায়ে চিহ্নিত।' },
        { type: 'h2', text: 'ষষ্ঠ ধাপ: ১৯৬৯-এর গণঅভ্যুত্থান' },
        { type: 'p', text: '১৯৬৯ সালের গণঅভ্যুত্থান আয়ুব শাসনের পতন ঘটায়। জনগণের সংগঠিত ক্ষমতার এই প্রকাশ স্মৃতিসৌধের ষষ্ঠ অধ্যায়, এবং এটি সপ্তম ধাপের পথ প্রশস্ত করে।' },
        { type: 'h2', text: 'সপ্তম ধাপ: ১৯৭১-এর মুক্তিযুদ্ধ' },
        { type: 'p', text: '১৯৭০ সালের নির্বাচন ও ১৯৭১ সালের মুক্তিযুদ্ধের মধ্য দিয়ে আসে স্বাধীনতা। সাত অধ্যায়ের শেষটি এই মুক্তিযুদ্ধ, এবং স্মৃতিসৌধ মূলত এই ধাপের শহীদদের স্মরণেই নির্মিত।' },
        { type: 'callout', tone: 'note', title: 'আরও পড়ার জন্য', text: 'প্রতিটি ধাপের বিস্তারিত রাজনৈতিক ঘটনা যাচাইযোগ্য ইতিহাস-সূত্রে পড়া উচিত; এই পাতায় ধাপগুলোর ক্রম ও পারস্পরিক ভূমিকা সংক্ষেপে দেখানো হয়েছে।' },
        { type: 'h2', text: 'সাতটি ধাপ কেন ১৯৫২ থেকে শুরু' },
        { type: 'p', text: 'স্মৃতিসৌধের সাতটি অধ্যায় ১৯৫২ দিয়ে শুরু, কারণ ভাষার প্রশ্নই ছিল প্রথম বড় সংগঠিত রাজনৈতিক আন্দোলন, যা পরবর্তী ধাপগুলোর পটভূমি তৈরি করে। ১৯৪৭ সালের দেশভাগের পর পূর্ব বাংলার জনগোষ্ঠীর কাছে ভাষা ও পরিচয়ের প্রশ্ন কেন্দ্রে আসে, আর ১৯৫২ সালের ভাষা আন্দোলন সেই ধারার প্রথম স্পষ্ট ধাপ। এ কারণেই সাত অধ্যায়ের গণনা ১৯৫২ থেকে শুরু, ১৯৪৭ থেকে নয়।' },
        { type: 'callout', tone: 'note', title: 'সাত অধ্যায় একটি প্রতীকী পাঠ', text: '১৯৫২ থেকে ১৯৭১ পর্যন্ত সময়কে সাতটি ধাপে ভাগ করা একটি প্রতীকী বিন্যাস; ইতিহাসে ঘটনাগুলো সবসময় পরিষ্কারভাবে সাত ভাগে বিভক্ত নয়। ধাপগুলোর ক্রম বোঝার জন্য এই বিন্যাস ব্যবহৃত হয়, আর প্রতিটি ধাপের বিস্তারিত বিবরণ যাচাইযোগ্য ইতিহাস-সূত্রে দেখা উচিত।' }
      ],
      faq: [
        { q: 'স্মৃতিসৌধে সাতটি দেয়ালের অর্থ কী?', a: 'সাত জোড়া দেয়াল স্বাধীনতার দিকে নিয়ে যাওয়া সাতটি রাজনৈতিক ধাপের প্রতীক: ১৯৫২ থেকে ১৯৭১ পর্যন্ত আন্দোলনগুলো।' },
        { q: 'প্রথম ধাপ কোনটি?', a: '১৯৫২-এর ভাষা আন্দোলন। ১৯৫২ সালে ঢাকায় প্রতিবাদকারীদের নিহত হওয়ার ঘটনা এই ধাপকে চিহ্নিত করে; দিনটি পরে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে স্মরণ করা হয়।' },
        { q: 'ছয় দফা আন্দোলন কে নেতৃত্ব দিয়েছিলেন?', a: '১৯৬৬ সালের ছয় দফা আন্দোলন শুরু হয় শেখ মুজিবুর রহমানের নেতৃত্বে; এটি স্মৃতিসৌধের পঞ্চম ধাপ।' },
        { q: 'গণঅভ্যুত্থানের ফল কী হয়েছিল?', a: '১৯৬৯ সালের গণঅভ্যুত্থান আয়ুব শাসনের পতন ঘটায়; এটি স্মৃতিসৌধের ষষ্ঠ ধাপ।' },
        { q: 'কোন ধাপটি শেষ?', a: '১৯৭১-এর মুক্তিযুদ্ধ। ১৯৭০ সালের নির্বাচন ও ১৯৭১ সালের মুক্তিযুদ্ধের মধ্য দিয়ে আসে স্বাধীনতা।' },
        { q: 'সাতটি ধাপ কেন ১৯৫২ থেকে শুরু, ১৯৪৭ থেকে নয়?', a: '১৯৫২ সালের ভাষা আন্দোলন ছিল প্রথম বড় সংগঠিত রাজনৈতিক আন্দোলন, যা পরবর্তী ধাপগুলোর পটভূমি তৈরি করে; তাই সাত অধ্যায়ের গণনা ১৯৫২ থেকে শুরু।' }
      ]
    },
    en: {
      title: '1952 to 1971: the seven chapters of the National Martyrs’ Monument',
      description: 'Seven political chapters from the 1952 Language Movement to the 1971 Liberation War — the stages that the seven pairs of walls of the National Martyrs’ Monument stand for.',
      h1: '1952 to 1971: seven steps towards independence',
      answer:
        'The seven pairs of triangular walls of the monument stand for seven political chapters that led Bangladesh towards independence: the 1952 Language Movement, the 1954 United Front election, the 1956 constitutional movement, the 1962 education movement, the 1966 Six Point Movement, the 1969 Mass Uprising and the 1971 Liberation War. Each stage grew out of the one before it and made the next possible.',
      blocks: [
        { type: 'p', text: 'The seven pairs of walls are more than architecture: they stand for almost two decades of political sequence, from 1952 to 1971. The stages are set out below in order, so that it is clear how one movement prepared the ground for the next.' },
        { type: 'h2', text: 'First: the 1952 Language Movement' },
        { type: 'p', text: 'The movement to make Bengali a state language is marked by the killing of protesters in Dhaka in 1952. That day is later commemorated internationally as International Mother Language Day. Built around the question of language, this is the first chapter of the monument.' },
        { type: 'h2', text: 'Second: the 1954 United Front election' },
        { type: 'p', text: 'The 1954 United Front election is an important stage of party unity in the politics of East Bengal. The move by political forces towards a shared platform, after the Language Movement, is what the monument marks as its second chapter.' },
        { type: 'h2', text: 'Third: the 1956 constitutional movement' },
        { type: 'p', text: 'The 1956 constitutional movement developed around questions of governance and the constitution. It is a stage in pursuing Bengali political demands, and is the third chapter of the monument.' },
        { type: 'h2', text: 'Fourth: the 1962 education movement' },
        { type: 'p', text: 'The 1962 education movement grew around the education system and the right to education. It shows how repeatedly the questions of education and language returned to the centre on the road to independence. This is the fourth chapter of the monument.' },
        { type: 'h2', text: 'Fifth: the 1966 Six Point Movement' },
        { type: 'p', text: 'The 1966 Six Point Movement was launched under the leadership of Sheikh Mujibur Rahman. It is marked as the fifth chapter of the monument, a decisive political stage on the road to independence.' },
        { type: 'h2', text: 'Sixth: the 1969 Mass Uprising' },
        { type: 'p', text: 'The 1969 Mass Uprising led to the fall of the Ayub regime. This expression of organised public power is the sixth chapter of the monument, and it opened the way for the seventh.' },
        { type: 'h2', text: 'Seventh: the 1971 Liberation War' },
        { type: 'p', text: 'The 1970 election and the 1971 Liberation War led to independence. The last of the seven chapters is that war, and the monument was built above all to commemorate the martyrs of this stage.' },
        { type: 'callout', tone: 'note', title: 'For further reading', text: 'The detailed political events of each stage should be read in verifiable historical sources. This page sets out the order of the stages and their role in relation to one another.' },
        { type: 'h2', text: 'Why the seven stages begin in 1952' },
        { type: 'p', text: 'The monument’s seven chapters begin with 1952 because the question of language was the first large organised political movement, and it prepared the ground for the stages that followed. After the 1947 partition, questions of language and identity came to the centre for the people of East Bengal, and the 1952 Language Movement is the first clearly marked stage of that line. That is why the count of seven begins in 1952 rather than in 1947.' },
        { type: 'callout', tone: 'note', title: 'The seven chapters as a symbolic reading', text: 'Dividing the years 1952 to 1971 into seven stages is a symbolic arrangement; in history the events do not always fall into seven neat parts. The arrangement is used to make the order of the stages clear, and the detail of each stage should be read in verifiable historical sources.' }
      ],
      faq: [
        { q: 'What do the seven walls of the monument mean?', a: 'The seven pairs of walls stand for seven political chapters on the road to independence, from 1952 to 1971.' },
        { q: 'Which is the first chapter?', a: 'The 1952 Language Movement. It is marked by the killing of protesters in Dhaka in 1952, a day later commemorated internationally as International Mother Language Day.' },
        { q: 'Who led the Six Point Movement?', a: 'The 1966 Six Point Movement was launched under the leadership of Sheikh Mujibur Rahman; it is the fifth chapter of the monument.' },
        { q: 'What did the Mass Uprising lead to?', a: 'The 1969 Mass Uprising led to the fall of the Ayub regime; it is the sixth chapter of the monument.' },
        { q: 'Which chapter is the last?', a: 'The 1971 Liberation War. The 1970 election and the 1971 War led to independence.' },
        { q: 'Why do the seven stages begin in 1952 rather than 1947?', a: 'The 1952 Language Movement was the first large organised political movement, and it prepared the ground for the stages that followed, so the count of seven begins in 1952.' }
      ]
    }
  },
  {
    slug: 'history/construction-timeline',
    section: 'history',
    priority: 'P2',
    updated: '2026-11-03',
    related: ['architecture/syed-mainul-hossain', 'architecture/design-competition-1978', 'history/why-built', 'events/victory-day'],
    bn: {
      title: 'জাতীয় স্মৃতিসৌধ নির্মাণের ইতিহাস: ১৯৭২–১৯৮২',
      description: '১৯৭২ থেকে ১৯৮২ পর্যন্ত জাতীয় স্মৃতিসৌধ নির্মাণের ধাপ—স্থান নির্বাচন, ১৯৭৮ সালের নকশা প্রতিযোগিতা, নির্মাণ তদারকি এবং ১৬ ডিসেম্বর ১৯৮২ উদ্বোধন।',
      h1: 'জাতীয় স্মৃতিসৌধ নির্মাণের ইতিহাস (১৯৭২–১৯৮২)',
      answer:
        'জাতীয় স্মৃতিসৌধের নির্মাণপর্ব ১৯৭২ থেকে ১৯৮২ পর্যন্ত বিস্তৃত। ১৯৭৮ সালে একটি জাতীয় নকশা প্রতিযোগিতা হয়, যাতে ৫৭টি প্রস্তাব জমা পড়ে এবং স্থপতি সৈয়দ মাইনুল হোসেনের নকশা নির্বাচিত হয়। বাংলাপিডিয়া অনুসারে নির্মাণকাজ তদারকি করে পাবলিক ওয়ার্কস ডিপার্টমেন্ট, আর ১৬ ডিসেম্বর ১৯৮২ (বিজয় দিবস) স্মৃতিসৌধ উদ্বোধন করা হয়।',
      blocks: [
        { type: 'h2', text: 'প্রাথমিক পরিকল্পনা ও স্থান নির্বাচন' },
        { type: 'p', text: 'স্বাধীনতার পরপর জাতীয় স্মৃতিস্থান গড়ার কাজ শুরু হয়। সাভার উপজেলার নবীনগরে ঢাকা–আরিচা মহাসড়কের পাশে, ঢাকা থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে খোলা মাঠে স্থানটি নির্ধারিত হয়। আজ যে স্মৃতিসৌধটি দাঁড়িয়ে আছে, তার প্রাথমিক পরিকল্পনা ও স্থাননির্ধারণ এই পর্বেরই অংশ।' },
        { type: 'h2', text: '১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতা' },
        { type: 'p', text: 'নকশা বাছাইয়ের জন্য ১৯৭৮ সালে একটি জাতীয় প্রতিযোগিতা আয়োজন করা হয়। এতে মোট ৫৭টি প্রস্তাব জমা পড়ে, এবং স্থপতি সৈয়দ মাইনুল হোসেনের প্রস্তাবটি নির্বাচিত হয়।' },
        { type: 'table', head: ['বিষয়', 'তথ্য'], rows: [
          ['প্রতিযোগিতা', '১৯৭৮ সালের জাতীয় নকশা প্রতিযোগিতা'],
          ['জমা পড়া প্রস্তাব', '৫৭টি'],
          ['নির্বাচিত স্থপতি', 'সৈয়দ মাইনুল হোসেন'],
          ['তদারকি (বাংলাপিডিয়া)', 'পাবলিক ওয়ার্কস ডিপার্টমেন্ট'],
          ['উদ্বোধন', '১৬ ডিসেম্বর ১৯৮২']
        ] },
        { type: 'h2', text: 'নির্মাণ তদারকি ও উদ্বোধন' },
        { type: 'p', text: 'বাংলাপিডিয়া অনুসারে স্মৃতিসৌধের নির্মাণকাজ তদারকি করে পাবলিক ওয়ার্কস ডিপার্টমেন্ট। দীর্ঘ নির্মাণপর্বের শেষে ১৬ ডিসেম্বর ১৯৮২, অর্থাৎ বিজয় দিবসে স্মৃতিসৌধ উদ্বোধন করা হয়।' },
        { type: 'h2', text: 'উদ্বোধনের পরের সময়' },
        { type: 'p', text: 'উদ্বোধনের পর স্মৃতিসৌধটি জাতীয় স্মৃতিস্থান হিসেবে ব্যবহৃত হতে থাকে; জাতীয় দিবসে এখানে শ্রদ্ধা নিবেদনের কর্মসূচি হয়। সময়ের সঙ্গে চারপাশের মাঠ, পথচলা ও দর্শনার্থীদের সুবিধার পরিবর্তন ঘটেছে।' },
        { type: 'callout', tone: 'note', title: 'নির্মাণপর্বের তারিখ সম্পর্কে সতর্কতা', text: '১৯৭২–১৯৮২ সময়সীমা ও ১৯৭৮ সালের প্রতিযোগিতা, ৫৭টি প্রস্তাব এবং ১৬ ডিসেম্বর ১৯৮২ উদ্বোধন সম্পর্কিত তথ্য যাচাইযোগ্য সূত্রে পাওয়া যায়। তবে নির্মাণের প্রতিটি মাইলফলকের সুনির্দিষ্ট তারিখ এখানে দাবি করা হচ্ছে না; বিস্তারিত জানতে বাংলাপিডিয়া ও সংশ্লিষ্ট সরকারি নথি দেখুন।' },
        { type: 'h2', text: 'স্বাধীনতার পরপরই স্মৃতিস্থান গড়ার সিদ্ধান্ত' },
        { type: 'p', text: 'স্বাধীনতার পরপরই একটি জাতীয় স্মৃতিস্থান গড়ার কাজ শুরু হয়, আর নির্মাণপর্ব ১৯৭২ থেকে ১৯৮২ পর্যন্ত বিস্তৃত ধরে নেওয়া হয়। নতুন স্বাধীন জাতির জন্য নিজের শহীদদের স্মরণ করার এমন একটি স্থান প্রয়োজন ছিল, যা জাতীয় স্মৃতি ও পরিচয়ের কেন্দ্র হিসেবে দাঁড়াতে পারে। সাভারের নবীনগরে স্থান নির্ধারিত হয়, এবং ১৬ ডিসেম্বর ১৯৮২ উদ্বোধনের মধ্য দিয়ে দীর্ঘ এই পর্ব শেষ হয়।' },
        { type: 'callout', tone: 'note', title: 'সময়সীমা সম্পর্কে নোট', text: '১৯৭২–১৯৮২ সময়সীমা আনুমানিক হিসেবে ধরা হয়; প্রতিটি কাজের সুনির্দিষ্ট শুরুর তারিখ এই পাতায় দাবি করা হয় না। যাচাইযোগ্য তথ্য হিসেবে ১৯৭৮ সালের নকশা প্রতিযোগিতা এবং ১৬ ডিসেম্বর ১৯৮২ উদ্বোধন উল্লেখ করা হয়েছে।' }
      ],
      faq: [
        { q: 'জাতীয় স্মৃতিসৌধ কত সালে উদ্বোধন করা হয়?', a: '১৬ ডিসেম্বর ১৯৮২, বিজয় দিবসে।' },
        { q: 'নকশা প্রতিযোগিতা কবে হয়েছিল ও কতটি প্রস্তাব জমা পড়েছিল?', a: '১৯৭৮ সালে; মোট ৫৭টি প্রস্তাব জমা পড়ে এবং সৈয়দ মাইনুল হোসেনের নকশা নির্বাচিত হয়।' },
        { q: 'নির্মাণকাজ কে তদারকি করেছিল?', a: 'বাংলাপিডিয়া অনুসারে পাবলিক ওয়ার্কস ডিপার্টমেন্ট।' },
        { q: 'নির্মাণপর্ব কত সময় ধরে চলেছিল?', a: 'উদ্বোধনের তথ্য অনুযায়ী নির্মাণপর্ব ১৯৭২ থেকে ১৯৮২ পর্যন্ত বিস্তৃত।' },
        { q: 'নকশা প্রতিযোগিতা কে জিতেছিলেন?', a: 'স্থপতি সৈয়দ মাইনুল হোসেন।' },
        { q: 'স্বাধীনতার পরপরই স্মৃতিস্থান গড়ার সিদ্ধান্ত কেন নেওয়া হয়?', a: 'নতুন স্বাধীন জাতির নিজের শহীদদের স্মরণ করার একটি জাতীয় কেন্দ্র প্রয়োজন ছিল; তাই স্বাধীনতার পরপরই স্থান নির্বাচন ও পরিকল্পনার কাজ শুরু হয় এবং ১৬ ডিসেম্বর ১৯৮২ উদ্বোধনের মধ্য দিয়ে দীর্ঘ নির্মাণপর্ব শেষ হয়।' }
      ]
    },
    en: {
      title: 'Construction history of the National Martyrs’ Monument: 1972–1982',
      description: 'The building of the National Martyrs’ Monument from 1972 to 1982 — choosing the site, the 1978 design competition, supervision of the work, and the inauguration on 16 December 1982.',
      h1: 'Construction history of the National Martyrs’ Monument (1972–1982)',
      answer:
        'The construction of the National Martyrs’ Monument spans 1972 to 1982. A national design competition was held in 1978, drawing 57 proposals, and the design of the architect Syed Mainul Hossain was selected. According to Banglapedia, the Public Works Department supervised the construction, and the monument was inaugurated on 16 December 1982, on Victory Day.',
      blocks: [
        { type: 'h2', text: 'Early planning and choosing the site' },
        { type: 'p', text: 'Work on creating a national memorial began soon after independence. The site was settled on open ground at Nabinagar in Savar Upazila, beside the Dhaka–Aricha Highway and about 35 km north-west of Dhaka. The early planning and the choice of this site belong to this period.' },
        { type: 'h2', text: 'The 1978 national design competition' },
        { type: 'p', text: 'A national competition to select the design was organised in 1978. A total of 57 proposals were received, and the proposal by the architect Syed Mainul Hossain was selected.' },
        { type: 'table', head: ['Item', 'Detail'], rows: [
          ['Competition', 'the 1978 national design competition'],
          ['Proposals received', '57'],
          ['Selected architect', 'Syed Mainul Hossain'],
          ['Supervision (Banglapedia)', 'Public Works Department'],
          ['Inauguration', '16 December 1982']
        ] },
        { type: 'h2', text: 'Supervision and inauguration' },
        { type: 'p', text: 'According to Banglapedia, the Public Works Department supervised the construction of the monument. After a long construction period, the monument was inaugurated on 16 December 1982 — Victory Day.' },
        { type: 'h2', text: 'The period after inauguration' },
        { type: 'p', text: 'After its inauguration the monument came into use as the national place of remembrance; tributes are laid here on national days. Over time the surrounding grounds, access routes and visitor facilities have changed.' },
        { type: 'callout', tone: 'note', title: 'Caution on construction-period dates', text: 'The 1972–1982 span, the 1978 competition with 57 proposals and the inauguration on 16 December 1982 are drawn from verifiable sources. This page does not claim a precise date for every milestone of the build; for detail, consult Banglapedia and the relevant official records.' },
        { type: 'h2', text: 'The decision to build a national memorial soon after independence' },
        { type: 'p', text: 'Work on creating a national memorial began soon after independence, and the construction period is taken to span 1972 to 1982. The newly independent nation needed such a place to remember its own martyrs — one that could stand as the centre of national memory and identity. The site was settled at Nabinagar in Savar, and the long period ended with the inauguration on 16 December 1982.' },
        { type: 'callout', tone: 'note', title: 'A note on the time span', text: 'The 1972–1982 span is taken as approximate; this page does not claim a precise starting date for each piece of work. As verifiable facts it cites the 1978 design competition and the inauguration on 16 December 1982.' }
      ],
      faq: [
        { q: 'When was the National Martyrs’ Monument inaugurated?', a: 'On 16 December 1982, on Victory Day.' },
        { q: 'When was the design competition held and how many proposals were received?', a: 'In 1978; 57 proposals were received and the design of Syed Mainul Hossain was selected.' },
        { q: 'Who supervised the construction?', a: 'According to Banglapedia, the Public Works Department.' },
        { q: 'How long did construction run?', a: 'On the evidence of the inauguration, the construction period spans 1972 to 1982.' },
        { q: 'Who won the design competition?', a: 'The architect Syed Mainul Hossain.' },
        { q: 'Why was the decision to build a national memorial taken so soon after independence?', a: 'The newly independent nation needed a national centre to remember its own martyrs, so the choice of site and planning began soon after independence and the long construction period ended with the inauguration on 16 December 1982.' }
      ]
    }
  },
  {
    slug: 'history/memorial-comparison',
    section: 'history',
    priority: 'P3',
    updated: '2026-11-03',
    related: ['history/1952-1971', 'history/construction-timeline', 'visit/first-time'],
    bn: {
      title: 'স্মৃতিসৌধ, কেন্দ্রীয় শহীদ মিনার ও রায়েরবাজার: পার্থক্য কী',
      description: 'জাতীয় স্মৃতিসৌধ, ঢাকার কেন্দ্রীয় শহীদ মিনার ও রায়েরবাজারের স্মৃতিসৌধ—তিনটি আলাদা স্মৃতিস্থান, তিনটি আলাদা উদ্দেশ্য। বিভ্রান্তি এড়াতে পার্থক্য স্পষ্ট করা হলো।',
      h1: 'জাতীয় স্মৃতিসৌধ ও অন্য স্মৃতিস্থানের পার্থক্য',
      answer:
        'জাতীয় স্মৃতিসৌধ সাভারে অবস্থিত এবং এটি ১৯৭১ সালের মুক্তিযুদ্ধের শহীদদের স্মরণে জাতীয় স্মৃতিস্থান। এর সঙ্গে ঢাকার কেন্দ্রীয় শহীদ মিনার, যা ১৯৫২ সালের ভাষা আন্দোলনের শহীদদের স্মরণে, এবং রায়েরবাজারের স্মৃতিসৌধ, যা ১৯৭১ সালের ডিসেম্বরে নিহত বুদ্ধিজীবীদের স্মরণে—এগুলো সম্পূর্ণ আলাদা স্মৃতিস্থান। এগুলো এক নয় এবং একটির জায়গায় অন্যটি নয়।',
      blocks: [
        { type: 'h2', text: 'তিনটি ভিন্ন স্মৃতিস্থান, তিনটি ভিন্ন উদ্দেশ্য' },
        { type: 'p', text: 'বাংলাদেশে স্বাধীনতা ও আন্দোলনের স্মৃতি জড়িয়ে আছে একাধিক স্মৃতিস্থানের সঙ্গে। প্রতিটি স্মৃতিস্থানের উদ্দেশ্য ও স্মরণের বিষয় আলাদা। তাই যাওয়ার আগে জানা দরকার কোনটি কোন ঘটনার স্মারক।' },
        { type: 'table', head: ['স্মৃতিস্থান', 'কোথায়', 'কাদের স্মরণে'], rows: [
          ['জাতীয় স্মৃতিসৌধ', 'নবীনগর, সাভার', '১৯৭১ সালের মুক্তিযুদ্ধের শহীদ'],
          ['কেন্দ্রীয় শহীদ মিনার', 'ঢাকা', '১৯৫২ সালের ভাষা আন্দোলনের শহীদ'],
          ['রায়েরবাজারের স্মৃতিসৌধ', 'রায়েরবাজার, ঢাকা', '১৯৭১ সালের ডিসেম্বরে নিহত বুদ্ধিজীবী']
        ] },
        { type: 'h2', text: 'কেন্দ্রীয় শহীদ মিনার: ১৯৫২-এর ভাষা শহীদ' },
        { type: 'p', text: 'ঢাকার কেন্দ্রীয় শহীদ মিনার ১৯৫২ সালের ভাষা আন্দোলনের শহীদদের স্মরণে নির্মিত। এই স্মৃতিস্থানের কেন্দ্রীয় বিষয় ভাষা আন্দোলন, যার স্মৃতি আন্তর্জাতিক মাতৃভাষা দিবসের সঙ্গেও জড়িত।' },
        { type: 'h2', text: 'রায়েরবাজারের স্মৃতিসৌধ: ১৯৭১-এর ডিসেম্বর' },
        { type: 'p', text: 'রায়েরবাজারের স্মৃতিসৌধ ১৯৭১ সালের ডিসেম্বরে নিহত বুদ্ধিজীবীদের স্মরণে নির্মিত। এটি মুক্তিযুদ্ধের সময়ের একটি ভিন্ন ঘটনা ও ভিন্ন শ্রেণির শহীদদের স্মারক—সাভারের জাতীয় স্মৃতিসৌধ থেকে আলাদা।' },
        { type: 'callout', tone: 'note', title: 'কেন এই পার্থক্য জরুরি', text: 'দর্শনার্থীরা প্রায়ই তিনটি স্মৃতিস্থানকে এক ভেবে ভুল করেন। প্রতিটি স্থান আলাদা; পরিকল্পনার সময় গন্তব্যটি স্পষ্টভাবে “জাতীয় স্মৃতিসৌধ, সাভার” হিসেবে ঠিক করুন। সঠিক তথ্য নিশ্চিত করতে সংশ্লিষ্ট সূত্র দেখুন।' },
        { type: 'h2', text: 'এক ভ্রমণে কতগুলো স্মৃতিস্থান সম্ভব' },
        { type: 'p', text: 'তিনটি স্মৃতিস্থান এক জায়গায় নয়। জাতীয় স্মৃতিসৌধ ঢাকার বাইরে সাভারে, শহর থেকে প্রায় ৩৫ কিলোমিটার উত্তর-পশ্চিমে; অন্যদিকে কেন্দ্রীয় শহীদ মিনার ও রায়েরবাজারের স্মৃতিসৌধ ঢাকার ভেতরে। তাই তিনটি একসঙ্গে দেখতে চাইলে যাতায়াত ও সময় আলাদাভাবে ধরতে হয়।' },
        { type: 'ul', items: [
          'সাভারের স্মৃতিসৌধ দেখতে ঢাকা থেকে আলাদা যাতায়াত ধরুন, যা প্রায় ৩৫ কিলোমিটার',
          'কেন্দ্রীয় শহীদ মিনার ও রায়েরবাজার ঢাকার ভেতরে, তাই একসঙ্গে পরিকল্পনা করা সহজ',
          'প্রতিটি স্থানের কর্মসূচি ও প্রবেশ-নিয়ম যাত্রার আগে যাচাই করুন'
        ] }
      ],
      faq: [
        { q: 'জাতীয় স্মৃতিসৌধ আর শহীদ মিনার কি একই?', a: 'না। জাতীয় স্মৃতিসৌধ সাভারে, ১৯৭১ সালের মুক্তিযুদ্ধের শহীদদের স্মরণে; কেন্দ্রীয় শহীদ মিনার ঢাকায়, ১৯৫২ সালের ভাষা আন্দোলনের শহীদদের স্মরণে।' },
        { q: 'রায়েরবাজারের স্মৃতিসৌধ কাদের স্মরণে?', a: '১৯৭১ সালের ডিসেম্বরে নিহত বুদ্ধিজীবীদের স্মরণে। এটি সাভারের জাতীয় স্মৃতিসৌধ থেকে আলাদা স্মৃতিস্থান।' },
        { q: 'কেন্দ্রীয় শহীদ মিনার কোথায়?', a: 'ঢাকায়। এটি ভাষা আন্দোলনের স্মারক, যার স্মৃতি আন্তর্জাতিক মাতৃভাষা দিবসের সঙ্গেও জড়িত।' },
        { q: 'ভ্রমণের সময় কোনটি বেছে নেব?', a: 'গন্তব্য অনুযায়ী। সাভারের স্মৃতিসৌধ দেখতে চাইলে মানচিত্রে “জাতীয় স্মৃতিসৌধ, সাভার” নির্বাচন করুন, যাতে শহীদ মিনারের সঙ্গে গুলিয়ে না যায়।' },
        { q: 'তিনটি স্মৃতিস্থান কি একই সময়ে নির্মিত?', a: 'তাদের নির্মাণ ও স্মরণের বিষয় ভিন্ন। কেন্দ্রীয় শহীদ মিনার ভাষা আন্দোলনের সঙ্গে এবং রায়েরবাজারের স্মৃতিসৌধ ১৯৭১ সালের ডিসেম্বরের সঙ্গে যুক্ত, অন্যদিকে জাতীয় স্মৃতিসৌধ মুক্তিযুদ্ধের শহীদদের জাতীয় স্মারক।' },
        { q: 'এক দিনে তিনটি স্মৃতিস্থান দেখা সম্ভব?', a: 'সম্ভব, তবে মনে রাখতে হবে সাভারের স্মৃতিসৌধ ঢাকার বাইরে প্রায় ৩৫ কিমি দূরে, আর কেন্দ্রীয় শহীদ মিনার ও রায়েরবাজার ঢাকার ভেতরে; তাই যাতায়াতের সময় আলাদাভাবে ধরে পরিকল্পনা করতে হয়।' }
      ]
    },
    en: {
      title: 'Monument, Central Shaheed Minar and Rayerbazar: what is the difference',
      description: 'The National Martyrs’ Monument, the Central Shaheed Minar in Dhaka and the memorial at Rayerbazar — three distinct sites with three distinct purposes, set out clearly so they are not confused.',
      h1: 'The National Martyrs’ Monument and other memorials',
      answer:
        'The National Martyrs’ Monument stands at Savar and is the national memorial to the martyrs of the 1971 Liberation War. It is quite separate from the Central Shaheed Minar in Dhaka, which commemorates the martyrs of the 1952 Language Movement, and from the memorial at Rayerbazar, which commemorates the intellectuals killed in December 1971. These are distinct sites; one is not the other and does not stand in for the other.',
      blocks: [
        { type: 'h2', text: 'Three distinct sites, three distinct purposes' },
        { type: 'p', text: 'In Bangladesh the memory of independence and of the movements before it is tied to more than one memorial. Each has its own purpose and its own subject of remembrance, so it helps to know which event a given site commemorates before you travel.' },
        { type: 'table', head: ['Memorial', 'Where', 'Commemorates'], rows: [
          ['National Martyrs’ Monument', 'Nabinagar, Savar', 'the martyrs of the 1971 Liberation War'],
          ['Central Shaheed Minar', 'Dhaka', 'the martyrs of the 1952 Language Movement'],
          ['Rayerbazar memorial', 'Rayerbazar, Dhaka', 'the intellectuals killed in December 1971']
        ] },
        { type: 'h2', text: 'Central Shaheed Minar: the language martyrs of 1952' },
        { type: 'p', text: 'The Central Shaheed Minar in Dhaka was built in memory of the martyrs of the 1952 Language Movement. Its central subject is the Language Movement, whose memory is also tied to International Mother Language Day.' },
        { type: 'h2', text: 'The Rayerbazar memorial: December 1971' },
        { type: 'p', text: 'The memorial at Rayerbazar commemorates the intellectuals killed in December 1971. It is a memorial to a different event and a different group of victims during the Liberation War — separate from the National Martyrs’ Monument at Savar.' },
        { type: 'callout', tone: 'note', title: 'Why this distinction matters', text: 'Visitors often treat the three as one. Each is a separate site; when planning, set your destination clearly as the “National Martyrs’ Monument, Savar”. Check the relevant sources to confirm details.' },
        { type: 'h2', text: 'How many memorials can you see in one trip' },
        { type: 'p', text: 'The three memorials are not in one place. The National Martyrs’ Monument is outside Dhaka at Savar, about 35 km north-west of the city, while the Central Shaheed Minar and the Rayerbazar memorial are inside Dhaka. To see all three, travel and time have to be counted separately.' },
        { type: 'ul', items: [
          'To see the Savar monument, count a separate journey from Dhaka, about 35 km',
          'The Central Shaheed Minar and Rayerbazar are inside Dhaka, so they can be planned together more easily',
          'Check each site’s programme and access rules before you travel'
        ] }
      ],
      faq: [
        { q: 'Are the National Martyrs’ Monument and the Shaheed Minar the same?', a: 'No. The National Martyrs’ Monument is at Savar and commemorates the martyrs of the 1971 Liberation War; the Central Shaheed Minar is in Dhaka and commemorates the martyrs of the 1952 Language Movement.' },
        { q: 'Who does the Rayerbazar memorial commemorate?', a: 'The intellectuals killed in December 1971. It is a separate site from the National Martyrs’ Monument at Savar.' },
        { q: 'Where is the Central Shaheed Minar?', a: 'In Dhaka. It is the memorial of the Language Movement, whose memory is also tied to International Mother Language Day.' },
        { q: 'Which one should I visit?', a: 'It depends on your purpose. To see the Savar monument, select “National Martyrs’ Monument, Savar” on the map so it is not confused with the Shaheed Minar.' },
        { q: 'Were the three built at the same time?', a: 'They differ in construction and in what they commemorate. The Central Shaheed Minar is tied to the Language Movement and the Rayerbazar memorial to December 1971, while the National Martyrs’ Monument is the national memorial to the martyrs of the Liberation War.' },
        { q: 'Can all three be seen in one day?', a: 'It is possible, but bear in mind that the Savar monument is about 35 km outside Dhaka while the Central Shaheed Minar and Rayerbazar are inside the city, so travel time has to be counted separately in your plan.' }
      ]
    }
  }
];
