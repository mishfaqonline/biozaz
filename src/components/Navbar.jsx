"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import logo from "../images/logotm3.png";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/#services" },
  { name: "Contact", href: "/contact" }
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const spacerHeight = scrolled ? "h-16" : "h-20";

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 shadow-sm py-2 backdrop-blur-lg border-b border-slate-200"
            : "bg-white/60 py-4 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Link href="/" aria-label="Biozaz Home">
                <img
                  src={logo.src || logo}
                  alt="Biozaz Logo"
                  className={`transition-all duration-300 ${
                    scrolled ? "w-32 h-20" : "w-40 h-25"
                  } rounded-full`}
                />
              </Link>
            </div>

            <div className="hidden md:flex space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace("/#", "/"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative font-semibold tracking-wide transition-all duration-300 pb-1 ${
                      isActive
                        ? "text-sky-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-sky-500"
                        : "text-slate-700 hover:text-sky-700 hover:after:w-full hover:after:bg-gradient-to-r hover:after:from-teal-400 hover:after:to-sky-500 after:transition-all after:duration-300 after:w-0 after:h-[2px] after:bg-transparent after:left-0 after:bottom-0"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <button
              className="md:hidden text-slate-700 hover:text-sky-700 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn bg-white/85 backdrop-blur-lg rounded-xl shadow-sm mt-2 border border-slate-200">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace("/#", "/"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block w-full text-left py-2 px-3 rounded-md font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-sky-700 bg-sky-50"
                        : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      <div className={`transition-all duration-300 ${spacerHeight}`} />
    </>
  );
};

export default Navbar;
