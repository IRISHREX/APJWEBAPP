import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
  Card,
  CardContent,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import fetchNoticeData from '../SubPackages/FetchNoticeData';

const NoticeCard = ({ title, description, image, link, isTable }) => (
  <Grid item xs={12} sm={12} md={6}>
    {isTable ? (
      <Paper elevation={3}>
        <Box p={2}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button variant="outlined" href={link} target="_blank" rel="noopener noreferrer">
            Read More
          </Button>
        </Box>
      </Paper>
    ) : (
      <Card sx={{ width: '100%' }}>
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={image}
          sx={{ position: 'absolute', top: 0, left: 0 }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button variant="outlined" href={link} target="_blank" rel="noopener noreferrer">
            Read More
          </Button>
        </CardContent>
      </Card>
    )}
  </Grid>
);

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNoticeData();
        setNotices(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error loading notices</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Notices
      </Typography>
      <Carousel animation="slide">
        {notices.map((notice, index) => (
          <Grid
            key={notice.id}
            container
            spacing={2}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            {index % 2 === 0 ? (
              <>
                <NoticeCard
                  title={notice.title}
                  description={notice.description}
                  image={notice.image}
                  link={notice.link}
                />
                {/* You can add more NoticeCard components here */}
              </>
            ) : (
              <NoticeCard
                title={notice.title}
                description={notice.description}
                image={notice.image}
                link={notice.link}
                isTable={true}
              />
            )}
          </Grid>
        ))}
      </Carousel>
      <Typography variant="h5" mt={4}>
        Notices Table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.title}</TableCell>
                <TableCell>{notice.description}</TableCell>
                <TableCell>
                  <Button variant="outlined" href={notice.link} target="_blank" rel="noopener noreferrer">
                    Read More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Notice;
