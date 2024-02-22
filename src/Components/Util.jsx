import * as XLSX from "xlsx";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";
import L from "leaflet";
import HomeIcon from "@mui/icons-material/Home";
import TableChartIcon from "@mui/icons-material/TableChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NoticeIcon from "@mui/icons-material/Notifications";
import LoginIcon from "@mui/icons-material/Login";
import AboutIcon from "@mui/icons-material/Info";
import ContactIcon from "@mui/icons-material/ContactMail";
import NoticeUploaderIcon from "@mui/icons-material/CloudUpload";
import CredentialManagerIcon from "@mui/icons-material/VpnKey";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

//convert Excel To Json data
export const convertExcelToJson = (file, onSuccess, onError) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    if (workbook.SheetNames.length === 0) {
      onError("The uploaded file does not contain any sheets.");
      return;
    }

    const sheetNames = workbook.SheetNames;
    const sheetsData = [];

    sheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, {
        header: 1,
        blankrows: false,
      });

      const filteredData = jsonData.filter((row) =>
        Object.values(row).some((cell) => cell !== null && cell !== "")
      );

      const transformedData = {};

      filteredData.forEach((row) => {
        const [key, ...values] = row;
        transformedData[key] = values;
      });

      sheetsData.push({ sheetName, data: transformedData });
    });

    onSuccess(sheetsData);
  };

  reader.readAsArrayBuffer(file);
};
//convert Excel To Json Modified as row as key col as value

//DATA SNAKE BAR UPLOAD SUCCESS AND FAIL
export const useSnackbar = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const openSnackbar = (message, severity = "info") => {
    setSnackbarMessage(message);
    setSeverity(severity);
    setIsSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setIsSnackbarOpen(false);
  };

  const SnackbarComponent = () => (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert onClose={closeSnackbar} severity={severity}>
        {snackbarMessage}
      </MuiAlert>
    </Snackbar>
  );

  return { openSnackbar, SnackbarComponent };
};
//Table data-grid Self Unique Id logic
export const flattenData = (data) => {
  const columns = Object.keys(data);
  const numRows = data[columns[0]].length;
  const flattenedData = [];

  for (let i = 0; i < numRows; i++) {
    const rowData = {
      id: i,
    };
    columns.forEach((col) => {
      rowData[col] = data[col][i];
    });
    flattenedData.push(rowData);
  }

  return flattenedData;
};
//convertExcelToJsonModifiedconvert Excel To Json Modified as row as key col as value.
export const convertExcelToJsonModified = (file, onSuccess, onError) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    if (workbook.SheetNames.length === 0) {
      onError("No sheets found in workbook");
      return;
    }

    const sheetNames = workbook.SheetNames;

    const sheetsData = [];

    sheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];

      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Get header
      const header = jsonData[0];

      // Remove header from data
      const data = jsonData.slice(1);

      const transformedData = {};

      header.forEach((key, index) => {
        const column = data.map((row) => row[index]);

        transformedData[key] = column;
      });

      sheetsData.push({
        sheetName,
        data: transformedData,
      });
    });

    onSuccess(sheetsData);
  };

  reader.readAsArrayBuffer(file);
};
export const convertExcelToJsonModified2 = (file, onSuccess, onError) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    if (workbook.SheetNames.length === 0) {
      onError("No sheets found in workbook");
      return;
    }

    const sheetNames = workbook.SheetNames;

    const sheetsData = [];

    sheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Get header
      const header = jsonData[0];

      // Remove header from data
      const dataRows = jsonData.slice(1);

      const transformedData = [];

      dataRows.forEach((row) => {
        const rowData = {};
        header.forEach((key, index) => {
          rowData[key] = row[index];
        });
        transformedData.push(rowData);
      });

      sheetsData.push({
        tableName: sheetName, // Include table name from the sheet name
        data: transformedData,
      });
    });

    onSuccess(sheetsData);
  };

  reader.readAsArrayBuffer(file);
};

//convertExcelToJsonModified5
export const convertExcelToJsonModified5 = (file, onSuccess) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: "array" });

    const sheetNames = workbook.SheetNames;
    const sheetsData = [];

    sheetNames.forEach((sheetName) => {
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      // Get header
      const header = jsonData[1]; // Use the second row as the header

      // Remove header from data
      const dataRows = jsonData.slice(2); // Start from the third row for data

      const transformedData = {};

      header.forEach((key, index) => {
        const column = dataRows.map((row) => row[index]);
        transformedData[key] = column;
      });

      sheetsData.push({
        sheetName,
        data: transformedData,
      });
    });

    onSuccess(sheetsData);
  };

  reader.readAsArrayBuffer(file);
};

// Updated default center location
export const defaultLocation = {
  lat: 28.56227, // Replace with the latitude of the default location
  lng: 77.28899, // Replace with the longitude of the default location
};

export const zoom = 13; // Initial zoom level

export const waypoints = [
  L.latLng(defaultLocation.lat, defaultLocation.lng), // Start point
  L.latLng(51.501, -0.08), // End point (you can replace with your desired endpoint)
];

// Add more team members as needed

export const SidebarItem = ({ to, text, icon, isActive }) => (
  <ListItem
    button
    component={Link}
    to={to}
    className={`${isActive ? "active-route" : ""
      } group hover:bg-indigo-600 dark:hover:bg-indigo-400`}
  >
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export const sidebarIcons = {
  Home: <HomeIcon />,
  Table: <TableChartIcon />,
  Analysis: <AssessmentIcon />,
  Notice: <NoticeIcon />,
  Login: <LoginIcon />,
  About: <AboutIcon />,
  Contact: <ContactIcon />,
  "Notice Uploader": <NoticeUploaderIcon />,
  "Credential Manager": <CredentialManagerIcon />,
};

export function AppToolbar({ darkMode, toggleDarkMode }) {
  return (
    <Toolbar className="flex justify-between">
      <div>
        <Typography variant="h6">Your App Title</Typography>
      </div>
      <div>
        <button
          className={`${darkMode
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-700 dark:bg-gray-600 dark:text-white"
            } p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none`}
          onClick={toggleDarkMode}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </Toolbar>
  );
}

export const toggleDrawer = (isDrawerOpen, setIsDrawerOpen) => {
  setIsDrawerOpen(!isDrawerOpen);
};

export const closeDrawerAfterDelay = (isDrawerOpen, setIsDrawerOpen) => {
  if (isDrawerOpen) {
    const timer = setTimeout(() => {
      setIsDrawerOpen(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }
};

// export const handleScroll = (prevScrollY, setIsAppBarVisible) => {
//   return () => {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > prevScrollY.current) {
//       setIsAppBarVisible(false);
//     } else {
//       setIsAppBarVisible(true);
//     }

//     prevScrollY.current = currentScrollY;
//   };
// };
export const cardStyles = {
  maxWidth: "300px", // Adjust the maximum width as needed
  margin: "auto", // Center the card on the page
  backgroundColor: "rgba(0, 188, 212, 0.7)", // Greenish background color
  boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)", // Reddish and radiant shadow
  transition: "transform 0.3s ease-in-out", // Add a smooth transition effect

  "&:hover": {
    transform: "scale(1.05)", // Scale up the card on hover
  },

};
//style={{
//   backgroundColor: "rgba(0, 188, 212, 0.7)", // Greenish background color
//   boxShadow: "0 0 20px rgba(255, 0, 0, 0.5)", // Reddish and radiant shadow
//   borderRadius: "15px", // Border radius for a smoother look
//   overflow: "hidden", // Ensure content doesn't overflow
//   position: "relative", // Positioning for absolute elements inside
// }}
export const avatarStyles = {
  width: "100px",
  height: "100px",
  margin: "auto", // Center the avatar within the card
};

export const descriptionStyles = {
  maxHeight: "100px",
  overflowY: "auto",
  marginTop: "10px", // Add some top margin to the description
};
export const gradientColors = [
  "linear-gradient(to bottom, #4286f4, #0063b3)",
  "linear-gradient(to bottom, #ff8a00, #ff0033)",
  "linear-gradient(to bottom, #36a985, #00754f)",
];
