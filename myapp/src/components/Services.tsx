import React from "react";
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const services = [
  { title: "Website Design", description: "Beautiful and responsive websites for your business." },
  { title: "SEO Services", description: "Boost your website's visibility with our SEO strategies." },
  { title: "E-Commerce", description: "Start selling online with our secure and scalable stores." },
];

const Services = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h3" color="primary" textAlign="center" gutterBottom>
      Our Services
    </Typography>
    <Grid container spacing={4}>
      {services.map((service, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {service.title}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                {service.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Services;
