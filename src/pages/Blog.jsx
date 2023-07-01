import React from "react";
import Tags from "../components/Tags";
import RecommendBlogCard from "../components/RecommendBlogCard";
import Heart from "../assets/icons/heart";
import Bookmark from "../assets/icons/bookmark";
import Comment from "../assets/icons/comment";
import Share from "../assets/icons/share";
import More from "../assets/icons/more";
import Modal from "../components/Modal";

function Blog({ data, blogs }) {
  return (
    <div className="">
      <div className="max-w-[680px] min-w-0 w-full lg:px-0 px-8 md:m-auto my-2">
        <h1 className="lg:text-[40px] md:text-[32px] text-[24px] font-bold text-[#292929] leading-tight ">
          {data.title}
        </h1>
        <div className="flex my-7 items-center">
          <div className="w-12 h-12">
            <img
              className="w-full h-full border rounded-full"
              src="https://miro.medium.com/v2/resize:fill:55:55/1*k3GDSD7MLzd9t0OzpC8Slw.jpeg"
              alt=""
            />
          </div>
          <div className="mx-2">
            <div className="flex gap-2 items-center">
              <p>{data.author}</p>
              <span className="flex relative bottom-1 text-[#868686]">.</span>
              <p className="text-green-600 font-semibold cursor-pointer">
                Follow
              </p>
            </div>
            <div className="flex gap-2 text-[#747474] text-sm font-semibold items-center">
              <p>5min read</p>
              <span className="flex relative bottom-1 text-[#868686]">.</span>
              <p>{data.date}</p>
            </div>
          </div>
        </div>
        <div className="like-bar flex items-center justify-between px-2 border-y-2 py-3 text-[#939393] my-7">
          <div className="flex justify-center items-center gap-4">
            <div className="flex cursor-pointer">
              <Heart />
              <span>4.3k</span>
            </div>
            <div className="flex cursor-pointer">
              <Comment />
              <span>33</span>
            </div>
          </div>
          <div className="flex gap-3">
            <Bookmark />
            <Share />
            <More />
          </div>
        </div>
        <div>
          {data.content}

          <div className="flex justify-center items-center my-5">
            <img
              src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*LDrgAf9MUyVYPUc-LMGY4w.jpeg"
              alt=""
            />
          </div>
          <p>
            Fast forward today — I have a 5 figure job in a profession that I
            absolutely love, I have a blog of my own and am also working on my
            way up to become a solo business owner making passive income. If you
            are someone who can relate to the paragraphs above, this one is
            solely for you — things change. Now all this did not happen
            overnight. It was followed by tremendously hard days and stressful
            nights — I could say I was in a -DIP. If you don't know about it
            already, there is a philosophy of the dip, also discussed in the
            book by Seth Godin.
          </p>
          <div className="flex justify-center items-center my-5">
            <img
              src="https://miro.medium.com/v2/resize:fit:636/format:webp/1*kd0-kA1hspZjMebnPmB8TQ.jpeg"
              alt=""
            />
          </div>
          <p>
            Thank you for reading my content. I also create notion template for
          </p>
          <p className="underline">Twitter: itsmoul</p>
          <p className="underline">Product Hunt: Smoul</p>
          <p className="underline">Linktree: itsmoul</p>
        </div>
        <div className="flex gap-2 my-9">
          {data.tags.map((tag) => {
            return <Tags text={tag} />;
          })}
        </div>
      </div>
      {/* <div className="bg-[#fafafa]">
        <div className="max-w-[680px] min-w-0 w-full lg:p-0 px-8 m-auto my-2">
          <div className="py-8">
            <span className="font-[600] text-[16px]">
              More From This Author
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 space-4 pt-8">
              {blogs.map((blog) => (
                <RecommendBlogCard key={blog._id} blogsOfAuthor={blog} />
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Blog;
