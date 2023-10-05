import axios from 'axios';

const fetchNoticeData = async () => {
  try {
    // Retrieve token from localStorage
   const  bearerToken=localStorage.getItem('bearerToken');

    if (!bearerToken) {
      console.error('Bearer token not found.');
      return [];
    }

    console.log('Token reached:', bearerToken);
    console.log('stored Token :', bearerToken);

    const response = await axios.get('http://localhost:5000/api/noticeData', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    const notices = response.data.map((notice) => ({
      id: notice.id,
      title: notice.title,
      description: notice.description,
      image: notice.image,
      link: notice.link,
    }));

    return notices;
  } catch (error) {
    console.error('Error fetching notice data:', error);
    return [];
  }
};

export default fetchNoticeData;
