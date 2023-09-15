import * as XLSX from 'xlsx';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import React, { useState } from 'react';

//convert Excel To Json data
export const convertExcelToJson = (file, onSuccess, onError) => {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = new Uint8Array(event.target.result);
    const workbook = XLSX.read(data, { type: 'array' });

    if (workbook.SheetNames.length === 0) {
      onError('The uploaded file does not contain any sheets.');
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
        Object.values(row).some((cell) => cell !== null && cell !== ''),
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
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [severity, setSeverity] = useState('info');
  
    const openSnackbar = (message, severity = 'info') => {
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
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
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
    const workbook = XLSX.read(data, {type: 'array'});

    if(workbook.SheetNames.length === 0) {
      onError('No sheets found in workbook'); 
      return;
    }

    const sheetNames = workbook.SheetNames;

    const sheetsData = [];

    sheetNames.forEach(sheetName => {

      const sheet = workbook.Sheets[sheetName];
      
      const jsonData = XLSX.utils.sheet_to_json(sheet, {header: 1});
      
      // Get header
      const header = jsonData[0];

      // Remove header from data  
      const data = jsonData.slice(1);
      
      const transformedData = {};

      header.forEach((key, index) => {

        const column = data.map(row => row[index]);
        
        transformedData[key] = column;

      });

      sheetsData.push({
        sheetName, 
        data: transformedData
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
      const workbook = XLSX.read(data, { type: 'array' });
  
      if (workbook.SheetNames.length === 0) {
        onError('No sheets found in workbook');
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
      const workbook = XLSX.read(data, { type: 'array' });
  
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
  