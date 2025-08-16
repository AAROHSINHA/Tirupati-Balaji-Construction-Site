"use client";

import { useEffect, useState } from "react";
import { Navlinks } from "./components/Navlinks.tsx";
import { MobileMenuButton } from "./components/MobileMenuButton.tsx";
import { CompanyName } from "./components/CompanyName.tsx";
import ToolTip from "./components/ToolTip.tsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [className, setClassName] = useState("hidden absolute z-10 m-[3em]");

  useEffect(() => {
    if (!isHover) {
      setClassName("hidden absolute z-10 m-[3em]");
    } else setClassName("absolute z-10 m-[3em]");
  }, [isHover]);

  return (
    <nav className="w-full flex flex-col lg:flex-row">
      <ToolTip className={className} setIsHover={setIsHover} />
      {/* Logo Section */}
      <div className="bg-yellow-400 px-6 py-4 lg:px-8 lg:py-6 flex items-center justify-between lg:justify-start lg:min-w-80">
        <div className="flex items-center space-x-3">
          {/* Cube Icon */}
          <div className="w-8 h-8 lg:w-10 lg:h-10 relative">
            <div className="absolute inset-0 border-2 border-gray-800 transform rotate-12">
              <div className="w-full h-full border border-gray-800 transform -translate-x-1 -translate-y-1"></div>
            </div>
          </div>
          {/* Company Name */}
          <CompanyName title="TIRUPATI BALAJI" setIsHover={setIsHover} />
        </div>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        {/* <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-800 hover:text-gray-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}
      </div>

      {/* Navigation Links */}
      <Navlinks isMenuOpen={isMenuOpen} />
    </nav>
  );
}
