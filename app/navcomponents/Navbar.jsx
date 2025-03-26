"use client";

import { useState, useEffect } from "react";
import {FiMenu} from "react-icons/fi"
import {CiMenuBurger } from "react-icons/ci";


export default function Navbar() {
    const [navBackground, setNavBackground] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    

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
      <nav className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 
               ${navBackground ? "bg-blue-900 shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto p-4">
          
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold font-serif text-white">SKYBOUND INTERNATIONAL SOLICITOR AND LEGAL SERVICES</div>
              <div className="hidden md:flex space-x-6 text-white">
                <a href="#" className="hover:text-blue-300">Home</a>
                <a href="#" className="hover:text-blue-300">About</a>
                <a href="#" className="hover:text-blue-300">Services</a>
                <a href="#" className="hover:text-blue-300">Contact</a>
              </div>
              <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <FiMenu size={50} />
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden bg-white shadow-md">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
            </div>
          )}
        
        </div>
      </nav>
    );
}