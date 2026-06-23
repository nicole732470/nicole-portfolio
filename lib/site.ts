export function siteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nicole-portfolio.vercel.app";
  return url.replace(/\/$/, "");
}
