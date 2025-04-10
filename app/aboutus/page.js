"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/footer";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 300); // Delay start for smoothness
  }, []);

  return (
    <div className="h-full">
      <div 
        className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
        style={{ backgroundImage: "url('/random/about-img.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <h1 className="text-blue-400 text-3xl font-bold relative z-10">About Us</h1>
      </div>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        
        <div className="w-full max-w-4xl mt-8 space-y-6">
          
          {/* About Us Section */}
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg text-center transition-transform duration-[1200ms] ease-in-out ${animate ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
          >
            <h2 className="text-2xl font-semibold text-blue-900">About Us</h2>
            <p className="text-gray-700 mt-2">
              We are a team of experienced and dedicated legal professionals committed to providing exceptional representation and counsel to individuals, businesses, and institutions. With years of experience and a proven track record of success, our attorneys are dedicated to helping clients navigate the complexities of the law and achieve their goals.
            </p>
          </div>
  
          {/* Vision Section */}
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg text-center transition-transform duration-[1200ms] ease-in-out ${animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
          >
            <h2 className="text-2xl font-semibold text-blue-900">Our Vision</h2>
            <p className="text-gray-700 mt-2">
              Our vision is to build a better future for our clients, our community, and our profession, by providing exceptional legal services, fostering a culture of inclusivity and respect, and promoting access to justice for all.
            </p>
          </div>
  
          {/* Mission Section */}
          <div
            className={`bg-white rounded-2xl p-6 shadow-lg text-center transition-transform duration-[1200ms] ease-in-out ${animate ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <h2 className="text-2xl font-semibold text-blue-900">Our Mission</h2>
            <p className="text-gray-700 mt-2">
              Our mission is to provide expert legal guidance, uncompromising advocacy, and unparalleled client service. We are committed to building long-term relationships with our clients, founded on trust, integrity, and a deep understanding of their unique needs and goals.
            </p>
          </div>
        </div>
  
        <div className="mt-8 text-center">
          <Link href="/">
            <button className="bg-blue-900 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
