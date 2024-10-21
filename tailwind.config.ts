import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },

    container: {
      center: true,
      padding: "2rem",
    },

    fontFamily: {
      mosk: ["Mosk", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
} satisfies Config;
