import React, { useState } from "react";
import { Container, TextField, Button, Typography, List, ListItem, ListItemText } from "@mui/material";

const AdminDashboard = () => {
  const [service, setService] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const handleAddService = () => {
    if (service.trim()) {
      setServices([...services, service]);
      setService("");
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" color="primary" textAlign="center" gutterBottom>
        Admin Dashboard
      </Typography>
      <TextField
        label="Add New Service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddService} sx={{ mb: 2 }}>
        Add Service
      </Button>
      <List>
        {services.map((s, index) => (
          <ListItem key={index}>
            <ListItemText primary={s} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminDashboard;
