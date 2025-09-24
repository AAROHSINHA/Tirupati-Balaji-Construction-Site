"use client";

import { Link } from "react-router-dom";

interface ViewMoreButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ViewMoreButton({
  onClick,
  className = "",
}: ViewMoreButtonProps) {
  return (
    <div className="text-center mt-[2em]">
      <button
        onClick={onClick}
        className={`group inline-flex items-center gap-2 bg-transparent border-none p-2 cursor-pointer rounded-md transition-colors ${className}`}
      >
        <span className="text-md font-normal text-gray-400 group-hover:text-gray-800">
          <Link to={"/gallery"}>View More</Link>
        </span>
        {/* <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" /> */}
      </button>
    </div>
  );
}
