"use client";
import { Navlinks } from "./NavLinks";
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex flex-col lg:flex-row z-50">
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
          <div className="text-gray-800 font-bold hover:cursor-pointer">
            <div className="text-lg lg:text-xl leading-tight">
              Tirupati-Balaji
            </div>
            <div className="text-sm lg:text-base leading-tight">
              CONSTRUCTIONS
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
      </div>

      {/* Navigation Links */}
      <Navlinks isMenuOpen={false} />
    </nav>
  );
}
