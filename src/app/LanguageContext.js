'use client'

import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Initialize state with a function to check localStorage first
  const [language, setLanguageState] = useState(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'ar';
    }
    return 'ar'; // Default fallback
  });

  // Update localStorage whenever language changes
  const setLanguage = (newLanguage) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  // Sync with localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage && savedLanguage !== language) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
} 