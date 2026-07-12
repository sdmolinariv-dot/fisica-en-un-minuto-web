import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111426",
        "ink-soft": "#202849",
        "deep-purple": "#341062",
        violet: "#6d3df2",
        blue: "#2563eb",
        cyan: "#14b8c4",
        mint: "#b7f7cf",
        paper: "#f8fbff"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(17, 20, 38, 0.12)",
        line: "0 1px 0 rgba(17, 20, 38, 0.08)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.72" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 600ms ease-out both",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
