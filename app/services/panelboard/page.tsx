"use client";

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
          <h1 className="py-3 text-2xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400  to-pink-400 bg-clip-text text-transparent ">
            Panelboard Installation
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-semibold max-w-2xl relative">
            We provide professional panel board installation services for
            industrial, commercial, and residential applications. Our
            installation process ensures safe, efficient, and reliable power
            distribution that meets all relevant electrical safety standards.
          </p>
        </motion.div>

        {/* First Section */}
        <div className="border rounded-xl border-blue-600 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/2.jpg"
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
            <h2 className="text-2xl sm:text-3xl font-semibold">
              1. Planning and Design:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Determine the machine’s electrical requirements (voltage, current,
              control logic).
              <br /> Select appropriate components (breakers, contactors, PLCs,
              etc.). <br />
              Design the panel layout considering safety and accessibility.
            </p>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="border rounded-xl border-pink-400 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">
              2. Preparation:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Gather necessary tools and materials.
              <br /> Ensure power is switched off in the installation area.
              <br /> Check panelboard and mounting location for suitability.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/3.jpg"
              alt="Preparation"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Third Section */}
        <div className="border rounded-xl border-blue-600 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/6.jpg"
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
            <h2 className="text-2xl sm:text-3xl font-semibold">
              3. Mounting the Panelboard:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Fix the panelboard on a sturdy wall or frame near the machine.
              <br /> Use proper fasteners and ensure it is level.
            </p>
          </motion.div>
        </div>

        {/* Four Section */}
        <div className="border rounded-xl border-pink-400 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">4. Wiring:</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Connect incoming power supply cables to the main breaker.
              <br /> Wire the control circuits according to the wiring diagram.
              <br /> Connect output cables to the machine’s motors, sensors,
              actuators.
              <br /> Use appropriate cable glands and ensure cables are neatly
              arranged.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/4.jpg"
              alt="Preparation"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Five Section */}
        <div className="border rounded-xl border-blue-600 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/7.jpg"
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
            <h2 className="text-2xl sm:text-3xl font-semibold">
              5. Grounding and Safety:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Ensure proper grounding of the panelboard and machine.
              <br /> Install safety devices like emergency stops, overload
              relays.
            </p>
          </motion.div>
        </div>

        {/* Six Section */}
        <div className="border rounded-xl border-pink-400 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2 p-6 sm:p-8 space-y-4 order-2 md:order-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold">6.Testing:</h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Double-check all connections. <br />
              Power on and test the operation of the panel and machine controls.{" "}
              <br />
              Verify that protective devices work correctly.
            </p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/5.jpg"
              alt="Preparation"
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Seven Section */}
        <div className="border rounded-xl border-blue-600 flex flex-col md:flex-row items-center overflow-hidden">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/panel/8.jpg"
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
            <h2 className="text-2xl sm:text-3xl font-semibold">
              7. Documentation and Labeling:
            </h2>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Label all components and wires clearly. Keep wiring diagrams and
              manuals accessible for maintenance.
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
