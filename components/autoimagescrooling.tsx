"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/automation.jpg",
  "/core values.jpg",
  "/mainimage.jpg",
  "/vision.jpg",
  "/mission.jpg",
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            {/* Container with max-width and centered */}
            <div className="relative mx-auto max-w-[90%] md:max-w-[700px] h-[400px]">
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 700px"
                priority={index === 0} // preload first image
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="
        absolute top-1/2 left-2 -translate-y-1/2 z-20
     bg-opacity-40 hover:bg-opacity-70
     rounded-full
        w-8 h-8
        flex items-center justify-center
        p-1.5
        cursor-pointer
        touch-manipulation
      ">
        &#8592;
      </CarouselPrevious>

      <CarouselNext className="
        absolute top-1/2 right-2 -translate-y-1/2 z-20
        bg-opacity-40 hover:bg-opacity-70
        rounded-full
        w-8 h-8
        flex items-center justify-center
        p-1.5
        cursor-pointer
        touch-manipulation
      ">
        &#8594;
      </CarouselNext>
    </Carousel>
  );
}
