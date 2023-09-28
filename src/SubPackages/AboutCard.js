import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const AboutCard = ({ member }) => {
  const cardStyles = {
    maxHeight: '400px',
  };

  const avatarStyles = {
    width: '100px',
    height: '100px',
  };

  return (
    <Card style={cardStyles}>
      <CardContent>
        <Avatar alt={member.name} src={member.imageSrc} style={avatarStyles} />
        <Typography variant="h6">{member.name}</Typography>
        <Typography variant="subtitle1">{member.role}</Typography>
        <Typography variant="body2" style={{ maxHeight: '100px', overflowY: 'auto' }}>
          {member.description}
        </Typography>

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
  );
};

export default AboutCard;
