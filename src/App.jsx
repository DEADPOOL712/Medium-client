// import env from "../config/env";
import { useState, useEffect } from "react";
import fetchBlog from "../util/fetchBlog";
import BlogCard from "./components/BlogCard";
import FollowButton from "./components/FollowButton";

function App() {
  return (
    <div className="flex mx-5 my-5 gap-5">
      <h1>App page!</h1>
      <FollowButton />
    </div>
  );
}

export default App;
