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
} from '@mui/material';
import { AccessAlarm as ClockIcon } from '@mui/icons-material';
import FeatureComingSoonOverlay from '../context/FeatureComingSoonOverlay';

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
    <FeatureComingSoonOverlay>
      <div style={{ position: 'relative', height: '100vh' }}>
        {/* Transparent Green Overlay with Shadow */}
        <Typography variant="h4" style={{ marginBottom: 20 }}>
          FEATURE COMING SOON...
        </Typography>

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
    </FeatureComingSoonOverlay>
  );
};

export default ClassInfo;
