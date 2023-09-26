import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MapComponent from './MapComponent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { defaultLocation, teamMembers, waypoints, zoom } from './Util';

const About = () => {
  return (
    <div className="about-container">
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      {/* Cards section */}
      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="subtitle1">{member.role}</Typography>
                <Typography variant="body2">{member.description}</Typography>
                <Avatar alt={member.name} src={member.imageSrc} />
                <div>
                  {member.socialLinks.linkedin && (
                    <IconButton
                      component={Link}
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin"></i>
                    </IconButton>
                  )}
                  {member.socialLinks.twitter && (
                    <IconButton
                      component={Link}
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-twitter"></i>
                    </IconButton>
                  )}
                  {/* Add more social media icons and links as needed */}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

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
