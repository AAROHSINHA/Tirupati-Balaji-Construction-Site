"use client";

import { useEffect, useState } from "react";

interface ConstructionLoadingProps {
  isVisible: boolean;
  onComplete?: () => void;
  duration?: number;
}

export function ConstructionLoading({
  isVisible,
  onComplete,
  duration = 3000,
}: ConstructionLoadingProps) {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        return prev + 100 / (duration / 100);
      });
    }, 100);

    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(dotsInterval);
    };
  }, [isVisible, duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <div className="text-center space-y-6">
        <div className="mx-auto w-16 h-16 relative">
          <div className="absolute inset-0 border-4 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-2 flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-500 transform rotate-45"></div>
          </div>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-white">Building{dots}</h2>
          <p className="text-gray-400 text-sm">Please wait</p>
        </div>

        <div className="w-64 h-1 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-orange-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
