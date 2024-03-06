import React from 'react';
import { Card, CardContent, Typography, IconButton, Grid, Avatar} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material'; // Import the Download icon
import pdfData from '../SubPackages/PdfData';
import AsifReza from '../Images/TeamMembars/AsifReza.jpg';
import './PdfListPage.css'; // Import the external CSS file

const PdfListPage = () => {
  // const [background, setBackground] = useState("BackGroundThame");

  const handleDownload = (pdfName, pdfFilePath) => {
    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = `${pdfName}.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={`PdfListPage`}>
      <Grid container spacing={2}> {/* Add spacing between grid items */}
        <Grid item xs={12} md={6} > {/* Set xs to 12 for small devices */}
          {pdfData.map((pdf) => (
            <Card key={pdf.id} className="PdfListPageCard">
              <CardContent className="PdfListPageCardContent">
                <Typography component="div" variant='h6' className="PdfListPagePdfName">
                  {pdf.name}
                </Typography>
                <Typography color="primary" className="PdfListPagePdfDescription">
                  {pdf.description.slice(0,25)+"..."}
                </Typography>
                <IconButton onClick={() => handleDownload(pdf.name, pdf.file)} className="PdfListPageDownloadButton">
                  <DownloadIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} md={4} marginLeft={4}>
          <h4>
            <Avatar alt="ASIF" src={AsifReza} className="PdfListPageAvatar" />
            The content on this page is protected by copyright law, including the provisions of the <strong>Copyright Act, 1957, of India</strong>
          </h4>
        </Grid>
      </Grid>
    </div>
  );
};

export default PdfListPage;
