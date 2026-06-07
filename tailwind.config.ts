import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vert-principal": "#2D6A4F",
        "vert-surf": "#52B788",
        "sable": "#F4E9CD",
        "noir-doux": "#1C1C1C",
        "blanc-casse": "#FAFAF8",
        "vert-lycra": "#3CB043",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        source: ["var(--font-source)", "sans-serif"],
        dancing: ["var(--font-dancing)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
