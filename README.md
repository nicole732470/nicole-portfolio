# Nicole Li — Portfolio

Editorial personal site (Next.js 15). Deploy on [Vercel](https://vercel.com) for free.

## Local dev

```bash
npm install
npm run dev
```

## Add city photos

1. Save images to `public/images/places/` (see table in that folder’s README).
2. Optional: set `dateLabel` on each city in `lib/places.ts`.

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel → Deploy (defaults are fine).
3. Set env var `NEXT_PUBLIC_SITE_URL` to your URL (e.g. `https://nicole-portfolio.vercel.app` or your custom domain).
4. Submit `https://YOUR_DOMAIN/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Project path

`~/Desktop/Apply/nicole-portfolio`
