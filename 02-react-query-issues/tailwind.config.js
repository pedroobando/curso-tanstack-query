/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
      },
      colors: {
        primary: '#1E3A8A', // Example color
        secondary: '#FBBF24', // Example color
        accent: '#6EE7B7', // Example color
      },      
    },
  },
  plugins: [],
}

