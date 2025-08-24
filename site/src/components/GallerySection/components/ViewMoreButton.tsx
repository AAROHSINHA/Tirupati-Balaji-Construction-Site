"use client";

import { ChevronDown } from "lucide-react";

interface ViewMoreButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ViewMoreButton({
  onClick,
  className = "",
}: ViewMoreButtonProps) {
  return (
    <div className="text-center mt-[1em]">
      <button
        onClick={onClick}
        className={`group inline-flex items-center gap-2 bg-transparent border-none p-2 cursor-pointer rounded-md transition-colors ${className}`}
      >
        <span className="text-sm font-normal text-gray-400 group-hover:text-gray-800">
          View More
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
      </button>
    </div>
  );
}
