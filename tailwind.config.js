/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        bigWide: '1rem',
        bigMedium: '0.5rem',
      },
      colors: {
        oliveBrown: 'hsl(99, 9%, 38%)',
        },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  plugins: [],
}

