import React from 'react';
import './ErrorPg.css'; // External CSS file for styling

const ErrorPg = () => {
    return (
        <div className="error-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! It seems like the page you are looking for doesn't exist.</p>
            <p className="error-hint">Please check the URL or navigate back to our homepage.</p>
            <button className="error-btn">Go to Homepage</button>
        </div>
    );
};

export default ErrorPg;
