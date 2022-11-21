/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    screens: {
      sm: '480px',

      md: '768px',

      lg: '976px',

      xl: '1440px',
    },
  },
  plugins: [],
}
