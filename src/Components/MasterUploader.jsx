import React from "react";
import { Grid, Container, Card, CardContent, Typography } from "@mui/material";
import NoticeUploader from "../SubPackages/NoticeUploader";
import HomeUploader from "../SubPackages/HomeUploader";
import AboutTeamUploader from "../SubPackages/AboutTeamUploader";

// Define custom styles for the cards
const cardStyles = {
  backgroundColor: "black", // Black background
  color: "limegreen", // Green text color
  borderColor: "limegreen", // Green border color
};

const MasterUploader = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" style={cardStyles}>
            <CardContent>
              <Typography variant="h6">Notice Uploader</Typography>
              <NoticeUploader />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" style={cardStyles}>
            <CardContent>
              <Typography variant="h6">Home Uploader</Typography>
              <HomeUploader />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card variant="outlined" style={cardStyles}>
            <CardContent>
              <Typography variant="h6">About Team Uploader</Typography>
              <AboutTeamUploader />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MasterUploader;
