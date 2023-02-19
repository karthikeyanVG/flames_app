/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#10B6C4',
        'custom-text': '#484242',
        'custom-button': "#1791A6",
        'custom-01': "#BFA0E9"
      }
    },
  },
  plugins: [],
}
