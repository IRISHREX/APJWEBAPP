import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Google } from "@mui/icons-material";

function Footer() {
  return (
    <Grid
      container
      component="footer"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundColor: "#52ab98", padding: "2rem" }}
    >
      <Grid
        item
        container
        xs={12}
        md={6}
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Typography variant="body1" color="whitesmoke" mb={1}>
          Follow us on social media:
        </Typography>
        <IconButton color="primary" aria-label="Facebook" sx={{ mr: 1 }}>
          <a href="www.facebook.com/AsifReza" ><FacebookIcon /></a>
        </IconButton>
        <IconButton color="primary" aria-label="Twitter" sx={{ mr: 1 }}>
        <a href="BioMechasoft@gmail.com" ><Google /></a>
        </IconButton>
        <IconButton color="primary" aria-label="Instagram">
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="body1" color="whitesmoke">
          © {new Date().getFullYear()} BIOMECHASOFT PVT LTD. All rights
          reserved.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h5" color="whitesmoke" mt={2}>
          Our Address:
        </Typography>
        <Typography>
          Registered Office - Uttar Dariapur, Kaliachak, Malda, West Bengal,
          732201
        </Typography>
        <Typography>
          City Office - H-78/17, Batla House, Jamia Nagar, New Delhi, 110025
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h5" color="whitesmoke" mt={2}>
          Phone Number:
        </Typography>
        <Typography color="blue">+91 9002096373</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
