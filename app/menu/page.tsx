"use client";
import Link from "next/link";
import { Header } from "@/components/header";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactPage } from "@/components/address";

export default function HomePage() {
  const [view, setView] = useState<"menu" | "products" | "services">("menu");

  const menuItems = [
    { href: "/mainpage", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "#", label: "Products", onClick: () => setView("products") },
    { href: "#", label: "Services", onClick: () => setView("services") }, // changed to open services
    { href: "/ourteam", label: "Our Team" },
    { href: "/contect-us", label: "Contact Us" },
  ];

  const productsList = [
    { href: "/products/mitsubishi", label: "Mitsubishi" },
    { href: "/products/veichi", label: "Veichi" },
    { href: "/products/adtech", label: "Adtech" },
  ];

  const servicesList = [
    { href: "/services/panel", label: "Panel Board" },
    { href: "/services/autoloader", label: "Autoloader" },
    { href: "/services/cnc-machines", label: "All types of CNC Machines" },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen py-20 flex flex-col">
        <div className="relative flex-grow flex bg-cover bg-center">
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
                {view === "menu" ? "MENU" : view === "products" ? "PRODUCTS" : "SERVICES"}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Main flex container with left menu/products/services and right contact */}
          <main className="relative z-10 flex flex-col md:flex-row flex-grow px-4 sm:px-8 pt-6 md:pt-12 gap-8 md:gap-16 max-w-7xl mx-auto w-full">
            {/* Left Side: Menu / Products / Services list */}
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
                ) : view === "products" ? (
                  <motion.div
                    key="product-list"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4 sm:gap-6"
                  >
                    <button
                      onClick={() => setView("menu")}
                      className="mb-4 px-4 py-2 text-xl font-medium text-center md:text-left hover:text-red-400 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1"
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
                ) : (
                  <motion.div
                    key="service-list"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4 sm:gap-6"
                  >
                    <button
                      onClick={() => setView("menu")}
                      className="mb-4 px-4 py-2 text-xl font-medium text-center md:text-left hover:text-red-400 transition-all duration-300 ease-in-out hover:scale-105 hover:translate-x-1"
                      style={{ fontFamily: "Century Gothic, sans-serif" }}
                    >
                      <b>← Back to Menu</b>
                    </button>

                    {servicesList.map(({ href, label }) => (
                      <Link
                        key={label}
                        href={href}
                        className="px-4 py-2 text-lg sm:text-xl md:text-2xl font-semibold transition-transform duration-300 ease-in-out hover:text-green-600 hover:scale-110"
                        style={{ fontFamily: "Century Gothic, sans-serif" }}
                      >
                        {label}
                      </Link>
                    ))}

                    {/* Optional short description under services */}
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600" style={{ fontFamily: "Verdana, sans-serif" }}>
                      We provide installation, commissioning, and maintenance services for panel boards, autoloaders, and all types of CNC machines. For custom service requests, please contact us via the Contact section.
                    </p>
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
    </div>
  );
}
