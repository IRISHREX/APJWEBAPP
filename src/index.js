import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';

// Import the base styles and any additional styles you need.
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Your other imports and code here
// Create a Material-UI theme
const theme = createTheme();


ReactDOM.render(
  <Router>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
