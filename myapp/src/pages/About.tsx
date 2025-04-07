// pages/About.tsx
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const About = () => (
  <Container sx={{ mt: 4, mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      About Eagle Rock Design LLC
    </Typography>

    <Typography variant="body1" paragraph>
      Eagle Rock Design LLC is a Wyoming-based creative agency focused on helping small businesses build powerful online presences. We specialize in web development, SEO optimization, branding, and digital marketing tailored to your needs.
    </Typography>

    <Divider sx={{ my: 3 }} />

    <Box>
      <Typography variant="h5" gutterBottom>
        Our Mission
      </Typography>
      <Typography variant="body1" paragraph>
        We believe every small business deserves access to professional-grade digital solutions. Our mission is to simplify the digital experience and empower business owners to thrive online through beautiful, functional, and strategic websites.
      </Typography>
    </Box>

    <Box>
      <Typography variant="h5" gutterBottom>
        What We Do
      </Typography>
      <Typography variant="body1" paragraph>
        From custom website design and responsive development to SEO and content strategy, our team provides end-to-end solutions. We also offer ongoing maintenance and support to ensure your site stays updated and secure.
      </Typography>
      <Typography variant="body1" paragraph>
        Our portfolio includes projects for local service providers, e-commerce shops, nonprofits, and startups. We tailor each solution to your goals, industry, and audience.
      </Typography>
    </Box>

    <Box>
      <Typography variant="h5" gutterBottom>
        Why Work With Us?
      </Typography>
      <Typography variant="body1" paragraph>
        We value transparency, creativity, and communication. You'll always know where your project stands, and we’ll work closely with you to bring your vision to life. No tech jargon—just real results.
      </Typography>
    </Box>
  </Container>
);

export default About;
