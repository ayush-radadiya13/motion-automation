"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";
import { CarouselPlugin } from "@/components/autoimagescrooling";
import { Card } from "@/components/ui/card";
import ScrollProgressCircle from "@/components/scrolling-p";
import Footer from "@/components/footer";
import { ModeToggle } from "@/components/modetoggle";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function HomePage() {
  return (
    <div>
      <header className="top-0 w-full z-50 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/motion.png"
              alt="Logo"
              width={90}
              height={30}
              className="object-contain"
            />
          </Link>

          {/* Right side nav */}
          <nav className="flex items-center space-x-4 h-full">
            <ModeToggle />

          <Link
            href="/menu"
            className="
    flex items-center gap-2 px-4 py-2 text-lg sm:text-xl font-semibold text-blue-600 
    transition duration-300 ease-in-out custom-font
    hover:text-pink-400 hover:scale-105
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400
  "
            style={{ fontFamily: "Century Gothic, sans-serif" }}
          >
            <span className="text-2xl leading-none transition-transform duration-300 ease-in-out group-hover:rotate-90">
              ☰
            </span>
            <span>Menu</span>
          </Link>
          </nav>
        </div>
      </header>

      <div
        className="min-h-screen flex bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url('/finalimage.jpg')`,
        }}
      >
        <main
          className="
      flex flex-col items-center 
      justify-center lg:justify-start 
      w-full px-4 sm:px-8
      pt-0 lg:pt-24
      space-y-6
    "
        >
          <div className="max-w-4xl w-full space-y-8 text-center animate-fade-in">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 py-1 rounded"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              Welcome to
              <br /> MOTION AUTOMATION
            </h2>
            <p
              className="px-3 sm:px-6 md:px-8 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed text-white"
              style={{ fontFamily: "Century Gothic, sans-serif" }}
            >
              "Smart automation solutions tailored for complex industrial motion
              control challenges."
            </p>
            <Button
              asChild
              className="px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300"
            >
              <Link href="/about-us">About Us</Link>
            </Button>
          </div>
        </main>
      </div>

      {/* Achievements Section */}
      <div className="py-10 flex justify-center text-center px-4 sm:px-0">
        <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Achivements
        </h1>
      </div>

      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 w-full px-4 sm:px-0"
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
          className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full md:w-1/2 object-cover mx-auto mb-6 md:mb-0"
        />

        <div className="w-full md:w-1/2 space-y-2">
          <h6 className="text-2xl sm:text-3xl font-semibold text-blue-600">
            Motion Automation
          </h6>
          <p className="text-base sm:text-lg leading-relaxed">
            “Motion Automation”, Have Been Engaged in Designing, Developing and
            Supplying a Wide Variety of Industrial Automation Products and
            Solutions, Incorporated in the Year 2016 at Rajkot Gujarat, India.We
            are Dealing in Product Ragne Like PLC, HMI,VFD, AC Servo Motor, CNC
            Controller, CNC Autoloader System and Electrical Control Panels.
            <br />
            <br />
            MOTION AUTOMATION Was Founded In 2016 with a Vision to Support and
            Make Rapid Growth on Industrialization of Nation and make some great
            changes in industrial World. People around the world always trust
            MOTION AUTOMATION.
          </p>
        </div>
      </motion.div>

      {/* What we offer Section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8 w-full px-4 sm:px-0 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <section className="max-w-7xl mx-auto sm:text-lg px-0 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div>
            <p className="text-sm uppercase mb-2 text-[#1E2549] leading-tight">
              What we offer
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1E2549] leading-tight">
              Automation Solutions <br /> For All Industries
            </h2>
          </div>

          {/* Right side */}
          <div className="text-base leading-relaxed">
            <p className="mb-4">
              Our Experience Engineers and Technicians are committed to solving
              your need. We develop the Automation Solution as per Your
              requirement.
            </p>
            <p>
              By implementing motion automation solutions, industries can
              increase efficiency, reduce labor costs, and improve overall
              productivity.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Products Section Title */}
      <div className="py-12 flex justify-center text-center px-4 sm:px-0">
        <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PRODUCTS
        </h1>
      </div>

      {/* Products Carousel */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 w-full px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="flex justify-center w-full">
          <CarouselPlugin />
        </div>
      </motion.div>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto sm:text-lg px-4 sm:px-6 py-20 gap-8 items-center w-full">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-16 text-center md:text-left w-full"
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
            className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out w-full md:w-1/2 object-cover mx-auto mb-6 md:mb-0"
          />
          <div className="w-full md:w-1/2 space-y-3">
            <p className="text-base sm:text-md leading-relaxed">
              <b>PROFESSIONAL APPROACH</b>
            </p>
            <h6 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-blue-600">
              World Class Quality Is Our Priority
            </h6>
            <p className="text-base sm:text-xl leading-relaxed">
              <b>
                Motion Automation is a team of experienced employee contractor
                and expert engineer.
              </b>
            </p>
            <p>
              We Work Under The Enthusiastic guidance of Our Team Member. Our
              Team Have vast Experience in This Domain of Work.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Info Card Section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-16 text-center md:text-left px-4 sm:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <Card className="w-full rounded-lg gap-20 px-6 sm:px-14 border-2 border-blue-400">
          <section className="flex flex-col sm:flex-row items-center justify-between max-w-7xl py-10 px-2 sm:px-6">
            <div className="max-w-xl text-center sm:text-left mb-8 sm:mb-0">
              <p className="text-sm font-semibold italic mb-2">
                Don't be weird.
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight">
                Would you like more information or do you have a question?
              </h2>
            </div>
            <Button
              asChild
              className="px-8 py-6 rounded-full border-2 border-blue-700 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              <Link href="/about-us">About Us</Link>
            </Button>
          </section>
        </Card>
      </motion.div>

      <ScrollProgressCircle />

      <Footer />
    </div>
  );
}
