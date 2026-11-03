"use client";

import React, { useState, useEffect } from "react";

interface TypewriterSubtitleProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export function TypewriterSubtitle({
  words,
  typingSpeed = 90,
  deletingSpeed = 50,
  pauseTime = 1600,
  className = "",
}: TypewriterSubtitleProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex % words.length];

    if (!isDeleting && displayedText === currentWord) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span className="font-bold text-[#1749E8] font-display">{displayedText}</span>
      <span className="w-0.5 h-5 sm:h-6 bg-[#1749E8] ml-1 inline-block animate-pulse" />
    </span>
  );
}
