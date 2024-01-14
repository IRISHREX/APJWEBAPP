import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignInForm from "../SubPackages/SignInForm";
import SignUpForm from "../SubPackages/SignUpForm";
import UserCard from "../SubPackages/UserCard";
import signInUser from "../ApiHandeller/SignInService";
import signUpUser from "../ApiHandeller/SignUpService";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("bearerToken");
    // const userType = localStorage.getItem('userType');

    if (storedToken) {
      const user = parseToken(storedToken);
      if (user) {
        setLoggedInUser(user);
      }
    }
  }, []);

  const [signInFormData, setSignInFormData] = useState({
    username: "",
    password: "",
    userType: "",
  });

  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    userType: "",
    socialLinks: "https://www.linkedin.com/in/sohel-islam-7491341a3/",
  });

  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

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

  const parseToken = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const { userType, accessToken } = await signInUser(signInFormData);
      setLoggedInUser({ userType });
      localStorage.setItem("userType", userType);
      localStorage.setItem("bearerToken", accessToken);
      toast.success("Sign-in successful");
    } catch (error) {
      console.error(error.message);
      toast.error("Error during sign-in");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(signUpFormData);
      console.log("Sign-up successful:", response);
      toast.success("Sign-up successful");
    } catch (error) {
      console.error(error.message);
      toast.error("Error during sign-up");
    }
  };

  const toggleSignUpDialog = () => {
    setShowSignUpDialog(!showSignUpDialog);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("bearerToken");
    localStorage.removeItem("userType");
  };

  const handleUpdateProfile = () => {
    console.log("Update profile clicked");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper
        elevation={3}
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {loggedInUser ? (
          <UserCard
            username={loggedInUser.username}
            avatar={loggedInUser.avatar}
            onLogout={handleLogout}
            onUpdateProfile={handleUpdateProfile}
          />
        ) : (
          <>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <SignInForm
              formData={signInFormData}
              handleChange={handleSignInChange}
              handleSubmit={handleSignInSubmit}
            />
            <Button onClick={toggleSignUpDialog} fullWidth sx={{ mt: 2 }}>
              Don't have an account? Sign Up
            </Button>
          </>
        )}
        <Dialog open={showSignUpDialog} onClose={toggleSignUpDialog}>
          <DialogTitle>Sign Up</DialogTitle>
          <DialogContent>
            <SignUpForm
              formData={signUpFormData}
              handleChange={handleSignUpChange}
              handleSubmit={handleSignUpSubmit}
              handleFileChange={handleFileChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleSignUpDialog}>Close</Button>
          </DialogActions>
        </Dialog>
        <ToastContainer />
      </Paper>
    </Container>
  );
};

export default LoginPage;
