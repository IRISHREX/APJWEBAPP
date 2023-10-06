import axios from 'axios';

const localUrl = 'http://localhost:5000/api/login';
const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/login';

const signInUser = async (formData) => {
  const isLocal = window.location.host.includes('localhost');
  const url = isLocal ? localUrl : productionUrl;

  try {
    const response = await axios.post(url, formData);
    return response.data.accessToken; // Assuming the token is available in the response
  } catch (error) {
    throw new Error(`Error during sign-in: ${error.message}`);
  }
};

export default signInUser;
