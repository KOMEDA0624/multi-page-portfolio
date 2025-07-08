/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        termina: ['termina', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      borderWidth: {
        '1': '1px',
      },
      keyframes: {
        'scroll-vertical': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        'scroll-vertical': 'scroll-vertical 20s linear infinite',
      },
    },
  },
  plugins: [],
};
