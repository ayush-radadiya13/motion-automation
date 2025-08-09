// components/Footer.tsx
"use client";

import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 mt-10">
           <hr className=" my-4 border border-pink-500"/>
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center sm:justify-between gap-6">
        {/* Left side - social icons */}
        <div className="flex space-x-8">
          <a
            href="https://facebook.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-700"
            aria-label="Facebook"
          >
            <FaFacebook size={28} />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-700"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://youtube.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-700"
            aria-label="YouTube"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://instagram.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 hover:text-gray-700"
            aria-label="Instagram"
          >
            <FaInstagram size={28} />
          </a>
        </div>

        {/* Right side - created by text */}
        <p className="text-base text-center sm:text-right max-w-xs">
          © {new Date().getFullYear()} Created by{" "}
          <span className="font-semibold">Ayush Radadiya</span>
        </p>
      </div>
    </footer>
  );
}
