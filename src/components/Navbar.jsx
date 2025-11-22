import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logotm3.png";

const Navbar = ({ navigation, onNavClick, currentPage }) => {
const [menuOpen, setMenuOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
const handleScroll = () => {
setScrolled(window.scrollY > 50);
};
window.addEventListener("scroll", handleScroll);
return () => window.removeEventListener("scroll", handleScroll);
}, []);

const spacerHeight = scrolled ? "h-16" : "h-20";

return (
<>
<nav
className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/70 shadow-lg py-2 backdrop-blur-md border-b border-teal-400/40"
            : "bg-black/60 py-4"
        }`}
> <div className="max-w-6xl mx-auto px-4"> <div className="flex justify-between items-center">
{/* Logo */} <div className="flex items-center space-x-2">
<img
src={logo}
alt="Biozaz Logo"
className={`transition-all duration-300 ${
                  scrolled ? "w-32 h-20" : "w-40 h-25"
                } rounded-full`}
/> </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`relative font-semibold tracking-wide transition-all duration-300 pb-1 neon-text ${
                currentPage === item.id
                  ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400/80 after:shadow-[0_0_8px_cyan] animate-pulse-neon"
                  : "text-gray-300 hover:text-white hover:after:w-full hover:after:bg-cyan-400 after:transition-all after:duration-300 after:w-0 after:h-[2px] after:bg-transparent after:left-0 after:bottom-0"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-cyan-400 neon-icon transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden pb-4 animate-fadeIn bg-black/70 backdrop-blur-md rounded-xl shadow-inner mt-2 border-t border-cyan-400/40">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-md font-semibold transition-all duration-200 neon-text ${
                currentPage === item.id
                  ? "text-white bg-cyan-600/20 shadow-[0_0_10px_cyan] animate-pulse-neon"
                  : "text-gray-300 hover:bg-cyan-400/20 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>

  {/* Spacer to prevent content hiding */}
  <div className={`transition-all duration-300 ${spacerHeight}`} />

  {/* Neon styles */}
  <style>{`
    .neon-text {
      text-shadow: 0 0 6px cyan, 0 0 10px cyan, 0 0 20px cyan;
    }
    @keyframes pulse-neon {
      0%, 100% { text-shadow: 0 0 6px cyan, 0 0 10px cyan, 0 0 20px cyan; }
      50% { text-shadow: 0 0 12px cyan, 0 0 20px cyan, 0 0 30px cyan; }
    }
    .animate-pulse-neon {
      animation: pulse-neon 2s infinite alternate;
    }
    .neon-icon:hover {
      text-shadow: 0 0 4px cyan, 0 0 8px cyan, 0 0 16px cyan;
    }
  `}</style>
</>
);
};

export default Navbar;
