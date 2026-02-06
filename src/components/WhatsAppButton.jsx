"use client";

// File: src/components/WhatsAppButton.jsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';


const WHATSAPP_CONFIG = {
number: '923364446339',
defaultMessage: "Hi! I'm interested in your medical equipment services.",
position: 'bottom-6 right-6'
};


export default React.memo(function WhatsAppButton() {
const [isHovered, setIsHovered] = useState(false);


const handleWhatsAppClick = (e) => {
try {
const { number, defaultMessage } = WHATSAPP_CONFIG;
if (!number || !/^92\d{10}$/.test(number)) {
console.warn('Invalid WhatsApp number format');
e.preventDefault();
return;
}
const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(defaultMessage)}`;
window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
e.preventDefault();
} catch (error) {
console.error('Error opening WhatsApp:', error);
}
};


return (
<button
onClick={handleWhatsAppClick}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}
className={`fixed ${WHATSAPP_CONFIG.position} bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group z-50`}
aria-label="Chat on WhatsApp"
title="Chat with us on WhatsApp"
>
<MessageCircle className="w-6 h-6" />
<span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap transition-opacity duration-200 opacity-100">
Chat on WhatsApp
</span>
</button>
);
});
