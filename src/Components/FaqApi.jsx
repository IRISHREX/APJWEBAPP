import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const styles = {
  accordion: {
    border: '1px solid #e0e0e0',
    boxShadow: 'none',
    marginBottom: '10px',
    borderRadius: '5px',
  },
  accordionSummary: {
    backgroundColor: '#f5f5f5',
  },
  questionText: {
    fontWeight: 'bold',
  },
  answerText: {
    paddingLeft: '16px',
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
