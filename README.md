# Panduan Benteng Rotterdam

Situs satu halaman berbahasa Indonesia untuk informasi nirlaba Benteng Rotterdam, Makassar. Dibangun dengan Astro, Tailwind CSS, TypeScript, dan disiapkan untuk Cloudflare Workers Static Assets.

## Persyaratan

- Node.js 24.19.0
- pnpm 11.22.0 melalui Corepack

## Pengembangan

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

## Pemeriksaan dan build

```bash
pnpm check
pnpm build
```

## Domain produksi

Domain dikonfigurasi pada variabel `site` di `astro.config.mjs` (saat ini `https://fortrotterdam.com`). Mengisi nilai tersebut mengaktifkan tag canonical, URL OG absolut, sitemap (`dist/sitemap-*.xml`), dan referensi sitemap pada `robots.txt`.

Konsolidasi URL (HTTP→HTTPS dan www→apex) ditangani oleh `public/_redirects` (301 ke apex HTTPS) dan `public/_headers` (HSTS). Untuk lapisan DNS/edge, nyalakan **Always Use HTTPS** dan buat aturan redirect `www → apex` di dashboard Cloudflare sebagai cadangan.

## Cloudflare Workers Static Assets

Konfigurasi `wrangler.jsonc` menyajikan direktori `dist` sebagai Static Assets. Deploy setelah build:

```bash
pnpm deploy
```

Tidak ada database, login, CMS, atau adapter server Astro. Proyek adalah SSG murni.

## Privasi

Google Analytics 4 (`G-HXM22WWPKP`) hanya dimuat setelah persetujuan kategori analitik. Peta Google dimuat secara malas sebagai iframe ketika area peta mendekati viewport.
