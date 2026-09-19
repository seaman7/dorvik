"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-md border border-[#262630] bg-[#141418] opacity-60" />
    );
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="relative flex items-center justify-center w-8 h-8 rounded-md transition-all border border-[#262630] bg-[#141418] hover:bg-[#1f1f26] text-neutral-300 hover:text-white dark:border-[#262630] dark:bg-[#141418] dark:hover:bg-[#1f1f26] light:border-[#d1d5db] light:bg-[#ffffff] light:text-neutral-700 light:hover:text-black shadow-sm"
      title={isLight ? "Switch to Night / Dark Theme" : "Switch to Day / Light Theme"}
      aria-label="Toggle Night/Day Theme"
    >
      {isLight ? (
        /* Moon Icon (When in Day mode, click for Night) */
        <svg
          className="w-4 h-4 text-neutral-800 transition-transform duration-200 hover:-rotate-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        /* Sun Icon (When in Night mode, click for Day) */
        <svg
          className="w-4 h-4 text-amber-300 transition-transform duration-200 hover:rotate-45"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </button>
  );
}
