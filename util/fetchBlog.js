import axios from "axios";

const fetchBlog = async (url) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export default fetchBlog;
