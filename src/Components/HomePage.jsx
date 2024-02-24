// import React, { useState } from "react";
// import {
//   Typography,
//   Slide,
//   Fade,
//   CardContent,
//   Card,
//   Grid,
//   Button,
// } from "@mui/material";
// import CarouselComponent from "./CarouselComponent";
// import Faq from "./Faq";

// import aboutUsImage from "../Images/Genral/S1.jpg";
// import missionImage from "../Images/Genral/S2.jpg";
// import courseOfferImage from "../Images/Genral/S3.jpg";

// import "./HomePage.css";


// function HomePage() {
//   const [showCourse, setShowCourse] = useState();
//   const [background, setBackground] = useState("BackGroundThame");

//   const openCorses = () => {
//     setBackground("BackGroundThameSphear");
//     setShowCourse(() => (
//       <Typography
//         // style={{
//         //   color: "greenyellow",
//         //   fontWeight: "bolder",
//         //   border: "solid 2px red",
//         // }}
//       >
//         <h4>PLEASE CONTACT ADMIN</h4> 9609436103
//       </Typography>
//     ));
//   };

//   const cardData = [
//     {
//       id: 1,
//       title: "About Us ",
//       description:
//         "The APJ Abdul Kalam  Education Center was established on October 15, 2022, the anniversary of APJ Abdul Kalam's birth, by the Universal Human Foundation (A trust registered under the Indian Trust Act 1982). Our organization aims to provide deserving Bengali students with free and top-notch education who lack access to resources like high-quality study guides and other essential tools for passing university admission exams.",
//       image: aboutUsImage,
//     },
//     {
//       id: 2,
//       title: "Our Mission",
//       description:
//         "We want to offer a platform that helps those who are disadvantaged and impoverished prepare for and succeed in the numerous university admission exams held throughout the nation.According to our viewpoint, everyone has a fundamental right to an education, and no one should be denied that right for the lack of basic guidance.We take our cue from Dr. APJ Abdul-Kalam, who very correctly stated,The best brain of the nation may be found on the last benches of the classroom.We aim to achieve this by assisting and advising students in  West Bengal and all over India to enrol in prestigious universities of their choice, receive their education, and develop into fine individuals because we believe that everyone deserves the chance to receive proper guidance",
//       image: missionImage,
//     },
//     {
//       id: 3,
//       title: "Course Offers",
//       description:
//         "As previously indicated, the coaching sessions are a component of this institution's mission to give deserving and diligent students from underprivileged backgrounds, particularly those from West Bengal, the chance to pursue careers at prestigious universities in a variety of fields.",
//       image: courseOfferImage,
//     },
//   ];

//   return (
//     <div>
//       <Grid container spacing={2}>
//       <Grid sm={12} item>
//           <div className="marquee">
//             <h5 className="marqueeText">NOTICE: -NEW BATCH FOR B.A.L.L.B ENTRANCE FOR Calcutta University(CULET) starting, Payment details on google form ,Visit Our Whats APP group by clicking see More in Notice Page... </h5>
//             </div>
//           </Grid>
//         <Grid sm={12} item>
//           <CarouselComponent />{" "}
//         </Grid>
      
//       </Grid>

//       <Grid container spacing={2} className={background}>
//         {cardData.map((card, index) => (
//           <Grid item xs={12} key={index}>
//             <Card variant="outlined" className="about-us-card">
//               <Grid container>
//                 {card.id !== 2 ? (
//                   <Grid item xs={6}>
//                     <CardContent>
//                       <Slide
//                         direction="up"
//                         in={true}
//                         mountOnEnter
//                         unmountOnExit
//                       >
//                         <h4>{card.title}</h4>
//                       </Slide>
//                       <Fade in={true} timeout={1000}>
//                         <Typography
//                           variant="body1"
//                           paragraph
//                           className="Decription"
//                         >
//                           {card.description}
//                         </Typography>
//                       </Fade>
//                       {index === 2 && (
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           onClick={openCorses}
//                         >
//                           {showCourse ? showCourse : "View Course:-"}
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Grid>
//                 ) : (
//                   <Grid item xs={6} xl={3} sm={0}>
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="HomeEmages"
//                     />
//                   </Grid>
//                 )}
//                 {card.id !== 2 ? (
//                   <Grid item xs={6} xl={3} sm={6}>
//                     <img
//                       src={card.image}
//                       alt={card.title}
//                       className="HomeEmages"
//                     />
//                   </Grid>
//                 ) : (
//                   <Grid item xs={6}>
//                     <CardContent>
//                       <Slide
//                         direction="up"
//                         in={true}
//                         mountOnEnter
//                         unmountOnExit
//                       >
//                         <h4>{card.title}</h4>
//                       </Slide>
//                       <Fade in={true} timeout={1000}>
//                         <Typography
//                           variant="body1"
//                           paragraph
//                           className="Decription"
//                         >
//                           {card.description}
//                         </Typography>
//                       </Fade>
//                       {index === 2 && (
//                         <Button
//                           variant="contained"
//                           color="primary"
//                           onClick={openCorses}
//                         >
//                           View Course
//                         </Button>
//                       )}
//                     </CardContent>
//                   </Grid>
//                 )}
//               </Grid>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <div id="view-course">
//         <Faq />
//       </div>
//     </div>
//   );
// }

// export default HomePage;





import React, { useState } from "react";
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

import "./HomePage.css";

function HomePage() {
  const [showCourse, setShowCourse] = useState();
  const [background, setBackground] = useState("BackGroundThame");

  const openCorses = () => {
    setBackground("BackGroundThameSphear");
    setShowCourse(() => (
      <Typography className="contact-info">
        <h4>PLEASE CONTACT ADMIN</h4> 9609436103
      </Typography>
    ));
  };

  const cardData = [
    {
      id: 1,
      title: "About Us ",
      description:
        "The APJ Abdul Kalam  Education Center was established on October 15, 2022, the anniversary of APJ Abdul Kalam's birth, by the Universal Human Foundation (A trust registered under the Indian Trust Act 1982). Our organization aims to provide deserving Bengali students with free and top-notch education who lack access to resources like high-quality study guides and other essential tools for passing university admission exams.",
      image: aboutUsImage,
    },
    {
      id: 2,
      title: "Our Mission",
      description:
        "We want to offer a platform that helps those who are disadvantaged and impoverished prepare for and succeed in the numerous university admission exams held throughout the nation.According to our viewpoint, everyone has a fundamental right to an education, and no one should be denied that right for the lack of basic guidance.We take our cue from Dr. APJ Abdul-Kalam, who very correctly stated,The best brain of the nation may be found on the last benches of the classroom.We aim to achieve this by assisting and advising students in  West Bengal and all over India to enrol in prestigious universities of their choice, receive their education, and develop into fine individuals because we believe that everyone deserves the chance to receive proper guidance",
      image: missionImage,
    },
    {
      id: 3,
      title: "Course Offers",
      description:
        "As previously indicated, the coaching sessions are a component of this institution's mission to give deserving and diligent students from underprivileged backgrounds, particularly those from West Bengal, the chance to pursue careers at prestigious universities in a variety of fields.",
      image: courseOfferImage,
    },
  ];

  return (
    <div className="home-page">
      <Grid container spacing={2}>
        <Grid sm={12} item>
          <div className="marquee">
            <h5 className="marquee-text">NOTICE: -NEW BATCH FOR B.A.L.L.B ENTRANCE FOR Calcutta University(CULET) starting, Payment details on google form ,Visit Our Whats APP group by clicking see More in Notice Page... </h5>
          </div>
        </Grid>
        <Grid sm={12} item>
          <CarouselComponent />
        </Grid>
      </Grid>

      <Grid container spacing={2} className={background}>
        {cardData.map((card, index) => (
          <Grid item xs={12} key={index}>
            <Card variant="outlined" className="about-us-card">
              <Grid container>
                {card.id !== 2 ? (
                  <Grid item xs={6}>
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
                          className="description"
                        >
                          {card.description}
                        </Typography>
                      </Fade>
                      {index === 2 && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={openCorses}
                        >
                          {showCourse ? showCourse : "View Course:-"}
                        </Button>
                      )}
                    </CardContent>
                  </Grid>
                ) : (
                  <Grid item xs={6} xl={3} sm={0}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="home-images"
                    />
                  </Grid>
                )}
                {card.id !== 2 ? (
                  <Grid item xs={6} xl={3} sm={6}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="home-images"
                    />
                  </Grid>
                ) : (
                  <Grid item xs={6}>
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
                          className="description"
                        >
                          {card.description}
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
