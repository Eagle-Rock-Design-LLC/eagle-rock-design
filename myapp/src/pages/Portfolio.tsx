import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const projects = [
  { title: 'Phillips Law LLC', image: '/phillipslaw.png', description: 'A responsive website for a lawyer in Wyoming.' },
  { title: 'E-commerce Storefront', image: 'https://via.placeholder.com/300x200', description: 'Online shop setup with product catalog and payment gateway.' },
  { title: 'Non-Profit Org Site', image: 'https://via.placeholder.com/300x200', description: 'Engaging website for donations and community outreach.' }
];

const Portfolio = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" gutterBottom>
      Portfolio
    </Typography>
    <Grid container spacing={3}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
            />
            <CardContent>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Portfolio;