"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/modetoggle";
import { usePathname } from "next/navigation";

export function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    // Hide header immediately on route change
    setShowHeader(false);

    // Show header after 300ms delay (simulate loading end)
    const timeout = setTimeout(() => {
      setShowHeader(true);
    },);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down → hide header
        if (showHeader) setShowHeader(false);
      } else {
        // Scrolling up → show header
        if (!showHeader) setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showHeader]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 shadow-md bg-white dark:bg-black ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:py-1">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/motion.png"
            alt="Logo"
            width={80}
            height={30}
            className="object-contain"
          />
        </Link>

        {/* Right nav */}
        <nav className="flex items-center space-x-4">
          <ModeToggle />
          <Link
            href="/menu"
            className="flex items-center gap-2 px-4 py-2 text-lg sm:text-xl font-semibold text-blue-600 transition duration-300 ease-in-out custom-font hover:text-pink-400 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400"
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            <span className="text-2xl leading-none transition-transform duration-300 ease-in-out group-hover:rotate-90">
              ☰
            </span>
            <span>Menu</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
