import { Children } from "react";

const Button = ({ children, bgColor, textColor }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={"rounded-full bg-green-600 text-[14px] py-2 px-3 leading-4"}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
