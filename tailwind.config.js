
const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {  screens: {
      'h-xs': {'raw': '(min-height: 625px)'},
      'h-s': {'raw': '(min-height: 650px)'},
      'height-800': {'raw': '(min-height: 800px)'},
     
      // => @media (max-height: 1234px) { ... }
    }},
    screens: {
      'mobile-s':'320px',
      'mobile-m':'360px',
      'mobile-l': '375px',
      'mobile-xl': '390px',
      ...defaultTheme.screens,
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
