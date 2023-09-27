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

const NoticeUploader = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [notices, setNotices] = useState([]); // Store uploaded notices as an array of objects

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpload = () => {
    if (title && description && image) {
      const noticeData = {
        title,
        description,
        image: image.name, // Store the image file name
      };

      setNotices([...notices, noticeData]); // Add the uploaded notice to the notices array

      setTitle('');
      setDescription('');
      setImage(null);
    }
  };

  const handleAddMore = () => {
    setExpanded(true); // Expand the form for adding more notices
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = [...notices];
    updatedNotices.splice(index, 1); // Remove the notice at the specified index
    setNotices(updatedNotices);
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setImage(null);
    setNotices([]);
  };

  const handleSubmit = () => {
    // Convert all uploaded notices to JSON format and log it to the console
    console.log(JSON.stringify(notices, null, 2));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Notice Data Uploader</Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded}>
        {notices.map((notice, index) => (
          <CardContent key={index}>
            <Typography variant="h6">Notice {index + 1}</Typography>
            <IconButton
              color="primary"
              aria-label="delete"
              onClick={() => handleDeleteNotice(index)}
            >
              <DeleteIcon />
            </IconButton>
            <Typography variant="subtitle1">Title: {notice.title}</Typography>
            <Typography variant="body1">
              Description: {notice.description}
            </Typography>
            <Typography variant="body1">Image: {notice.image}</Typography>
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
            Add Notice
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
            disabled={notices.length === 0} // Disable if no notices have been uploaded
            style={{ marginLeft: '8px' }}
          >
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NoticeUploader;
