"use client";

import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
      ${navBackground ? "bg-blue-900 shadow-md" : "bg-black bg-cover bg-center"}`}
    >
      <div className="container mx-auto p-4">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand Name Combined */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10">
                <Image 
                  src="/logo/skylogo.jpg" 
                  alt="logo" 
                  width={40} 
                  height={40} 
                  className="object-contain rounded-full"
                />
              </div>
              <h1 className="text-xl font-bold font-serif text-white">KYBOUND</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 text-white">
              <ScrollLink to="home" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-300">
                Home
              </ScrollLink>
              <ScrollLink to="about" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-300">
                About
              </ScrollLink>
              <ScrollLink to="services" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-300">
                Services
              </ScrollLink>
              <Link href="/contactus" className="cursor-pointer hover:text-blue-300">
                Contact
              </Link>
              <ScrollLink to="sectors" smooth={true} duration={800} offset={-50} className="cursor-pointer hover:text-blue-300">
                Sectors
              </ScrollLink>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden text-white shadow-md transition-all duration-300 bg-blue-900">
            <ScrollLink to="home" smooth={true} duration={800} offset={-50} className="cursor-pointer block px-4 py-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Home
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={800} offset={-50} className="cursor-pointer block px-4 py-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              About
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={800} offset={-50} className="cursor-pointer block px-4 py-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Services
            </ScrollLink>
            <Link href="/contactus" className="cursor-pointer block px-4 py-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <ScrollLink to="sectors" smooth={true} duration={800} offset={-50} className="cursor-pointer block px-4 py-2 hover:bg-blue-700" onClick={() => setIsOpen(false)}>
              Sectors
            </ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
}
