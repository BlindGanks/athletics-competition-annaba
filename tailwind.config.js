/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["helvetica"],
        futura: ["futura"],
        sitka: ["sitka"],
      },
      colors: {
        redPrimary: "#910000",
        redSecondary: "#580101",
      },
    },
  },

  plugins: [],
};
