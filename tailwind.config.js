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
        "te-verde": "#A8B30D",
        "te-blanco": "#FBEFCF",
        "te-amarillo": "#FAD5A0",
        "te-azul": "#F79F32",
        "te-infusiones": "#CE560A",
        "te-negro": "#9C2803",
        "te-rojo": "#6F0A0E",
      },

      fontFamily: {
        baskerville: ["Libre Baskerville", "serif"],
        goudy: ["Sorts Mill Goudy", "cursive"],
        alegreya: ["Alegreya Sans", "sans-serif"],
      },

      fontSize: {
        xxs: ".7rem",
      },
    },
  },
  plugins: [],
};
