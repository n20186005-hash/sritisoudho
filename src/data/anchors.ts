// 页面锚点 id 的唯一来源。
// 注意：孟加拉文“য়”存在预组合(U+09DF)与分解(য+U+09BC)两种码点，
// 若分散手写容易出现同形不同字节、导致页内锚点跳转失效。
// 因此所有 section id 与页内导航都从这里引用同一份字符串。
export const anchors = {
  memory: 'স্মৃতি',
  architecture: 'স্থাপত্য',
  visit: 'ভ্রমণ',
  facilities: 'সুবিধা',
  transport: 'যাতায়াত',
  nearby: 'আশপাশ',
  stories: 'কথা',
  weather: 'আবহাওয়া',
  faq: 'জিজ্ঞাসা',
  sources: 'সূত্র'
} as const;
