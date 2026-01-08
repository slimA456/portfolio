import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mobile menu theme state
  // Default to 'auto' so the mobile menu follows the global theme unless user overrides it
  const [mobileMenuTheme, setMobileMenuTheme] = useState('auto');

  // Single useEffect for theme persistence
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev;
      console.log('Theme toggled ->', next ? 'dark' : 'light');
      return next;
    });
  };

  // Mobile menu theme functions
  const setMobileMenuToDark = () => setMobileMenuTheme('dark');
  const setMobileMenuToLight = () => setMobileMenuTheme('light');
  const setMobileMenuToAuto = () => setMobileMenuTheme('auto');

  // Get mobile menu styles
  const getMobileMenuStyles = () => {
    const isMobileDark = mobileMenuTheme === 'dark' || 
                        (mobileMenuTheme === 'auto' && isDarkMode);
    
    return {
      background: isMobileDark ? 'bg-gray-900' : 'bg-white',
      text: isMobileDark ? 'text-white' : 'text-gray-900',
      hoverBg: isMobileDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100',
      hoverText: isMobileDark ? 'hover:text-gray-200' : 'hover:text-gray-700',
      border: isMobileDark ? 'border-gray-700' : 'border-gray-200',
      button: isMobileDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-600',
      overlay: isMobileDark ? 'bg-black bg-opacity-70' : 'bg-black bg-opacity-50'
    };
  };

  // Context value - everything consumers need
  const value = {
    isDarkMode,
    toggleTheme,
    mobileMenuTheme,
    mobileMenuStyles: getMobileMenuStyles(),
    setMobileMenuToDark,
    setMobileMenuToLight,
    setMobileMenuToAuto
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};