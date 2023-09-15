import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import TableChartIcon from '@mui/icons-material/TableChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import ExcelToJsonConverter from './ExcelToJsonConverter';
import TableComponent from './TableComponent';
import { useSnackbar } from './Util';
import AppAppBar from './AppAppBar';
import Analyzer from './Analyzer';

function Home() {
  const [jsonData, setJsonData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const { openSnackbar, SnackbarComponent } = useSnackbar();
  const location = useLocation();

  const handleJsonDataChange = (data) => {
    setJsonData(data);
  };

  const handleFileError = (errorMessage) => {
    openSnackbar(errorMessage, 'error');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // You can also save the mode preference in localStorage for persistence
    localStorage.setItem('darkMode', !darkMode ? 'dark' : 'light');
  };

  return (
    <div className={`dashboard-root ${darkMode ? 'dark' : 'light'}`}>
      <AppAppBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Drawer
        className="drawer"
        variant="permanent"
        classes={{
          paper: 'drawer-paper',
        }}
      >
        <Toolbar />
        <div className="drawer-container">
          <List>
            <ListItem
              button
              component={Link}
              to="/"
              className={`${
                location.pathname === '/' ? 'active-route' : ''
              } group hover:bg-indigo-600 dark:hover:bg-indigo-400`}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/table"
              className={`${
                location.pathname === '/table' ? 'active-route' : ''
              } group hover:bg-indigo-600 dark:hover:bg-indigo-400`}
            >
              <ListItemIcon>
                <TableChartIcon />
              </ListItemIcon>
              <ListItemText primary="Table" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/analysis"
              className={`${
                location.pathname === '/analysis' ? 'active-route' : ''
              } group hover:bg-indigo-600 dark:hover:bg-indigo-400`}
            >
              <ListItemIcon>
                <AssessmentIcon />
              </ListItemIcon>
              <ListItemText primary="Analysis" />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className="content p-5">
        <Toolbar className="flex justify-between">
          <div>
            <Typography variant="h6">Your App Title</Typography>
          </div>
          <div>
            <button
              className={`${
                darkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white'
              } p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none`}
              onClick={toggleDarkMode}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </Toolbar>
        <Routes>
          <Route
            path="/"
            element={
              <ExcelToJsonConverter
                onJsonDataChange={handleJsonDataChange}
                onError={handleFileError}
                jsonData={jsonData}
              />
            }
          />
          <Route path="/table" element={<TableComponent jsonData={jsonData} />} />
          <Route path="/analysis" element={<Analyzer jsonData={jsonData} />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      {SnackbarComponent()}
    </div>
  );
}

export default Home;
