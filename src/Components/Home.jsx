import React, { useState ,useEffect, useRef} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu'; // Import Menu icon
import logo512 from '../Images/Genral/logo512.png'; // Replace 'logo512.png' with the actual path to your logo image.


import { AppToolbar, SidebarItem, sidebarIcons, useSnackbar } from './Util';

import ExcelToJsonConverter from './ExcelToJsonConverter';
import TableComponent from './TableComponent';
import Analyzer from './Analyzer';
import About from './About';
import HomePage from './HomePage';
import Notice from './Notice';
import Contact from './Contact';
import LoginPage from './LoginPage';
import { AppBar, Typography } from '@mui/material';
import MasterUploader from './MasterUploader';

function Home() {
  const [jsonData, setJsonData] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State variable for Drawer open/close

  const { openSnackbar, SnackbarComponent } = useSnackbar();
  const location = useLocation();
  const [isAppBarVisible, setIsAppBarVisible] = useState(true);
  const prevScrollY = useRef(0);

  const handleJsonDataChange = (data) => {
    setJsonData(data);
  };

  const handleFileError = (errorMessage) => {
    openSnackbar(errorMessage, 'error');
  };



  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  useEffect(() => {
    if (isDrawerOpen) {
      const timer = setTimeout(() => {
        setIsDrawerOpen(false); // Close the drawer after 3 seconds
      }, 4000);

      // Clear the timer if the component unmounts or the drawer is closed manually
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isDrawerOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        // Scrolling down, hide the app bar
        setIsAppBarVisible(false);
      } else {
        // Scrolling up, show the app bar
        setIsAppBarVisible(true);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div >
      <AppBar style={{ display: isAppBarVisible ? 'block' : 'none' }}>
      <Toolbar>
        <MenuIcon onClick={toggleDrawer} style={{ cursor: 'pointer' }} /> {/* Menu icon */}
        <img src={logo512} alt="Logo" style={{ maxWidth: '60px', marginRight: '10px',marginLeft: '20px', borderRadius:"15%"}} /> {/* Add your logo here */}
        <Typography variant="h4" gutterBottom letterSpacing={5} marginLeft={15} height={15}>
        APJ Abdul Kalam Free Education Centre        </Typography>
      </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        variant="temporary" // Use "temporary" variant to show/hide the Drawer
        open={isDrawerOpen} // Control Drawer open state
        onClose={toggleDrawer} // Close Drawer when clicked outside
        classes={{
          paper: 'drawer-paper',
        }}
      >
        <div className="drawer-container">
        <List>
            <SidebarItem
              to="/"
              text="Home"
              icon={sidebarIcons.Home}
              isActive={location.pathname === '/'}
            />
            
            <SidebarItem
              to="/notice"
              text="Notice"
              icon={sidebarIcons.Notice}
              isActive={location.pathname === '/notice'}
            />
            <SidebarItem
              to="/login"
              text="Login"
              icon={sidebarIcons.Login}
              isActive={location.pathname === '/login'}
            />
            <SidebarItem
              to="/about"
              text="About"
              icon={sidebarIcons.About}
              isActive={location.pathname === '/about'}
            />
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
            <SidebarItem
              to="/table"
              text="Table"
              icon={sidebarIcons.Table}
              isActive={location.pathname === '/table'}
            />
            <SidebarItem
              to="/analysis"
              text="Analysis"
              icon={sidebarIcons.Analysis}
              isActive={location.pathname === '/analysis'}
            />
          </List>
        </div>
      </Drawer>
      <AppToolbar  />
      <main className="content p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/notice-uploader"
            element={
              <ExcelToJsonConverter
                onJsonDataChange={handleJsonDataChange}
                onError={handleFileError}
                jsonData={jsonData}
              />
            }
          /> */}
          <Route path="/table" element={<TableComponent jsonData={jsonData} />} />
          <Route path="/analysis" element={<Analyzer jsonData={jsonData} />} />
          <Route path="/about" element={<About jsonData={jsonData} />} />
          <Route path="/notice" element={<Notice jsonData={jsonData} />} />
          <Route path="/notice-uploader" element={<MasterUploader jsonData={jsonData} />} />
          <Route path="/contact" element={<Contact jsonData={jsonData} />} />
          <Route path="/login" element={<LoginPage jsonData={jsonData} />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      {SnackbarComponent()}
    </div>
  );
}

export default Home;
