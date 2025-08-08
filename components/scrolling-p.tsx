"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressCircle() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.round(scrollPercent));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide when scroll progress is 0%
  if (scrollProgress === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 flex flex-col items-center z-50">
      <div
        className="relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        {/* Rotating Text */}
        <svg
          className="absolute w-full h-full animate-spin-slow"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>
          <text fontSize="6" fill="">
            <textPath href="#circlePath" startOffset="0%">
              • MOTION AUTOMATION - RAJKOT • MOTION AUTOMATION - RAJKOT
            </textPath>
          </text>
        </svg>

        {/* Progress Percentage */}
        <span className="absolute text-sm font-bold">
          {scrollProgress}%
        </span>

        {/* Outer Dot */}
        <div
          className="absolute w-2 h-2  rounded-full"
          style={{
            transform: `rotate(${(scrollProgress / 100) * 360}deg) translate(40px)`,
          }}
        ></div>
      </div>
    </div>
  );
}
