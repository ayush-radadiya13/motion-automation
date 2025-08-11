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
              src="/images/image1.jpg"
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
              Amazing Features on Left Image
            </h2>
            <p className="text-gray-600">
              This section shows an image on the left with content on the right.
              Smooth animations make it elegant.
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
              Content on Left, Image on Right
            </h2>
            <p className="text-gray-600">
              Now the content is on the left side, and the image on the right
              side. Responsive and clean design.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full h-64 md:h-96 order-1 md:order-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/image2.jpg"
              alt="Second section image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
