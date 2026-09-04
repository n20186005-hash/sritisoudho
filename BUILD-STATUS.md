# Build status

单语（孟加拉语 bn-BD）静态站点：জাতীয় স্মৃতিসৌধ（萨瓦尔国家烈士纪念碑）访客指南。正式域名：**sritisoudho.com**。

## 已验证

- 2026-09-04：`pnpm install` 成功，`pnpm-lock.yaml` 已提交。
- `npm run check`：0 errors / 0 warnings / 0 hints。
- `npm run build` / `astro build`：5 页全部生成，`@astrojs/sitemap` 输出 `sitemap-index.xml`（4 URL，404 自动排除）。
- 本地 Node v24.14.0 与 `engines.node` 24.20.0 的 EBADENGINE 提示为装饰性，不影响产物。

## 部署

```bash
pnpm install
pnpm run build && pnpm deploy   # Cloudflare Workers 静态资产（wrangler.jsonc）
```
上线前把自定义域名绑定到该 Worker；SITE_URL 环境变量仍可覆盖站点基址（默认已用 sritisoudho.com，因此 canonical/og/sitemap 现在恒为绝对正式 URL）。

## 2026-09-04 · SEO 实体绑定 + PWA（本轮）

1. **域名与 sitemap**：`astro.config.ts` 默认 `site='https://sritisoudho.com'`（`SITE_URL` 可覆盖），启用 `@astrojs/sitemap`；新增 `public/robots.txt`（指向 sitemap-index）。
2. **最新景点数据落地**：评分 4.6（23,481 条评价）现同时在页面评分卡与 JSON-LD `aggregateRating`；官方坐标（与 Google pb embed 一致）`23.911298478561065 / 90.2522003771468` 写入 JSON-LD `geo`、正文坐标（৯০.২৫২২°）与 Weather 模块（LON 90.2522）；地址 PostalAddress `সাভার 1344 / BD`、Plus Code `W763+GW` 已就位。地图 pb 载荷与用户提供一致（仅语言段用 bn！2sbd 匹配全站孟加拉语，有意为之）。
3. **TouristAttraction JSON-LD 补全**：`@id = https://sritisoudho.com/#attraction`、`image`（绝对 hero URL）、`hasMap`（Google 短链）、`alternateName: ['National Martyrs’ Monument','Jatiyo Smriti Soudho']`、`reviewCount 23481`。全站仍为 4 节点 @graph：TouristAttraction + FAQPage(8) + Organization + WebPage(dateModified 2026-09-04)。
4. **TDK/H1/语义绑定**：title `জাতীয় স্মৃতিসৌধ (সাভার) | National Martyrs’ Monument Visitor Guide`；description 同时含官方孟加拉名与英文全称；H1 唯一且含城市 `(সাভার, বাংলাদেশ)`；首段正文做英文全称 ⇔ 孟加拉名等位声明。
5. **OG/Twitter 补全**：`og:site_name`、`og:image:alt`、`twitter:image:alt`（默认图 alt 含景点+城市）；canonical/og:url 恒为绝对 URL。
6. **资料来源区块（E-E-A-T）**：新增 `src/components/SourcesSection.astro`（`#সূত্র`）——3 个权威来源卡（সাভার উপজেলা প্রশাসন / বাংলাদেশ ট্যুরিজম বোর্ড·Beautiful Bangladesh / বাংলাপিডিয়া，均 `target=_blank`+`rel=noopener`）+ 评分披露说明 + 图片与更新说明。
7. **PWA 支持**：`public/site.webmanifest`（bn-BD、theme/background `#173d30`、start_url `/`）；`public/icons/icon-192.png`、`icon-512.png`、`maskable-512.png`（由 apple-touch-icon 生成，maskable 留安全区）；`public/sw.js`（v2026-09-04，导航 network-first + 离线 `/` 兜底、静态资源 S-W-R、同源限定）；BaseLayout 已注册 SW（排除 localhost）。
8. 全量产物自检脚本 `_verify_seo.mjs`（已删除）：38/38 PASS。

## 2026-09-04 内容与性能增强（上一轮）

- 新增设施（`#সুবিধা`，6 类纯类型描述无商户名）、建筑与设计（`#স্থাপত্য`，七对墙体/150 英尺/34 公顷/1978 竞赛/时间轴）、背景故事（`#কথা`，4 则可溯源故事）、天气模块（`#আবহাওয়া`，Open-Meteo 实时+7 日+静态季节建议，30 分钟 localStorage 缓存）、FAQ 5→8 问、页面锚点统一走 `src/data/anchors.ts`（规避 য় 码点差异，字节级校验命中）、Footer 加最后更新日期、图片压缩 -32%（512→347 KB，`scripts/optimize-images.ps1` 可复跑）。

## 2026-09-04 · 代码合规审计（自动重建清单）

清单自动重建 194 项，**193 PASS / 1 FAIL**（唯一 FAIL 为审计脚本自身存在于 scripts/，属临时文件，清理后 194/194 ALL PASS）。分类证据：

- **A 构建产物完整**：/、/404/、/privacy/、/terms/、/cookies/ 5 页 + sitemap-index/robots/sw/manifest/5 图标/4 JPG/2 SVG 全在 dist。
- **B 页面头与元信息**（每页 15 项×5 页）：lang=bn-BD、charset、viewport 无 maximum-scale、theme-color #173d30、canonical/og:url 恒为 `https://sritisoudho.com` 绝对且尾斜杠、og:image+alt/twitter:image+alt/og:site_name/og:locale bn_BD、manifest/apple/favicon 引用、h1 唯一、img 全带 alt；404 页 noindex,follow + 回首页链接，其余页无 noindex。
- **C SW 注册 + GA4 同意门控**：SW 注册排除 localhost；G-HXM22WWPKP 单常量一处；`prefs.analytics !== true` 不加载；anonymize_ip；同意键 nmm_cookie_preferences 与 cookies 页一致；无第二处硬编码。
- **D PWA**：manifest 5 图标声明与实际 PNG 尺寸逐一相等（32/180/192/512/512 含 maskable）；sw.js v2026-09-04 三监听 + network-first 导航 + 离线 `/` 兜底 + 同源/GET 守卫。
- **E 404/robots/sitemap**：wrangler not_found_handling=404-page；robots Allow:/+绝对 sitemap；sitemap-0 恰 4 绝对 URL（/ /privacy/ /terms/ /cookies/，404 排除）。
- **F JSON-LD**：4 节点全部可解析；TouristAttraction @id=#attraction、双英文 alternateName（National Martyrs' Monument / Jatiyo Smriti Soudho）、hasMap 短链、NAP Savar/Dhaka/1344/BD、geo 23.911298478561065/90.2522003771468、openingHoursSpecification 每日 06:00–18:00、isAccessibleForFree、aggregateRating 4.6/23481；FAQPage 8 == 可见 details 8 且文案全部 DOM 可见；Organization logo 绝对；WebPage dateModified 2026-09-04。
- **G 可见一致性/锚点**：评分卡 ৪.৬/২৩,৪৮১ 可见、正文坐标 ৯০.২৫২২°、footer 更新日期；11 锚点 id 全存在、Header 8 导航命中、首页无重复 id、skip-link 闭环；iframe lazy+title+strict-origin-when-cross-origin+pb 官方坐标。
- **H 外链规范**：所有外部 `<a>` 均 target=_blank+rel=noopener；官方源 savar.dhaka.gov.bd×3、beautifulbangladesh.gov.bd×4、bn.banglapedia.org×3、maps 短链×4。
- **I 负向残留扫描**：ca-pub-/adsbygoogle/googlesyndication/doubleclick.net/placeholder/TODO/FIXME/XXX/example.com/lorem/underscore/wixsite 及 9 个异站模板词（Sule Pagoda、Tha Phae、Phsar Leu、bhubing、Raj Ghat、Krakus、Trigonion、Alyosha、Mokotowskie）全库零命中；html 仅一个 bn-BD 声明。
- **J 天气一致性**：Weather LAT/LON 官方值；timezone Asia/Dhaka；30min TTL + AbortController 超时 + renderError 兜底 + SSR 季节卡。
- **K 已知避坑执行**：孟加拉锚点单源 src/data/anchors.ts（不手打 য়）；src/public 无 0 字节文件；scripts/ 无临时残留。
- **L 时间戳与披露**：法律页 lastUpdated 与 footer/sources 日期一致；privacy 披露 Google Maps/Analytics/无营销 cookie 并指向 /cookies/。

本轮修复（2 处）：
1. `src/components/Weather.astro` 顶部注释残留旧经度 ৯০.২৫৪৭°পূ → ৯০.২৫২২°পূ（唯一真实瑕疵）。
2. `src/pages/privacy.astro` 新增「আবহাওয়ার তথ্য (Open-Meteo)」披露段：天气预报由浏览器直连 Open-Meteo 免费服务请求，无账号/个人数据，IP 依 Open-Meteo 自身政策处理（第三方披露补齐）。

验证：astro check 0 errors/0 warnings/0 hints；`node node_modules/astro/bin/astro.mjs build` 成功（5 页 + sitemap-index）；dist/privacy 已确认含 Open-Meteo 披露；read_lints 0 错误。

## 待办（人工）

- 新增孟加拉语段落（设施/建筑/故事/天气/Sources/FAQ）建议由母语者终校。
- `public/images` 4 张 JPG 仍为本地视觉资源（Wikimedia CC 真实照片源记录于 `IMAGE-CREDITS.md`，同名替换后重跑压缩脚本即可）。
- 自定义域名 DNS 绑定到 Cloudflare Worker 后上线。
