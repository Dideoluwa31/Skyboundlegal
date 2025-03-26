"use client";
import React from "react";
import { Menu } from "lucide-react";
import ServicesSection from "@/component/ServiceSection";
import services, {sevices} from "../data/sevices"
import { useState, useEffect } from "react";
import Navbar from "./navcomponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import { LiaUserTieSolid } from "react-icons/lia";
import { GoLaw } from "react-icons/go";
import Footer from "../component/footer";
import TeamCarousel from "../component/TeamCarousel"
import { LiaUsersSolid } from "react-icons/lia";
import SectorsList from "../data/SectorsList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WhoWeServe from "../component/whoWeServe";




export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
 return (
  <div>
    <div>
      <div className="h-screen bg-img-homepage">
        <div className="w-full min-h-screen bg-gray-100">
          {/* Navbar */}
          <div>
              <Navbar />
          </div>

          
          {/* Hero Section */}
          <header className="relative bg-cover bg-center h-screen flex items-center">
              <div className="absolute inset-0">
                <Image 
                  src="/bg-imgs/legal.jpg" 
                  alt="legal" 
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            <div className="absolute inset-0 bg-black bg-opacity-50"> 
              
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-bold">Ensuring Clients Come First</h1>
              <p className="mt-4 text-lg">Every Case, Every Time</p>
              <button className="mt-6 bg-yellow-500 text-black px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-yellow-600">
                Get Free Case Evaluation
              </button>
            </div>
          </header>
        </div>
      </div>
    
    
      </div>
      <section className="bg-gray-100 py-8 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-900 p-6">
            <LiaUserTieSolid alt="Consultation" className="h-12 w-12 text-white text-white" />  
            </div>
            <div className="p-6">
              <p className="text-[#c4ad7f] text-sm font-semibold">Book Your</p>
              <h3 className="text-xl font-semibold text-gray-800">Consultation</h3>
            </div>
          </div>

          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-900 p-6">
              <GoLaw alt="Quotation" className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <p className="text-[#c4ad7f] text-sm font-semibold">Get Free</p>
              <h3 className="text-xl font-semibold text-gray-800">Quotation</h3>
            </div>
          </div>

          <div className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-900 p-6">
              <LiaUsersSolid alt="Join Our Team" className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <p className="text-[#c4ad7f] text-sm font-semibold">You Can Easily</p>
              <h3 className="text-xl font-semibold text-gray-800">Join Our Team</h3>
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="bg-[#f9f6f2] p-6 md:p-12 flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 flex justify-center">
        
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600 mt-4">
          Client satisfaction comes first at Skybound International Solicitors and Legal Services. Our expert
          solicitors stay up-to-date to offer unparalleled service in
          immigration, family, civil litigation, and criminal matters.
          </p>
          <p className="text-gray-600 mt-4">
          Led by our seasoned principal solicitor,Our team boasts
          25+ years of experience, tackling the toughest cases with victorious
          outcomes.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-900 text-white rounded-lg shadow hover:bg-blue-500 hover:text-white">
          Learn More
          </button>
          
        </div>
      </section>
        
      <div >
          <ServicesSection key={services.id} {...services} />
      </div>
      

      
      <div>
        {/* View All Sectors Button */}
        <Router>
          <Routes>
            <Route path="/" element={<WhoWeServe />} />
            <Route path="/sectors" element={<SectorsList />} />
          </Routes>
        </Router>
      </div>
      
    
      <div>
          <section className="bg-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-semibold text-gray-800">Meet Our Team</h2>
              <p className="text-gray-600">Our dedicated legal professionals</p>
            </div>
            <div>
              <TeamCarousel />
            </div>
          </section>
        </div>
    <div>
      <Footer />
      </div>
  </div>

    
 ); 
  
};
 