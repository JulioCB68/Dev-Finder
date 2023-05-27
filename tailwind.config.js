/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#282a36",

        textPrimary: "#e6edf3",
        textWhite: "#FFFFFF",
        textBlack: "#000000",

        primary: "#0d1117",
        secondary: "#161b22",
        tertionary: "#238636",
        tertionaryHover: "#2EA043",
        blue: "#0a60c4",
        gray: "#8e95a4",
      },
    },
  },
  plugins: [],
};
