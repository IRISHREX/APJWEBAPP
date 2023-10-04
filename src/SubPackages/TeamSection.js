import React from 'react';
import { Paper, Avatar, Typography } from '@mui/material';

const TeamSection = ({ team, members, color, toggleTeamDrawer }) => {
  const midIndex = Math.ceil(members.length / 2);
  const leftMembers = members.slice(0, midIndex);
  const rightMembers = members.slice(midIndex);

  return (
    <Paper
      style={{
        background: color,
        marginBottom: '16px',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      onClick={() => toggleTeamDrawer(team)}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {leftMembers.map((member, index) => (
          <Avatar
            key={index}
            alt={member.name}
            src={member.imageSrc}
            style={{ width: '8vw', height: '8vw', marginRight: '1rem', borderRadius: '50%' }}
          />
        ))}
      </div>
      <Typography
        variant="body2"
        style={{ letterSpacing: '1px', marginLeft: '1rem', fontWeight: 'bold' }}
      >
        ABOUT {team.toUpperCase()}
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {rightMembers.map((member, index) => (
          <Avatar
            key={index}
            alt={member.name}
            src={member.imageSrc}
            style={{ width: '8vw', height: '8vw', marginLeft: '1rem', borderRadius: '50%' }}
          />
        ))}
      </div>
    </Paper>
  );
};

export default TeamSection;
