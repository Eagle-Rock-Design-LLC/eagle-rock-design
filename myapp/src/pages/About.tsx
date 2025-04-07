// pages/About.tsx
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      About Us
    </Typography>
    <Typography variant="body1" paragraph>
      Eagle Rock Design LLC is a passionate team dedicated to helping small businesses thrive in the digital world. Our mission is to create beautiful, functional websites and effective marketing strategies that elevate your brand.
    </Typography>
    <Typography variant="body1" paragraph>
      With a focus on quality, collaboration, and transparency, we work closely with our clients to understand their needs and deliver results that exceed expectations. Whether you need a fresh new website, SEO help, or social media support — we’ve got you covered.
    </Typography>
  </Container>
);

export default About;
