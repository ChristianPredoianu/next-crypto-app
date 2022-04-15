import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState('light');

  let colorTheme;

  theme === 'light' ? (colorTheme = 'dark') : (colorTheme = 'light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme, theme];
}
