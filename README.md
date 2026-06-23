# Nicole Li — Portfolio

Editorial personal site (Next.js 15). Live at
[nicole-portfolio-taupe.vercel.app](https://nicole-portfolio-taupe.vercel.app).

## Local dev

```bash
npm install
npm run dev
```

## Add city photos

1. Save images to `public/images/places/` (see the README in that folder).
2. Add or edit its city entry in `lib/places.ts`; the `slug` normally matches the image filename.

## Edit site content

- Main biography, projects, links, and numbers: `app/data.ts`
- Journey text: `lib/journey.ts`
- Thinking cards: `lib/thinking.ts`
- Map cities, notes, dates, and photo paths: `lib/places.ts`
- Recently watched titles, ratings, posters, and links: `lib/movies.ts`
- Movie heatmap activity: `lib/movie-activity.ts`

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Import the repo in Vercel → Deploy (defaults are fine).
3. Set env var `NEXT_PUBLIC_SITE_URL` to your URL (currently `https://nicole-portfolio-taupe.vercel.app`, or use your custom domain).
4. Submit `https://YOUR_DOMAIN/sitemap.xml` in [Google Search Console](https://search.google.com/search-console).

## Project path

`~/Desktop/Apply/nicole-portfolio`
