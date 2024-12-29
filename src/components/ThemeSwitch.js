// src/components/ThemeSwitch.js
import React, { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline btn-secondary"
    >
      {theme === 'light' ? '🌞 Light Mode' : '🌜 Dark Mode'}
    </button>
  );
};

export default ThemeSwitch;
