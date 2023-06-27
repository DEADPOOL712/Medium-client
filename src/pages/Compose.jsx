import React from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../editor/Editor";
import { useState } from "react";
function Compose() {
  const [blog, setBlog] = useState({ value: null });
  const publishHandler = () => {
    console.log(blog);
    console.log("Published");
  };
  return (
    <div className="max-w-[628px] mx-auto mt-10 ">
      <Editor setEditorState={setBlog} editorState={blog} />
      <div
        className="px-3 py-1 border border-black flex rounded-full w-fit cursor-pointer  bg-green-300"
        onClick={publishHandler}
      >
        <p>Publish</p>
      </div>
    </div>
  );
}

export default Compose;
