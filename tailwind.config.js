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
        warming: '#FFCC67',
        gray1: '#EEEEEE',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light",
      "dark",],
  },
}

