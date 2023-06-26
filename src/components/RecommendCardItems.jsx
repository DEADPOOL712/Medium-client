const RecommendCardItems = ({ blogs }) => {
  console.log(blogs[0]);
  console.log("render");
  return (
    <div className="flex flex-col">
      <img
        className="w-[326px] h-[164px]"
        src="https://miro.medium.com/v2/resize:fill:250:168/1*NIl1K9-UTDAuDas0TYubvA.png"
        alt="img"
      />
      <div className="flex items-center pb-2">
        <img
          className="rounded-full w-5 h-5"
          alt="author-img"
          src="/public/medium-icon-126.svg"
        />
        <p>{blogs[0]?.author}</p>
      </div>
      {/* <div className="flex justify-center items-center gap-2">
        <p className="text-[13px] text-[#868686]">May 6</p>
        <span className="flex relative bottom-1 text-[#868686]">.</span>
        <p className=" text-[13px] text-[#868686]">5 min read</p>
        <span className="flex relative bottom-1 text-[#868686]">.</span>
      // </div> */}
    </div>
  );
};

export default RecommendCardItems;
