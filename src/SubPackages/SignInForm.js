// SignInForm.js
import React from 'react';
import { Button, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const SignInForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 2 }}>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          name="username"
          value={formData.username}
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
      <InputLabel htmlFor="userType">User Type</InputLabel>
          <Select
            label="User Type"
            name="userType"
            id="userType"
            value={formData.userType}
            onChange={handleChange}
            required
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="employee">Employee</MenuItem>
            <MenuItem value="student">Student</MenuItem>
          </Select>
    </Grid>
    <Button
      type="submit"
      variant="contained"
      color="primary"
      fullWidth
      sx={{ mt: 3 }}
    >
      Sign In
    </Button>
  </form>
);

export default SignInForm;
