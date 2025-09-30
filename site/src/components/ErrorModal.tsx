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
                href="tel:+919987897573"
                className="text-yellow-400 hover:text-yellow-500"
              >
                +91 99878 97573
              </a>
            </div>
            <div>
              <span className="font-medium text-gray-900">Email : </span>
              <a
                href="mailto:tirupatibalajiconstruction462@gmail.com"
                className="text-yellow-400 hover:text-yellow-500"
              >
                tirupatibalajiconstruction462@gmail.com
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="https://wa.me/9987897573"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Contact on WhatsApp
              </a>
              <a
                href="tel:+9987897573"
                className="flex-1 bg-yellow-500 text-white text-center py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
