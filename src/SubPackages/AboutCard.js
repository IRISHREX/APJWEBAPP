// Import necessary modules from Material-UI
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

// Import icons for social media
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const AboutCard = ({ member }) => {
  const cardStyles = {
    maxWidth: '300px', // Adjust the maximum width as needed
    margin: 'auto', // Center the card on the page
    transition: 'transform 0.3s ease-in-out', // Add a smooth transition effect
    '&:hover': {
      transform: 'scale(1.05)', // Scale up the card on hover
    },
  };

  const avatarStyles = {
    width: '100px',
    height: '100px',
    margin: 'auto', // Center the avatar within the card
  };

  const descriptionStyles = {
    maxHeight: '100px',
    overflowY: 'auto',
    marginTop: '10px', // Add some top margin to the description
  };

  return (
    <Card style={cardStyles}>
      <CardContent>
        <Avatar alt={member.name} src={member.imageSrc} style={avatarStyles} />
        <Typography variant="h6" align="center" gutterBottom>
          {member.name}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {member.role}
        </Typography>
        <Typography variant="body2" style={descriptionStyles}>
          {member.description}
        </Typography>

        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          {member.socialLinks.linkedin && (
            <IconButton
              component={Link}
              href={member.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          )}
          {member.socialLinks.twitter && (
            <IconButton
              component={Link}
              href={member.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
          )}
          {/* Add more social media icons and links as needed */}
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
