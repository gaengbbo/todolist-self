/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        basic_bg: '#ACB1D6',
        basic_point: '#DBDFEA',
        basic_font: '#8294C4',
        basic_content: '#FFEAD2',
        dark_black: '#121319',
        dark_font: '#bcc0cf',
        dark_point: '#2e313b',

      }
    },
  },
  plugins: [],
}

