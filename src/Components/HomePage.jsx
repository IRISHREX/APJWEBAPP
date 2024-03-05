import React, { useEffect, useState } from "react";
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

import { fetchNoticeData } from "../SubPackages/FetchNoticeData";
import { cardData } from "./Util";

function HomePage() {
  const [showCourse, setShowCourse] = useState();
  const [GenralNotice, setGenralNotice] = useState(null);
  const [background, setBackground] = useState("BackGroundThame");

  useEffect(() => {
    fetchNoticeData().then((data) => setGenralNotice(data[0]?.description));
  }, []);

  const openCorses = () => {
    setBackground("BackGroundThameSphear");
    setShowCourse(() => (
      <Typography
        style={{
          color: "greenyellow",
          fontWeight: "bolder",
          border: "solid 2px red",
        }}
      >
        <h4 className="marquee">PLEASE CONTACT ADMIN:- </h4> 
      </Typography>
    ));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className="marquee">
            <h5 className="marqueeText">
              NOTICE:{" "}
              {GenralNotice
                ? GenralNotice
                : "NEW BATCH FOR B.A.L.L.B ENTRANCE FOR Calcutta University(CULET) starting, Payment details on google form ,Visit Our Whats APP group by clicking see More in Notice Page..."}
            </h5>
          </div>
        </Grid>
        <Grid item xs={12}>
          <CarouselComponent />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={background}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} xl={4} key={index}>
            <Card variant="outlined" className="about-us-card">
              <Grid container>
                {card.id !== 2 ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <CardContent>
                        <Slide
                          direction="up"
                          in={true}
                          mountOnEnter
                          unmountOnExit
                        >
                          <h4>{card.title}</h4>
                        </Slide>
                        <Fade in={true} timeout={1000}>
                          <Typography
                            variant="body1"
                            paragraph
                            className="Decription"
                          >
                            {card.description}
                          </Typography>
                        </Fade>

                      </CardContent>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className={card.id===1?"HomeEmages":"HomeEmagesvarient"}
                        style={{}}
                      />
                    </Grid>
                    {index === 2 && (
                                          <Grid item xs={12} sm={6}>

                          <Button
                            variant="contained"
                            color="primary"
                            onClick={openCorses}
                          >
                            {showCourse ? showCourse : "View Course:-"}
                          </Button>
                          </Grid>

                        )} 

                  </>
                ) : (
                  <>
                    <Grid item xs={12} sm={6}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="HomeEmagesvarient"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <CardContent>
                        <Slide
                          direction="up"
                          in={true}
                          mountOnEnter
                          unmountOnExit
                        >
                          <h4>{card.title}</h4>
                        </Slide>
                        <Fade in={true} timeout={1000}>
                          <Typography
                            variant="body1"
                            paragraph
                            className="Decription"
                          >
                            {card.description.slice(0,400)}
                          </Typography>
                        </Fade>
                        {index === 2 && (
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={openCorses}
                          >
                            View Course
                          </Button>
                        )}
                      </CardContent>
                    </Grid>
                  </>
                )}
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
