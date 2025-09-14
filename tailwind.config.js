/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},

      colors: {
        'deep-blue': '#002147',
        'gold': '#B8860B',
        'cream-white': '#F5F5DC',
        'warm-gray': '#A9A9A9',
      },
    },
  },
  plugins: [],
}