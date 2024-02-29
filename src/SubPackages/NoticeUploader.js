import React, { useState } from "react";
import Axios from "axios";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  IconButton,
  Collapse,
  Divider,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Delete as DeleteIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import { createNoticeData } from "./FetchNoticeData";

const localUrl = "http://localhost:5000/api/noticeData";
const productionUrl =
  "https://tame-hospital-gown-mite.cyclic.app/api/noticeData";

const isLocal = window.location.hostname === "localhost";
const apiUrl = isLocal ? localUrl : productionUrl;

const NoticeUploader = () => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notices, setNotices] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleUpload = async () => {
    if (title && description) {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);

      const bearerToken = localStorage.getItem("bearerToken");

      if (!bearerToken) {
        console.error("Bearer token not found.");
        return [];
      }

      try {
        const response = await Axios.post(apiUrl, {title,description}, {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            "Content-Type": "application/x-www-form-urlencoded"       
             },
          
        });

        console.log(response.data);

        setNotices([...notices, response.data]);

        setTitle("");
        setDescription("");
      } catch (error) {
        console.error("Error uploading notice:", error);
      }
    }
  };

  const handleAddMore = () => {
    setExpanded(true);
  };

  const handleDeleteNotice = (index) => {
    const updatedNotices = [...notices];
    updatedNotices.splice(index, 1);
    setNotices(updatedNotices);
  };

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setNotices([]);
  };

  const handleSubmit = () => {
    createNoticeData(...notices).then((res)=>console.log(res)).catch((err)=>console.log(err))
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
          {/* <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          /> */}
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
            style={{ marginLeft: "8px" }}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            // disabled={notices.length === 0}
            style={{ marginLeft: "8px" }}
          >
            Upload
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default NoticeUploader;
