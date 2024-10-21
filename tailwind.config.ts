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

    fontSize: {
      "fs-logo": "var(--fs-logo)",
      "fs-base": "var(--fs-base)",
      "fs-small": "var(--fs-logo)",
    },

    fontWeight: {
      "fw-bold": "var(--fw-bold)",
      "fw-regular": "var(--fw-regular)",
    },

    extend: {
      colors: {
        "color-primary-light": "var(--color-primary-light)",
        "color-secondary-light": "var(--color-secondary-light)",
        "color-body-background-light": "var(--color-body-background-light)",
        "color-elements-light": "var(--color-elements-light)",
        "color-text-light": "var(--color-text-light)",
      },
    },
  },
  plugins: [],
} satisfies Config;
