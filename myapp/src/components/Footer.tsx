// components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

type FooterProps = {
  darkMode: boolean;
};

const Footer: React.FC<FooterProps> = ({ darkMode }) => (
  <Box
    component="footer"
    sx={{
      p: 2,
      mt: 4,
      backgroundColor: darkMode ? 'background.paper' : 'primary.main',
      color: darkMode ? 'text.primary' : 'white',
      textAlign: 'center'
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Eagle Rock Design LLC. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
