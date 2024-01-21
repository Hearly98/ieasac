/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');
module.exports = {
  content: [ "./src/**/*.{html,ts}",],
  theme: {
    extend: { 
      colors:{
      'blackout': '#212121',
    },
    },
  },
  plugins: [  //plugins de iconify 
  addDynamicIconSelectors(),],
}

