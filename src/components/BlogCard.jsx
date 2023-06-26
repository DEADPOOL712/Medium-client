import Tags from "./Tags";
import BookMark from "../assets/icons/bookmark";
const BlogCard = ({ blog }) => {
  return (
    <div className="m-1 p-2 max-w-[49%] max-h-40 my-6">
      <div className="flex justify-between">
        <div key={blog._id} className="w-full">
          <div className="flex items-center pb-2">
            <img
              className="rounded-full w-5 h-5"
              alt="author-img"
              src="/public/medium-icon-126.svg"
            />
            <p className="flex items-center ml-2 text-[13px]">{blog.author}</p>
          </div>
          <p className="text-[20px] font-bold">{blog.title}</p>
          <p className="">{blog.content}</p>
          <div className="flex justify-between mt-3">
            <div className="flex justify-center items-center gap-2">
              <p className="text-[13px] text-[#868686]">May 6</p>
              <span className="flex relative bottom-1 text-[#868686]">.</span>
              <p className=" text-[13px] text-[#868686]">5 min read</p>
              <span className="flex relative bottom-1 text-[#868686]">.</span>
              <Tags text={blog.tags[0]} padding={"py-1 px-2"} />
            </div>
            <BookMark />
          </div>
        </div>
        <img
          className="w-[200px] h-[134px] ml-6"
          src="https://miro.medium.com/v2/resize:fill:250:168/1*NIl1K9-UTDAuDas0TYubvA.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default BlogCard;
