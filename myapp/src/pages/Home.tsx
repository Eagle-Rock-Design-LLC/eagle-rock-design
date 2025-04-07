import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <>
    <Box
      sx={{
        height: '60vh',
        backgroundImage: 'url("/eagle.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        px: 2
      }}
    >
      <Box>
        <Typography variant="h2" gutterBottom>
          Build Your Online Presence
        </Typography>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Modern websites for small businesses
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/contact">
          Get Started
        </Button>
      </Box>
    </Box>

    <Container sx={{ mt: 4 }}>
      <Box textAlign="center" sx={{ border: '2px solid #1976d2', borderRadius: 2, p: 3 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Eagle Rock Design LLC
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Helping Small Businesses Grow with Stunning Websites and Marketing Solutions
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
          We specialize in professional web design and marketing tailored to your business needs. Explore our services, see our past work, and contact us to start your digital journey.
        </Typography>
        <Button variant="contained" size="large" component={Link} to="/contact">
          Get Started
        </Button>
      </Box>
    </Container>
    <Testimonials />
  </>
);

export default Home;
