import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card elevation={3} sx={{ maxWidth: 345, margin: 'auto' }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href="/contact">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
