import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Caveat } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"


const serif = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: "Nicole Li — Engineering × Product",
  description:
    "Nicole Li (Yu Li) is a product-minded engineer in Chicago building JobLens, JobPush, and PriceTracker. Former Tencent Product Manager and Northwestern graduate student.",
  openGraph: {
    title: "Nicole Li — Engineering × Product",
    description:
      "Product-minded engineer in Chicago building JobLens, JobPush, and PriceTracker. Northwestern, Tencent, open to opportunities.",
    type: "website",
    siteName: "Nicole Li",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicole Li — Engineering × Product",
    description:
      "Builder of JobLens, JobPush, and PriceTracker. Former Tencent Product Manager. Northwestern University.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} ${hand.variable} font-sans text-ink antialiased`}>
        <div className="noise" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
