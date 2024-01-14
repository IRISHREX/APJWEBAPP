// NoticeUpdateForm.jsx
import React, { useState } from "react";
import { FormControl, InputLabel, Input, Button } from "@mui/material";

const NoticeUpdateForm = ({ initialData, onUpdate, onCancel }) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [image, setImage] = useState(null);

  const handleUpdate = () => {
    const updatedData = {
      id: initialData.id,
      title,
      description,
      image,
    };

    onUpdate(updatedData);
  };

  return (
    <form encType="multipart/form-data">
      <FormControl fullWidth>
        <InputLabel htmlFor="update-title">Title</InputLabel>
        <Input
          id="update-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="update-description">Description</InputLabel>
        <Input
          id="update-description"
          multiline
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="update-image">Image</InputLabel>
        <Input
          type="file"
          id="update-image"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Notice
      </Button>
      <Button variant="outlined" color="primary" onClick={onCancel}>
        Cancel
      </Button>
    </form>
  );
};

export default NoticeUpdateForm;
