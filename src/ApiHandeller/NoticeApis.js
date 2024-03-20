import axios from "axios";

const localUrl = "http://localhost:5000/api/noticeData";
const productionUrl =
  "https://tame-hospital-gown-mite.cyclic.app/api/noticeData";

const getApiUrl = () => {
  const isLocal = window.location.host.includes("localhost");
  return isLocal ? localUrl : productionUrl;
};

const fetchNoticeData = async (pg) => {
  let PageNO=pg||0;
  const url = getApiUrl();
  const urlModified=url+`/?page=${PageNO}`

  try {
    const bearerToken = localStorage.getItem("bearerToken");
    if (!bearerToken) {
      console.error("Bearer token not found.");
      return [];
    }

    const response = await axios.get(urlModified, {
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
    console.error("Error fetching notice data:", error);
    return [];
  }
};

const createNoticeData = async (updatedData) => {
  // console.log("Updating team member with ID:", id);
  console.log("Updated data:", updatedData);
  const url = `${getApiUrl()}`;

  try {
    const bearerToken = localStorage.getItem("bearerToken");
    if (!bearerToken) {
      console.error("Bearer token not found.");
      return null;
    }

    const response = await axios.post(url, updatedData, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error `, error);
    return null;
  }
};

const deleteNoticeData = async (id) => {
  const url = `${getApiUrl()}/${id}`;

  try {
    const bearerToken = localStorage.getItem("bearerToken");
    if (!bearerToken) {
      console.error("Bearer token not found.");
      return false;
    }

    await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return true;
  } catch (error) {
    console.error(`Error deleting notice data with ID ${id}:`, error);
    return false;
  }
};

const getNoticeDataById = async (id) => {
  const url = `${getApiUrl()}/${id}`;

  try {
    const bearerToken = localStorage.getItem("bearerToken");
    if (!bearerToken) {
      console.error("Bearer token not found.");
      return null;
    }

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error(`Error fetching notice data with ID ${id}:`, error);
    return null;
  }
};

export {
  fetchNoticeData,
  createNoticeData,
  deleteNoticeData,
  getNoticeDataById,
};
