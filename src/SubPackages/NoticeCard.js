import React from 'react';
import { Paper, Card, CardMedia, CardContent, Typography, Button, Grid, Box } from '@mui/material';

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

export default NoticeCard;
