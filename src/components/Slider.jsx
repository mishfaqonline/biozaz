"use client";

import React, { useEffect, useState, useCallback } from 'react';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default React.memo(function Slider({ images }) {
const [currentIndex, setCurrentIndex] = useState(0);

// Auto-slide
useEffect(() => {
const interval = setInterval(() => {
setCurrentIndex((prev) => (prev + 1) % images.length);
}, 3000);
return () => clearInterval(interval);
}, [images.length]);

const goToPrevious = useCallback(() => {
setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
}, [images.length]);

const goToNext = useCallback(() => {
setCurrentIndex((prev) => (prev + 1) % images.length);
}, [images.length]);

const currentImage = images[currentIndex];

return ( <div className="relative rounded-xl overflow-hidden shadow-lg group"> <div className="relative h-72 md:h-96"> 
     <Image
       src={currentImage}
       alt="Medical Equipment"
       fill
       sizes="(max-width: 768px) 100vw, 50vw"
       className="object-cover transition-all duration-700 ease-in-out"
     /> 
     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent"></div> 
   </div>

  {/* Navigation Buttons */}
  <button
    onClick={goToPrevious}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>
  <button
    onClick={goToNext}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
  >
    <ChevronRight className="w-6 h-6" />
  </button>

  {/* Dots */}
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
    {images.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`w-3 h-3 rounded-full transition-all ${
          idx === currentIndex ? 'bg-sky-600 w-8' : 'bg-white/60 hover:bg-white'
        }`}
      />
    ))}
  </div>
</div>
);
});
