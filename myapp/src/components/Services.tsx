import React from "react";
import { Container, Card, CardContent, Typography, Grid } from "@mui/material";

const services = [
  { title: "Website Design", description: "Custom website creation tailored to your needs." },
  { title: "SEO Optimization", description: "Improve search rankings and online visibility." },
];

const Services = () => (
  <Container>
    <Typography variant="h3" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((service) => (
        <Grid item xs={12} md={6} key={service.title}>
          <Card>
            <CardContent>
              <Typography variant="h5">{service.title}</Typography>
              <Typography variant="body2">{service.description}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
