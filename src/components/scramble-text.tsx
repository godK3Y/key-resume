"use client";
import React, { useState, useRef, useEffect } from "react";

const LETTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export default function ScrambleText({ text, className }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const runScramble = () => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDisplay(() => {
        return text
          .split("")
          .map((char, i) => {
            if (i < iteration) return text[i];
            return LETTERS[Math.floor(Math.random() * LETTERS.length)];
          })
          .join("");
      });
      iteration += 1 / 2;
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 30);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      runScramble();
    }, 1000); // 500ms delay before scramble starts

    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // Only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  //   const handleMouseEnter = () => {
  //     runScramble();
  //   };

  //   const handleMouseLeave = () => {
  //     if (intervalRef.current) clearInterval(intervalRef.current);
  //     setDisplay(text);
  //   };

  return (
    <span
      className={className}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      {display}
    </span>
  );
}
