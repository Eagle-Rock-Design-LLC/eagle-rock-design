import React, { useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f5f5" },
  },
});

const drawerWidth = 240;

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: "flex" }}>
          {/* Navigation Drawer */}
          <NavigationDrawer open={open} toggleDrawer={toggleDrawer} />

          {/* Main Content */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              transition: "margin 0.3s",
              marginLeft: open ? `${drawerWidth}px` : "0",
              textAlign: "center", // Centers text
            }}
          >
            <Toolbar />
            {/* Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggleDrawer}
              sx={{ position: "absolute", left: "16px", top: "16px" }}
            >
              <MenuIcon />
            </IconButton>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contactus" element={<ContactUs />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
