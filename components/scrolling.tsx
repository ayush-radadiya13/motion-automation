"use client";
import { useEffect, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export  function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Initialize Lenis for manual smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // adjust for faster/slower feel
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    // Keep Lenis updating on every frame
    let frame: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
