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
      slate: colors.slate,
      // Other Colors
      red: colors.red,
      gray: colors.gray,
      // Dev Colors
      emerald: colors.emerald
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
