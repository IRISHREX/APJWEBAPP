import React, { useState } from 'react';
import {
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn,  Mail } from '@mui/icons-material';

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
      await simulateSubmit(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const simulateSubmit = (formData) => {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
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
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Our Address
      </Typography>
      <Typography>Registered Office - Uttar Dariapur, Kaliachak, Malda, West Bengal, 732201</Typography>
      <Typography>City Office - H-78/17, Batla House, Jamia Nagar, New Delhi, 110025</Typography>

      <Typography variant="h5" gutterBottom>
        Phone Number
      </Typography>
      <Typography>+1 (123) 456-7890</Typography>

      <Typography variant="h5" gutterBottom>
        Social Media
      </Typography>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <IconButton color="primary" component="a" href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" component="a" href="https://twitter.com/" target="_blank">
            <Twitter />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" component="a" href="https://www.instagram.com/" target="_blank">
            <Instagram />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" component="a" href="https://www.linkedin.com/" target="_blank">
            <LinkedIn />
          </IconButton>
        </Grid>
        {/* Add more social media icons as needed */}
      </Grid>
  
      <IconButton color="primary" component="a" href="apjec.education@gmail.com">
      <Mail/>
      </IconButton>
      <Typography variant="h5" gutterBottom>
        Email :- apjec.education@gmail.com
      </Typography>
    </div>
  );
};

export default Contact;
