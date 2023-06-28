import Button from "./Button";

const DropDown = ({ children, Top, Right, Bottom, Left }) => {
  return (
    <div
      className={`z-[999] absolute right-0 flex flex-col w-[260px] py-4 border-2 border-[#ebebeb] bg-white rounded 
        ${Top ? Top : ""}
        ${Bottom ? Bottom : ""}
        ${Right ? Right : ""}
        ${Left ? Right : ""}      
      `}
    >
      {children}
    </div>
  );
};

export default DropDown;
