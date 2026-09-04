import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim() || 'https://sritisoudho.com';

export default defineConfig({
  site: configuredSite,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
