import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselData from '../Graphs/CarouselData';


const CarouselComponent = () => {
  return (
    <Carousel>
      {carouselData.map((item, index) => (
        <div key={index}>
          <img src={item.imageSrc} alt={`Image ${index + 1}`} />
          <p>{item.details}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
