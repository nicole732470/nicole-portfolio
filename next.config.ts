import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  transpilePackages: ["react-simple-maps"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
      { protocol: "https", hostname: "m.media-amazon.com", pathname: "/images/**" },
    ],
  },
};

export default nextConfig;
