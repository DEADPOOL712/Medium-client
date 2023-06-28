const Button = ({
  children,
  bgColor,
  textColor,
  hoverEffect,
  rounded,
  padding,
  margin,
}) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className={`lg:text-[14px] text-[13px] leading-3 lg:leading-4 
        ${bgColor ? bgColor : ""} 
        ${textColor ? textColor : ""}
        ${rounded ? `rounded-full ${rounded}` : ""}
        ${hoverEffect ? hoverEffect : ""}
        ${padding ? padding : ""}
        ${margin ? margin : ""}
      `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
