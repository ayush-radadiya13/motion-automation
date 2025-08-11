"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Header } from "@/components/header";
import { ContactPage } from "@/components/address";
import { motion, Variants } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <div className="min-h-screen py-10 overflow-x-hidden">
      <Header />
      <motion.div
        className="relative py-8 flex flex-col items-center text-center space-y-4 px-6 sm:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute left-1/2 top-28 -z-10 w-[90%] max-w-4xl h-48 sm:h-72 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full -translate-x-1/2" />
        <h1 className="py-10 text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
          Contact Us
        </h1>

        <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide max-w-xl relative inline-block">
          We’re eager to discuss how our cutting-edge industrial automation
          solutions can optimize your processes, boost efficiency, and drive
          innovation. Reach out to us today!
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-[slide_3s_infinite]" />
        </span>
      </motion.div>

      {/* Form and Map Container */}
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6 md:p-12 gap-12 items-start justify-center min-h-[calc(100vh-64px)]">
        {/* Left - Form */}
        <div className="relative w-full md:w-1/2 border-4 rounded-2xl p-6 shadow-lg">
          {/* Floating circles */}
          <motion.div
            className="absolute -top-10 -left-10 w-36 h-36 rounded-full blur-xl pointer-events-none bg-blue-300 opacity-30"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full blur-2xl pointer-events-none bg-pink-300 opacity-30"
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
            <h2 className="text-2xl font-bold text-center md:text-left mb-6">
              Get in Touch
            </h2>

            {/* Name */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full rounded-lg border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                className="w-full rounded-lg border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your phone number"
                required
              />
            </motion.div>

            {/* Reason for Contact */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                Reason for Contact
              </label>
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="w-full rounded-lg border-2 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your reason for contact"
                required
              />
            </motion.div>

            {/* What's up? */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <label className="block text-sm font-medium mb-1">
                What's up?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg p-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                placeholder="Tell us more..."
                required
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold py-3 rounded-lg transition shadow-lg hover:shadow-xl text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </motion.form>
        </div>

        {/* Right - Contact Info / Map */}
        <motion.div
          className="relative w-full md:w-1/2 px-2 sm:px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <ContactPage />
        </motion.div>
      </div>

      {/* Google Map Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="rounded-md overflow-hidden shadow-lg border-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.015094779471!2d70.7940465!3d22.2283244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cb6b7ad2068b%3A0x7c6872410d836f7c!2sMotion%20Automation!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* "Have a Look" Card Section */}
      <motion.div
        className="relative py-8 flex flex-col items-center text-center space-y-4 px-6 sm:px-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="relative border  h-72 md:h-96 lg:h-[20rem] flex items-center justify-center px-6 sm:px-14 max-w-7xl mx-auto shadow-lg rounded-xl">
          <div className="pointer-events-none absolute top-0 left-0 w-full h-full bg-[url('/pngimage.png')] bg-no-repeat bg-left opacity-10" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-48 h-full bg-[url('/pattern-right.svg')] bg-no-repeat bg-right opacity-10" />

          <div className="w-full flex flex-col md:flex-row items-center md:items-center justify-between gap-6 md:gap-8 max-w-full">
            {/* Left content */}
            <div className="w-full md:max-w-[70%] break-words">
              <p className="text-sm italic mb-2 select-none">Have a Look</p>
              <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold leading-tight">
                Embark on a journey through our innovative portfolio, where
                excellence meets evolution in every project we unfold.
              </h1>
            </div>

            {/* Right button */}
            <Button
              asChild
              className="px-6 py-4 rounded-full border border-pink-700 text-pink-700 font-semibold hover:bg-pink-400 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              <Link href="/about-us">About Us</Link>
            </Button>
          </div>
        </Card>
      </motion.div>

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
