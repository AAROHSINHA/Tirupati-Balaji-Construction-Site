import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 py-6 px-8 flex flex-col sm:flex-row items-center justify-between">
      {/* Left side - text */}
      <p className="text-sm text-gray-600">
        © {currentYear} by Tirupari Balaji Constructions
      </p>

      {/* Right side - icons */}
      <div className="flex space-x-3 mt-3 sm:mt-0">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          <FaFacebookF size={14} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition"
        >
          <FaLinkedinIn size={14} />
        </a>
      </div>
    </footer>
  );
}
