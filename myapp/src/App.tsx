import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, useTheme } from '@mui/material';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

const App = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2'
      },
      background: {
        default: darkMode ? '#121212' : '#fff',
        paper: darkMode ? '#1e1e1e' : '#fff'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
        <Router>
          <NavBar />
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
          <Footer darkMode={false} />
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
