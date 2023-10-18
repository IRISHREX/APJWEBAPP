import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
  Grid,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { toast, ToastContainer } from 'react-toastify';

import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

import {
  fetchNoticeData,
  updateNoticeData,
  deleteNoticeData,
  getNoticeDataById,
} from '../SubPackages/FetchNoticeData';

// Import your NoticeUpdateForm component
import NoticeUpdateForm from '../SubPackages/NoticeUpdateForm';
import NoticeCard from '../SubPackages/NoticeCard';

const userType = localStorage.getItem('userType');

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNoticeData, setSelectedNoticeData] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNoticeData();
        setNotices(data);
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

  // const handleUpdateNotice = async (updatedData) => {
  //   try {
  //    const { id } = selectedNoticeData; // Assuming your notice data has an 'id' property
  //    await updateNoticeData(id, updatedData);

  //    // await updateNoticeData(updatedData);
  //     await fetchNoticeData(); // Refresh data
  //     toast.success('Notice updated successfully!');
  //   } catch (error) {
  //     console.error('Update failed:', error);
  //     toast.error('Failed to update notice.');
  //   } finally {
  //     setIsUpdateFormOpen(false); // Close the form
  //   }
  // };
  const handleUpdateNotice = async (updatedData) => {

    // Extract image file if present
       const { id } = selectedNoticeData; // Assuming your notice data has an 'id' property

    let imageToUpdate = null;
    if(updatedData.image) {
      const imageData = fileToBase64(updatedData.image);
      
      imageToUpdate = {
        name: updatedData.image.name,
        type: updatedData.image.type,
        image: imageData
      }
    }
  
    const dataToUpdate = {
      title: updatedData.title, 
      description: updatedData.description,
      image: imageToUpdate // pass reshaped image object
    }
  
    // Call API 
    await updateNoticeData(id, dataToUpdate);
  
  }
  
  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result); 
      reader.onerror = error => reject(error);
    });
  }

  const handleDelete = async (id) => {
    try {
      await deleteNoticeData(id);
      await fetchNoticeData(); // Refresh data
      toast.success('Notice deleted successfully!');
    } catch (error) {
      console.error('Deletion failed:', error);
      toast.error('Failed to delete notice.');
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
          <Grid
            key={notice.id}
            container
            spacing={2}
            direction={index % 2 === 0 ? 'row' : 'row-reverse'}
          >
            {index % 2 === 0 ? (
              <>
                <NoticeCard
                  title={notice.title}
                  description={notice.description}
                  image={notice.image}
                  link={notice.link}
                />
                {/* You can add more NoticeCard components here */}
              </>
            ) : (
              <NoticeCard
                title={notice.title}
                description={notice.description}
                image={notice.image}
                link={notice.link}
                isTable={true}
              />
            )}
          </Grid>
        ))}
      </Carousel>
      <Typography variant="h5" mt={4}>
        Notices Table
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {notices.map((notice) => (
              <TableRow key={notice.id}>
                <TableCell>{notice.title}</TableCell>
                <TableCell>{notice.description}</TableCell>
                <TableCell>
                  {userType === 'admin' && (
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
