/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {  screens: {
      'height-700': {'raw': '(max-height: 800px)'},
      'height-800': {'raw': '(min-height: 800px)'},
      'mobile-s':'320px',
      'mobile-m':'375px',
      'mobile-l': '475px'
      // => @media (max-height: 1234px) { ... }
    }},
  },
  plugins: [require('tailwind-scrollbar')],
}
