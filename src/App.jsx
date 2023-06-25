import env from "../config/env";
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
      {blogs.map((blog) => {
        return (
          <div>
            <h1 key={blog._id}>{blog.title}</h1>
            <h1>{blog.tags}</h1>
          </div>
        );
      })}
      <h1>hello</h1>
    </div>
  );
}

export default App;
