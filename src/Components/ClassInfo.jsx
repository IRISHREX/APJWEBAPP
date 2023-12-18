// ClassInfo.jsx
import React from 'react';
import {
  Typography,
  Slider,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Card,
  CardContent,
  Paper,
} from '@mui/material';
import { AccessAlarm as ClockIcon } from '@mui/icons-material'; // Import the Clock icon

const classTimings = [
  { className: 'Class A', timing: '10:00 AM - 12:00 PM', faculty: 'John Doe', link: 'https://meet.google.com/qhh-sjru-gvg?authuser=0' },
  { className: 'Class B', timing: '2:00 PM - 4:00 PM', faculty: 'Jane Smith', link: '/class-b' },
  // Add more class timings as needed
];

const syllabusData = [
  { className: 'HISTORY', syllabus: 'COVID 19' },
  // Add more syllabus data as needed
];

const ClassInfo = () => {
  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      {/* Transparent Green Overlay with Shadow */}
      <Paper
        elevation={10}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          height: '50%',
          backgroundColor: 'rgba(76, 175, 80, 0.7)', // Transparent green
          border: '2px solid rgba(76, 175, 80, 0.7)', // Border color same as background
          boxShadow: '0 0 20px rgba(76, 175, 80, 0.7)', // Shadow color same as background
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          FEATURE COMING SOON...
        </Typography>
        {/* You can add more content or customize the overlay as needed */}
      </Paper>

      {/* Slider Section */}
      <div style={{ zIndex: 1 }}>
        <Typography variant="h4">Class Timings</Typography>
        <Slider
          min={0}
          max={classTimings.length - 1}
          valueLabelDisplay="auto"
          valueLabelFormat={(index) => classTimings[index].className}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {classTimings.map((classTime) => (
            <div key={classTime.className} style={{ textAlign: 'center', margin: 10 }}>
              <Typography variant="subtitle1">{classTime.className}</Typography>
              <ClockIcon style={{ fontSize: 40 }} />
              <Typography variant="caption">{classTime.timing}</Typography>
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div style={{ zIndex: 1 }}>
        <Typography variant="h4">Class Schedule</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Class Name</TableCell>
                <TableCell>Class Timing</TableCell>
                <TableCell>Faculty</TableCell>
                <TableCell>Link</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {classTimings.map((row) => (
                <TableRow key={row.className}>
                  <TableCell>{row.className}</TableCell>
                  <TableCell>{row.timing}</TableCell>
                  <TableCell>{row.faculty}</TableCell>
                  <TableCell>{row.link}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Syllabus Cards Section */}
      <div style={{ zIndex: 1 }}>
        <Typography variant="h4">Syllabus</Typography>
        {syllabusData.map((item) => (
          <Card key={item.className} style={{ width: 200, margin: 10 }}>
            <CardContent>
              <Typography variant="h6">{item.className}</Typography>
              <Typography>{item.syllabus}</Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassInfo;
