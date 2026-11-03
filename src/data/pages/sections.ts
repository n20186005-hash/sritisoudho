// 栏目与导航分组的唯一来源。
// URL 第一段 = SectionKey；四个导航分组把 7 个栏目归到首页四个入口下。
import type { Lang, SectionKey } from './types';

export type GroupKey = 'visit' | 'transport' | 'heritage' | 'nearby';

export interface GroupMeta {
  key: GroupKey;
  bn: string;
  en: string;
  /** 分组说明，用于首页目录 */
  bnNote: string;
  enNote: string;
}

export const GROUPS: GroupMeta[] = [
  {
    key: 'visit',
    bn: 'ভ্রমণ পরিকল্পনা',
    en: 'Visit',
    bnNote: 'অবস্থান, সময়, খরচ, প্রয়োজন ও আচরণ—যাওয়ার আগে যা জানা দরকার।',
    enNote: 'Location, hours, cost, needs and etiquette — what to know before you go.'
  },
  {
    key: 'transport',
    bn: 'যাতায়াত',
    en: 'Transport',
    bnNote: 'ঢাকার বিভিন্ন এলাকা থেকে আসা, নামার স্টপ ও ফেরার পথ।',
    enNote: 'Getting here from different parts of Dhaka, where to get off and how to return.'
  },
  {
    key: 'heritage',
    bn: 'ইতিহাস ও স্থাপত্য',
    en: 'History & Architecture',
    bnNote: 'স্বাধীনতার সাত অধ্যায়, নকশা, স্থপতি ও জাতীয় দিবসের কর্মসূচি।',
    enNote: 'Seven chapters of independence, the design, the architect and national-day programmes.'
  },
  {
    key: 'nearby',
    bn: 'আশপাশ ও রুট',
    en: 'Nearby & Itineraries',
    bnNote: 'সাভারের পারিপার্শ্বিক এলাকা, খাবার-বিশ্রাম ও সীমিত সময়ের রুট।',
    enNote: 'Surrounding Savar areas, food and rest stops, and routes for limited time.'
  }
];

export interface SectionMeta {
  key: SectionKey;
  group: GroupKey;
  bn: string;
  en: string;
}

export const SECTIONS: SectionMeta[] = [
  { key: 'visit', group: 'visit', bn: 'ভ্রমণ পরিকল্পনা', en: 'Visit planning' },
  { key: 'transport', group: 'transport', bn: 'যাতায়াত', en: 'Transport' },
  { key: 'history', group: 'heritage', bn: 'ইতিহাস', en: 'History' },
  { key: 'architecture', group: 'heritage', bn: 'স্থাপত্য', en: 'Architecture' },
  { key: 'events', group: 'heritage', bn: 'জাতীয় দিবস', en: 'National days' },
  { key: 'nearby', group: 'nearby', bn: 'আশপাশ', en: 'Nearby' },
  { key: 'itineraries', group: 'nearby', bn: 'রুট পরিকল্পনা', en: 'Itineraries' }
];

export const sectionOf = (key: SectionKey) => SECTIONS.find(s => s.key === key)!;
export const groupOf = (key: SectionKey) => GROUPS.find(g => g.key === sectionOf(key).group)!;

export const sectionLabel = (key: SectionKey, lang: Lang) => sectionOf(key)[lang];
export const groupLabel = (key: SectionKey, lang: Lang) => groupOf(key)[lang];

/** 孟加拉语页在根路径，英语页统一挂在 /en/ 下 */
export const pathFor = (slug: string, lang: Lang) => (lang === 'en' ? `/en/${slug}/` : `/${slug}/`);
