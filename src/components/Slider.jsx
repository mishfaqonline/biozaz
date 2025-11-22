// File: src/components/Slider.jsx
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default React.memo(function Slider({ images }) {
const [currentIndex, setCurrentIndex] = useState(0);


useEffect(() => {
const interval = setInterval(() => setCurrentIndex((p) => (p + 1) % images.length), 3000);
return () => clearInterval(interval);
}, [images.length]);


const goToPrevious = () => setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
const goToNext = () => setCurrentIndex((p) => (p + 1) % images.length);


return (
<div className="relative rounded-xl overflow-hidden shadow-2xl group">
<div className="relative h-72 md:h-96">
<img src={images[currentIndex]} alt="Medical Equipment" className="w-full h-full object-cover transition-all duration-700 ease-in-out" />
<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
</div>


<button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
<ChevronLeft className="w-6 h-6" />
</button>


<button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
<ChevronRight className="w-6 h-6" />
</button>


<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
{images.map((_, idx) => (
<button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-3 h-3 rounded-full transition-all ${(idx === currentIndex) ? 'bg-teal-500 w-8' : 'bg-white/60 hover:bg-white'}`} />
))}
</div>
</div>
);
});