import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      "fw-semi-bold": "var(--fw-semi-bold)",
      "fw-regular": "var(--fw-regular)",
    },

    extend: {
      colors: {
        // Light Theme
        "color-primary-light": "var(--color-primary-light)",
        "color-secondary-light": "var(--color-secondary-light)",
        "color-body-background-light": "var(--color-body-background-light)",
        "color-elements-light": "var(--color-elements-light)",
        "color-text-light": "var(--color-text-light)",

        // Dark Theme
        "color-primary-dark": "var(--color-primary-dark)",
        "color-secondary-dark": "var(--color-secondary-dark)",
        "color-body-background-dark": "var(--color-body-background-dark)",
        "color-elements-dark": "var(--color-elements-dark)",
        "color-text-dark": "var(--color-text-dark)",
      },

      backgroundImage: {
        "hero-img":
          "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.15)), url('./src/assets/images/hero-img.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
