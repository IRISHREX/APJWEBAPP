import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import LOGO from '../Images/Genral/LOGO.png'
import HomeIcon from '@mui/icons-material/Home';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

function TopMostBar() {
  const location = useLocation();

  const linkStyle = (path) => ({
    textDecoration: 'none',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
  });

  return (
    <AppBar position="static" className="neon-top-bar">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <img
              src={LOGO}
              alt="Logo"
              style={{
                maxWidth: '150px', // Adjust the maxWidth as needed
                height: 'auto',
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              gutterBottom
              letterSpacing="2px"
              marginLeft="1rem"
              fontSize={{ xs: '1.5rem', sm: '2rem', md: '2.5rem' }}
              className="neon-text"
            >
              A.A.K.F.E.C
            </Typography>
          </Grid>
        </Grid>

        <div className="neon-links" style={{ marginLeft: 'auto' }}>
          {/* Navigation links */}
          <Link to="/" className={location.pathname === '/' ? 'neon-link active' : 'neon-link'} style={linkStyle('/')}>
            <HomeIcon sx={{ marginRight: '5px' }} />
            Home
          </Link>
          <Link to="/notice" className={location.pathname === '/notice' ? 'neon-link active' : 'neon-link'} style={linkStyle('/notice')}>
            <AnnouncementIcon sx={{ marginRight: '5px' }} />
            Notice
          </Link>
          <Link to="/login" className={location.pathname === '/login' ? 'neon-link active' : 'neon-link'} style={linkStyle('/login')}>
            <AccountCircleIcon sx={{ marginRight: '5px' }} />
            Login
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'neon-link active' : 'neon-link'} style={linkStyle('/about')}>
            <InfoIcon sx={{ marginRight: '5px' }} />
            About
          </Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'neon-link active' : 'neon-link'} style={linkStyle('/contact')}>
            <ContactMailIcon sx={{ marginRight: '5px' }} />
            Contact
          </Link>
          <Link
            to="/notice-uploader"
            className={location.pathname === '/notice-uploader' ? 'neon-link active' : 'neon-link'}
            style={linkStyle('/notice-uploader')}
          >
            <CloudUploadIcon sx={{ marginRight: '5px' }} />
            Notice Uploader
          </Link>
          <Link
            to="/credential-manager"
            className={location.pathname === '/credential-manager' ? 'neon-link active' : 'neon-link'}
            style={linkStyle('/credential-manager')}
          >
            <VpnKeyIcon sx={{ marginRight: '5px' }} />
            Credential Manager
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopMostBar;
