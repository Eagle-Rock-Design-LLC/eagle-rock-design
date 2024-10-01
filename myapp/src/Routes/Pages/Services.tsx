import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, CardActions, IconButton } from '@mui/material';
import { Web, Search, ShoppingCart, LocalOffer } from '@mui/icons-material'; // MUI Icons
import { useNavigate } from 'react-router-dom'; // React Router for navigation

// Example services data
const services = [
  {
    title: 'Website Development',
    description: 'Custom website creation tailored to your business needs. We help small businesses in Wyoming and beyond establish a strong online presence.',
    icon: <Web fontSize="large" />,
    image: 'path/to/website-development-image.jpg',
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine ranking and drive more traffic to your website with our expert SEO services.',
    icon: <Search fontSize="large" />,
    image: 'path/to/seo-optimization-image.jpg',
  },
  {
    title: 'Digital Marketing',
    description: 'Reach more customers and grow your business with our targeted digital marketing strategies.',
    icon: <LocalOffer fontSize="large" />,
    image: 'path/to/digital-marketing-image.jpg',
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleLearnMoreClick = () => {
    navigate('/contact'); // Redirect to the Contact Us page
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ mt: 4 }}>
        Our Services
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        At Eagle Rock Design LLC, we offer a variety of services to help small businesses thrive online.
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <IconButton aria-label={service.title}>
                  {service.icon}
                </IconButton>
                <Typography variant="h6" component="h2" sx={{ mt: 1 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                  {service.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={handleLearnMoreClick}>
                  Set Up an Appointment
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
