const BlogCard = ({ blogs }) => {
  return (
    <div className="text-black m-1 p-2 w-[45%] h-[20%]">
      {blogs.map((blog) => {
        return (
          <div key={blog._id}>
            <div className="flex">
              <img alt="author-img" src="/public/medium-icon-126.svg" />
              <p>author Name</p>
            </div>
            <p>{blog.title}</p>
            <p>{blog.author}</p>
            <p>{blog.content}</p>
            <p>{blog.tags}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
