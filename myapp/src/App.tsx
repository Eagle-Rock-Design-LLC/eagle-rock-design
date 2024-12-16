import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box, Toolbar } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import ClientDashboard from "./components/ClientDashboard";
import AdminDashboard from "./components/AdminDashboard";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#ff9800" },
    background: { default: "#f5f5f5" },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Box sx={{ display: "flex" }}>
        {/* Navigation Drawer */}
        <NavigationDrawer />

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            bgcolor: "background.default",
            p: 3,
            marginLeft: "240px", // Matches Drawer width
          }}
        >
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/clientdashboard" element={<ClientDashboard />} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  </ThemeProvider>
);

export default App;
