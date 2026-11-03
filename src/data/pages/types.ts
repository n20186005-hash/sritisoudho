// 多语言内容页的统一类型定义。
// 每个主题页只有一个数据来源：这里定义的 ContentPage。
// 孟加拉语与英语一一对应，禁止只写一种语言后敷衍翻译另一种。

export type Lang = 'bn' | 'en';

/** 一级栏目（也是 URL 第一段、面包屑第一层） */
export type SectionKey =
  | 'visit'
  | 'transport'
  | 'history'
  | 'architecture'
  | 'events'
  | 'nearby'
  | 'itineraries';

export type Priority = 'P1' | 'P2' | 'P3';

/** 正文内容块。所有页面共用同一套渲染器，避免每页手写 HTML。 */
export type Block =
  /** 普通段落 */
  | { type: 'p'; text: string }
  /** 二级标题 */
  | { type: 'h2'; text: string }
  /** 三级标题 */
  | { type: 'h3'; text: string }
  /** 无序列表 */
  | { type: 'ul'; items: string[] }
  /** 有序列表（步骤序号由渲染器生成） */
  | { type: 'ol'; items: string[] }
  /** 数据表格 */
  | { type: 'table'; head: string[]; rows: string[][] }
  /** 提示框：note = 中性说明，warn = 需要留意的限制 */
  | { type: 'callout'; tone?: 'note' | 'warn'; title?: string; text: string }
  /** 分步说明（带序号圆点的小标题结构） */
  | { type: 'steps'; items: { title: string; text: string }[] }
  /** 站外来源链接组 */
  | { type: 'links'; items: { label: string; href: string; external?: boolean }[] }
  /** 嵌入该纪念碑的 Google 地图 */
  | { type: 'map' };

export interface SourceRef {
  name: string;
  url: string;
}

/** 单语言页面内容 */
export interface LangContent {
  /** <title> 用的页面标题，不含站点名 */
  title: string;
  /** meta description；直接回答页面主题，不堆砌关键词 */
  description: string;
  /** 页面 H1 */
  h1: string;
  /** 首屏直接回答：移动端优先，先给结论 */
  answer: string;
  /** 正文区块 */
  blocks: Block[];
  /** 页尾常见问题（可选） */
  faq?: { q: string; a: string }[];
  /** 该页引用的权威来源（可选；未使用则继承全站来源） */
  sources?: SourceRef[];
}

export interface ContentPage {
  /** 不含语言前缀的路径，如 'visit/location'（无首尾斜杠） */
  slug: string;
  section: SectionKey;
  priority: Priority;
  /** 内容核实日期 ISO，如 '2026-11-03' */
  updated: string;
  /** 站内相关页面 slug（语言无关），建议 2–4 条 */
  related?: string[];
  bn: LangContent;
  en: LangContent;
}
