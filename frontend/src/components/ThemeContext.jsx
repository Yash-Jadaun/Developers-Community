// src/components/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for the theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Use effect to apply the theme to the body element
  useEffect(() => {
    document.body.className = theme; // Apply the theme class to the body
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
