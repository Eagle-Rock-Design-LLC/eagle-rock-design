import React, { createContext, useContext, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Switch, FormControlLabel } from "@mui/material";

const DarkModeContext = createContext<any>(null);

export const useDarkMode = () => useContext(DarkModeContext);

const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <FormControlLabel
      control={<Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />}
      label="Dark Mode"
    />
  );
};

export default DarkModeProvider;
