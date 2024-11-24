import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList[isDarkMode ? "add" : "remove"]("dark");
  }, [isDarkMode]);

  const toggleTheme = () => {
    document.documentElement.classList.add("theme-transitioning");
    setIsDarkMode((prev) => !prev);

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transitioning");
    }, 500);
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        className={`relative flex h-8 w-14 items-center rounded-full transition-colors ${
          isDarkMode ? "border border-white" : "border border-gray-800"
        }`}
      >
        <span
          className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white transition-transform ${
            isDarkMode ? "translate-x-1" : "translate-x-6"
          }`}
        >
          {isDarkMode ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </span>
      </button>
    </>
  );
}
