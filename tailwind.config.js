/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#4A6572',
          700: '#344955',
          800: '#232F34',
        },
        secondary: {
          500: '#F9AA33',
        },
      },
    },
  },
  plugins: [],
};
