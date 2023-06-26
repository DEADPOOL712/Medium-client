// import env from "../config/env";
import { useState, useEffect } from "react";
import fetchBlog from "../util/fetchBlog";
import BlogCard from "./components/BlogCard";

function App() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    const blogsFromServer = await fetchBlog("http://localhost:8080/random");
    setBlogs(blogsFromServer);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="">
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

export default App;
