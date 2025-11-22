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

// Spacer height to prevent content being hidden behind fixed navbar
const spacerHeight = scrolled ? "h-16" : "h-20";

return (
<>
<nav
className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 shadow-md py-2 backdrop-blur-md" : "bg-white py-4"
        }`}
> <div className="max-w-6xl mx-auto px-4"> <div className="flex justify-between items-center">
{/* Logo */} <div className="flex items-center space-x-2">
<img
src={logo}
alt="Biozaz Logo"
className={`transition-all duration-300 ${
                  scrolled ? "w-32 h-20" : "w-40 h-25"
                } rounded-full drop-shadow-md`}
/> </div>


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavClick(item.id)}
              className={`relative font-semibold tracking-wide transition-all duration-300 pb-1
                ${
                  currentPage === item.id
                    ? "text-teal-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-teal-500"
                    : "text-gray-700 hover:text-teal-600 hover:after:w-full hover:after:bg-teal-400"
                } after:transition-all after:duration-300 after:w-0 after:h-[2px] after:bg-transparent after:left-0 after:bottom-0`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-teal-600 transition-all"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden pb-4 animate-fadeIn bg-white/70 backdrop-blur-md rounded-xl shadow-inner mt-2">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavClick(item.id);
                setMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-md font-semibold transition-all duration-200 ${
                currentPage === item.id
                  ? "text-teal-600 bg-teal-50"
                  : "text-gray-700 hover:bg-teal-100 hover:text-teal-600"
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
</>
);
};

export default Navbar;
