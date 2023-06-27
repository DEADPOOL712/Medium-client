const Button = ({ children, bgColor, textColor, hoverEffect, rounded }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`text-[14px] py-2 px-3 leading-4 
        ${bgColor ? bgColor : ""} 
        ${textColor ? textColor : ""}
        ${rounded ? "rounded-full" : ""}
        ${hoverEffect ? hoverEffect : ""}
      `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
