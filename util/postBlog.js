import axios from "axios";

const fetchBlog = async (url, body) => {
  const res = await axios.post(url, body);
  return res;
};

export default fetchBlog;
