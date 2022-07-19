/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Font Colors
      gray: colors.gray,
      // Main Colors
      light: '#E9ECEF',
      cyan: '#54CC94',
      lightBlue: '#1672db',
      blue: '#1454a8',
      darkBlue: '#182944',
      orange: '#ff0000',
      // Other Colors
      lightGrey: '#E8E8E8',
      darkGrey: '#A8A8A8',
      veryDarkBlue: '#02021D',
      red: '#D62516',
    },
    extend: {},
  },
  plugins: [],
}
