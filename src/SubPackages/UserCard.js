// import React, { useState, useEffect, useCallback } from "react";
// import { Avatar, Typography, Button, Box } from "@mui/material";
// import { styled } from "@mui/system";

// const StyledUserCard = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   padding: theme.spacing(2),
//   // backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
//   maxWidth: 300,
//   margin: "auto",
//   cursor: "pointer",
// }));

// const StyledAvatar = styled(Avatar)(({ theme }) => ({
//   width: theme.spacing(12),
//   height: theme.spacing(12),
//   marginBottom: theme.spacing(2),
// }));

// const StyledTypography = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(2),
//   textAlign: "center",
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   marginBottom: theme.spacing(1),
// }));

// const UserCard = ({ username, avatar, onLogout, onUpdateProfile }) => {
//   const handleLogout = useCallback(() => {
//     onLogout();
//   }, [onLogout]);

//   const [logoutTimer, setLogoutTimer] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       handleLogout();
//     }, 30 * 60 * 1000);

//     setLogoutTimer(timer);

//     return () => clearTimeout(timer);
//   }, [handleLogout]);

//   const handleUserActivity = useCallback(() => {
//     clearTimeout(logoutTimer);

//     const newTimer = setTimeout(() => {
//       handleLogout();
//     }, 30 * 60 * 1000);

//     setLogoutTimer(newTimer);
//   }, [handleLogout, logoutTimer]);

//   const handleBeforeUnload = useCallback(() => {
//     handleLogout();
//   }, [handleLogout]);

//   useEffect(() => {
//     window.addEventListener("beforeunload", handleBeforeUnload);

//     return () => {
//       window.removeEventListener("beforeunload", handleBeforeUnload);
//     };
//   }, [handleBeforeUnload]);

//   return (
//     <StyledUserCard onClick={handleUserActivity}>
//       <StyledAvatar src={avatar} alt={username} />
//       <StyledTypography variant="h6">
//         You are logged in as {username}
//       </StyledTypography>
//       <Box>
//         <StyledButton onClick={handleLogout} variant="outlined" fullWidth>
//           Logout
//         </StyledButton>
//         <StyledButton onClick={onUpdateProfile} variant="outlined" fullWidth>
//           Update Profile
//         </StyledButton>
//       </Box>
//     </StyledUserCard>
//   );
// };

// export default UserCard;
