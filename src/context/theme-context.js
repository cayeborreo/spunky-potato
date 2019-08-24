import React, { createContext } from 'react';
import useDarkMode from 'use-dark-mode';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const darkMode = useDarkMode(false);
  return (
    <ThemeContext.Provider
      value={{ isDark: darkMode.value, toggleDarkMode: darkMode.toggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
