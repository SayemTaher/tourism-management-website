/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryWhite: "#FFFFFF",
        secondaryWhite: "#F9F9F9",
        primaryBlue: "#0065FF",
        secondaryBlue: "#F8FDFF",
        primaryPurple: "#3B329E",
        primaryPink: "#BC4DAE",
        primaryNavy: "#000522",
        
      },
      fontFamily: {
        'mulish': ['Mulish', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}