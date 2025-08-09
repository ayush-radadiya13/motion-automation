"use client";
import Link from "next/link";
import { Header } from "@/components/header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactPage } from "@/components/address";

export default function HomePage() {
  const [view, setView] = useState<"menu" | "products">("menu");

  const menuItems = [
    { href: "/mainpage", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "#", label: "Products", onClick: () => setView("products") },
    { href: "/login", label: "Services" },
    { href: "/login", label: "Our Team" },
    { href: "/contect-us", label: "Contact Us" },
  ];

  const productsList = [
    { href: "/products/mitsubishi", label: "Mitsubishi" },
    { href: "/products/veichi", label: "Veichi" },
    { href: "/products/adtech", label: "Adtech" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header stays on top */}
      <Header />

      {/* Main content area */}
      <div className="relative flex-grow flex bg-cover bg-center">
        {/* Background big text behind left side */}
        <div className="absolute inset-0 flex items-center justify-center md:justify-start pl-0 md:pl-10 pointer-events-none z-0 select-none">
          <AnimatePresence mode="wait">
            <motion.h1
              key={view}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.05, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-[40px] sm:text-[80px] md:text-[140px] lg:text-[180px] font-bold text-center md:text-left leading-tight"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              {view === "menu" ? "MENU" : "PRODUCTS"}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Main flex container with left menu/products and right contact */}
        <main className="relative z-10 flex flex-col md:flex-row flex-grow px-4 sm:px-8 pt-6 md:pt-12 gap-8 md:gap-16 max-w-7xl mx-auto w-full">
          {/* Left Side: Menu or Products list */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 text-center md:text-left">
            <AnimatePresence mode="wait" initial={false}>
              {view === "menu" ? (
                <motion.div
                  key="menu-links"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {menuItems.map(({ href, label, onClick }) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={onClick || undefined}
                      className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:text-blue-700 hover:scale-110"
                      style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="product-list"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-4 sm:gap-6"
                >
                  {/* Back Button */}
                  <button
                    onClick={() => setView("menu")}
                    className="
                      mb-4 px-4 py-2 text-xl font-medium 
                      text-center md:text-left
                      hover:text-red-400                 
                      transition-all duration-300 ease-in-out
                      hover:scale-105 hover:translate-x-1
                    "
                    style={{ fontFamily: "Century Gothic, sans-serif" }}
                  >
                    <b>← Back to Menu</b>
                  </button>

                  {productsList.map(({ href, label }) => (
                    <Link
                      key={label}
                      href={href}
                      className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:text-pink-400 hover:scale-110"
                      style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Side: Contact Info */}
          <div
            className="w-full md:w-1/2 p-4 sm:p-6 sm:py-0 text-sm sm:text-base md:text-lg text-center md:text-left"
            style={{ fontFamily: "Verdana, sans-serif" }}
          >
            <ContactPage />
          </div> 
        </main>
      </div>
    </div>
  );
}
