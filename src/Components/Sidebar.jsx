import React from 'react';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import { SidebarItem, sidebarIcons } from '../Components/Util';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define a custom theme with neon black and pink colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#000', // Neon Black
    },
    secondary: {
      main: '#ff6ec7', // Neon Pink
    },
  },
});

const Sidebar = () => {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <div className="drawer-container">
        <List>
          {/* Sidebar items */}
          <SidebarItem to="/" text="Home" icon={sidebarIcons.Home} isActive={location.pathname === '/'} />
          <SidebarItem
            to="/notice"
            text="Notice"
            icon={sidebarIcons.Notice}
            isActive={location.pathname === '/notice'}
          />
          <SidebarItem to="/login" text="Login" icon={sidebarIcons.Login} isActive={location.pathname === '/login'} />
          <SidebarItem to="/about" text="About" icon={sidebarIcons.About} isActive={location.pathname === '/about'} />
          <SidebarItem
            to="/contact"
            text="Contact"
            icon={sidebarIcons.Contact}
            isActive={location.pathname === '/contact'}
          />
          <SidebarItem
            to="/notice-uploader"
            text="Notice Uploader"
            icon={sidebarIcons['Notice Uploader']}
            isActive={location.pathname === '/notice-uploader'}
          />
          <SidebarItem
            to="/credential-manager"
            text="Credential Manager"
            icon={sidebarIcons['Credential Manager']}
            isActive={location.pathname === '/credential-manager'}
          />
        </List>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
