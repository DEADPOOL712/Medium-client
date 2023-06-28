import { useState } from "react";
function Tags({ text, padding, margin, state = "", setState }) {
  const [selected, setSelcted] = useState(false);
  const clickHandler = () => {
    if (!state == "") {
      if (state.includes(text)) {
        setState(state.filter((tag) => tag !== text));
        setSelcted(false);
      } else {
        setState([...state, text]);
        setSelcted(true);
      }
    }
  };
  return (
    <div
      className={`flex  bg-[#f2f2f2] text-[#757575]  rounded-full justify-center items-center text-[13px] font-medium cursor-pointer ${
        padding ? padding : "px-2 py-1 lg:px-4 lg:py-2"
      } hover:bg-[rgba(41,41,41,0.13)] w-fit transition duration-300 ${
        margin ? margin : ""
      } ${selected ? "bg-[#7aa2ff] text-white" : ""} `}
      onClick={clickHandler}
    >
      {text}
    </div>
  );
}

export default Tags;
// 676666
