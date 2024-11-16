module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        festive: ['"Comfortaa"', "cursive"],
      },
      colors: {
        christmasRed: "#C62828",
        christmasGreen: "#2E7D32",
      },
    },
  },
  plugins: [],
};
