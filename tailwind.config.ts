import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#3B82F6",
        "accent-light": "#EFF6FF",
        "green-brand": "#059669",
        "green-light": "#D1FAE5",
        "bg-light": "#F0F9FF",
        "bg-neutral": "#F8FAFC",
        "dark-navy": "#0F172A",
        muted: "#64748B",
        text: "#0F172A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
