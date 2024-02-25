/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#158e72',
        secondary: '#262626',
        text: '#838383',
        hover: '#0e5c4a',
        outline: '#D4D4D4',
        warming: '#FFCC67'
      },
    },
  },
  plugins: [require("daisyui")],
}

