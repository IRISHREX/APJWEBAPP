import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const styles = {
  accordion: {
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginBottom: '16px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease-in-out', // Added box-shadow transition
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Highlight on hover
    },
  },
  accordionSummary: {
    backgroundColor: '#007BA7',
    borderBottom: '1px solid #e0e0e0',
    borderRadius: '8px 8px 0 0',
    transition: 'background-color 0.3s ease-in-out', // Added background-color transition
    '&:hover': {
      backgroundColor: '#e0e0e0', // Darken background on hover
    },
  },
  questionText: {
    fontWeight: '600',
color:"white"
  },
  answerText: {
    padding: '16px', // Consolidated padding
    fontWeight: '600',
    transition: 'padding 0.3s ease-in-out', // Added padding transition
    backgroundColor: '#A9E0D0',

  },
};

const FaqApiMy = ({ question, answer }) => {
  return (
    <Accordion style={styles.accordion}>
      <AccordionSummary
        style={styles.accordionSummary}
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" style={styles.questionText}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography style={styles.answerText}>{answer}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqApiMy;
