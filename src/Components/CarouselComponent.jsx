import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselData from '../SubPackages/CarouselData';

const containerStyle = {
  position: 'relative', // Position relative for text overlay
  width: '100%',
  height: '500px', // Increase the height for larger images
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // Maintain aspect ratio and cover the entire container
};

const textStyle = {
  position: 'absolute',
  top: '50%', // Center the text vertically
  left: '50%', // Center the text horizontally
  transform: 'translate(-50%, -50%)', // Center the text precisely
  zIndex: 1, // Place text above the image
  backgroundColor: 'rgba(255, 255, 255, 0.8)', // Add a semi-transparent background
  padding: '16px',
  borderRadius: '8px',
};

const CarouselComponent = () => {
  const carouselSettings = {
    autoPlay: true,
    interval: 3000,
    infiniteLoop: true,
  };

  return (
    <Carousel {...carouselSettings}>
      {carouselData.map((item, index) => (
        <div key={index}>
          <div style={containerStyle}>
            <img
              src={item.imageSrc}
              alt={`Image ${index + 1}`}
              style={imageStyle}
            />
            <div style={textStyle}>
              <Typography variant="body1" letterSpacing={2}>{item.details}</Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
