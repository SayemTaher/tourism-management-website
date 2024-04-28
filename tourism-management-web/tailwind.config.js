/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#539700",
        secondaryGreen: "#CBCC01",
        primaryWhite: "#F4F8EC",
        secondaryWhite: "#DADFD2",
        primaryYellow: "#FAE011",
        primaryOlive: "#292900",
        secondaryOlive: "#A5A99D",
        navy:"#05022B",
        blurBg:"#F4F8EC"
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}