/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#f5f5f5',
      'secondary': '#828282',
      'tertiary': '#efefef',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      gridRowStart: {
        '7': '7',
        '8': '8',
        '9': '9'
      },
      gridRowEnd: {
        '7': '7',
        '8': '8',
        '9': '9'
      },
    },
  },
  plugins: [],
}