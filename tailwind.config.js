const { keyframes } = require('styled-components');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: '1200px',
      lg: '1024px',
      md: '768px',
      sm: '479px',
    },
    colors: {
      light: '#f2f2f2',
      'off-light': '#f2ece5',
      dark: '#312e2b',
      charcoal: '#4d4d4d',
      primary: '#f28706',
      'primary-dark': '#f27406',
      'primary-pale': '#f1e4d3',
      secondary: '#f2b703',
      'secondary-dark': '#f29f04',
      transparent: 'transparent'
    },
    fontFamily: {
      sans: ['Articulat CF', 'Roboto', 'sans-serif']
    },
    extend: {
      lineHeight: {
        'lh-body': '1.75rem'
      },
      letterSpacing: {
        'ls-lg': '1px',
        'ls-sm': '0.5px'
      }
    },
  },
  plugins: [],
};
