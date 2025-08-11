"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export function TeamCarousel({
  directors,
  showControls = true,
}: DirectorCarouselProps) {
  const demo: Director[] = [
    { id: 1, name: "Ramji Sitapara", title: "Manager", photo: "/team/ramji.jpg", description: "" },
    { id: 2, name: "Renish Korat", title: "Electrical Engineer", photo: "/team/renish.jpg", description: "" },
    { id: 3, name: "Dhaval Chauhan", title: "Electrical Engineer", photo: "/team/dhavalchohan.jpg", description: "" },
    { id: 4, name: "Soyb Jadla", title: "Electrical Engineer", photo: "/team/soybjadla.jpg", description: "" },
    { id: 5, name: "Kishan Bhut", title: "Mechanical Engineer", photo: "/team/kishanbhut.jpg", description: "" },
    { id: 6, name: "Tanish Tarapara", title: "Mechanical Engineer", photo: "/team/tanish.jpg", description: "" },
  ];

  const items = directors?.length ? directors : demo;

  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelectorAll<HTMLElement>(".dc-card")[active];
    if (card) {
      el.scrollTo({
        left: card.offsetLeft - el.clientWidth / 2 + card.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <div className="w-full max-w-6xl p-4">
      <div
        ref={containerRef}
        className="flex gap-6 snap-x snap-mandatory touch-pan-x scrollbar-hide"
        onMouseDown={() => (isDragging.current = true)}
        onMouseUp={() => (isDragging.current = false)}
        onTouchStart={() => (isDragging.current = true)}
        onTouchEnd={() => (isDragging.current = false)}
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
            className="dc-card snap-center border-2 rounded-2xl p-4 min-w-[300px] md:min-w-[460px] flex-shrink-0 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: active === i ? 1 : 0.6,
              scale: active === i ? 1 : 0.97,
            }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-28 h-28 md:w-50 md:h-50 rounded-full overflow-hidden mb-3">
              <img
                src={d.photo}
                alt={d.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-lg">{d.name}</h4>
            <span className="text-sm opacity-70 mb-2">{d.title}</span>
            <p
              className="text-sm opacity-80"
              dangerouslySetInnerHTML={{ __html: d.description }}
            />
          </motion.article>
        ))}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex py-6 items-center justify-center mb-4">
          <div className="flex gap-2">
            <button
              onClick={() =>
                setActive((s) => (s - 1 + items.length) % items.length)
              }
              className="px-3 py-1 rounded-lg border"
            >
              ‹
            </button>
            <button
              onClick={() => setActive((s) => (s + 1) % items.length)}
              className="px-3 py-1 rounded-lg border"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {/* Dots */}
    
    </div>
  );
}
