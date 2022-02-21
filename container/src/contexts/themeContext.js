import React, { createContext, useCallback, useMemo, useState } from "react";
import ThemeProvider from "../components/ThemeProvider";

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem("@MFP-Theme");
    if (localTheme) {
      return localTheme;
    }

    return "dark";
  });

  const handleToggleTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("@MFP-Theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("@MFP-Theme", "light");
    }
  }, [theme]);

  const contextValue = useMemo(() => ({ theme, handleToggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
