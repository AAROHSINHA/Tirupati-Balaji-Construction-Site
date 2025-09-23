"use client";

import { X } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ErrorModal({ isOpen, onClose }: ErrorModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors hover:cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <div className="text-center mb-12">
            <h2 className="text-1xl md:text-2xl font-bold text-gray-800 tracking-wider mb-1 mt-6">
              SOME ERROR OCCURRED
            </h2>
            <div className="w-24 h-2 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <div>
              <span className="font-medium text-gray-900">Phone : </span>
              <a
                href="tel:+1234567890"
                className="text-yellow-400 hover:text-yellow-500"
              >
                +1 (234) 567-8900
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-900">Email : </span>
              <a
                href="mailto:support@example.com"
                className="text-yellow-400 hover:text-yellow-500"
              >
                support@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
