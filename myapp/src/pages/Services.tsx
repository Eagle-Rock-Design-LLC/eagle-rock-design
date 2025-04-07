import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const services = [
  { title: 'Website Design', description: 'Custom responsive websites tailored to your brand and goals.' },
  { title: 'SEO Optimization', description: 'Improve your search engine ranking with smart SEO strategies.' },
  { title: 'Social Media Marketing', description: 'Reach your audience effectively through strategic campaigns.' },
  { title: 'Branding & Graphics', description: 'Logo design, visual identity, and promotional materials.' },
  { title: 'Maintenance & Support', description: 'Ongoing site updates, backups, and tech support.' }
];

const Services = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={3}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6">{service.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;