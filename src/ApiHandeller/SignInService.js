import axios from 'axios';

const localUrl = 'http://localhost:5000/api/login';
const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/login';
// const productionUrl = 'http://localhost:5000/api/login';

const signInUser = async (formData) => {
  const isLocal = window.location.host.includes('localhost');
  const url = isLocal ? localUrl : productionUrl;

  try {
    const response = await axios.post(url, formData);
    return {
      userType: response.data.userType,
      accessToken: response.data.accessToken,
      userEmail: response.data.userEmail,
      user: response.data.username,
    };
  } catch (error) {
    throw error;
  }
};

export default signInUser;
