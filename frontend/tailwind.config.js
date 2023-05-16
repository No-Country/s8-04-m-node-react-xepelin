/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Primary-100' : '#555EEE',
        'Primary-50' : '#7177ED',
        'Neutral-100' : '#22283A',
        'Neutral-50' : '#DDE6F6',
        'Blanco' : '#DDE6F6',
      }
    },
  },
  plugins: [],
}