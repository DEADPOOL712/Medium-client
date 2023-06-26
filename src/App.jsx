// import env from "../config/env";
import { useState, useEffect } from "react";
import fetchBlog from "../util/fetchBlog";
import BlogCard from "./components/BlogCard";
import FollowButton from "./components/FollowButton";
import Tags from "./components/Tags";
import Blog from "./pages/Blog";

const BlogData = {
  title: "How I turned my life around in 8 months! (Philosophy of 'The Dip')",
  content: `I was in my final year of college this year and I was a vessel of anxiety, depressions and fear. I was afraid to see what the world has to offer me next. I was afraid to let my parents down. I was afraid to disappoint myself. I was afraid to let all my potential go to waste.

  I knew there was a lot of focus in me but I was unable to channel it in a fruitful manner. While all the people around me were getting 5 figure jobs or working in a wonderful environment, I was still struggling to value myself let alone get a job. Day after day I began to question if I even had it in me. I started to wonder should I settle for something less or should I change my ambitions. This constant bickering in my head was pulling my self confidence down.
  
  Fast forward today — I have a 5 figure job in a profession that I absolutely love, I have a blog of my own and am also working on my way up to become a solo business owner making passive income. If you are someone who can relate to the paragraphs above, this one is solely for you — things change.

  Now all this did not happen overnight. It was followed by tremendously hard days and stressful nights — I could say I was in a -DIP. If you don't know about it already, there is a philosophy of the dip, also discussed in the book by Seth Godin.

  `,
  tags: ["Productivity", "Mindfulness", "Motivation"],
  author: "smoul",
  likes: 337,
  date: "Nov 27,2023",
};

function App() {
  return (
    <div className="">
      <Blog data={BlogData} />
    </div>
  );
}

export default App;
