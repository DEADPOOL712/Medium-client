import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import "./style.css";

export const Editor = ({ setEditorState, editorState }) => {
  // const [state, setState] = React.useState({ value: null });
  const handleChange = (value) => {
    setEditorState({ value });
  };
  return (
    <div className="text-editor">
      <input
        type="text"
        className="bg-[#fefcfc] px-2 py-2 font-semibold outline-none border border-[#eaecec] w-full my-2 rounded-lg"
        placeholder="blog title ..."
      />
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={editorState.value}
        onChange={handleChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
