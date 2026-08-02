import React from "react";
import { SOCIAL_LINKS } from "../../data/socials";

const Footer = () => {
  return (
    <footer className="bg-page border-t border-gray-800 px-4 sm:px-8 md:px-[7vw] lg:px-[16vw] py-8 font-sans">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            Ayushi Singh
          </h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md">
            Building thoughtful web experiences with clean design and reliable functionality.  
            Always learning, always improving.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#experience" className="hover:text-white transition">Experience</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} Ayushi Singh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
