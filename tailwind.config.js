/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/styles/**/*.{css}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          darkest: "#1B1B1B",
          dark: "#2E2E2E",
          mid: "#6A6A6A",
          light: "#D4D4D4",
          lightest: "#F5F5F5",
        },
        primary: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#3730A3",
        },
        accent: {
          DEFAULT: "#EC4899",
          light: "#F472B6",
          dark: "#BE185D",
        },
      },

      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },

      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },

      lineHeight: {
        130: "130%",
        150: "150%",
      },

      backgroundImage: {
        "gradient-main":
          "linear-gradient(135deg, rgba(79,70,229,1) 0%, rgba(236,72,153,1) 100%)",
      },
    },
  },
  plugins: [],
};
