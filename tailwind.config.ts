import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1A1A1A",
        "iac-gold": "#8C7320",
        "iac-gold-light": "#A68B2A",
        slate: "#2C2C3A",
        "warm-charcoal": "#3D3D3D",
        "parchment-gold": "#F5EDD6",
        brass: "#C49A3C",
        champagne: "#E8D49A",
        "burnished-gold": "#6B5718",
        linen: "#FAF8F4",
        fog: "#F0EFED",
        stone: "#9A9A9A",
        graphite: "#5A5A5A",
        ink: "#1A1A1A",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "Georgia", "serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        xs: "0 1px 3px rgba(0,0,0,0.06)",
        sm: "0 2px 8px rgba(0,0,0,0.08)",
        md: "0 4px 16px rgba(0,0,0,0.12)",
        lg: "0 8px 32px rgba(0,0,0,0.14)",
        xl: "0 16px 48px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
