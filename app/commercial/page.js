"use client";
import React from "react";
import Link from "next/link"; 



const Criminal = () => {
  return (
    <div>
    <div 
      className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
      style={{ backgroundImage: "url('/random/immigration.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <h1 className="text-white text-3xl font-bold relative z-10">COMMERCIAL SERVICES</h1>
    </div>
    <section className="bg-[#f9f6f2] p-6 items-center justify-center">
      <div className="mt-6 md:mt-0 md:pl-12 text-center md:text-left shadow-lg rounded-lg p-6">
        <p className="text-black mt-4 text-lg font-semibold"> Why Choose Us?</p>
        <p className="text-gray-600 mt-4 text-lg">
       
        At Skybound International Legal Solicitor, we understand the complexities and challenges of commercial services. Our experienced team of attorneys is dedicated to providing expert guidance and representation to businesses and individuals navigating the complexities of commercial law. We believe that every client deserves to be heard and supported in their commercial endeavors.<br></br>


        Our mission is to provide exceptional commercial services to our clients, ensuring that they receive the best possible advice and representation. We strive to create a personalized and tailored approach to each client's case, taking into account their unique circumstances and goals. Our goal is to empower our clients with the knowledge and support they need to navigate the commercial world.
        </p>
      </div>
    </section>
    <section className="bg-white shadow-lg p-6 mt-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl text-blue-900 font-bold mb-4">Commercial Service</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Providing Legal Advice of Buying and Selling of Properties</li>
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