/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
     custom : "'Fugaz One', cursive",
     custom2 : "'Averia Libre', cursive",
     book:" 'Gentium Book Plus', serif",
     logo: " 'Play', sans-serif",
     bevas : "'Bebas Neue', cursive"
    },
    extend: {
      animation: {
        "spin-slow": "spin 12s linear infinite",
      }, 
    },
    colors:{
      "ligth":"rgba(250,250,250,0.17)"
    }
  },
  plugins: [],
});