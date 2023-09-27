import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselData from '../SubPackages/CarouselData';

const containerStyle = {
  height: '400px', // Set a fixed height for the container
  overflow: 'auto', // Enable scrolling if the content exceeds the container's height
};

const imageStyle = {
  width: '100%', // Set the width to 100% to maintain aspect ratio
  height: 'auto', // Automatically adjust height to maintain aspect ratio
};

const CarouselComponent = () => {
  const carouselSettings = {
    autoPlay: true, // Enable automatic slide advancement
    interval: 3000, // Set the interval to 3 seconds (3000 milliseconds)
    infiniteLoop: true, // Enable infinite loop
  };

  return (
    <Carousel {...carouselSettings}>
      {carouselData.map((item, index) => (
        <div key={index}>
          <Box sx={containerStyle}>
            <img
              src={item.imageSrc}
              alt={`Image ${index + 1}`}
              style={imageStyle}
            />
          </Box>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="body1">{item.details}</Typography>
          </Paper>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
