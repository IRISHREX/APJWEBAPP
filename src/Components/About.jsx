import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MapComponent from './MapComponent';
import { defaultLocation, waypoints, zoom } from './Util';
import { Avatar, Paper } from '@mui/material';
import AboutCard from '../SubPackages/AboutCard';
import teamMembersData from '../SubPackages/TeamMembarData';

const About = () => {
  // Define functions to filter team members based on their teams
  const getMainTeamMembers = () => teamMembersData.filter(member => member.team === 'members');
  const getSubTeamMembers = () => teamMembersData.filter(member => member.team === 'mocTeam');
  const getCoordinatorMembers = () => teamMembersData.filter(member => member.team === 'cordTeam');

  // State to track which team section is open
  const [selectedTeam, setSelectedTeam] = useState(null);

  const toggleTeamDrawer = (team) => {
    setSelectedTeam(selectedTeam === team ? null : team);
  };

  const avatarStyles = {
    width: '8vw', // Responsive avatar size relative to viewport width
    height: '8vw', // Responsive avatar size relative to viewport width
    marginRight: '2vw', // Responsive margin relative to viewport width
    boxShadow: '0px 0px 2vw rgba(0, 0, 0, 0.2)', // Responsive shadow relative to viewport width
    borderRadius: '50%',
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

      {/* Render team members based on selected team */}
      <Paper style={{ background: gradientColors[0] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {getMainTeamMembers().map((member, index) => (
            <Avatar
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[0], margin: '1rem' }}
              onClick={() => toggleTeamDrawer('members')}
            />
          ))}
          <Typography
            variant="body2"
            onClick={() => toggleTeamDrawer('members')}
            style={{ cursor: 'pointer' }}
            letterSpacing={5}
            marginLeft={20}          
             >
            ABOUT MAIN TEAM
          </Typography>
        </div>
      </Paper>

      {/* Render team members for the selected team */}
      <div style={{ ...sectionStyles, maxHeight: selectedTeam === 'members' ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {selectedTeam === 'members' &&
            getMainTeamMembers().map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', background: gradientColors[0] }}>
                  <AboutCard member={member} />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>

      {/* Render team members for Sub Team */}
      <Paper style={{ background: gradientColors[1] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {getSubTeamMembers().map((member, index) => (
            <Avatar
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[1], margin: '1rem' }}
              onClick={() => toggleTeamDrawer('mocTeam')}
            />
          ))}
          <Typography
            variant="body2"
            onClick={() => toggleTeamDrawer('mocTeam')}
            style={{ cursor: 'pointer' }}
            letterSpacing={5}
            marginLeft={40}
          >
            ABOUT MOC TEAM
          </Typography>
        </div>
      </Paper>

      {/* Render team members for the selected team */}
      <div style={{ ...sectionStyles, maxHeight: selectedTeam === 'mocTeam' ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {selectedTeam === 'mocTeam' &&
            getSubTeamMembers().map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper style={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', background: gradientColors[1] }}>
                  <AboutCard member={member} />
                </Paper>
              </Grid>
            ))}
        </Grid>
      </div>

      {/* Render team members for Coordinator */}
      <Paper style={{ background: gradientColors[2] }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
          {getCoordinatorMembers().map((member, index) => (
            <Avatar
              key={index}
              alt={member.name}
              src={member.imageSrc}
              style={{ ...avatarStyles, background: gradientColors[2], margin: '1rem' }}
              onClick={() => toggleTeamDrawer('cordTeam')}
            />
          ))}
          <Typography
            variant="body2"
            onClick={() => toggleTeamDrawer('cordTeam')}
            style={{ cursor: 'pointer' }}
            letterSpacing={5}
            marginLeft={"50%"}
            // textAlign={'right'}
          >
            ABOUT COORDINATOR
          </Typography>
        </div>
      </Paper>

      {/* Render team members for the selected team */}
      <div style={{ ...sectionStyles, maxHeight: selectedTeam === 'cordTeam' ? '1000px' : '0' }}>
        <Grid container spacing={2}>
          {selectedTeam === 'cordTeam' &&
            getCoordinatorMembers().map((member, index) => (
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
