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

const AboutTeamUploader = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [teamData, setTeamData] = useState([]); // Store uploaded team data as an array of objects

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpload = () => {
    if (title && description && image) {
      const teamMemberData = {
        title,
        description,
        image: image.name, // Store the image file name
      };

      setTeamData([...teamData, teamMemberData]); // Add the uploaded team data to the teamData array

      setTitle('');
      setDescription('');
      setImage(null);
    }
  };

  const handleAddMore = () => {
    setExpanded(true); // Expand the form for adding more team data
  };

  const handleDeleteTeamMember = (index) => {
    const updatedTeamData = [...teamData];
    updatedTeamData.splice(index, 1); // Remove the team member at the specified index
    setTeamData(updatedTeamData);
  };

  const handleReset = () => {
    setTitle('');
    setDescription('');
    setImage(null);
    setTeamData([]);
  };

  const handleSubmit = () => {
    // Convert all uploaded team data to JSON format and log it to the console
    console.log(JSON.stringify(teamData, null, 2));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Team Data Uploader</Typography>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded}>
        {teamData.map((data, index) => (
          <CardContent key={index}>
            <Typography variant="h6">Team Member {index + 1}</Typography>
            <IconButton
              color="primary"
              aria-label="delete"
              onClick={() => handleDeleteTeamMember(index)}
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
            Add Team Member
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
            disabled={teamData.length === 0} // Disable if no team data has been uploaded
            style={{ marginLeft: '8px' }}
          >
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AboutTeamUploader;
