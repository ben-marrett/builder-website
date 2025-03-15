/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5D4037',  // Dark brown
        'secondary': '#8D6E63', // Medium brown
        'accent': '#D7CCC8',    // Light brown
        'background': '#F5F5F5', // Off-white
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}