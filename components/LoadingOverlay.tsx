"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface LoadingOverlayProps {
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LoadingOverlay({ setLoading }: LoadingOverlayProps) {
  const pathname = usePathname();
  const [internalLoading, internalSetLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      internalSetLoading(true);
      if (setLoading) setLoading(true);
      setProgress(0);

      if (progressInterval.current) clearInterval(progressInterval.current);

      progressInterval.current = setInterval(() => {
        setProgress((old) => {
          if (old >= 90) {
            if (progressInterval.current)
              clearInterval(progressInterval.current);
            return old;
          }
          return Math.min(old + Math.floor(Math.random() * 10) + 5, 90);
        });
      }, 200);

      previousPathname.current = pathname;

      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          internalSetLoading(false);
          if (setLoading) setLoading(false);
          setProgress(0);
        }, 300);
        if (progressInterval.current) clearInterval(progressInterval.current);
      }, 1000);
    }
  }, [pathname, setLoading]);

  if (!internalLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loading-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-900 to-pink-900 bg-opacity-100 backdrop-blur-md"
      >
        {/* Logo with subtle animation */}
        <motion.img
          src="/motion.png"
          alt="motion automa"
          className="w-32 h-32 object-contain mb-8 cursor-none" // yeh sahi hai
          initial={{ opacity: 1 }}
          animate={{
            rotate: [0, 15, -15, 0],
            scale: [1, 1.1, 1, 1.1],
            opacity: [1, 0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Progress Bar container */}
        <div className="relative w-72 h-4 rounded-full bg-gray-700 overflow-hidden shadow-lg select-none">
          {/* Shimmer effect */}
          <motion.div
            className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white/40 via-white/20 to-white/40 blur-sm"
            animate={{ x: [-100, 300] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Progress Fill */}
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 rounded-full shadow-xl"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Percentage Text */}
          <div className="absolute right-3 top-0 bottom-0 flex items-center text-white font-semibold text-sm pointer-events-none">
            {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
