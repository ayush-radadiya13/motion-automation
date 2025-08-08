"use client";

import React, { useEffect, useState, useRef } from "react";
import { Progress } from "@radix-ui/react-progress";
import { usePathname } from "next/navigation";

export default function LoadingOverlay() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== previousPathname.current) {
      // Route is changing
      setLoading(true);
      setProgress(0);

      if (progressInterval.current) clearInterval(progressInterval.current);

      progressInterval.current = setInterval(() => {
        setProgress((old) => {
          if (old >= 90) {
            if (progressInterval.current)
              clearInterval(progressInterval.current);
            return old;
          }
          return old + Math.floor(Math.random() * 10) + 5;
        });
      }, 200);

      previousPathname.current = pathname;

      // Simulate route complete after small delay
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
        }, 300);
        if (progressInterval.current) clearInterval(progressInterval.current);
      }, 1000); // adjust this timeout as needed
    }
  }, [pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 bg-opacity-95">
      <div className="mb-8">
        <img
          src="/motion.png"
          alt="motion automa"
          className="w-30 h-30 object-contain animate-logo-breathe-rotate"
        />
      </div>

      <Progress
        className="relative w-72 h-3 overflow-hidden rounded-full bg-slate-700"
        value={progress}
      >
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </Progress>
    </div>
  );
}
