import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaLinkedinIn, FaFacebookF, FaXTwitter, FaInstagram, FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-blue-900 text-white text-center py-6 mt-12 w-full">
      <div className="text-gray-400 text-sm">© Copyright 2025 | All Rights Reserved</div>
      <div className="flex justify-center space-x-3 mt-4">
        <Link href="#" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaLinkedinIn />
        </Link>
        <Link href="#" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaFacebookF />
        </Link>
        <Link href="https://x.com/skyboundlegal?s=21" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaXTwitter />
        </Link>
        <Link href="https://www.instagram.com/skyboundlegal?igsh=MTZub2d2NjJpdzBvaA==" className="bg-gray-800 p-2 rounded-lg text-white hover:bg-gray-700">
          <FaInstagram />
        </Link>
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-700 p-3 rounded-lg shadow-lg hover:bg-gray-600"
        >
          <FaArrowUp className="text-white" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
