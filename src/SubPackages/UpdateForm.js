import React, { useState } from 'react';
import { Button, Grid, TextField, InputLabel, Avatar } from '@mui/material';

const UpdateForm = ({ member, onUpdate, closeUpdateForm }) => {
  const [formData, setFormData] = useState({
    username: member.name || '',
    password: member.password || '',
    userType: member.userType || '',
    avatar: member.imageSrc || null,
    team: member.team || '',
    description: member.description || '',
    role: member.role || '',
    linkedin: member.socialLinks?.linkedin || '',
    twitter: member.socialLinks?.twitter || '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    setFormData((prevData) => ({
      ...prevData,
      avatar: file,
    }));
  };

  const handleUpdate = () => {
    const updatedData = {
      username: formData.username,
      password: formData.password,
      userType: formData.userType,
      avatar: formData.avatar,
      team: formData.team,
      description: formData.description,
      role: formData.role,
      socialLinks: "https://www.linkedin.com/in/sohel-islam-7491341a3",
    };

    onUpdate(updatedData);
  };

  const formFields = [
    { label: 'Username', name: 'username', value: formData.username },
    { label: 'Password', name: 'password', value: formData.password },
    { label: 'User Type', name: 'userType', value: formData.userType },
    { label: 'Avatar', name: 'avatar', type: 'file', onChange: handleImageUpload },
    { label: 'Team', name: 'team', value: formData.team },
    { label: 'Description', name: 'description', value: formData.description },
    { label: 'Role', name: 'role', value: formData.role },
    { label: 'LinkedIn', name: 'linkedin', value: formData.linkedin },
  ];

  return (
    <form>
      <Grid container spacing={2}>
        {formFields.map((field) => (
          <Grid item xs={12} key={field.name}>
            {field.type === 'file' ? (
              <>
                <InputLabel>{field.label}</InputLabel>
                <input
                  accept="image/*"
                  style={{ display: 'none' }}
                  id={field.name}
                  type="file"
                  name={field.name}
                  onChange={field.onChange}
                />
                <label htmlFor={field.name}>
                  <Button component="span" variant="outlined" fullWidth>
                    Upload {field.label}
                  </Button>
                </label>
                {formData.avatar && (
                  <Avatar
                  src={formData.avatar}
                    alt={`${field.label} Preview`}
                    style={{ marginTop: '10px', width: '100px', height: '100px' }}
                  />
                  
                )}
              </>
            ) : (
              <TextField
                label={field.label}
                variant="outlined"
                fullWidth
                name={field.name}
                value={field.value}
                onChange={handleFormChange}
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default UpdateForm;
