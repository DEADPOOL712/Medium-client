import React from "react";
import Tags from "../components/Tags";
function Blog({ data }) {
  console.log(data.tags[0]);
  return (
    <div className="max-w-[680px] min-w-0 w-full m-auto my-2">
      <h1 className="text-[40px] font-bold text-[#292929] leading-tight ">
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
          absolutely love, I have a blog of my own and am also working on my way
          up to become a solo business owner making passive income. If you are
          someone who can relate to the paragraphs above, this one is solely for
          you — things change. Now all this did not happen overnight. It was
          followed by tremendously hard days and stressful nights — I could say
          I was in a -DIP. If you don't know about it already, there is a
          philosophy of the dip, also discussed in the book by Seth Godin.
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
  );
}

export default Blog;
