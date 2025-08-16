import type React from "react";

// import ToolTip from "./ToolTip";
interface CompanyNameInterface {
  title: string;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CompanyName = ({ title, setIsHover }: CompanyNameInterface) => {
  return (
    <div
      className="text-gray-800 font-bold hover:cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="text-lg lg:text-xl leading-tight">{title}</div>
      <div className="text-sm lg:text-base leading-tight">CONSTRUCTIONS</div>
    </div>
  );
};
