"use client";
import Link from "next/link";
import { Header } from "../Header/page";

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-cover justify-center bg-center overflow-hidden">
      <Header />

      {/* Background Text */}
      <div className="absolute top-1/2 left-4 md:left-10 transform -translate-y-1/2 pointer-events-none z-0">
        <h1
          className="text-[60px] sm:text-[100px] md:text-[160px] lg:text-[200px] font-bold opacity-5 select-none"
          style={{ fontFamily: "Century Gothic, sans-serif" }}
        >
          MENU
        </h1>
      </div>

      <main className="relative z-10 flex-grow flex flex-col md:flex-row px-4 sm:px-8 py-6 gap-8 md:gap-12">
        {/* Left Side: Menu Links */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full md:w-1/2 animate-fade-in">
          {[
            { href: "/mainpage", label: "Home" },
            { href: "/about-us", label: "About Us" },
            { href: "/login", label: "Products" },
            { href: "/login", label: "Services" },
            { href: "/login", label: "Our Team" },
            { href: "/login", label: "Contact Us" },
          ].map(({ href, label }) => (
            <Link
              key={label}
              href={href}
              className="px-4 py-2 text-xl sm:text-2xl font-semibold transition-all duration-300 ease-in-out hover:text-blue-700 hover:text-2xl custom-font w-full sm:w-auto"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right Side: Info Sections */}
        <div
          className="w-full md:w-1/2 p-6 sm:p-12 flex flex-col gap-6 text-base sm:text-lg animate-fade-in"
          style={{ fontFamily: "Verdana, sans-serif" }}
        >
          {/* Address */}
          <section>
            <h2 className="font-bold text-lg sm:text-xl mb-2 text-blue-600">
              Address
            </h2>
            <p>Plot No.15, Survey No.20, Near Punam Dumper,</p>
            <p>Gondal Road, Vavdi, Rajkot,</p>
            <p>Rajkot - 360004, Gujarat, India</p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-bold text-lg sm:text-xl mb-2 text-blue-600">
              Contact
            </h2>
            <p>We’d love to talk about how we can work together.</p>
            <p>+91 9998212691</p>
            <p>motionautomationrajkot@gmail.com</p>
          </section>

          {/* Follow Us */}
          <section>
            <h2 className="font-bold text-lg sm:text-xl mb-2 text-blue-600">
              Follow Us
            </h2>
            <div className="flex gap-6 text-sm sm:text-base">
              {/* Replace text with icons if you want */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600"
              >
                Instagram
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-opacity-60 text-center p-4 text-sm sm:text-base">
        <p>2025 © Made with ♥ by Ayush Radadiya</p>
      </footer>
    </div>
  );
}
