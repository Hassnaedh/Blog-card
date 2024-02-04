/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#f4d04e',
        white: '#ffffff',
        secondary: '#808080',
        black: '#121212',
      },
      fontFamily:{
        body: "Figtree",
      },
    },
  },
  plugins: [],
}

