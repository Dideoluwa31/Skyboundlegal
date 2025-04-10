"use client";
import React from "react";
import Link from "next/link"; 
import Image from "next/image";
import Footer from "@/components/footer";


const Criminal = () => {
  return (
    <div>
    <div 
      className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
      style={{ backgroundImage: "url('/random/litigation.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <h1 className="text-white text-3xl font-bold relative z-10">CRIMINAL LITIGATION</h1>
    </div>
    <section className="bg-[#f9f6f2] p-6 items-center justify-center">
      <div className="mt-6 md:mt-0 md:pl-12 text-center md:text-left shadow-lg rounded-lg p-6">
        <p className="text-black mt-4 text-lg font-semibold"> Why Choose Us?</p>
        <p className="text-gray-600 mt-4 text-lg">
       
        We are committed to providing exceptional service and expert representation to our clients. Here are just a few reasons why you should choose us:
 Experience: Our attorneys have extensive experience in criminal law, with a deep understanding of the complexities and nuances of the criminal justice system.
        - Personalized Service: We provide personalized and tailored advice and representation to each client, taking into account their unique circumstances and goals.
        - Results: We have a proven track record of success, with many clients achieving favorable outcomes in their cases.
        </p>
      </div>
    </section>
      <div className="justify-center item-center">
        <Link href="/">
            <button className="mt-6 bg-blue-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg justify-center">
              Back to Home →
            </button>
          
        </Link>
      </div>
    <div>
      <Footer />
      </div>
    </div>
  );
};

export default Criminal;