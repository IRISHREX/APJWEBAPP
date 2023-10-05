// SignInService.js
import axios from 'axios';

const signInUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/login', formData);
    return response.data.accessToken; // Assuming the token is available in the response
  } catch (error) {
    throw new Error(`Error during sign-in: ${error.message}`);
  }
};

export default signInUser;
