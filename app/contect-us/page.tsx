"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ContactPage } from "@/components/address";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};
export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    reason: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen ">
      <Header />
      <motion.div
        className="relative py-8 flex flex-col items-center text-center space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Gradient circle behind heading */}
        <div className="absolute left-1/2 top-12 -z-10 w-[90%] max-w-4xl h-48 sm:h-64 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -translate-x-1/2" />

        <h1 className="py-10 text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Contact Us
        </h1>

        <span className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide relative inline-block max-w-xl">
          We’re eager to discuss how our cutting-edge industrial automation
          solutions can optimize your processes, boost efficiency, and drive
          innovation. Reach out to us today!
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-[slide_3s_infinite]" />
        </span>
      </motion.div>
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-12 items-center justify-center min-h-[calc(100vh-64px)]">
        {/* Left - Form */}
        <div className="relative w-full md:w-1/2 rounded-2xl p-8 shadow-lg border">
          {/* Floating circles */}
          <motion.div
            className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-xl pointer-events-none"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-48 h-48  rounded-full blur-2xl pointer-events-none"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <motion.form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className=" text-2xl font-bold text-center md:text-left mb-6">
              Contact Us
            </h2>

            {/* Name */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium e mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg p-3 border-1 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg p-3  border-1 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </motion.div>

            {/* Contact Number */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full rounded-lg p-3  border-1 focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>

            {/* Reason for Contact */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                Reason for Contact
              </label>
              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full rounded-lg p-3  border-1 focus:outline-none"
                required
              >
                <option value="">Select a reason</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            {/* What's up? */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium  mb-1">
                What's up?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg p-3 border-1 focus:outline-none resize-none"
                placeholder="Tell us more..."
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold py-3 rounded-lg transition shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>

        {/* Right - Contact Info */}
        <div
          className="w-full md:w-1/2  text-center md:text-left px-6 sm:px-2 "
          style={{ fontFamily: "Verdana, sans-serif" }}
        >
          <ContactPage />
        </div>
      </div>
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
  );
}
