import React from "react";
import {
  Typography,
  Slide,
  Fade,
  CardContent,
  Card,
  Grid,
  Button,
} from "@mui/material";
import CarouselComponent from "./CarouselComponent";
import Faq from "./Faq";

import aboutUsImage from "../Images/Genral/S1.jpg";
import missionImage from "../Images/Genral/S2.jpg";
import courseOfferImage from "../Images/Genral/S3.jpg";

function HomePage() {
  const cardData = [
    {
      id:1,
      title: "About Us",
      description:"The APJ Abdul Kalam Free Education Center was established on October 15, 2022, the anniversary of APJ Abdul Kalam's birth, by the Universal Human Foundation (A trust registered under the Indian Trust Act 1i982). Our organization aims to provide deserving Bengali students with free and top-notch education who lack access to resources like high-quality study guides and other essential tools for passing university admission exams.",
      image: aboutUsImage,
    },
    {
      id:2,
      title: "Our Mission",
      description:
        "We are dedicated to providing a launchpad for the underprivileged, empowering them to conquer the nation's university admission exams. In our eyes, education is a fundamental human right, and we firmly believe that no one should be deprived of this opportunity due to a lack of essential guidance...",
      image: missionImage,
    },
    {
      id:3,
      title: "Course Offers",
      description:
        "As previously indicated, our coaching sessions are a vital component of our institution's overarching mission. We are dedicated to providing deserving and diligent students, particularly those hailing from underprivileged backgrounds in West Bengal, with the invaluable opportunity to pursue prestigious university careers across various fields...",
      image: courseOfferImage,
    },
  ];

  return (
    <div>
      <CarouselComponent />


      <Grid container spacing={2} style={{'background': 'rgb(238,174,202)'}}>
        {cardData.map((card, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined" className="about-us-card">
              <Grid container>
{card.id!==2?
                <Grid item xs={6}>
                  <CardContent>
                    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                      <Typography variant="h4" gutterBottom>
                        {card.title}
                      </Typography>
                    </Slide>
                    <Fade in={true} timeout={1000}>
                      <Typography variant="body1" paragraph>
                        {card.description}
                      </Typography>
                    </Fade>
                    {index === 2 && (
                      <Button
                        variant="contained"
                        color="primary"
                        href="#view-course"
                      >
                        View Course
                      </Button>
                    )}
                  </CardContent>
                </Grid>:                 <Grid item xs={6} xl={3} sm={5}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "2rem",
                      float: "right",
                    }}
                  />
                </Grid>}
       {card.id!==2?
                <Grid item xs={6} xl={3} sm={5}>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "5rem",
                      //  float: card.id === 0 || card.id === 2 ? 'right' : 'left',
                      float: "right",
                    }}
                  />
                </Grid>
:<Grid item xs={6}>
<CardContent>
  <Slide direction="up" in={true} mountOnEnter unmountOnExit>
    <Typography variant="h4" gutterBottom>
      {card.title}
    </Typography>
  </Slide>
  <Fade in={true} timeout={1000}>
    <Typography variant="body1" paragraph>
      {card.description}
    </Typography>
  </Fade>
  {index === 2 && (
    <Button
      variant="contained"
      color="primary"
      href="#view-course"
    >
      View Course
    </Button>
  )}
</CardContent>
</Grid> }
                
              </Grid>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div id="view-course">
        <Faq />
      </div>
    </div>
  );
}

export default HomePage;
