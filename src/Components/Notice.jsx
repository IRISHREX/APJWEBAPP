import React, { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Slide,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { toast, ToastContainer } from "react-toastify";

import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

import {
  fetchNoticeData,
  updateNoticeData,
  deleteNoticeData,
} from "../SubPackages/FetchNoticeData";

// Import your NoticeUpdateForm component
import NoticeUpdateForm from "../SubPackages/NoticeUpdateForm";
import NoticeCard from "../SubPackages/NoticeCard";
import NoticeData from "../SubPackages/NoticeData";

const userType = localStorage.getItem("userType");

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNoticeData, setSelectedNoticeData] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let dataToBeShown;
      try {
        const data = await fetchNoticeData();
        if (data.length === 0) {
          dataToBeShown = NoticeData;
        } else {
          dataToBeShown = data;
        }
        setNotices(dataToBeShown);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (selectedNotice) => {
    setSelectedNoticeData(selectedNotice);
    setIsUpdateFormOpen(true);
  };

  const handleUpdateNotice = async (updatedData) => {
    // Extract image file if present
    const { id } = selectedNoticeData; // Assuming your notice data has an 'id' property

    let imageToUpdate = null;
    if (updatedData.image) {
      const imageData = fileToBase64(updatedData.image);

      imageToUpdate = {
        name: updatedData.image.name,
        type: updatedData.image.type,
        image: imageData,
      };
    }

    const dataToUpdate = {
      title: updatedData.title,
      description: updatedData.description,
      image: imageToUpdate, // pass reshaped image object
    };

    // Call API
    await updateNoticeData(id, dataToUpdate);
  };

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  const handleDelete = async (id) => {
    try {
      await deleteNoticeData(id);
      await fetchNoticeData(); // Refresh data
      toast.success("Notice deleted successfully!");
    } catch (error) {
      console.error("Deletion failed:", error);
      toast.error("Failed to delete notice.");
    }
  };

  if (loading) {
    return <Typography variant="h4">Loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h4">Error loading notices</Typography>;
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Notices
      </Typography>
      <Carousel animation="slide">
        {notices.map((notice, index) => (
          <Grid key={notice.id} container spacing={2} direction={"row"}>
            (
            <NoticeCard
              title={
                <Typography
                  variant="h6"
                  style={{ fontWeight: "bold", color: "red" }}
                >
                  {notice.title}
                </Typography>
              }
              description={notice.description}
              image={notice.image}
              link={notice.link}
              isTable={true}
            />
            )
          </Grid>
        ))}
      </Carousel>
      <Typography variant="h5" mt={4}>
        Notices Table
      </Typography>
      <TableContainer
        component={Paper}
        style={{
          border: "1px solid #4CAF50",
          borderRadius: "8px",
          overflow: "hidden",
          margin: "16px 0",
          background: "#E0F2F1",
        }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#81C784" }}>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices?.map((notice) => (
              <Slide direction="up" in={true} key={notice.id}>
                <TableRow
                  hover
                  style={{
                    "&:hover": {
                      backgroundColor: "#4CAF50",
                      transition: "background-color 0.3s ease",
                    },
                  }}
                >
                  <TableCell>{notice.title}</TableCell>
                  <TableCell>{notice.description}</TableCell>
                  <TableCell>
                    {userType === "admin" && (
                      <>
                        <IconButton onClick={() => handleUpdate(notice)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(notice.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              </Slide>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Conditionally render the update form */}
      {isUpdateFormOpen && (
        <NoticeUpdateForm
          initialData={selectedNoticeData}
          onUpdate={handleUpdateNotice}
          onCancel={() => setIsUpdateFormOpen(false)}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default Notice;
