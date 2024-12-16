import React, { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";

const AdminDashboard = () => {
  const [newService, setNewService] = useState("");
  const [services, setServices] = useState<string[]>([]);

  const fetchServices = async () => {
    const querySnapshot = await getDocs(collection(db, "services"));
    const data = querySnapshot.docs.map((doc) => doc.data().name);
    setServices(data);
  };

  const addService = async () => {
    await addDoc(collection(db, "services"), { name: newService });
    setNewService("");
    fetchServices();
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard - Manage Services
      </Typography>
      <TextField
        label="Add New Service"
        value={newService}
        onChange={(e) => setNewService(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={addService}>
        Add Service
      </Button>

      <Typography variant="h6" marginTop={2}>
        Existing Services:
      </Typography>
      <List>
        {services.map((service, index) => (
          <ListItem key={index}>
            <ListItemText primary={service} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default AdminDashboard;
