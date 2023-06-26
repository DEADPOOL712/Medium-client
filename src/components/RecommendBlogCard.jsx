import Stars from "../assets/icons/stars";
import Heart from "../assets/icons/heart";
import Comment from "../assets/icons/comment";
import Bookmark from "../assets/icons/bookmark";

const RecommendBlogCard = ({ blogsOfAuthor }) => {
  return (
    <div className="flex flex-col py-4 ">
      <div className="lg:w-[326px] md:w-[290px] w-[410px] h-[215px] md:h-[164px]">
        <img
          className="w-full h-full "
          src="https://miro.medium.com/v2/resize:fit:849/1*BgmFmkor8FNiijeEGcgJzg.jpeg"
          alt="img"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 py-4">
          <img
            className="rounded-full border w-5 h-5 p-0.5"
            alt="author-img"
            src="/public/medium-icon-126.svg"
          />
          <p>{blogsOfAuthor?.author}</p>
        </div>
        <div className="pb-4 min-h-[126px]">
          <p className="font-semibold text-[20px]">{blogsOfAuthor?.title}</p>
          <p className="pt-2 text-[#777777]">
            {blogsOfAuthor?.content.slice(0, 88) + "..."}
          </p>
        </div>
        <div className="flex gap-3 ">
          <Stars />
          <span className="flex relative bottom-1.5 text-[#868686]">.</span>
          <p className="text-[13px] text-[#868686]">May 6</p>
          <span className="flex relative bottom-1.5 text-[#868686]">.</span>
          <p className=" text-[13px] text-[#868686]">5 min read</p>
        </div>
        <div className="flex justify-between pt-4 ">
          <div className="text-[#868686] flex items-center gap-4">
            <div className="flex items-center gap-1 ">
              <Heart />
              <span className="text-[16px] pb-1 font-[375]">12.5k</span>
            </div>
            <div className="flex items-center gap-1">
              <Comment />
              <span className="text-[16px] pb-1">69</span>
            </div>
          </div>
          <Bookmark />
        </div>
      </div>
    </div>
  );
};

export default RecommendBlogCard;
