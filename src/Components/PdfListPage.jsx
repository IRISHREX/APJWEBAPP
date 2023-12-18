// PdfListPage.js
import React from 'react';
import { Card, CardContent,Typography, IconButton } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material'; // Import the Download icon
import pdfData from '../SubPackages/PdfData';

const PdfListPage = () => {
  const handleDownload = (pdfName, pdfFilePath) => {
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = `${pdfName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div style={{ display: 'flex', overflowX: 'auto' }}>
      {pdfData.map((pdf) => (
        <Card key={pdf.id} style={{ margin: 10, minWidth: 200, backgroundColor: '#d1faff' }}>
          <CardContent>
            <Typography variant="h6" component="div" style={{ color: '#004080' }}>
              {pdf.name}
            </Typography>
            <Typography color="text.secondary">{pdf.description}</Typography>
            <IconButton onClick={() => handleDownload(pdf.name, pdf.file)} style={{ color: '#00264d' }}>
              <DownloadIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PdfListPage;
