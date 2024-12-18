import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';

const services = [
  { title: 'Website Design', description: 'Responsive and modern websites.' },
  { title: 'SEO Optimization', description: 'Rank higher on search engines.' },
  { title: 'Maintenance', description: 'Ongoing updates and support.' },
];

const ServicesPage: React.FC = () => (
  <Container>
    <Typography variant="h3" gutterBottom align="center">Our Services</Typography>
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5">{service.title}</Typography>
            <Typography>{service.description}</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default ServicesPage;
