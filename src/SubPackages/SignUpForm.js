import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";
import ProfilePIc from "./ProfilePic/ProfilePic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUpForm.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignUpForm = ({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  loading,
}) => {
  const submitFunction = async () => {
    try {
      // Call your actual submit function here
      await handleSubmit();
    } catch (error) {
      console.error(error.message);
      toast.error("Error signing up. Please try again.");
    }
  };

  // show hide pass
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // word count for description
  const [wordCount, setWordCount] = useState(0);
  
  const handleDescriptionChange = (e) => {
    handleChange(e);
    const words = e.target.value.split(/\s+/).filter((word) => word.length > 0);
    setWordCount(words.length);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation for name
    if (!formData.username.trim() || /\d/.test(formData.username)) {
      toast.error(
        "Name field shouldn't be empty and must not contain any numbers."
      );
      return;
    }

    // Validation for email
    if (
      !formData.email.trim() ||
      !formData.email.includes("@") ||
      !formData.email.endsWith("@gmail.com")
    ) {
      toast.error(
        "Email field must not be empty and should contain a valid Gmail address."
      );
      return;
    }

    // Validation for password
    if (
      !formData.password.trim() ||
      formData.password.length < 4 ||
      formData.password.length > 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/[a-z]/.test(formData.password) ||
      !/\d/.test(formData.password) ||
      !/[^a-zA-Z0-9]/.test(formData.password)
    ) {
      toast.error(
        "Password field must not be empty and should consist of 4-8 characters, including at least one uppercase letter, one lowercase letter, one special character, and one number."
      );
      return;
    }

    // Validation for description
    const words = formData.description.split(/\s+/).filter((word) => word.length > 0);
    if (words.length < 25) {
      toast.error("Description field should contain more than 25 words.");
      return;
    }

    submitFunction();
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      encType="multipart/form-data"
      style={{ width: "100%", marginTop: 2 }}
    >
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
            label="email"
            variant="outlined"
            fullWidth
            type="email"
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
        type={showPassword ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={togglePasswordVisibility}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Grid>

        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="userType">User Type</InputLabel>
            <Select
              label="User Type"
              name="userType"
              id="userType"
              value={formData.userType}
              onChange={handleChange}
              required
            >
              <MenuItem value="admin" disabled>
                Admin
              </MenuItem>
              <MenuItem value="employee">Employee</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {/* Add the Avatar component or file input for avatar upload */}
        <Grid className="profile-pic" item xs={12}>
          <ProfilePIc />
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="team">Team</InputLabel>
            <Select
              label="Team"
              name="team"
              id="team"
              value={formData.team}
              onChange={handleChange}
              required
            >
              <MenuItem value="members">Members</MenuItem>
              <MenuItem value="cordTeam">CordTeam</MenuItem>
              <MenuItem value="mockTeam">mockTeam</MenuItem>
              <MenuItem value="developer" disabled>
                Devs
              </MenuItem>
              <MenuItem value="students" disabled>
                students
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        
        <Grid item xs={12}>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          name="description"
          value={formData.description}
          onChange={handleDescriptionChange}
          required
        />
        <Typography variant="body2" color={wordCount > 25 ? "textPrimary" : "error"}>
          Word Count: {wordCount}
        </Typography>
      </Grid>

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
              <MenuItem value="faculty">Faculty</MenuItem>
              <MenuItem value="student">Student</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SignUpForm;
