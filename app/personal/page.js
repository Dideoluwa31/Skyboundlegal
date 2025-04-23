"use client";
import React from "react";
import Link from "next/link"; 
import Image from "next/image";


const Criminal = () => {
  return (
    <div>
    <div 
      className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
      style={{ backgroundImage: "url('/random/litigation.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <h1 className="text-white text-3xl font-bold relative z-10">PERSONAL INJURY</h1>
    </div>
    <section className="bg-[#f9f6f2] p-6 items-center justify-center">
      <div className="mt-6 md:mt-0 md:pl-12 text-center md:text-left shadow-lg rounded-lg p-6">
        <p className="text-black mt-4 text-lg font-semibold"> Why Choose Us?</p>
        <p className="text-gray-600 mt-4 text-lg">
       
        At Skybound international legal solicitors, we understand the complexities and challenges of personal injury cases. Our experienced team of attorneys is dedicated to providing expert guidance and representation to individuals who have been injured due to the negligence or wrongdoing of others. We believe that every client deserves to be heard and compensated fairly for their injuries.
        Our mission is to provide exceptional personal injury services to our clients, ensuring that they receive the best possible advice and representation. We strive to create a personalized and tailored approach to each client's case, taking into account their unique circumstances and goals. Our goal is to empower our clients with the knowledge and support they need to navigate the personal injury system.
        </p>
      </div>
    </section>
    <section className="bg-white shadow-lg p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-blue-900 font-bold mb-4">Personal Injury</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li> Injuries in Public Areas</li>
          <li>Workplace Accidents</li>
          <li> Road Traffic Accidents </li>
          <li> Fatal Accidents</li>
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