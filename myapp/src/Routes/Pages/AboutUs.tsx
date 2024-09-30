import React from 'react';
import { Container, Typography, Grid, Paper, Avatar } from '@mui/material';

// Sample team data
const team = [
  {
    name: 'Dylan Phillips',
    role: 'CEO',
    bio: 'Dylan is close to graduating with a Software Engineering degree from BYU Idaho. He has 2 years of experience in web developement and software developement.',
    imageUrl: 'https://example.com/john.jpg'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Jane leads our tech team and has a background in software engineering.',
    imageUrl: 'https://example.com/jane.jpg'
  },
  // Add more team members as needed
];

const AboutUs: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      {/* Page Heading */}
      <Typography variant="h2" align="center" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" align="center" paragraph>
        We are a passionate team dedicated to delivering the best service possible.
      </Typography>

      {/* Team Section */}
      <Grid container spacing={4} style={{ marginTop: '2rem' }}>
        {team.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper elevation={3} style={{ padding: '1rem', textAlign: 'center' }}>
              <Avatar
                src={member.imageUrl}
                alt={member.name}
                style={{ width: '100px', height: '100px', margin: '0 auto' }}
              />
              <Typography variant="h5" style={{ marginTop: '1rem' }}>
                {member.name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {member.role}
              </Typography>
              <Typography variant="body1" style={{ marginTop: '1rem' }}>
                {member.bio}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutUs;
