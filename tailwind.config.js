/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "#445946",
        "secondary-green": "#CAD9C4",
        "primary-brown-light": "#D5BDA1",
        "primary-brown-dark": "#864622",
        "secondary-brown": "#C78853",
        "bg-light": "#F7FFF4",
        "bg-dark": "#383330",
      },

      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
        baskerville: ["Libre Baskerville", "serif"],
        goudy: ["Sorts Mill Goudy", "cursive"],
      },

      fontSize: {
        xxs: ".7rem",
      },
    },
  },
  plugins: [],
};
