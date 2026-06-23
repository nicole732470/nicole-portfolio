export function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nicole-portfolio-taupe.vercel.app";
  return url.replace(/\/$/, "");
}
