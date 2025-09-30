"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading: boolean;
}

const messages = ["SENDING EMAIL", "LOADING", "ALMOST DONE"];

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [msgIndex, setMsgIndex] = useState(0);
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (!isLoading) return;

    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 3500);

    return () => clearInterval(msgInterval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return;

    const dotInterval = setInterval(() => {
      setDots((prev) => (prev.length === 3 ? "" : prev + "."));
    }, 800);

    return () => clearInterval(dotInterval);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Animated Text */}
        <p className="text-white text-lg font-semibold tracking-widest">
          {messages[msgIndex]}
          {dots}
        </p>
      </div>
    </div>
  );
}
