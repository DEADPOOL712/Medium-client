import { useState } from "react";
import Search from "../assets/icons/search";

function Input({ text }) {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="rounded-full bg-[#fafafa]">
      <div className="flex items-center justify-center">
        <div
          className={`mx-3 ${isInputFocused ? "opacity-100" : "opacity-50"}`}
        >
          <Search />
        </div>
        <div className="pr-5 py-[10px]">
          <input
            className="bg-[#fafafa] outline-none text-[14px] w-full"
            type={text}
            placeholder="Search Medium"
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
