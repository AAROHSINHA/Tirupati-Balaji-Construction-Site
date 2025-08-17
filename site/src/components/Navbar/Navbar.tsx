"use client";

import { useState } from "react";
import { Navlinks } from "./components/Navlinks.tsx";
import { MobileMenuButton } from "./components/MobileMenuButton.tsx";
import { CompanyName } from "./components/CompanyName.tsx";
import ToolTip from "./components/ToolTip.tsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col lg:flex-row z-50">
      <ToolTip
        className={`${isHover ? "absolute z-10 m-[3em]" : "hidden"}`}
        setIsHover={setIsHover}
      />

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
      </div>

      {/* Navigation Links */}
      <Navlinks isMenuOpen={isMenuOpen} />
    </nav>
  );
}
