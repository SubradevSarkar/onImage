import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const mainDiv = document.getElementById("main");
    setIsDark(!isDark);
    if (!isDark) {
      mainDiv.classList.add("dark");
    } else {
      mainDiv.classList.remove("dark");
    }
  };
  return (
    <AppContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
