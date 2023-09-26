import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  CssBaseline,
  Paper,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    role: '',
    email: '',
    password: '',
    profilePic: null,
  });

  const [isLogin, setIsLogin] = useState(true); // State variable to toggle between login and signup forms

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      profilePic: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? 'Sign In' : 'Sign Up'}
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 2 }}>
          <Grid container spacing={2}>
            {!isLogin && (
              <Grid item xs={12}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="role">Role</InputLabel>
                  <Select
                    label="Role"
                    name="role"
                    id="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="employee">Employee</MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            )}
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Grid>
            {!isLogin && (
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  id="profilePic"
                  type="file"
                  onChange={handleFileChange}
                />
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>
        <Button
          onClick={toggleForm}
          fullWidth
          sx={{ mt: 2 }}
        >
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Sign In'}
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;
