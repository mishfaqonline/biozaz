import React from "react";
import Image from "next/image";
import logo from "../images/logotm3.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-800 text-slate-200 py-10 px-4 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="Biozaz Logo" width={72} height={72} className="rounded-full" />
        </div>
        <h2 className="text-2xl font-bold">
          <span className="text-teal-300">Biozaz</span>
          <span className="text-xs align-top ml-1 text-slate-400">™</span>
        </h2>
        <p className="text-slate-400 mt-2">
          Your trusted partner in medical equipment and healthcare solutions.
        </p>
        <p className="text-slate-500 text-sm">© 2026 Biozaz.com All rights reserved.</p>
        <p className="text-sky-300 text-sm font-semibold mt-2">
          Developed by <span className="text-slate-100">MI-Online</span>
        </p>
        <a
          href="https://www.instagram.com/biozazofficial/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center mt-4 text-sky-300 hover:text-sky-200 text-sm font-semibold"
        >
          Instagram: @biozazofficial
        </a>
      </div>
    </footer>
  );
};

export default Footer;
