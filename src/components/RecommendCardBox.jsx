import RecommendCardItems from "./RecommendCardItems";
const RecommendCardBox = ({ blogsOfAuthor }) => {
  return (
    <div className="ml-12">
      <div className="flex flex-col">
        <span className="mb-12">More From This Author</span>
        <div className="">
          <RecommendCardItems blogs={blogsOfAuthor} />
        </div>
      </div>
    </div>
  );
};

export default RecommendCardBox;
