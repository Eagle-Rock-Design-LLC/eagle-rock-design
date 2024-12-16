import React from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

const ContactUs = () => (
  <Container>
    <Typography variant="h3" gutterBottom>
      Contact Us
    </Typography>
    <form>
      <TextField fullWidth label="Name" margin="normal" required />
      <TextField fullWidth label="Email" margin="normal" required />
      <TextField fullWidth label="Message" margin="normal" required multiline rows={4} />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  </Container>
);

export default ContactUs;
