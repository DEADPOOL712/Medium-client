// import env from "../config/env";
import { useState, useEffect } from "react";
import fetchBlog from "../util/fetchBlog";
import BlogCard from "./components/BlogCard";
import FollowButton from "./components/FollowButton";

function App() {
  return (
    <div className="">
      {/* {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))} */}
      <FollowButton />
    </div>
  );
}

export default App;
