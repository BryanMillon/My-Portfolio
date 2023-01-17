/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {  screens: {
      'Sm-pc': {'raw': '(max-height: 768px)'},
      'mobile-s':'320px',
      'mobile-m':'375px',
      'mobile-l': '475px'
      // => @media (max-height: 1234px) { ... }
    }},
  },
  plugins: [],
}
