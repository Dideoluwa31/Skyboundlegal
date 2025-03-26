"use client";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const WhoWeServe = () => {
  const carouselRef = useRef(null);

  const sectors = [
    "Public Sector", "Construction", "Innovation and Technology", "Media and Entertainment",
    "Financial Services", "Transport", "Health Care", "Telecommunication",
    "Insurance", "Energy and Natural Resources"
  ];

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0; // Reset to start for infinite loop
        } else {
          carouselRef.current.scrollBy({ left: 1, behavior: "smooth" });
        }
      }
    };
    
    const interval = setInterval(scroll, 20); // Adjust speed here

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="sectors" className="relative bg-cover bg-center text-white py-16 px-4" style={{ backgroundImage: "url('')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="relative max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">WHO WE SERVE</h2>
        <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
          At Skybound, we provide legal services to diverse clients, including state-owned enterprises, 
          large companies, government agencies, tech startups, finance institutions, individuals, and more. 
          <span className="font-bold text-gray-900"> Our Key Industry Sectors Include:</span>
        </p>

        {/* Auto-scrolling Carousel */}
        <div className="relative mt-6 overflow-hidden w-full">
          <div ref={carouselRef} className="flex space-x-4 py-2 animate-scroll overflow-hidden whitespace-nowrap">
            {sectors.concat(sectors).map((sector, index) => ( // Duplicate array for seamless looping
              <button key={index} className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition whitespace-nowrap">
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* View All Sectors Button */}
        <Link to="/sectors">
          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg">
            View All Sectors →
          </button>
        </Link>
      </div>
    </div>
    
  );
};

export default WhoWeServe;
