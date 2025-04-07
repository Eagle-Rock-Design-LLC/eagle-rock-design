// pages/Blog.tsx
import React from 'react';
import { Container, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    slug: 'why-every-small-business-needs-a-website',
    title: 'Why Every Small Business Needs a Website',
    excerpt: 'A website builds credibility, improves customer reach, and drives growth—learn why your business can’t afford to go without one.',
    date: 'March 1, 2025'
  },
  {
    id: 2,
    slug: 'tips-for-boosting-your-local-seo-in-2025',
    title: 'Tips for Boosting Your Local SEO in 2025',
    excerpt: 'Want to rank higher on Google Maps and local searches? These tips will help you get noticed in your area.',
    date: 'March 15, 2025'
  }
];

const Blog = () => (
  <Container sx={{ mt: 4, mb: 6 }}>
    <Typography variant="h4" gutterBottom>
      Blog
    </Typography>
    <Grid container spacing={3}>
      {posts.map(post => (
        <Grid item xs={12} md={6} key={post.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>{post.title}</Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>{post.date}</Typography>
              <Typography variant="body1">{post.excerpt}</Typography>
              <Button
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{ mt: 2 }}
                variant="outlined"
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Blog;
