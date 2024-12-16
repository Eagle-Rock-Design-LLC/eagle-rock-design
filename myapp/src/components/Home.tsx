import React from "react";
import { Container, Typography, Button } from "@mui/material";

const Home = () => (
  <Container>
    <Typography variant="h2" gutterBottom>
      Welcome to Eagle Rock Design LLC
    </Typography>
    <Typography variant="body1" paragraph>
      We specialize in building beautiful, responsive websites for small businesses.
    </Typography>
    <Button variant="contained" color="primary">
      Contact Us
    </Button>
  </Container>
);

export default Home;
