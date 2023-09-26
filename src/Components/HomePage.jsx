import React from 'react';
import { Typography, Container, Slide, Fade } from '@mui/material';
import CarouselComponent from './CarouselComponent'; // Import your CarouselComponent component

function HomePage() {
  return (
    <div>
      <CarouselComponent /> {/* Add the CarouselComponent here */}
      <Container className="description-section">
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            About Us
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            Naresh i Technologies (Pronounced: NareshIT) is a leading software training institute providing Software Training, Project Guidance, IT Consulting, and Technology Workshops.
          </Typography>
        </Fade>
        <Fade in={true} timeout={2000}>
          <Typography variant="body1" paragraph>
            Using our enhanced global software training delivery methodology, innovative software training approach, and industry expertise, we provide high-value corporate training services that enable our clients to enhance business performance, accelerate time-to-market, increase productivity, and improve customer service.
          </Typography>
        </Fade>
        <Fade in={true} timeout={3000}>
          <Typography variant="body1" paragraph>
            We serve Global 100 companies and the leading software vendors in Banking & Financial Services, Insurance, Telecommunications, Technology, and Media, Information & Education industries. We design and mentor human resources for our clients who create competitive advantage.
          </Typography>
        </Fade>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            We are on a mission to bridge the gap between industry & academia by rapidly building industry-relevant skills in people.
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            Describe your mission and goals here.
          </Typography>
        </Fade>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Typography variant="h4" gutterBottom>
            Course Offers
          </Typography>
        </Slide>
        <Fade in={true} timeout={1000}>
          <Typography variant="body1" paragraph>
            List the courses you offer and any additional information about them.
          </Typography>
        </Fade>
      </Container>
    </div>
  );
}

export default HomePage;
