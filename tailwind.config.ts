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
        ink: "#091D43",
        "ink-soft": "#3A5078",
        "deep-purple": "#073FBE",
        violet: "#0A58E8",
        blue: "#0A58E8",
        cyan: "#00A8D6",
        mint: "#D9F4FF",
        paper: "#F4F7FC",
        signal: "#FF755A"
      },
      boxShadow: {
        soft: "0 10px 28px rgba(9, 29, 67, 0.14)",
        line: "0 1px 0 rgba(9, 29, 67, 0.1)"
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
          "var(--font-archivo)",
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
