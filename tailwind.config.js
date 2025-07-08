// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        termina: ['termina', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
        noto: ['"Noto Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite', // ゆっくり回るスピン
      },
    },
  },
  plugins: [],
};
