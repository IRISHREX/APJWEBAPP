import React, { useState } from 'react';
import { Typography, Grid } from '@mui/material';
import MapComponent from './MapComponent';
import AboutCard from '../SubPackages/AboutCard';
import teamMembersData from '../SubPackages/TeamMembarData';
import TeamSection from '../SubPackages/TeamSection';
import { defaultLocation, waypoints, zoom } from './Util';

const About = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const getTeamMembers = (team) => teamMembersData.filter(member => member.team === team);

  const toggleTeamDrawer = (team) => {
    setSelectedTeam(selectedTeam === team ? null : team);
  };

  const gradientColors = [
    'linear-gradient(to bottom, #4286f4, #0063b3)',
    'linear-gradient(to bottom, #ff8a00, #ff0033)',
    'linear-gradient(to bottom, #36a985, #00754f)',
  ];

  const renderTeamMembers = (team, color) => (
    <TeamSection team={team} members={getTeamMembers(team)} color={color} toggleTeamDrawer={toggleTeamDrawer} />
  );

  return (
    <div className="about-container" style={{ padding: '16px' }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      {renderTeamMembers('members', gradientColors[0])}
      <Grid container spacing={2} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden', maxHeight: selectedTeam === 'members' ? '1000px' : '0' }}>
        {selectedTeam === 'members' &&
          getTeamMembers('members').map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AboutCard member={member} />
            </Grid>
          ))}
      </Grid>

      {renderTeamMembers('mocTeam', gradientColors[1])}
      <Grid container spacing={2} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden', maxHeight: selectedTeam === 'mocTeam' ? '1000px' : '0' }}>
        {selectedTeam === 'mocTeam' &&
          getTeamMembers('mocTeam').map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AboutCard member={member} />
            </Grid>
          ))}
      </Grid>

      {renderTeamMembers('cordTeam', gradientColors[2])}
      <Grid container spacing={2} style={{ transition: 'max-height 0.5s ease-in-out', overflow: 'hidden', maxHeight: selectedTeam === 'cordTeam' ? '1000px' : '0' }}>
        {selectedTeam === 'cordTeam' &&
          getTeamMembers('cordTeam').map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AboutCard member={member} />
            </Grid>
          ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Our Location
      </Typography>

      <MapComponent center={defaultLocation} zoom={zoom} waypoints={waypoints} />
    </div>
  );
};

export default About;
