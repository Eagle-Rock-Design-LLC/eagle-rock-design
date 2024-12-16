import React from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const projects = [
  { title: "Project A", image: "/images/projectA.jpg" },
  { title: "Project B", image: "/images/projectB.jpg" },
];

const Portfolio = () => (
  <Container>
    <Typography variant="h3" gutterBottom>
      Portfolio
    </Typography>
    <Grid container spacing={4}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} key={project.title}>
          <Card>
            <CardMedia component="img" height="140" image={project.image} alt={project.title} />
            <CardContent>
              <Typography variant="h5">{project.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Portfolio;
