import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  LinkedIn,
  Twitter,
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import {
  avatarStyles,
  cardStyles,
  descriptionStyles,
} from "../Components/Util";
import UpdateForm from "./UpdateForm";
import { Avatar } from "@mui/material";

const AboutCard = ({ member, onUpdate, onDelete, onGetById }) => {
  const {
    name = "",
    role = "",
    description = "",
    imageSrc = "",
    socialLinks = {},
    email="",
  } = member;
  const { linkedin = "", twitter = "" } = socialLinks || {};

  const [isUpdateFormOpen, setUpdateFormOpen] = useState(false);

  const userType = localStorage.getItem("userType");

  const handleUpdate = () => {
    setUpdateFormOpen(true);
  };

  const handleDelete = () => {
    try {
      if (userType === "admin") {
        onDelete(email);
        console.log("Deleted");
      } else {
        console.log("Permission denied: User is not admin");
      }
    } catch (error) {
      console.error("Deletion failed:", error);
    }
  };

  const handleGetById = () => {
    try {
      onGetById(email);
    } catch (error) {
      console.error("Fetch by ID failed:", error);
    }
  };

  const handleFormUpdate = (updatedData) => {
    onUpdate(email, updatedData);
    setUpdateFormOpen(false);
  };

  return (
    <Card style={cardStyles}>
      <CardContent>
        <Avatar alt={name} src={imageSrc} style={avatarStyles} />
        <Typography variant="h6" align="center" gutterBottom color={'#670ca6'}>
          {name}
        </Typography>
        <Typography variant="subtitle1" align="center">
          {role}
        </Typography>
        <Typography variant="body2" style={descriptionStyles}>
          {description}
        </Typography>

        <div style={{ textAlign: "center", marginTop: "15px" }}>
          {linkedin && (
            <IconButton
              component="a"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </IconButton>
          )}
          {twitter && (
            <IconButton
              component="a"
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </IconButton>
          )}

          {userType === "admin" && (
            <>
              <IconButton onClick={()=>handleUpdate(email)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </>
          )}

          <IconButton onClick={handleGetById}></IconButton>
        </div>

        {isUpdateFormOpen && (
          <UpdateForm
            member={member}
            onUpdate={handleFormUpdate}
            closeUpdateForm={() => setUpdateFormOpen(false)}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default AboutCard;
