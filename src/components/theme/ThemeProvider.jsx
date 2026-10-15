"use client";

import { createContext, useContext, useEffect } from 'react';

// Retain the context for older components while the site uses one light theme.
const ThemeContext = createContext({ theme: 'light', mounted: true });
export function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    document.documentElement.dataset.theme = 'light';
    try { localStorage.removeItem('dorvik-theme'); } catch {}
  }, []);
  return <ThemeContext.Provider value={{ theme: 'light', mounted: true }}>{children}</ThemeContext.Provider>;
}
export function useTheme() { return useContext(ThemeContext); }
