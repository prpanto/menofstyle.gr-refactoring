const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lover': {
          50: '#fef2f3',
          100: '#fde3e4',
          200: '#fdcbce',
          300: '#faa7ac',
          400: '#f5747b',
          500: '#eb4851',
          600: '#d72b35',
          700: '#af1f27',
          800: '#961e25',
          900: '#7c2025',
        }
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
