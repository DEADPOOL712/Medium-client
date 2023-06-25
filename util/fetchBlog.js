import axios from "axios";

const fetchBlog = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export default fetchBlog;
