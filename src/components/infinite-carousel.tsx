"use client";

import { skills } from "./data/skills";

export function InfiniteCarousel() {
  const techAndTools = skills.filter(
    (skill) =>
      skill.category === "frontend" ||
      skill.category === "backend" ||
      skill.category === "tools"
  );

  return (
    <div className="w-full bg-gradient-to-r from-background via-background to-muted/20 border-b border-border transition-colors duration-300 overflow-hidden">
      <div className="relative h-12 flex items-center">
        <div className="flex animate-scroll">
          <div className="flex items-center whitespace-nowrap gap-6 px-4">
            {techAndTools.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.id}
                  className="flex items-center gap-2 text-sm font-light tracking-wide text-muted-foreground"
                >
                  <Icon className="w-5 h-5" />
                  {skill.name}
                </span>
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
