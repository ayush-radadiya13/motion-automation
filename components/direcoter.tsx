"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Director {
  id: number;
  name: string;
  title: string;
  photo: string;
  description: string;
}

interface DirectorCarouselProps {
  directors?: Director[];
  showControls?: boolean;
}

export function DirectorCarousel({
  directors,
  showControls = true,
}: DirectorCarouselProps) {
  const demo: Director[] = [
    { id: 1, name: "Chetan Radadiya", title: "Electrical Director", photo: "/team/chetan.jpg", description: "+91 99982 12691" },
    { id: 2, name: "Chirag Vala", title: "Technical/Programming Director", photo: "/team/chirag.jpg", description: "+91 90331 51220" },
    { id: 3, name: "Dhaval Kotadiya", title: "Mechanical Director", photo: "/team/dhaval.jpg", description: "+91 70467 80350" },
  ];

  const items = directors?.length ? directors : demo;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // Update active card on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(center - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActive(closestIndex);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to active card when using buttons
  const scrollToActive = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    el.scrollTo({
      left: card.offsetLeft - el.clientWidth / 2 + card.clientWidth / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full max-w-6xl p-4">
      <div
        ref={containerRef}
        className="flex gap-6 snap-x snap-mandatory touch-pan-x scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((d, i) => (
          <motion.article
            key={d.id}
            className="dc-card snap-center border-2 rounded-2xl p-4 min-w-[250px] md:min-w-[460px] flex-shrink-0 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: active === i ? 1 : 0.6,
              scale: active === i ? 1 : 0.97,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-28 h-28 md:w-50 md:h-50 rounded-full overflow-hidden mb-3">
              <img src={d.photo} alt={d.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-lg">{d.name}</h4>
            <span className="text-sm opacity-70 mb-2">{d.title}</span>
            <p className="text-sm opacity-80" dangerouslySetInnerHTML={{ __html: d.description }} />
          </motion.article>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex py-6 items-center justify-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() => scrollToActive((active - 1 + items.length) % items.length)}
              className="px-3 py-1 rounded-lg border"
            >
              ‹
            </button>
            <button
              onClick={() => scrollToActive((active + 1) % items.length)}
              className="px-3 py-1 rounded-lg border"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
