/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#00d8ff',
      },
    },
  },
  plugins: [require('tailwindcss-primeui')],
}
