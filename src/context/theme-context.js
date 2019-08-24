import React, { createContext } from 'react';
import useDarkMode from 'use-dark-mode';
import Switch from '../components/Switch/Switch';

const ThemeContext = createContext(false);

const ThemeProvider = ({ children, isDark, toggle }) => {
  const darkMode = useDarkMode(false);
  return (
    <ThemeContext.Provider value={{ isDark: darkMode.value }}>
      <Switch value={darkMode.value} toggle={darkMode.toggle} />
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
export { ThemeProvider };
