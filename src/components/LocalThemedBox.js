import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from './ThemeProvider';
import '../styles/App.css';

const LocalThemedBox = () => {
  const { theme } = useContext(ThemeContext);
  const [localTheme, setLocalTheme] = useState('light');

  useEffect(() => {
    setLocalTheme(theme);
  }, [theme]);

  const toggleLocalTheme = () => {
    setLocalTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id="local-themed-box" className={`bg-${localTheme}`}>
      <p id="local-themed-text-container" className={`txt-${localTheme}`}>
        {`Local Themed Text (${localTheme})`}
      </p>
      <button
        id="local-theme-toggler"
        className={`btn btn-${localTheme}`}
        onClick={toggleLocalTheme}
      >
        {localTheme === 'light'
          ? 'Toggle local theme to dark'
          : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export  {LocalThemedBox};
