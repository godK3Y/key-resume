"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function SplitTextWordsReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Wait for fonts to be ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => runAnimation());
    } else {
      runAnimation();
    }

    function runAnimation() {
      gsap.set(ref.current, { opacity: 1 });

      // Split into words
      const split = SplitText.create(ref.current, {
        type: "words",
        wordsClass: "word++",
        wordDelimiter: String.fromCharCode(8205),
      });

      gsap.from(split.words, {
        y: -100,
        opacity: 0,
        rotation: () => gsap.utils.random(-80, 80),
        stagger: 0.1,
        duration: 1,
        ease: "back",
      });
    }
  }, [text]);

  return (
    <p ref={ref} className={`split ${className || ""}`} style={{ opacity: 0 }}>
      {text}
    </p>
  );
}
