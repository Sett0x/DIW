/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'TrebuchetMS': ['TrebuchetMS', 'sans-serif'],
        'BebasNeue': ['BebasNeue', 'sans-serif'],
        'WebSymbolsRegular': ['WebSymbolsRegular', 'sans-serif'],
      },
      colors: {
        'Black': '#000',
        'White': '#fff',
        'Gray': '#ccc',
        'DarkGray': '#393d3f',
        'Blue': '#00538c',
        'LightBlue': '#37bcf9',
        'LightGray': '#aaa',
        'DarkBlue': '#156785',
        'DarkGreen': '#00538c',
        'DarkYellow': '#2f78bc',
        'DarkOrange': '#3eb8e5',
        'DarkOrange2': '#2ca0ca',
        'DarkRed': '#37bcf9',
        'MediumGray': '#999',
        'MediumDarkGray': '#666',
        'DarkGray2': '#333',
      }
    },
  },
  plugins: [],
}
