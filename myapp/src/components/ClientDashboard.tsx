import React from "react";
import { Container, List, ListItem, ListItemText, Typography } from "@mui/material";

const updates = ["Project started", "Design phase completed", "Website deployment in progress"];

const ClientDashboard = () => (
  <Container sx={{ py: 6 }}>
    <Typography variant="h3" color="primary" textAlign="center" gutterBottom>
      Client Dashboard
    </Typography>
    <List>
      {updates.map((update, index) => (
        <ListItem key={index}>
          <ListItemText primary={update} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default ClientDashboard;
