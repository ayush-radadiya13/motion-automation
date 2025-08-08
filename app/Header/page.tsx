import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/modetoggle";

export function Header() {
  return (
    <header className="  top-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link href="/" className="mb-2 sm:mb-0">
          <Image
            src="/motion.png"
            alt="Logo"
            width={100}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav>
          <ModeToggle />    
          <Link
            href="/menu"
            className="px-6 py-2 text-3xl w-80 font-semibold text-blue-600 transition-all duration-300 ease-in-out hover:text-pink-400 hover:text-2xl custom-font"
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            <span className="text-3xl">☰</span>
            <span>Menu</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
