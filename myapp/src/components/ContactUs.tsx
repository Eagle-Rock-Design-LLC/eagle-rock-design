import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" color="primary" textAlign="center" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" sx={{ maxWidth: 600, mx: "auto" }} onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          name="name"
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Your Email"
          name="email"
          fullWidth
          required
          margin="normal"
          onChange={handleChange}
        />
        <TextField
          label="Your Message"
          name="message"
          fullWidth
          multiline
          rows={4}
          required
          margin="normal"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default ContactUs;
