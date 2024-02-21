/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mode-dark': 'rgb(30 41 59)',
        'mode-light': 'rgb(255 255 255)',
        'mode-text': 'rgb(4 120 87)',
      },
    },
  },
  plugins: [require('daisyui')],
};
