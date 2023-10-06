import React from 'react';
import { Avatar, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for a more Instagram-like feel
const StyledUserCard = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  maxWidth: 300,
  margin: 'auto',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  marginBottom: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textAlign: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const UserCard = ({ username, avatar, onLogout, onUpdateProfile }) => {
  return (
    <StyledUserCard>
      <StyledAvatar src={avatar} alt={username} />
      <StyledTypography variant="h6">You are logged in as {username}</StyledTypography>
      <Box>
        <StyledButton onClick={onLogout} variant="outlined" fullWidth>
          Logout
        </StyledButton>
        <StyledButton onClick={onUpdateProfile} variant="outlined" fullWidth>
          Update Profile
        </StyledButton>
      </Box>
    </StyledUserCard>
  );
};

export default UserCard;
