import React, { useEffect, useState } from "react";
import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ClientDashboard = () => {
  const [updates, setUpdates] = useState<string[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      const querySnapshot = await getDocs(collection(db, "projectUpdates"));
      const data = querySnapshot.docs.map((doc) => doc.data().update);
      setUpdates(data);
    };

    fetchUpdates();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Project Updates
      </Typography>
      <List>
        {updates.length > 0 ? (
          updates.map((update, index) => (
            <ListItem key={index}>
              <ListItemText primary={update} />
            </ListItem>
          ))
        ) : (
          <Typography>No updates available.</Typography>
        )}
      </List>
    </Container>
  );
};

export default ClientDashboard;
