# Pemeriksaan sebelum deploy

Jalankan dari lingkungan yang memiliki akses ke registry npm dan Node.js `24.19.0`:

```bash
rm -rf node_modules dist .astro
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

Sesudah build, pastikan hasil bersih:

```bash
! grep -RInE 'example\.com|localhost|chrome-extension://' dist
```

Proyek ini sengaja tidak memiliki `pnpm-workspace.yaml` karena merupakan proyek satu paket.

`site` di `astro.config.mjs` adalah satu-satunya tempat untuk mengisi domain produksi. Selama nilainya kosong, integrasi sitemap tidak diaktifkan. Setelah domain nyata diisi, build ulang dan periksa `dist/sitemap-*.xml`; sitemap dibuat oleh `@astrojs/sitemap` dan proyek tidak menulis `lastmod` secara manual.
