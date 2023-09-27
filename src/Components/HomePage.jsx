import React from 'react';
import { Typography, Slide, Fade, CardContent, Card } from '@mui/material';
import CarouselComponent from './CarouselComponent'; // Import your CarouselComponent component

function HomePage() {
  return (
    <div>
      <CarouselComponent /> {/* Add the CarouselComponent here */}
      <Card variant="outlined" className="about-us-card">
      <CardContent>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            Presenting the APJ Abdul Kalam Free Education Center
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography variant="body1" paragraph>
            Founded on October 15, 2022, in honor of APJ Abdul Kalam's birth anniversary, we are an initiative of the Universal Human Foundation, a registered trust under the Indian Trust Act 1982. Our primary objective is to provide outstanding education to deserving Bengali students who face barriers in accessing essential resources, such as top-tier study materials and tools crucial for excelling in university admission exams.
          </Typography>
        </Fade>

        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            Our Mission
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            We are dedicated to providing a launchpad for the underprivileged, empowering them to conquer the nation's university admission exams. In our eyes, education is a fundamental human right, and we firmly believe that no one should be deprived of this opportunity due to a lack of essential guidance. Join us in leveling the playing field and ensuring equal access to education for all.
          </Typography>
        </Fade>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            Course Offers
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            As previously indicated, our coaching sessions are a vital component of our institution's overarching mission. We are dedicated to providing deserving and diligent students, particularly those hailing from underprivileged backgrounds in West Bengal, with the invaluable opportunity to pursue prestigious university careers across various fields. It's a well-known fact that financially disadvantaged students often find the prospect of private colleges out of reach due to their exorbitant tuition costs. However, there are reputable institutions such as JMI, AMU, CU, BHU, DU, and PU that offer quality education at affordable rates. To facilitate the admission of these deserving students into these esteemed universities, the APJ Abdul Kalam Free Education Center serves as a bridge, connecting their hard work with the realization of their dreams.
          </Typography>
        </Fade>
      </CardContent>
    </Card>
    </div>
  );
}

export default HomePage;
