import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitialTheme = (): "dark" | "light" => {
  // prioritas: localStorage -> prefers-color-scheme -> class di HTML
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  if (typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  // fallback: baca dari class html kalau sudah diset oleh script di <head>
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
  return "light";
};

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() => getInitialTheme());

  // Pastikan state ikut kondisi nyata saat mount (hindari hydration mismatch)
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  // Apply ke <html> + simpan ke localStorage tiap kali theme berubah
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;

    root.classList.add("theme-transitioning");
    root.classList[theme === "dark" ? "add" : "remove"]("dark");

    try {
      localStorage.setItem("theme", theme);
    } catch {}

    const t = window.setTimeout(() => {
      root.classList.remove("theme-transitioning");
    }, 500);

    return () => window.clearTimeout(t);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  // Hindari render icon salah sebelum mounted
  const isDarkMode = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`relative flex h-8 w-14 items-center rounded-full transition-colors ${
        isDarkMode ? "border border-white" : "border border-gray-800"
      }`}
    >
      <span
        className={`absolute flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white transition-transform ${
          isDarkMode ? "translate-x-6" : "translate-x-1"
        }`}
      >
        {mounted ? (
          isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />
        ) : (
          // placeholder biar gak jitter saat SSR
          <Sun className="h-4 w-4" />
        )}
      </span>
    </button>
  );
}
