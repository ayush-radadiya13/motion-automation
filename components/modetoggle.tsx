"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | "system"
      | null;
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  function applyTheme(theme: "light" | "dark" | "system") {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      // system
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }

  function toggleTheme() {
    let nextTheme: "light" | "dark" | "system";
    if (theme === "light") nextTheme = "dark";
    else if (theme === "dark") nextTheme = "light";
    else {
      // If system, toggle based on current actual
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      nextTheme = prefersDark ? "light" : "dark";
    }
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative"
    >
      <Sun
        className={`h-5 w-5 transition-transform duration-500 ${
          theme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 transition-transform duration-500 ${
          theme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"
        }`}
      />
    </Button>
  );
}
