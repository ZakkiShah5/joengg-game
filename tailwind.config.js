/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        mypurple:{
          600: '#9807b5',
        },
        transparent:{
          50: 'rgba(255, 255, 255, 0.3)',
          100: 'rgba(255, 255, 255, 0.7)',
          200: 'rgba(255, 255, 255, 0.9)',
          300: 'rgba(255, 255, 255, 0.95)',
          400: 'rgba(0, 0, 0, 0.6)',
        }
      },
    },
  },
  plugins: [],
};

export default config;
