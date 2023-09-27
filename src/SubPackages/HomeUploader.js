import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Collapse,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const HomeUploader = ({ onAddHomeData }) => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpload = () => {
    // Check if title and description are not empty
    if (title && description) {
      const homeData = { title, description };
      onAddHomeData(homeData);

      // Clear input fields
      setTitle('');
      setDescription('');
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Home Data</Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded}>
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
          {/* Add file upload input */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default HomeUploader;
