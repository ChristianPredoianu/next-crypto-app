module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'clr-dark-theme': '#121212',
        'clr-bg-dark': 'rgba(36, 53, 200, 1)',
      },
    },
  },
  plugins: [],
};
