import { createContext, useContext, useEffect, useState } from 'react';

const DarkmodeContext = createContext();

export function DarkmodeProvider({ children }) {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () => {
    setDarkmode(!darkmode);
    updateDarkMode(!darkmode)
  };

  useEffect(() => {
    const isDark = 
      localStorage.theme ==='dark' || 
      (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkmode(isDark);
    updateDarkMode(isDark);

  },[]);

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>{children}</DarkmodeContext.Provider>
  );
}

function updateDarkMode(darkmode) {
  if(darkmode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light'
  }
}

export const useDarkmode = () => useContext(DarkmodeContext);