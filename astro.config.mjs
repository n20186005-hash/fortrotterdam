import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Domain produksi sudah ditetapkan. Mengisi nilai ini mengaktifkan tag canonical,
// URL OG absolut, sitemap, dan referensi sitemap pada robots.txt.
const site = 'https://fortrotterdam.com';

export default defineConfig({
  site: site || undefined,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
