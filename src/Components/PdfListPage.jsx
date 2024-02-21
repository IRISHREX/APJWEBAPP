import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Avatar } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material'; // Import the Download icon
import pdfData from '../SubPackages/PdfData';
import AsifReza from '../Images/TeamMembars/AsifReza.jpg'

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
    <div className="BackGroundThame">
      <Grid container spacing={2}> {/* Add spacing between grid items */}
        <Grid item xs={12} md={6} > {/* Set xs to 12 for small devices */}
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
        </Grid>
        <Grid item xs={12} md={4} marginLeft={4}>
        

          <h4><Avatar alt={"ASIF"} src={AsifReza} style={{height:"100%",width:'5rem'}} />The content on this page is protected by copyright law, including the provisions of the  <strong>Copyright Act, 1957, of India</strong></h4>
          
        </Grid>
      </Grid>
    </div>
  );
};

export default PdfListPage;
