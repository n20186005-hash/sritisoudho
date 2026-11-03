// 36 个主题页的统一登记处（不含多语言翻译页）。
// 顺序即首页目录与站点地图的展示顺序，与 SEO 规划中的编号 01–36 一致。
import type { ContentPage, Priority, SectionKey } from './types';
import { visitPages } from './visit';
import { transportPages } from './transport';
import { historyPages } from './history';
import { architecturePages } from './architecture';
import { eventPages } from './events';
import { nearbyPages } from './nearby';
import { itineraryPages } from './itineraries';
import { groupOf } from './sections';

export const allPages: ContentPage[] = [
  ...visitPages,
  ...transportPages,
  ...historyPages,
  ...architecturePages,
  ...eventPages,
  ...nearbyPages,
  ...itineraryPages
];

export const getPage = (slug: string): ContentPage | undefined => allPages.find(page => page.slug === slug);

export const pagesBySection = (section: SectionKey) => allPages.filter(page => page.section === section);

/** 按四个导航分组归并，供首页目录与面包屑使用 */
export const pagesByGroup = () => {
  const map = new Map<string, ContentPage[]>();
  for (const page of allPages) {
    const key = groupOf(page.section).key;
    const bucket = map.get(key) ?? [];
    bucket.push(page);
    map.set(key, bucket);
  }
  return map;
};

export const priorityCount = (priority: Priority) => allPages.filter(page => page.priority === priority).length;
