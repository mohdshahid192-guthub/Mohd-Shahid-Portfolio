import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ImageCarousel({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cachedIndex, setCachedIndex] = useState(0);
  const [direction, setDirection] = useState(0); 
  const controls = useAnimation();

  if (!images || images.length === 0) return null;

  const navigateSlide = async (newDirection) => {
   
    setCachedIndex(activeIndex);
    setDirection(newDirection);

  
    const nextIndex = (activeIndex + newDirection + images.length) % images.length;
    setActiveIndex(nextIndex);

    // 3. Reset the incoming slide position instantly off-screen, then slide it to center
    await controls.set({ x: newDirection > 0 ? "100%" : "-100%", opacity: 1 });
    await controls.start({ x: "0%", opacity: 1, transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] } });
    
    // 4. Once animation completes, sync the cache to the current active index quietly
    setCachedIndex(nextIndex);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-transparent shadow-xl group">
        
        {/* BACKGROUND LAYER: The Cached Image (Always sits perfectly still underneath) */}
        <img
          src={images[cachedIndex]}
          className="absolute inset-0 w-full h-full object-cover select-none z-0"
          alt="Buffer track background asset"
        />

        {/* FOREGROUND LAYER: The Active Animated Sliding Image */}
        <motion.img
          animate={controls}
          src={images[activeIndex]}
          className="absolute inset-0 w-full h-full object-cover select-none z-10"
          alt={`Active showcase view ${activeIndex + 1}`}
        />

        {/* Controls Display Condition */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => navigateSlide(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/60 cursor-pointer z-20"
            >
              ‹
            </button>
            <button
              onClick={() => navigateSlide(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-black/60 cursor-pointer z-20"
            >
              ›
            </button>

            {/* Pagination Tracks */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index === activeIndex) return;
                    navigateSlide(index > activeIndex ? 1 : -1);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === activeIndex ? "w-6 bg-orange-500" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}