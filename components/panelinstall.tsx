"use client";

import { motion } from "framer-motion";
import { Header } from "./header";

export default function AlternatingImageContent() {
  return (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col space-y-20 p-8 bg-gray-50">
        {/* First section: Image left, content right */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <motion.div
            className="md:w-1/2 w-full h-64 md:h-96"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/panel/1.jpg"
              alt="First section image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full p-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Planning and Design:
            </h2>
            <p className="text-gray-600">
              Determine the machine’s electrical requirements (voltage, current,
              control logic). <br/>Select appropriate components (VFD,
              Driver, PLCs, etc.). <br/> Design the panel layout considering
              safety and accessibility.
            </p>
          </motion.div>
        </div>

        {/* Second section: Content left, image right */}
        <div className="flex flex-col md:flex-row items-center md:space-x-10">
          <motion.div
            className="md:w-1/2 w-full p-6 order-2 md:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-gray-800">
              Preparation:
            </h2>
            <p className="text-gray-600">
              Gather necessary tools and materials. <br/>Ensure power is switched off
              in the installation area. <br/>Check panelboard and mounting location
              for suitability.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full h-64 md:h-96 order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/panel/2.jpg"
              alt="Second section image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
