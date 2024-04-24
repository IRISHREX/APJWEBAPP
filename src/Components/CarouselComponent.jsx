import React from "react";
import { IconButton, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import carouselData from "../SubPackages/CarouselData";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const userType = localStorage.getItem("userType");

const handleUpdate = () => {
  console.log("update clicked");
};

const handleDelete = () => {
  console.log("delete clicked");
};

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "500px",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px", // Added border radius for a modern look
  filter: "grayscale(20%)", // Added grayscale effect for a futuristic feel
};

const textStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1,
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Updated background color for text overlay
  padding: "16px",
  borderRadius: "8px",
  backdropFilter: "blur(5px)", // Added backdrop filter for a modern look
};

const CarouselComponent = () => {
  const carouselSettings = {
    autoPlay: true,
    interval: 10000,
    infiniteLoop: true,
  };

  return (
    <div>
      <Carousel {...carouselSettings}>
        {carouselData.map((item, index) => (
          <div key={index}>
            <div style={containerStyle}>
              <img
                src={item.imageSrc}
                alt={`Slide ${index + 1}`}
                style={imageStyle}
              />
              <div style={textStyle}>
                <Typography variant="body1" letterSpacing={2} color="white"> {/* Changed text color to white */}
                  {item.details}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {userType === "admin" && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <IconButton onClick={handleUpdate} style={{ color: "white" }}> {/* Changed icon color to white */}
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDelete} style={{ color: "white" }}> {/* Changed icon color to white */}
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
};

export default CarouselComponent;
