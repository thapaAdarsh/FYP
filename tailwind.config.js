/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'david-libre': ['David Libre', 'sans-serif'],
      },
    },
  },
  plugins: [],
}