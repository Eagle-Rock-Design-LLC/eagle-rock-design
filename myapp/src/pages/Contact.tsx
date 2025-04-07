import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phonenumber || !message) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    // Optionally send data to a backend API here
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      {submitted ? (
        <Alert severity="success">Thank you for your message! We'll get back to you soon.</Alert>
      ) : (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth required />
          <TextField label="Email" variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth required />
          <TextField label="Phone Number" variant="outlined" type="tel" value={phonenumber} onChange={(e) => setPhone(e.target.value)} fullWidth required />
          <TextField label="Message" variant="outlined" multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} fullWidth required />
          {error && <Alert severity="error">{error}</Alert>}
          <Button type="submit" variant="contained">Submit</Button>
        </Box>
      )}
    </Container>
  );
};

export default Contact;
