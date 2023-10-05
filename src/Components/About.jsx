import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import MapComponent from './MapComponent';
import AboutCard from '../SubPackages/AboutCard';
import TeamSection from '../SubPackages/TeamSection';
import { defaultLocation, waypoints, zoom } from './Util';
import fetchTeamMembersData from '../ApiHandeller/FetchTeamMembersData';

const About = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const membersData = await fetchTeamMembersData();
        setTeamMembers(membersData);
      } catch (error) {
        console.error('Error fetching team members data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const getTeamMembers = (team) => teamMembers.filter((member) => member.team === team);

  const toggleTeamDrawer = (team) => {
    setSelectedTeam(selectedTeam === team ? null : team);
  };

  const gradientColors = [
    'linear-gradient(to bottom, #4286f4, #0063b3)',
    'linear-gradient(to bottom, #ff8a00, #ff0033)',
    'linear-gradient(to bottom, #36a985, #00754f)',
  ];

  const renderTeamMembers = (team, color) => (
    <div className={`team-section ${selectedTeam === team ? 'active' : ''}`}>
      <TeamSection team={team} members={getTeamMembers(team)} color={color} toggleTeamDrawer={toggleTeamDrawer} />
      <Grid container spacing={2}>
        {selectedTeam === team &&
          getTeamMembers(team).map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AboutCard member={member} />
            </Grid>
          ))}
      </Grid>
    </div>
  );

  return (
    <div className="about-container">
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      {loading && <p>Loading team members...</p>}

      {!loading && renderTeamMembers('members', gradientColors[0])}
      {!loading && renderTeamMembers('mocTeam', gradientColors[1])}
      {!loading && renderTeamMembers('cordTeam', gradientColors[2])}

      <Typography variant="h4" gutterBottom>
        Our Location
      </Typography>

      <MapComponent center={defaultLocation} zoom={zoom} waypoints={waypoints} />
    </div>
  );
};

export default About;
