"use client";

import { DirectorCarousel } from "@/components/direcoter";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { TeamCarousel } from "@/components/teammembers";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Ourteam() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <motion.div
        className="relative py-16 flex flex-col items-center text-center space-y-6 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Background Glow */}
        <div className="absolute left-1/2 top-12 -z-10 w-[90%] max-w-5xl h-48 sm:h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -translate-x-1/2" />

        {/* Title */}
        <h1 className="pt-15 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Our Teams
        </h1>

        {/* Subtitle */}
        <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl">
          Meet our dedicated leaders and talented team members driving
          innovation in industrial automation.
          <span className="absolute left-0 bottom-0 w-full h-[2px] overflow-hidden">
            <span className="block w-1/2 h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-slide"></span>
          </span>
        </p>
      </motion.div>

      {/* Main Content */}
      <main className="flex-grow space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Directors Section */}
        <motion.section
          className="max-w-6xl mx-auto px-4 py-8 border-2 shadow-md rounded-lg flex flex-col items-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
            Our Director
          </h2>
          <DirectorCarousel />
        </motion.section>

        {/* Team Section */}
        <motion.section
          className="max-w-6xl mx-auto px-4 py-8 border-2 shadow-md rounded-lg flex flex-col items-center space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">
            Our Team Members
          </h2>
          <TeamCarousel />
        </motion.section>
      </main>

      {/* Keyframe Animation */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-slide {
          animation: slide 3s linear infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
}
