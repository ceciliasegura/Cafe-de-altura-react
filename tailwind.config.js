/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'background': "url('./img/background.jpeg')"
      }),
      colors: {

        'footer-color': '#2B2A2B',
        'green-coffe': '#2A5B45',
        'beige-coffe': '#E3DED7',
        'grey-coffe': '#515051',
        'blanco': '#FFFFFF',
        'negro': '#2B2A2B',
        'hovercafe': '#E3DED7',
        'footer': '#1F1815',

      }
    },
  },
  plugins: [],
}
