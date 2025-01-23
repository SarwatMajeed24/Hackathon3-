"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface Slide {
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface HeroSectionClientProps {
  slides: Slide[];
}

export default function HeroSectionClient({ slides }: HeroSectionClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically transition slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  if (!slides || slides.length === 0) {
    return <p>No slides available</p>;
  }

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel Slides */}
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-full relative">
            {slide.imageUrl ? (
              <Image
                src={slide.imageUrl}
                alt={slide.title || "Slide Image"}
                layout="fill"
                objectFit="cover"
                priority
                className="absolute inset-0"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-4xl font-bold mb-4">{slide.title || "Default Title"}</h1>
              <p className="text-lg">{slide.subtitle || "Default Subtitle"}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8249; {/* Left Arrow */}
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#8250; {/* Right Arrow */}
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </section>
  );
}
