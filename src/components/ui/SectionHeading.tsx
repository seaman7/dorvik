import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  className,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <span
            className={cn(
              "inline-block w-1.5 h-1.5 rounded-full",
              isDark ? "bg-[#1D4ED8]" : "bg-[#111111]"
            )}
          />
          <p
            className={cn(
              "text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase",
              isDark ? "text-[#8E8E88]" : "text-[#6B6B6B]"
            )}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15]",
          isDark ? "text-[#F7F7F3]" : "text-[#111111]"
        )}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-[#9E9E98]" : "text-[#6B6B6B]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
