import React from 'react';
import { Container, Typography } from '@mui/material';

const ContactUs: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Interested in our services? Set up an appointment today and let us help your business grow!
      </Typography>
      {/* You can add a form here for users to fill in their contact details */}
    </Container>
  );
};

export default ContactUs;
