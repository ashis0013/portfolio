/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'mono': ['Cascadia Code']
    },
    colors: {
      'ltext': '#4c4f69',
      'dtext': '#eff1f5',
      'lsubtext': '#6c6f87',
      'dsubtext': '#a6adc8',
      'dbg': '#181926',
      'lbg': '#eff1f5',
      'dprimary': '#8aadf4',
      'lprimary': '#1e66f5',
      'llav': '#7287fd',
      'dlav': '#b4befe'
    }
  },
  plugins: [],
}
