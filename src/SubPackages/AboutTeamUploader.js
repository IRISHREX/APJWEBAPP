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

const AboutTeamUploader = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Team data </Typography>
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
          <TextField label="Title" fullWidth />
          <TextField label="Description" fullWidth multiline />
          {/* Add file upload input */}
          <Button variant="contained" color="primary">
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AboutTeamUploader;
