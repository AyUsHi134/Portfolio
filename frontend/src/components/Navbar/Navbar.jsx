import React, { useEffect, useState } from "react";
import {FiMenu, FiX} from 'react-icons/fi';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // check scrolling and changing the color 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);      
    };

    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  // smooth scrolling 
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  }

  const menuItems = [
    {id:"home", label:"Home"},
    {id:"about", label:"About"},
    {id:"skills", label:"Skills"},
    {id:"work", label:"Work"},
    {id:"experience", label:"Experience"},
    {id:"services", label:"Services"},
  ]
  return(
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
      isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">{"<"} </span>
          <span className="text-white">Ayushi</span>
          <span className="text-[#8245ec]">{"/"} </span>
          <span className="text-white">{"Singh"} </span>
          <span className="text-[#8245ec]">{">"} </span>
        </div>

        {/*Desktop menu*/}
        <ul className="hidden md:flex flex-1 justify-center gap-x-8 text-gray-300">
          {menuItems.map((items) => (
            <li key={items.id} className={`cursor-pointer hover:!text-[#8245ec] ${
              activeSection ===items.id? "!text-[#8245ec]" : "text-gray-300"
            }`}>
                <button onClick={() => handleMenuItemClick(items.id)}>
                  {items.label}
                </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/AyUsHi134"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="www.linkedin.com/in/ayushi-singh-2245101b9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/AyUsHi134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="www.linkedin.com/in/ayushi-singh-2245101b9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;