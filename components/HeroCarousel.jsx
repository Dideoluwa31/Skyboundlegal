"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/bg-imgs/travelpasport.jpeg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          SKYBOUND SOLICITOR
        </span>
        <span className="block italic text-base sm:text-xl md:text-3xl text-yellow-400 font-[Playfair_Display] mt-2">
          Transforming Lives Through Immigration Solutions
        </span>
      </>
    ),
  },
  {
    image: "/bg-imgs/background5.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-extrabold font-[Inter]">
          Your Journey to a New Life
        </span>
        <span className="block italic text-base sm:text-xl text-yellow-400 font-[Playfair_Display] mt-2">
          Starts Here
        </span>
      </>
    ),
  },
  {
    image: "/bg-imgs/background2.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          Reuniting Families
        </span>
        <span className="block italic text-base sm:text-xl text-yellow-400 font-[Playfair_Display] mt-2">
          Across Borders
        </span>
      </>
    ),
  },
  {
    image: "/bg-imgs/background3.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          SKYBOUND INTERNATIONAL SOLICITOR
        </span>
        <span className="block italic text-base sm:text-xl text-yellow-400 font-[Playfair_Display] mt-2">
          AND LEGAL SERVICE
        </span>
      </>
    ),
  },
  {
    image: "/bg-imgs/background4.jpg",
    text: (
      <>
        <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
          IMMIGRATION • FAMILY • COMMERCIAL
        </span>
        <span className="block italic text-base sm:text-xl text-yellow-400 font-[Playfair_Display] mt-2">
          Legal Service, All in One Place
        </span>
      </>
    ),
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={slides[index].image}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[index].image})`,
            filter: "brightness(1.2) contrast(1.1)",
          }}
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          exit={{ scale: 1, opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 md:px-8">
        <AnimatePresence mode="wait">
          <motion.h1
            key={index}
            className="leading-snug max-w-[90%] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 1.2 }}
          >
            {slides[index].text}
          </motion.h1>
        </AnimatePresence>

        <Link href="/contactus">
          <button className="mt-6 sm:mt-8 bg-yellow-400 text-black font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-xl shadow-md hover:bg-yellow-500 transition text-sm sm:text-base">
            Get Evaluation
          </button>
        </Link>
      </div>
    </div>
  );
}
