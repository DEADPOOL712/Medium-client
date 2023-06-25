// import env from "../config/env";
import Navbar from "./components/Navbar";
import fetchBlog from "../util/fetchBlog";
import { useEffect } from "react";
import { useState } from "react";
function App() {
  // test for fetching data from server
  const [blogs, setBlogs] = useState([]);
  const fetchData = async () => {
    const blogsRes = await fetchBlog("http://localhost:8080/random");
    setBlogs(blogsRes);
    console.log(blogsRes);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      {blogs.map((blog) => {
        return (
          <div key={blog}>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
