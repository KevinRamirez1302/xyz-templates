/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f4e6de',
          200: '#e8cebf',
          300: '#dcb5a0',
          400: '#d09c81',
          500: '#c48362',
          600: '#b86a43',
          700: '#a85635',
          800: '#984227',
          900: '#882e19',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
