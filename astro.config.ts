import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim() || 'https://sritisoudho.com';

// 收录首页、英语首页，以及 /visit /transport /history /architecture /events /nearby /itineraries
// 七类主题页（含 /en/ 镜像）。隐私、条款、Cookie 等 noindex 页面不进站点地图。
const contentPath = /^\/(en\/)?(visit|transport|history|architecture|events|nearby|itineraries)\//;

export default defineConfig({
  site: configuredSite,
  integrations: [
    sitemap({
      filter: url => {
        const pathname = new URL(url).pathname;
        return pathname === '/' || pathname === '/en/' || contentPath.test(pathname);
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
