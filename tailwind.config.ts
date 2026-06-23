import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbf5ea", paper: "#fffaf2", ink: "#111827", navy: "#101832",
        muted: "#6f675f", coral: "#c95f3d", tea: "#b77b47", line: "#e8dcc9",
        sage: "#dfe8d6", moss: "#748d6a", lake: "#8bb8c7"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(36, 28, 18, 0.08)",
        card: "0 18px 42px rgba(36, 28, 18, 0.07)",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        hand: ["var(--font-hand)", "Comic Sans MS", "cursive"],
      },
    },
  },
  plugins: [],
};
export default config;
