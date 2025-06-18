/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Montserrat, sans-serif'],
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
      'dlav': '#b4befe',
      'lsurface': '#ccd0da',
      'dsurface': '#313244',
      'lpeach': '#dd7878',
      'dpeach': '#fab387'
    },
    extend: {
      boxShadow: {
        glow: '5px 5px 20px 15px rgb(30 102 245 / 0.1)',
        glowdark: '5px 5px 20px 5px rgb(138 173 244 / 0.1)',
      },
      keyframes: {
        'gradient': {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      animation: {
        'gradient': 'gradient 9s ease-in-out infinite',
      },
    }
  },
  plugins: [],
}
