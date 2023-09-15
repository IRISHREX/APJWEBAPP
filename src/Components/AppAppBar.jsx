import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider

function AppAppBar() {
  // Create a custom theme with dark shiny blue colors
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976D2', // Primary color (dark blue)
      },
      secondary: {
        main: '#FF5722', // Secondary color (orange)
      },
      background: {
        default: '#121212', // Background color (dark gray)
      },
    },
  });

  const dashboardStyle = {
    flex: '1',
    paddingLeft: '50%',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
  };

  return (
    // Wrap your component with ThemeProvider and pass the custom theme
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" className="app-bar">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap style={dashboardStyle}>
            DASHBOARD
          </Typography>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="primary" // Use the primary color for the icons
              aria-label="user"
              onClick={() => {
                // Handle user icon action here
              }}
            >
              <PersonIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="analysis"
              onClick={() => {
                // Handle the download action here
              }}
            >
              <CloudDownloadIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="settings"
              onClick={() => {
                // Handle the settings action here
              }}
            >
              <SettingsIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default AppAppBar;
