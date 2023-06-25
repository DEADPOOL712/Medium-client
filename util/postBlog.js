import axios from "axios";

const fetchBlog = async (url, body) => {
  try {
    const res = await axios.post(url, body);
    return res;
  } catch (err) {
    throw err;
  }
};

export default fetchBlog;
