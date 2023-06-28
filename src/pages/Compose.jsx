import React from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../editor/Editor";
import { useState } from "react";
import postBlog from "../../util/postBlog";
import Tags from "../components/Tags";
function Compose() {
  const [content, setcontent] = useState({ value: null });
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const avilableTags = [
    "Mental health",
    "Health",
    "Seld development",
    "Tech",
    "Programming",
    "Productivity",
    "Wev Development",
    "React",
    "psychology",
    "Relationship",
    "Mindfulness",
    "Life",
    "Money",
    "Enterpreneurship",
    "Leadership",
    "Economics",
    "Religion",
    "Spirituality",
  ];

  const publishHandler = async () => {
    const body = {
      title: title,
      content: content.value,
      tags: tags,
      author: "Vaibhav",
    };
    console.log(body);
    const res = await postBlog("http://localhost:8080/publish", body);
    console.log(res);
    console.log("Published");
  };
  return (
    <div className="max-w-[628px] mx-auto mt-5 ">
      <Editor
        setEditorState={setcontent}
        editorState={content}
        title={title}
        setTitle={setTitle}
      />
      <div className="tags flex flex-wrap my-2">
        {avilableTags.map((tag) => {
          return (
            <Tags
              text={tag}
              key={tag}
              state={tags}
              setState={setTags}
              margin={"mr-1 mb-1"}
            />
          );
        })}
      </div>
      <div className="flex justify-end border-t-2 border-[#f2f2f2] py-2 ">
        <div
          className="px-3 py-1 borde text-white flex rounded-full w-fit cursor-pointer  bg-[#16a34a] "
          onClick={publishHandler}
        >
          <p>Publish</p>
        </div>
      </div>
    </div>
  );
}

export default Compose;
