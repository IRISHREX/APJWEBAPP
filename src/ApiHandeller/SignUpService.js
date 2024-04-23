import axios from 'axios';

const localUrl = 'http://localhost:5000/api/users';
const productionUrl = 'https://tame-hospital-gown-mite.cyclic.app/api/users';


const signUpUser = async (data) => {
  const isLocal = window.location.host.includes('localhost');
  const url = isLocal ? localUrl : productionUrl;

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default signUpUser;
