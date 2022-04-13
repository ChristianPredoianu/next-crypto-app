module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'clr-dark-theme': '#121212',
      },
      height: {
        75: '80vh',
      },
    },
  },
  plugins: [],
};
