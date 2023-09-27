import React from 'react';
import { Grid, Container } from '@mui/material';
import NoticeUploader from '../SubPackages/NoticeUploader';
import HomeUploader from '../SubPackages/HomeUploader';
import AboutTeamUploader from '../SubPackages/AboutTeamUploader';


const MasterUploader = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <NoticeUploader />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeUploader />
        </Grid>
        <Grid item xs={12} md={6}>
          <AboutTeamUploader />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MasterUploader;
