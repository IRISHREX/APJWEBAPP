// SignUpService.js
import axios from 'axios';
const signUpUser = async (data) => {
  console.log('data',data);
  try {
    const response = await axios.post('http://localhost:5000/api/users', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error during sign-up: ${error.message}`);
  }
};

export default signUpUser;