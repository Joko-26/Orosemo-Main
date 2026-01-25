import React, { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark" | "halloween" | "christmas";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Read from localStorage on initial load
    const saved = localStorage.getItem("theme");
    return (saved as Theme) || "dark";
  });

  useEffect(() => {
    // Save to localStorage whenever theme changes
    localStorage.setItem("theme", theme);
    
    // Update DOM classes
    if (theme === "dark") {
      document.documentElement.classList.remove("halloween");
      document.documentElement.classList.remove("christmas");
      document.documentElement.classList.add("dark");
    } else if (theme === "halloween") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("christmas");
      document.documentElement.classList.add("halloween");
    } else if (theme === "christmas") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("halloween");
      document.documentElement.classList.add("christmas");
    }  else {
      document.documentElement.classList.remove("christmas");
      document.documentElement.classList.remove("halloween");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}