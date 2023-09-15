import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { convertExcelToJsonModified5 } from './Util';

function ExcelToJsonConverter({ onJsonDataChange }) {
  // State variables
  const [isUploadComplete, setIsUploadComplete] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  
  // Access the router's navigate function
  const navigate = useNavigate();

  // Effect to automatically redirect after upload
  useEffect(() => {
    if (isUploadComplete) {
      const timer = setTimeout(() => {
        // Redirect to the Table page after a timeout
        navigate('/table');
      }, 2000); // Redirect after 2 seconds
      return () => clearTimeout(timer);
    }
  }, [isUploadComplete, navigate]);

  // Handle file change event
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Convert Excel to JSON
    convertExcelToJsonModified5(
      file,
      (sheetsData) => {
        // Update the parent component with JSON data
        onJsonDataChange(sheetsData);
        setIsUploadComplete(true);
        setSnackbarMessage('File Upload Complete');
        setSnackbarOpen(true);
      },
      (error) => {
        // Handle error and show a snackbar message
        setSnackbarMessage(error);
        setSnackbarOpen(true);
      }
    );
  };

  // Handle snackbar close
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      <h1>EXCEL-VISUALIZER</h1>
      {isUploadComplete ? (
        <div>
          <p>File Upload Complete</p>
        </div>
      ) : (
        <div>
          <input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
          <label htmlFor="fileInput">
            <Button variant="contained" component="span" startIcon={<CloudUploadIcon />}>
              Upload Excel File
            </Button>
          </label>
        </div>
      )}

      {/* Snackbar for displaying messages */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" severity="info">
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}

export default ExcelToJsonConverter;
