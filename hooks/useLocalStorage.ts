import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '../utils/constants';

export const useLocalStorage = () => {
  // Force dark mode only - no theme switching allowed
  const [isDarkMode] = useState(true); // Always true, no setter returned

  // Authentication management
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.AUTH);
    return saved ? JSON.parse(saved) : false;
  });

  const [userEmail, setUserEmail] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.EMAIL) || '';
  });

  const [userName, setUserName] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.USERNAME) || '';
  });

  // Scan history management
  const [scanHistory, setScanHistory] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.SCAN_HISTORY);
    return saved ? JSON.parse(saved) : [];
  });

  // Force dark mode on mount and keep it
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem(STORAGE_KEYS.THEME, JSON.stringify(true));
  }, []);

  // Save scan history to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SCAN_HISTORY, JSON.stringify(scanHistory));
  }, [scanHistory]);

  const handleSignIn = (email: string, password: string, extractUsername: (email: string) => string) => {
    const username = extractUsername(email);
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserName(username);
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(true));
    localStorage.setItem(STORAGE_KEYS.EMAIL, email);
    localStorage.setItem(STORAGE_KEYS.USERNAME, username);
  };

  const handleSignUp = (email: string, password: string, name: string, extractUsername: (email: string) => string) => {
    const username = extractUsername(email);
    setIsAuthenticated(true);
    setUserEmail(email);
    setUserName(username);
    localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(true));
    localStorage.setItem(STORAGE_KEYS.EMAIL, email);
    localStorage.setItem(STORAGE_KEYS.USERNAME, username);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setUserName('');
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    localStorage.removeItem(STORAGE_KEYS.EMAIL);
    localStorage.removeItem(STORAGE_KEYS.USERNAME);
  };

  return {
    isDarkMode, // Always true, no setIsDarkMode exposed
    isAuthenticated,
    userEmail,
    userName,
    scanHistory,
    setScanHistory,
    handleSignIn,
    handleSignUp,
    handleSignOut
  };
};