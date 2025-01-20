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
          100: 'rgba(255, 255, 255, 0.7)',
        }
      },
    },
  },
  plugins: [],
};

export default config;
