// PdfData.js
import collection101 from '../Components/Documents/collection101.pdf'
import java101 from '../Components/Documents/java101.pdf'
import notice1 from '../Components/Documents/notice1.pdf'
import si from '../Components/Documents/si.pdf'



const pdfData = [
    {
        id: 1,
        name: 'Java 101',
        description: 'This is the second sample PDF',
        file: java101, // Replace with the actual PDF content in base64 format
      },
    {
      id: 2,
      name: 'collection101',
      description: 'This is the first sample PDF',
      file: collection101, // Replace with the actual PDF content in base64 format
    },
    {
      id: 3,
      name: 'THE WEBSITE MAKER',
      description: 'HI I AM SOHEL ISLAM AND HERE IS MY RESUME BELOW SO YOU CAN SEE MY EXPERIENCE AND SKILLS',
      file: si, // Replace with the actual PDF content in base64 format
    },
    {
        id: 4,
        name: 'Orientation Program for PROGOTI 1.0',
        description: 'Orientation Program for PROGOTI 1.0- Batch Students Date: 5 December 2023.Time: 8:15 PM',
        file: notice1, // Replace with the actual PDF content in base64 format
      },
  ];
  
  export default pdfData;
  