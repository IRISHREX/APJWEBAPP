import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MapComponent from './MapComponent';
import { defaultLocation, waypoints, zoom } from './Util';
import { Avatar, Paper } from '@mui/material';
import AboutCard from '../SubPackages/AboutCard';
import teamMembersData from '../SubPackages/TeamMembarData';

const About = () => {
  const [isMainTeamDrawerOpen, setIsMainTeamDrawerOpen] = useState(false);
  const [isSubTeamDrawerOpen, setIsSubTeamDrawerOpen] = useState(false);
  const [isCoordinatorDrawerOpen, setIsCoordinatorDrawerOpen] = useState(false);

  const toggleMainTeamDrawer = () => {
    setIsMainTeamDrawerOpen(!isMainTeamDrawerOpen);
  };

  const toggleSubTeamDrawer = () => {
    setIsSubTeamDrawerOpen(!isSubTeamDrawerOpen);
  };

  const toggleCoordinatorDrawer = () => {
    setIsCoordinatorDrawerOpen(!isCoordinatorDrawerOpen);
  };

  const avatarStyles = {
    width: '60px',
    height: '60px',
    marginRight: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Apply shadow to avatars
    borderRadius: '50%', // Make avatars circular
  };

  const sectionStyles = {
    transition: 'max-height 0.5s ease-in-out',
    overflow: 'hidden',
    maxHeight: '0',
  };

  const gradientColors = [
    'linear-gradient(to bottom, #4286f4, #0063b3)',
    'linear-gradient(to bottom, #ff8a00, #ff0033)',
    'linear-gradient(to bottom, #36a985, #00754f)',
  ];

  return (
    <div className="about-container">
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      {/* Card with avatars for Main Team */}
      <Paper style={{ background: gradientColors[0] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {teamMembersData.slice(0, 3).map((member, index) => (
            <Avatar 
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[0] ,margin:'1rem'}}
              onClick={toggleMainTeamDrawer}
            />
          ))}
          <Typography variant="body2" onClick={toggleMainTeamDrawer} style={{ cursor: 'pointer', }} letterSpacing={5} marginLeft={40}>
            ABOUT MAIN TEAM
          </Typography>
        </div>
      </Paper>

      {/* Drawer with cards for Main Team */}
      <div style={{ ...sectionStyles, maxHeight: isMainTeamDrawerOpen ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {isMainTeamDrawerOpen &&
            teamMembersData.slice(0, 3).map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', background: gradientColors[0] }}>
                  <AboutCard member={member} />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>

      {/* Card with avatars for Sub Team */}
      <Paper style={{ background: gradientColors[1] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {teamMembersData.slice(3, 6).map((member, index) => (
            <Avatar
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[1],margin:'1rem'}}
              onClick={toggleSubTeamDrawer}
            />
          ))}
          <Typography variant="body2" onClick={toggleSubTeamDrawer} style={{ cursor: 'pointer' }}letterSpacing={5} marginLeft={40}>
            ABOUT SUB TEAM
          </Typography>
        </div>
      </Paper>

      {/* Drawer with cards for Sub Team */}
      <div style={{ ...sectionStyles, maxHeight: isSubTeamDrawerOpen ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {isSubTeamDrawerOpen &&
            teamMembersData.slice(3, 6).map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', background: gradientColors[1] }}>
                  <AboutCard member={member} />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>

      {/* Card with avatars for Coordinator */}
      <Paper style={{ background: gradientColors[2] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {teamMembersData.slice(6, 9).map((member, index) => (
            <Avatar
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[2] ,margin:'1rem'}}
              onClick={toggleCoordinatorDrawer}
            />
          ))}
          <Typography variant="body2" onClick={toggleCoordinatorDrawer} style={{ cursor: 'pointer' }}letterSpacing={5} marginLeft={40}>
            ABOUT COORDINATOR
          </Typography>
        </div>
      </Paper>

      {/* Drawer with cards for Coordinator */}
      <div style={{ ...sectionStyles, maxHeight: isCoordinatorDrawerOpen ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {isCoordinatorDrawerOpen &&
            teamMembersData.slice(6, 9).map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', background: gradientColors[2] }}>
                  <AboutCard member={member} />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>

      {/* Location map */}
      <Typography variant="h4" gutterBottom>
        Our Location
      </Typography>

      {/* Render your location map component here */}
      <MapComponent center={defaultLocation} zoom={zoom} waypoints={waypoints} />
    </div>
  );
};

export default About;
