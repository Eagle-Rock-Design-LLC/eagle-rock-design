import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Home = () => (
  <Container sx={{ mt: 4 }}>
    <Box textAlign="center">
      <Typography variant="h3" gutterBottom>
        Welcome to Eagle Rock Design LLC
      </Typography>
      <Typography variant="h5" color="text.secondary">
        Helping Small Businesses Grow with Stunning Websites and Marketing Solutions
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        We specialize in professional web design and marketing tailored to your business needs. Explore our services, see our past work, and contact us to start your digital journey.
      </Typography>
    </Box>
  </Container>
);

export default Home;