import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HomePage: React.FC = () => (
  <Container>
    <Box sx={{ my: 4, textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Eagle Rock Design LLC
      </Typography>
      <Typography variant="body1" paragraph>
        Providing high-quality, professional website design for small businesses.
      </Typography>
      <Button variant="contained" color="primary" size="large" href="/services">
        View Our Services
      </Button>
    </Box>
  </Container>
);

export default HomePage;
