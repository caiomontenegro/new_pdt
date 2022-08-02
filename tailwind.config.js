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
      white: colors.white,
      blue: colors.blue,
      slate: colors.slate,
      emerald: colors.emerald,
      // Other Colors
      red: colors.red,
      gray: colors.gray,
      // Dev Colors
    },
    extend: {
      fontFamily: {
        lato: 'Lato',
        montserrat: 'Montserrat'
      },
      backgroundImage: {
        'dark-background': "url(https://res.cloudinary.com/portal-do-trader/image/upload/dpr_auto,q_auto:eco,f_auto/pdt-home/bg_social.jpg)"
      }
    },
  },
  plugins: [],
}
