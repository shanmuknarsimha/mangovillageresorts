/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#055c4c',
        gold: '#c8ac61',
        'gold-dark': '#b39850',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.15em',
        'ultra-wide': '.2em',
      },
    },
  },
  plugins: [],
};
