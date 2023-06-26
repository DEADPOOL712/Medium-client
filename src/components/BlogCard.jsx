import Tags from "./Tags";
import BookMark from "../assets/icons/bookmark";
const BlogCard = ({ blog }) => {
  return (
    <div className="m-1 p-2 w-[49%] h-[20%]">
      <div className="flex justify-between">
        <div key={blog._id} className="w-full">
          <div className="flex mb-3">
            <img
              className="rounded-full w-5 h-5"
              alt="author-img"
              src="/public/medium-icon-126.svg"
            />
            <p className="flex items-center ml-2 text-[13px]">{blog.author}</p>
          </div>
          <p className="text-[20px] font-bold">{blog.title}</p>
          <p>{blog.content}</p>
          <div className="flex justify-between">
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
          className="w-[200px] h-[134px]"
          src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TUEbbjZ0BUQutZ6951Wg6Q.jpeg"
          alt="img"
        />
      </div>
    </div>
  );
};

export default BlogCard;
