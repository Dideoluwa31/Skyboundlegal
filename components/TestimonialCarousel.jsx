"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "U.D",
    role: "Client",
    message:
      "Skybound Legal are the best at what they do. Diligent, trustworthy, and truly care about their clients. I recommend them highly!",
  },
  {
    name: "F.A",
    role: "Client",
    message:
      "They helped my family through a tough immigration case. Forever grateful. Professionals with heart.",
  },
  {
    name: "E.O",
    role: "Business Owner",
    message:
      "Great legal minds. They made my corporate registration seamless. Highly recommended!",
  },
  {
    name: "O.O",
    role: "Immigration Client",
    message:
      "Thanks to Skybound, I’m now with my family. They fought for me like family.",
  },
  {
    name: "O.A",
    role: "Client",
    message:
      "Legal excellence and client dedication — that’s what Skybound means to me.",
  },
  {
    name: "F.K",
    role: "Family Law Client",
    message:
      "They handled my case with grace and empathy. Real professionals with a personal touch.",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-cover bg-center  text-white py-12 px-6 md:px-24 h-[90vh]" style={{ backgroundImage: "url('/bg-imgs/background2.jpg')" }}>
      <div className="absolute inset-0 bg-black/90 justify-center h-[90vh] w-full items-center">
        <div className="justify-center text-center py-10">
          <span className="block text-xl sm:text-2xl md:text-4xl font-bold font-[Inter]">
              WHAT OTHERS ARE SAYING
            </span>
            <span className="block italic text-base sm:text-xl text-yellow-400 font-[Playfair_Display] mt-2">
              Our Testimonials
            </span>
        </div>
        <div className=" text-white py-12 px-6 md:px-24 flex  flex-col md:flex-row items-center justify-center gap-8">
          
          <div className="bg-gradient-to-l from-[#3C3D37] to-black  rounded-lg p-8 max-w-2xl relative text-end h-[50vh] w-full">
            <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
            <AnimatePresence mode="wait">
              <motion.p
                key={testimonials[index].message}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 1 }}
                className="text-lg leading-relaxed"
              >
                {testimonials[index].message}
              </motion.p>
            </AnimatePresence>
            <div className="mt-6">
              <p className="font-bold">{testimonials[index].name}</p>
              <p className="text-sm text-gray-400">{testimonials[index].role}</p>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${
                    i === index ? "bg-yellow-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <img
              src="/bg-imgs/background5.jpg"
              alt="law"
              className="rounded-lg w-[450px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
