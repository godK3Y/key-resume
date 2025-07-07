"use client";

import { useEffect, useState } from "react";
import { skills } from "./data/skills";

export function AutoCarousel() {
  const items = [
    "key.ingkarat.29@gmail.com",
    "front end developer",
    "backend developer",
    "fullstack developer",
  ];
  const techAndTools = skills.filter(
    (skill) =>
      skill.category === "frontend" ||
      skill.category === "backend" ||
      skill.category === "tools"
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % techAndTools.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [techAndTools.length]);

  return (
    <div className="w-full bg-gradient-to-r from-background via-background to-muted/20 border-b border-border transition-colors duration-300 overflow-hidden">
      <div className="relative h-12 flex items-center">
        <div className="flex animate-scroll">
          <div className="flex items-center whitespace-nowrap gap-6 px-4">
            {items.map((item, idx) => (
              <span
                key={`static-${idx}`}
                className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground"
              >
                {item}
              </span>
            ))}
            {techAndTools.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className={`whitespace-nowrap text-sm font-light tracking-wide flex items-center gap-2 transition-all duration-500 ${
                    index === currentIndex
                      ? "text-foreground opacity-100 scale-100"
                      : "text-muted-foreground opacity-60 scale-95"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </div>
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-background via-background/90 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-background via-background/90 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
}
