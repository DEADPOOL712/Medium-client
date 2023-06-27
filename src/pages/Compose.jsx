import React from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../editor/Editor";
import { useState } from "react";
import postBlog from "../../util/postBlog";
function Compose() {
  const [content, setcontent] = useState({ value: null });
  const publishHandler = async () => {
    console.log(content);
    const body = {
      title: "The title of the blog",
      content: content.value,
      tags: ["tag1", "tag2", "tag3"],
      author: "Vaibhav",
    };
    const res = await postBlog("http://localhost:8080/publish", body);
    console.log(res);
    console.log("Published");
  };
  return (
    <div className="max-w-[628px] mx-auto mt-10 ">
      <Editor setEditorState={setcontent} editorState={content} />
      <div
        className="px-3 py-1 border border-black flex rounded-full w-fit cursor-pointer  bg-green-300"
        onClick={publishHandler}
      >
        <p>Publish</p>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content.value }} />
    </div>
  );
}

export default Compose;
