import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const projects = [
  { title: "Project One", image: "https://via.placeholder.com/300x200" },
  { title: "Project Two", image: "https://via.placeholder.com/300x200" },
  { title: "Project Three", image: "https://via.placeholder.com/300x200" },
];

const Portfolio = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h3" color="primary" textAlign="center" gutterBottom>
      Our Portfolio
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia component="img" height="200" image={project.image} alt={project.title} />
            <CardContent>
              <Typography variant="h5" textAlign="center">
                {project.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Portfolio;
