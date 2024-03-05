import React, { useEffect, useState } from "react";
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
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SignInForm from "../SubPackages/SignInForm";
import SignUpForm from "../SubPackages/SignUpForm";
import signInUser from "../ApiHandeller/SignInService";
import signUpUser from "../ApiHandeller/SignUpService";
import { Logout, Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchTeamMembersDataByEmail } from "../ApiHandeller/FetchTeamMembersData";
import { descriptionStyles } from "./Util";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const [showMore, setshowMore] = useState(false);

  useEffect(() => {
    // const userType = localStorage.getItem('userType');
    const res = localStorage.getItem("userData");
    res ? setLoggedInUser(JSON.parse(res)) : setLoggedInUser(null);

    // console.log('userData:-',userData)
  }, []);
  console.log("loggedInUser->", loggedInUser);

  const [signInFormData, setSignInFormData] = useState({
    username: "",
    password: "",
    userType: "",
    email:"",
  });

  const [signUpFormData, setSignUpFormData] = useState({
    username: "",
    password: "",
    userType: "",
    socialLinks: "https://www.linkedin.com/in/sohel-islam-7491341a3/",
  });

  const [showSignUpDialog, setShowSignUpDialog] = useState(false);

  useEffect(() => {}, []);

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
      const { userType, accessToken, userEmail, user } = await signInUser(
        signInFormData
      );
      console.log(userType);
      console.log("userEmail:-", userEmail);
      console.log("user:-", user);

      setLoggedInUser({ userType });
      localStorage.setItem("userType", userType);
      localStorage.setItem("bearerToken", accessToken);
      // localStorage.setItem( "email" , userEmail );
      toast.success("Sign-in successful");
      // const email=localStorage.getItem("email");
      let res=await fetchTeamMembersDataByEmail(userEmail)
      
      setLoggedInUser(res);
      //must Stringyfy
      localStorage.setItem("userData", JSON.stringify(res));


    } catch (error) {
      console.error("error",error.message);
      toast.error("Invalid credentials");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUpUser(signUpFormData);
      console.log("Sign-up successful:", response);
      toast.success(`Sign-up successful -> ${response[0]?.email} `);
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
    localStorage.removeItem("userData");


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
          <Card className="BackGroundThameSphear">
            <CardContent style={{ textAlign: "center", marginBottom: 20 }}>
              {loggedInUser?.avatar ? (
                <Avatar
                  alt="Remy Sharp"
                  src={loggedInUser?.avatar}
                  style={{ marginLeft: "35%", height: "auto", width: "25%" }}
                />
              ) : (
                <LinearProgress />
              )}
              <Typography variant="h5" gutterBottom className="textPurple">
                {loggedInUser?.username}
              </Typography>
              {showMore === false ? (
                <Visibility onClick={() => setshowMore(true)} />
              ) : (
                ""
              )}
            </CardContent>

            {showMore ? (
              <>
                <VisibilityOff
                  onClick={() => setshowMore(false)}
                  style={{ marginLeft: "47%" }}
                />
                <CardContent>
                  {" "}
                  <Typography className="textWhite">
                    <strong>EMAIL:-</strong>
                    {loggedInUser?.email}
                  </Typography>
                </CardContent>
                <strong> DESCRIPTION</strong>
                <CardContent style={descriptionStyles} className="textWhite">
                  {" "}
                  <Typography>{loggedInUser?.description}</Typography>
                </CardContent>
                <CardContent>
                  {" "}
                  <Typography className="textWhite">
                    <strong>ROLE:-</strong>
                    {loggedInUser?.role}
                  </Typography>
                </CardContent>
                <CardContent>
                  {" "}
                  <Typography className="textWhite">
                    <strong>TEAM:-</strong>
                    {loggedInUser?.team}
                  </Typography>
                </CardContent>
              </>
            ) : (
              ""
            )}

            <CardContent style={{ textAlign: "center" }}>
              <Logout onClick={handleLogout} />
              <Typography>LOG-OUT</Typography>
            </CardContent>

            {/* onLogout={handleLogout}
            onUpdateProfile={handleUpdateProfile} */}
          </Card>
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
