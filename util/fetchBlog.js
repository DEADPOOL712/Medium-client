import axios from "axios";

const fetchBlog = async (url) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default fetchBlog;
