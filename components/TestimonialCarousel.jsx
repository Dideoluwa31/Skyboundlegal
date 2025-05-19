"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "U.D",
    role: "Client",
    message:
      "Thank you for helping me with my visa application. The process was smooth and everyone was very professional. I highly recommend SKYBOUND to anyone who needs help with immigration",
  },
  {
    name: "F.A",
    role: "Client",
    message:
      "My husband and I are so grateful for your support. You answered all our questions and made a stressful process much easier. Now we can live our dream in a new country",
  },
  {
    name: "E.O",
    role: "Client",
    message:
      "I was worried about my complicated case, but the team explained everything clearly and guided me step by step. I got my permit, and I am so happy I chose this company.",
  },
  {
    name: "O.O",
    role: "Immigration Client",
    message:
      "The staff was always quick to reply and very helpful. They made sure I had all the documents I needed and kept me calm during the waiting period. Now I am reunited with my family",
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
