import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";

const Home = () => (
  <Box sx={{ py: 6, backgroundColor: "#f5f5f5" }}>
    <Container>
      {/* Hero Section */}
      <Box textAlign="center" mb={4}>
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to Eagle Rock Design
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          We create professional and responsive websites tailored to small businesses.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
          Get Started
        </Button>
      </Box>

      {/* Feature Section */}
      <Grid container spacing={4}>
        {["Responsive Design", "SEO Optimization", "Custom Development"].map((feature) => (
          <Grid item xs={12} md={4} key={feature}>
            <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5" gutterBottom>
                {feature}
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales.
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Home;
