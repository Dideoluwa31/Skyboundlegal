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
      <h1 className="text-white text-3xl font-bold relative z-10">CILVIL LITIGATION</h1>
    </div>
    <section className="bg-[#f9f6f2] p-6 items-center justify-center">
      <div className="mt-6 md:mt-0 md:pl-12 text-center md:text-left shadow-lg rounded-lg p-6">
        <p className="text-black mt-4 text-lg font-semibold"> Why Choose Us?</p>
        <p className="text-gray-600 mt-4 text-lg">
       
        At Skybound, our experienced civil litigation attorneys are dedicated to helping individuals, businesses, and organizations navigate the complexities of civil disputes. Whether you're facing a contract dispute, or other civil matter, our team is here to provide expert guidance and representation.
        </p>
      </div>
    </section>
    <section className="bg-white shadow-lg p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-blue-900 font-bold mb-4">Civil Litigation</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Negligence</li>
          <li>Properties</li>
          <li>Financial Dispute</li>
          <li>Appeals</li>
          <li>Harassment</li>
          <li>Others</li>
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