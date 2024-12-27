/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pokemonsolid': ['"PokemonSolid"', ...defaultTheme.fontFamily.sans],
        'pokemonhollow': ['"PokemonHollow"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'mm-brown': '#6a3900',
        'mm-orange': '#c59439',
      }
    },
  },
  plugins: [],
}

