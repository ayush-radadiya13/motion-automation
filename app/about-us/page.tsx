"use client";

import React from "react";
import Image from "next/image";
import { Header } from "../Header/page";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, type Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import ScrollProgressCircle from "@/components/scrolling-p";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};
const stats = [
  { value: 1037, label: "Project Completed" },
  { value: 156, label: "Qualified Team" },
  { value: 90, label: "Client Satisfaction", suffix: "%" },
  { value: 9, label: "Year of Experience", suffix: "+" },
];

export default function AboutUsPage() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div className="min-h-screen relative ">
      <Header />

      {/* Decorative Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none">
        <div className="w-[300px] h-[300px] sm:w-[800px] sm:h-[800px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full" />
      </div>

      <div className="px-4 sm:px-6 md:px-12 py-6 max-w-7xl mx-auto">
        {/* Section 1: About Us */}
        <motion.div
          className="py-8 flex flex-col items-center text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="py-10 text-3xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            About Us
          </h1>
          <span className="text-xl sm:text-2xl md:text-4xl font-semibold tracking-wide relative inline-block max-w-xl">
            THE COMPREHENSIVE AUTOMATION SOLUTIONS PARTNER
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-[slide_3s_infinite]" />
          </span>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mt-4 px-2 sm:px-0">
            At <b className="text-pink-400">MOTION AUTOMATION</b> we specialize
            in delivering cutting-edge motion automation solutions that empower
            industries to work smarter, faster, and more efficiently. With years
            of expertise in industrial robotics, precision motion control, and
            automated systems, we provide tailored solutions that enhance
            productivity, reduce downtime, and ensure consistent quality.
          </p>
        </motion.div>

        <motion.div
          className="py-16 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 mb-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/mainimage.jpg"
            alt="Team"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hover:scale-105 transition w-full md:w-1/2 object-cover mx-auto"
            priority
          />
          <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0">
            <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
              WE PROUDLY LEAD THE WORLD'S FUTURE
            </h6>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              We are Providing Total Automation Solutions for almost all
              industries. We have our expert professionals team to support and
              develop new application and solutions as per customer
              requirements. Our teams of expert professionals have complete
              knowledge about their respective fields and updated with latest
              technology. The most important think is the communication and
              strong relations with our customers helping us to staying ahead of
              our competitors.
            </p>
          </div>
        </motion.div>

        {/* Core Values Section */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-16 text-center md:text-left w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Image
            src="/core values.jpg"
            alt="Core Values"
            width={600}
            height={400}
            className="rounded-lg shadow-lg hover:scale-105 transition w-full md:w-1/2 object-cover mx-auto"
            priority
          />
          <div className="w-full md:w-1/2 space-y-4 px-2 md:px-0">
            <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
              CORE VALUES
            </h6>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
              {`1. Utmost customer satisfaction through consistency.\n
2. People are our strength; their growth is our growth.\n
3. Excellence in products enhances customer value.\n
4. Quality is our hallmark.\n
5. Delivery is our reliability.\n
6. Teamwork is our effectiveness.`}
            </p>
          </div>
        </motion.div>

        {/* Core Value Cards */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="py-4">
            <h1 className="text-xl sm:text-3xl font-bold text-blue-600">
              OUR CORE VALUES
            </h1>
          </div>
          <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 border">
            {[
              {
                title: "Gratitude",
                desc: "We uphold the highest standards of integrity in all actions.",
              },
              {
                title: "Growth",
                desc: "We continually seek to improve and innovate.",
              },
              {
                title: "Converge",
                desc: "We strive for excellence in all aspects of our business.",
              },
              {
                title: "Contribute",
                desc: "We work together to meet customer needs and help our company win.",
              },
            ].map((value, idx) => (
              <Card
                key={idx}
                className="shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="max-w-4xl mx-auto mt-12 space-y-8 text-center md:text-left px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="py-6 flex justify-center text-center">
            <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              OUR MISSION & OUR VISION
            </h1>
          </div>

          <Card className="rounded-lg border shadow-md p-4 sm:p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
              <Image
                src="/mission.jpg"
                alt="Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full md:w-1/2 object-cover mx-auto"
                priority
              />
              <div className="w-full md:w-1/2 space-y-2 px-2 md:px-0">
                <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
                  Our Mission
                </h6>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  To be the leader in Industrial Automation by providing
                  professional and customized solutions exceeding customer
                  delight through innovation and continuously upgrading our
                  process & skills to meet their needs.
                </p>
              </div>
            </div>
          </Card>

          <Card className="rounded-lg border shadow-md p-4 sm:p-6">
            <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6 text-center md:text-left">
              <Image
                src="/vision.jpg"
                alt="Vision"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full md:w-1/2 object-cover mx-auto"
                priority
              />
              <div className="w-full md:w-1/2 space-y-2 px-2 md:px-0">
                <h6 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600">
                  Our Vision
                </h6>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  To be one among the leading automation solution providers and
                  become the world's most trustable brand in architecture,
                  engineering, manufacturing, and application services.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Final Section */}
        <motion.section
          className="px-4 sm:px-1 py-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase mb-2">
              Quality Work
            </p>
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              We Develop Top <br /> Production Solutions
            </div>
            <p className="mt-4 sm:mt-2 leading-relaxed text-sm sm:text-base">
              “Motion Automation” has been engaged in designing, developing, and
              supplying a wide variety of industrial automation products since
              2016 in Rajkot, Gujarat, India. We deal in PLC, HMI, VFD, AC Servo
              Motor, CNC Controller, CNC Autoloader System, and Electrical
              Control Panels.
            </p>
          </div>

          <div className="relative w-full h-[300px] sm:h-[450px] flex justify-center items-center">
            <div className="opacity-50 relative w-[250px] sm:w-[550px] h-[250px] sm:h-[450px] mx-auto">
              <Image
                src="/automation.jpg"
                alt="Automation"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[260px] sm:w-[220px] h-[300px] shadow-lg rounded-lg overflow-hidden">
              <Image
                src="/female.jpg"
                alt="Worker"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* Stats Section */}
      <section
        ref={ref}
        className="py-6 px-4 sm:px-8 flex flex-col items-center max-w-7xl mx-auto"
      >
        <Card className="w-full rounded-lg gap-6 p-10 border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl sm:text-5xl font-bold">
                  {inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix || ""}
                    />
                  )}
                </h2>
                <p className="mt-2 text-lg sm:text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Card>
      </section>

      <ScrollProgressCircle />

      {/* Slide underline animation */}
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
