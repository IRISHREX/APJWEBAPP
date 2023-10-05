// LoginPage.js
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Avatar,
  CssBaseline,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Alert,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignInForm from '../SubPackages/SignInForm';
import SignUpForm from '../SubPackages/SignUpForm';
import signInUser from '../ApiHandeller/SignInService'; // Update the path accordingly
import signUpUser from '../ApiHandeller/SignUpService'; // Update the path accordingly

const LoginPage = () => {
  const [signInFormData, setSignInFormData] = useState({
    username: '',
    password: '',
    userType: '',
  });

  const [signUpFormData, setSignUpFormData] = useState({
    username: '',
    password: '',
    userType: '',
    socialLinks: 'https://www.linkedin.com/in/sohel-islam-7491341a3/', 
    
  });

  const [showSignUpDialog, setShowSignUpDialog] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const handleFileChange = (file) => {
    setSignUpFormData({
      ...signUpFormData,
      avatar: file,
    });
  };
  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInFormData({
      ...signInFormData,
      [name]: value,
    });
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormData({
      ...signUpFormData,
      [name]: value,
    });
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await signInUser(signInFormData);
      console.log('Sign-in successful');
      localStorage.setItem('bearerToken', token);
      showSnackbar('Sign-in successful', 'success');
    } catch (error) {
      console.error(error.message);
      showSnackbar('Error during sign-in', 'error');
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(signUpFormData);
      console.log('Sign-up successful:', response);
      showSnackbar('Sign-up successful', 'success');
    } catch (error) {
      console.error(error.message);
      showSnackbar('Error during sign-up', 'error');
    }
  };

  const toggleSignUpDialog = () => {
    setShowSignUpDialog(!showSignUpDialog);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <SignInForm formData={signInFormData} handleChange={handleSignInChange} handleSubmit={handleSignInSubmit} />

        <Button onClick={toggleSignUpDialog} fullWidth sx={{ mt: 2 }}>
          Don't have an account? Sign Up
        </Button>

        <Dialog open={showSignUpDialog} onClose={toggleSignUpDialog}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <SignUpForm formData={signUpFormData} handleChange={handleSignUpChange} handleSubmit={handleSignUpSubmit} handleFileChange={handleFileChange}  />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleSignUpDialog}>Close</Button>
          </DialogActions>
        </Dialog>

        <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Paper>
    </Container>
  );
};

export default LoginPage;
