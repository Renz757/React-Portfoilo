/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#1A2350',
      'mustard': '#d8ae62',
      'off-white': '#dedace',
      'fedora': '#7b6d78',

    },
    fontFamily: {
      IBM: ["IBM Plex Sans Arabic", ";sans-serif"],
      Quicksand: ["Quicksand", "sans-serif"],
      Lobster: ["Lobster", "cursive"]
    },
    extend: {},
  },
  plugins: [],
}

