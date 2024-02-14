import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import LOGO from "../Images/Genral/LOGO.png";
import HomeIcon from "@mui/icons-material/Home";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState } from "react";
import { useEffect } from "react";
import { Download, School } from "@mui/icons-material";

function TopMostBar() {
  const [isHidden, setIsHidden] = useState(false);

  const userType = localStorage.getItem("userType");
  // console.log('userType',userType)
  useEffect(() => {
    if (userType === "admin" || userType !== null) {
      setIsHidden(true);
    }
  }, [userType]);
  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: "none",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
  });

  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "transparent", boxShadow: "none", 
      border: "4px solid rgba(0, 188, 0, 0.7)", // Green border
      borderTop: "4px solid rgba(255, 0, 0, 0.7)", // Red top border
      borderBottom: "4px solid rgba(0, 0, 255, 0.7)", // Blue bottom border
   
    }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
          <a href="https://apjec.org/"  rel="noreferrer">

            <img
              src={LOGO}
              alt="Logo"
              style={{
                maxWidth: "150px", // Adjust the maxWidth as needed
                height: "auto",
              }}
            />
            </a>
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              letterSpacing="2px"
              marginLeft="1rem"
              fontSize={{ xs: "1.5rem", sm: "2rem", md: "2.5rem" }}
              className="neon-text"
              fontFamily={"Pacifico"}
              fontWeight={900}
            >
              APJEC
            </Typography>
          </Grid>
        </Grid>

        <div className="neon-links" style={{ marginLeft: "auto" }}>
          {/* Navigation links */}
          <Link
            to="/"
            className={
              location.pathname === "/" ? "neon-link active" : "neon-link"
            }
            style={linkStyle("/")}
          >
            <HomeIcon sx={{ marginRight: "5px" }} />
            Home
          </Link>
          <Link
            to="/notice"
            className={
              location.pathname === "/notice" ? "neon-link active" : "neon-link"
            }
            style={linkStyle("/notice")}
          >
            <AnnouncementIcon sx={{ marginRight: "5px" }} />
            Notice
          </Link>

          {isHidden ? (
            <Link
              to="/login"
              className={
                location.pathname === "/login"
                  ? "neon-link active"
                  : "neon-link"
              }
              style={linkStyle("/login")}
            >
              <AccountCircleIcon sx={{ marginRight: "5px" }} />
              Login
            </Link>
          ) : (
            <></>
          )}

          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "neon-link active" : "neon-link"
            }
            style={linkStyle("/about")}
          >
            <InfoIcon sx={{ marginRight: "5px" }} />
            About
          </Link>
          <Link
              to="/downloads"
              className={
                location.pathname === "/downloads"
                  ? "neon-link active"
                  : "neon-link"
              }
              style={linkStyle("/notice-uploader")}
            >
              <Download sx={{ marginRight: "5px" }} />
              Downloads
            </Link>
            <Link
              to="/classes"
              className={
                location.pathname === "/classes"
                  ? "neon-link active"
                  : "neon-link"
              }
              style={linkStyle("/credential-manager")}
            >
              <School sx={{ marginRight: "5px" }} />
Classes
            </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "neon-link active"
                : "neon-link"
            }
            style={linkStyle("/contact")}
          >
            <ContactMailIcon sx={{ marginRight: "5px" }} />
            Contact
          </Link>
          {isHidden ? (
            <Link
              to="/notice-uploader"
              className={
                location.pathname === "/notice-uploader"
                  ? "neon-link active"
                  : "neon-link"
              }
              style={linkStyle("/notice-uploader")}
            >
              <CloudUploadIcon sx={{ marginRight: "5px" }} />
              Notice Uploader
            </Link>
          ) : (
            <></>
          )}
          {isHidden ? (
            <Link
              to="/credential-manager"
              className={
                location.pathname === "/credential-manager"
                  ? "neon-link active"
                  : "neon-link"
              }
              style={linkStyle("/credential-manager")}
            >
              <VpnKeyIcon sx={{ marginRight: "5px" }} />
              Credential Manager
            </Link>
          ) : (
            <></>
          )}

        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopMostBar;
