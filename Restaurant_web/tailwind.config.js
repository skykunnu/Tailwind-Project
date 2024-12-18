/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'xs':{min:'320px', max:'440px'},
      }
    },
  },
  plugins: [],
}