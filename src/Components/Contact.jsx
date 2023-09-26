import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Paper,
  TextField,
  Button,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // You can send the formData to your server or email service here
      // For demonstration purposes, we'll just simulate a delay
      await simulateSubmit(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  // Simulate a delayed submission (replace with your actual submission logic)
  const simulateSubmit = (formData) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      {isSubmitted ? (
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h6" gutterBottom>
            Thank you for contacting us!
          </Typography>
          <Typography>
            We have received your message and will get back to you soon.
          </Typography>
        </Paper>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      )}
      <ContactInfo />
    </Container>
  );
};

const ContactInfo = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Our Address
      </Typography>
      <Typography>123 Main Street, City, Country</Typography>

      <Typography variant="h5" gutterBottom>
        Phone Number
      </Typography>
      <Typography>+1 (123) 456-7890</Typography>

      <Typography variant="h5" gutterBottom>
        Social Media
      </Typography>
      <Typography>
        <a href="https://www.facebook.com/">Facebook</a>
        <br />
        <a href="https://twitter.com/">Twitter</a>
        {/* Add more social media links */}
      </Typography>

      <Typography variant="h5" gutterBottom>
        Email
      </Typography>
      <Typography>
        <a href="mailto:info@example.com">info@example.com</a>
      </Typography>
    </div>
  );
};

export default Contact;
