"use client";

import { useEffect, useState } from "react";

import { TypingTextProps } from "@/constants/interface";

export default function TypingText({ text, speed = 80 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="font-mono text-3xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
