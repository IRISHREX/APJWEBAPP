import React from 'react';
import { useFeatureComingSoonContext } from './FeatureComingSoonContext.js';
import { Typography } from '@mui/material';

const FeatureComingSoonOverlay = ({ children }) => {
  const { isComingSoon } = useFeatureComingSoonContext();

  return (
    <div style={{ position: 'relative' }}>
    {isComingSoon && (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 999,
          background: 'linear-gradient(135deg, rgba(0, 188, 212, 0.7), rgba(76, 175, 80, 0.7))',
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '24px',
        }}
      >
       <Typography variant='h4'>FEATURE COMING SOON...</Typography> 
      </div>
    )}
    {children}
  </div>
  );
};

export default FeatureComingSoonOverlay;
