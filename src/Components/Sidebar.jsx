import React from 'react';
import List from '@mui/material/List';
import { useLocation } from 'react-router-dom';
import { SidebarItem, sidebarIcons } from '../Components/Util';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';

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
  const [isHidden , setIsHidden]= useState(false);

  const location = useLocation();
 const userType = localStorage.getItem('userType')
  // console.log('userType',userType)
  useEffect(() => {
    if (userType === 'admin' || userType !== null) {
      setIsHidden(true);
    }
  }, [userType]);


  return (
    
    <ThemeProvider theme={theme}>
      <div className="drawer-container">
        <List>
          <SidebarItem to="/" text="Home" icon={sidebarIcons.Home} isActive={location.pathname === '/'} />
          <SidebarItem
            to="/notice"
            text="Notice"
            icon={sidebarIcons.Notice}
            isActive={location.pathname === '/notice'}
          />
          <SidebarItem to="/about" text="About" icon={sidebarIcons.About} isActive={location.pathname === '/about'} />
          <SidebarItem
            to="/contact"
            text="Contact"
            icon={sidebarIcons.Contact}
            isActive={location.pathname === '/contact'}
          />
          {isHidden?
          <SidebarItem
            to="/notice-uploader"
            text="Notice Uploader"
            icon={sidebarIcons['Notice Uploader']}
            isActive={location.pathname === '/notice-uploader'}
          />:<></>}
          {isHidden?
          <SidebarItem
            to="/credential-manager"
            text="Credential Manager"
            icon={sidebarIcons['Credential Manager']}
            isActive={location.pathname === '/credential-manager'}
          />:<></>}
          {isHidden?
            <SidebarItem to="/login" text="Login" icon={sidebarIcons.Login} isActive={location.pathname === '/login'} />

           : <></>}
           
        </List>

      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
