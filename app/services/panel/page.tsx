"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import ScrollProgressCircle from "@/components/scrolling-p";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function AlternatingImageContent() {
  return (
    <div>
      <Header />
      <div className="min-h-screen py-16 flex flex-col gap-12 px-4 sm:px-8 lg:px-16">
        {/* Heading Section */}
        <motion.div
          className="relative py-8 flex flex-col items-center text-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="absolute left-1/2 top-12 -z-10 w-[90%] max-w-4xl h-48 sm:h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -translate-x-1/2" />
          <h1 className="py-5 text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            Panel-board
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold max-w-2xl relative">
            A panel board (All Type Of Panel Board) is an essential component of
            an electrical distribution system, designed to safely manage and
            distribute electrical power within a facility. It houses circuit
            breakers, fuses, and other protective devices, ensuring safe and
            efficient control of electrical circuits.
            <br />
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-[slide_3s_infinite]" />
          </p>
          <p className="text-base sm:text-lg md:text-3xl font-semibold max-w-2xl relative">
            Why Install a Panel Board?
          </p>
          <Button
            asChild
            className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-5 rounded-full border-2  border-blue-700 text-blue-700 font-semibold hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 hover:text-white transition-colors duration-300"
          >
            <Link href="/services/panelboard">Learn More....</Link>
          </Button>
        </motion.div>

        {/* First Section */}
        <div className=" flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/9.jpg"
              alt="Planning and Design"
              className="w-full  h-auto max-h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl text-blue-600 sm:text-3xl font-semibold">
              1. CNC , VMC & SPM Machine Electrical Control Panel
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our CNC, VMC & SPM Machine Electrical Control Panels <br />
              are precision-engineered to provide reliable,
              <br /> safe, and efficient control for <br />
              high-performance manufacturing machinery.
              <br /> Designed with industry-grade components,
              <br /> these panels ensure smooth machine operation,
              <br /> maximum uptime, and compliance with safety standards.
            </p>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className=" flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
              2. Hydraulic SPM, NC/CNC Machine Electrical Control Panel
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Our Hydraulic SPM (Special Purpose Machine) and NC/CNC Machine
              <br />
              Electrical Control Panels are designed for precision control,
              <br /> high reliability,
              <br /> and safe operation in demanding industrial environments.
              <br /> Built with advanced automation technology,
              <br /> these panels ensure smooth performance,
              <br /> minimal downtime, and long service life.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/10.jpg"
              alt="Preparation"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/11.jpg"
              alt="Planning and Design"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 text-center md:text-left"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-600">
              3. All Kind of PLC/APFC/PCC/MCC Electrical Control Panel
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              We design, manufacture, and supply all kinds of industrial
              electrical control panels
              <br /> to meet the power distribution, automation, <br />
              and energy efficiency needs of diverse industries. <br />
              Our panels are built with premium-quality components,
              <br /> ensuring safety, reliability, and long service life even in
              demanding environments.
            </p>
          </motion.div>
        </div>

        {/* Animation Keyframes */}
        <style jsx>{`
          @keyframes slide {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </div>
      <ScrollProgressCircle />
      <Footer />
    </div>
  );
}
