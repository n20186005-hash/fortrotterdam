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

Domain hanya dikonfigurasi pada variabel `site` di `astro.config.mjs`. Nilai kosong didukung: build tetap berjalan, tag URL absolut dihilangkan dengan aman, dan integrasi sitemap tidak diaktifkan. Setelah domain ditetapkan, isi nilai tersebut lalu build ulang.

## Cloudflare Workers Static Assets

Konfigurasi `wrangler.jsonc` menyajikan direktori `dist` sebagai Static Assets. Deploy setelah build:

```bash
pnpm deploy
```

Tidak ada database, login, CMS, atau adapter server Astro. Proyek adalah SSG murni.

## Privasi

Google Analytics 4 (`G-HXM22WWPKP`) hanya dimuat setelah persetujuan kategori analitik. Peta Google dimuat secara malas sebagai iframe ketika area peta mendekati viewport.
