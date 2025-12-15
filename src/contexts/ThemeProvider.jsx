// ...existing code...
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark";
    } catch {
      return false;
    }
  });

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    } catch {
      /* empty */
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
// ...existing code...
