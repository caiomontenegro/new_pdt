/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Main Colors
      cyan: colors.cyan,
      blue: colors.blue,
      // Other Colors
      rose: colors.rose,
      gray: colors.gray,
    },
    extend: {
      fontFamily: {
       lato: 'Lato',
       montserrat: 'Montserrat'
      }
    },
  },
  plugins: [],
}
