# জাতীয় স্মৃতিসৌধ দর্শনার্থী গাইড

সাভারের জাতীয় স্মৃতিসৌধকে কেন্দ্র করে তৈরি বাংলা-ভাষার স্বাধীন, অলাভজনক দর্শনার্থী তথ্য-গাইড।

## প্রযুক্তি

- Astro 7.3.1
- Tailwind CSS 4.3.3 (`@tailwindcss/vite`)
- TypeScript 6.0.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.4
- pnpm 11.25.0
- Node.js 24.20.0 LTS
- Wrangler 4.129.0
- Cloudflare Workers Static Assets

সব সংস্করণ `package.json`-এ নির্দিষ্টভাবে পিন করা আছে।

## সাইট URL — একমাত্র কনফিগারেশন পয়েন্ট

`SITE_URL` পরিবেশ ভেরিয়েবলটি `astro.config.ts`-এর `site` ফিল্ডের একমাত্র উৎস। ডোমেইন না থাকলেও সাইট build-able রাখার জন্য এটি ঐচ্ছিক। `SITE_URL` খালি থাকলে canonical/absolute Open Graph URL বাদ যায় এবং sitemap integration সক্রিয় হয় না।

## চালানো

```bash
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install
pnpm check
pnpm build
```

Cloudflare deploy:

```bash
pnpm deploy
```

## কুকি ও বিশ্লেষণ

GA4 measurement ID: `G-HXM22WWPKP`। বিশ্লেষণ ডিফল্টভাবে বন্ধ; `/cookies/` পাতায় সম্মতি দেওয়ার পর GA4 লোড হয়।

## নীতিমালা পাতা

- `/privacy/` — গোপনীয়তা নীতি
- `/terms/` — সেবার শর্তাবলি
- `/cookies/` — কুকি সেটিংস

এগুলো আলাদা দ্বিতীয়-স্তরের পাতা; modal নয়।

## ছবি

সাইটে ব্যবহৃত JPG ফাইলগুলো `public/images/`-এ স্থানীয়ভাবে রাখা আছে; runtime-এ কোনো external image hotlink নেই। ছবি ও যাচাইকৃত বাস্তব আলোকচিত্র উৎসের নোট `IMAGE-CREDITS.md`-এ আছে।

## প্রধান প্রামাণ্য উৎস

- Bangladesh Tourism Board / Beautiful Bangladesh
- Savar Upazila Administration
- Banglapedia
- Google Maps location/embed data

## গুরুত্বপূর্ণ build নোট

এই কথোপকথনের execution environment npm registry-তে পৌঁছাতে পারেনি। ফলে এখানে `pnpm-lock.yaml` তৈরি ও frozen-lockfile/check/build সফল বলে দাবি করা হয়নি। বিস্তারিত `BUILD-STATUS.md` দেখুন।
