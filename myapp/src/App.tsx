import React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import NavigationDrawer from "./components/NavigationDrawer";
import Home from "./components/Home";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ContactUs from "./components/ContactUs";
import ClientDashboard from "./components/ClientDashboard";
import AdminDashboard from "./components/AdminDashboard";
import DarkModeProvider, { DarkModeToggle } from "./components/DarkModeToggle";
import { Box } from "@mui/material";

const Layout = () => (
  <>
    <NavigationDrawer />
    <DarkModeToggle />
    <Box component="main" sx={{ marginLeft: 240, padding: 3 }}>
      <Outlet />
    </Box>
  </>
);

const App = () => (
  <DarkModeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="clientdashboard" element={<ClientDashboard />} />
          <Route path="admindashboard" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </Router>
  </DarkModeProvider>
);

export default App;
