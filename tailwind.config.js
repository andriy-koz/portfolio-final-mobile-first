/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'from-left': {
          '0%': { transform: 'translateX(-100%); opacity:0' },
          '75%': { transform: 'translateX(10%)' },
          '100%': { transform: 'translateX(0); opacity:1' },
        },
        'from-right': {
          '0%': { transform: 'translateX(100%); opacity:0' },
          '75%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0); opacity:1' },
        },
        'from-bottom': {
          '0%': { transform: 'translateY(30%); opacity:0' },
          '75%': { transform: 'translateY(-10%)' },
          '100%': { transform: 'translateY(0); opacity:1' },
        },
      },
      animation: {
        'from-left': 'from-left .8s ease-out',
        'from-right': 'from-right .8s ease-out',
        'from-bottom': 'from-bottom .8s ease-out',
      },
    },
  },
  plugins: [],
};
