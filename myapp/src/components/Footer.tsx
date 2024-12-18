import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => (
  <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'white', p: 2, mt: 4, textAlign: 'center' }}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Eagle Rock Design LLC. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
