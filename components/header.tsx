import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/modetoggle";

export function Header() {
  return (
    <header className="top-0 w-full z-50 bg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/motion.png"
            alt="Logo"
            width={120}
            height={48}
            className="object-contain"
          />
        </Link>

        {/* Right side nav */}
        <nav className="flex items-center space-x-4">
          <ModeToggle />

          <Link
            href="/menu"
            className="
    flex items-center gap-2 px-4 py-2 text-lg sm:text-xl font-semibold text-blue-600 
    transition duration-300 ease-in-out custom-font
    hover:text-pink-400 hover:scale-105
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400
  "
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
