"use client";
import React from "react";
import Link from "next/link"; 
import Image from "next/image";


const Criminal = () => {
  return (
    <div>
    <div 
      className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
      style={{ backgroundImage: "url('/random/immigration.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <h1 className="text-white text-3xl font-bold relative z-10">IMMIGRATION SERVICES</h1>
    </div>
    <section className="bg-[#f9f6f2] p-6 items-center justify-center">
      <div className="mt-6 md:mt-0 md:pl-12 text-center md:text-left shadow-lg rounded-lg p-6">
        <p className="text-black mt-4 text-lg font-semibold"> Why Choose Us?</p>
        <p className="text-gray-600 mt-4 text-lg">
       
        At Skybound, we understand the complexities and challenges of navigating the immigration system. Our experienced immigration lawyers are dedicated to providing personalized and effective solutions to help individuals, families, and businesses achieve their immigration goals.
        <br></br>
        Let Us Help You

Whether you're seeking to reunite with family, pursue new opportunities, or build a better life, our immigration lawyers are here to guide you every step of the way. Contact us today to schedule a consultation and take the first step towards a brighter future.
        </p>
      </div>
    </section>
    <section className="bg-white shadow-lg p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-blue-900 font-bold mb-4">Immigration Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Spouse Visas</li>
          <li>Family Visas</li>
          <li>Tier 1-5 Visa Applications</li>
          <li>Asylum Cases</li>
          <li>Naturalization Applications</li>
          <li>Sponsorship License for Businesses</li>
          <li>Student Visas & Skilled Work Visas</li>
          <li>Indefinite Leave to Remain (Settlements)</li>
          <li>Judicial Reviews</li>
        </ul>
      </div>
    </section>
      <div className="justify-center item-center">
        <Link href="/">
            <button className="mt-6 bg-blue-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg justify-center">
              Back to Home →
            </button>
        </Link>
        
      </div>
    
    </div>
  );
};

export default Criminal;