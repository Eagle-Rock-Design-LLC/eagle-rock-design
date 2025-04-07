import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Avatar, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Jane Smith',
    feedback: 'Eagle Rock Design took our website from zero to hero. We now rank on the first page of Google and our client inquiries have doubled!',
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Local Bakery Co.',
    feedback: 'The team helped us rebrand with a clean and modern website. We get compliments on it every week. Highly recommended!',
    avatar: 'https://i.pravatar.cc/100?img=2'
  },
  {
    name: 'John Doe, Contractor',
    feedback: 'Quick turnaround, responsive communication, and a beautiful end result. Eagle Rock Design knows their stuff.',
    avatar: 'https://i.pravatar.cc/100?img=3'
  }
];

const Testimonials = () => (
  <Container sx={{ mt: 8, mb: 6 }}>
    <Typography variant="h4" gutterBottom textAlign="center">
      What Our Clients Say
    </Typography>
    <Grid container spacing={4}>
      {testimonials.map((t, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" justifyContent="center" mb={2}>
                <Avatar src={t.avatar} alt={t.name} sx={{ width: 64, height: 64 }} />
              </Box>
              <Box display="flex" justifyContent="center" color="primary.main" mb={1}>
                <FormatQuoteIcon fontSize="large" />
              </Box>
              <Typography variant="body1" gutterBottom textAlign="center">
                "{t.feedback}"
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" textAlign="center">
                — {t.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Testimonials;
