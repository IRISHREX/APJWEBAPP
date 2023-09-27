import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Collapse,
  Divider,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
} from '@mui/icons-material';

const HomeUploader = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [uploads, setUploads] = useState([]); // Store uploaded data as an array of objects

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpload = () => {
    if (title && description && image) {
      const homeData = {
        title,
        description,
        image: image.name, // Store the image file name
      };

      setUploads([...uploads, homeData]); // Add the uploaded data to the uploads array

      setTitle('');
      setDescription('');
      setImage(null);
    }
  };

  const handleAddMore = () => {
    setExpanded(true); // Expand the form for adding more data
  };

  const handleDeleteSet = (index) => {
    const updatedUploads = [...uploads];
    updatedUploads.splice(index, 1); // Remove the data set at the specified index
    setUploads(updatedUploads);
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setImage(null);
    setUploads([]);
  };

  const handleSubmit = () => {
    // Convert all uploaded data to JSON format and log it to the console
    console.log(JSON.stringify(uploads, null, 2));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Home Data Uploader</Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded}>
        {uploads.map((data, index) => (
          <CardContent key={index}>
            <Typography variant="h6">Set {index + 1}</Typography>
            <IconButton
              color="primary"
              aria-label="delete"
              onClick={() => handleDeleteSet(index)}
            >
              <DeleteIcon />
            </IconButton>
            <Typography variant="subtitle1">Title: {data.title}</Typography>
            <Typography variant="body1">Description: {data.description}</Typography>
            <Typography variant="body1">Image: {data.image}</Typography>
            <Divider />
          </CardContent>
        ))}
        <CardContent>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Description"
            fullWidth
            multiline
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Add Data
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleAddMore}
            startIcon={<AddIcon />}
          >
            Add More
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleReset}
            startIcon={<RefreshIcon />}
            style={{ marginLeft: '8px' }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={uploads.length === 0} // Disable if no data has been uploaded
            style={{ marginLeft: '8px' }}
          >
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default HomeUploader;
