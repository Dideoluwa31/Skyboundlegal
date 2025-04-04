"use client";
import React from "react";
import ServicesSection from "@/components/ServiceSection";
import services, {sevices} from "../data/sevices"
import Navbar from "./navcomponents/Navbar";
import Image from "next/image";
import Link from "next/link";
import { LiaUserTieSolid } from "react-icons/lia";
import { GoLaw } from "react-icons/go";
import Footer from "../components/footer";
import TeamCarousel from "../components/TeamCarousel"
import { LiaUsersSolid } from "react-icons/lia";
import WhoWeServe from "../components/WhoWeServe";
import {motion} from "framer-motion"



export default function HomePage() {
  const cardVariants = [
    { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Left
    { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 } }, // Bottom
    { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } }, // Right
  ];
 return (
  <div>
    <div>
      <div className="h-screen bg-img-homepage">
        <div className="w-full min-h-screen bg-gray-100">
          
          <div>
              <Navbar />
          </div>

          
          
          <header className="header">
            <div className="header-overlay"></div>
            <div className="header-content">
              <h1 className="header-title">Transform Your Business with Our Expert Solutions</h1>
              
              <Link href="/contactus" className="cursor-pointer hover:text-blue-300">
                <button className="header-button">
                  Get Evaluation
                </button>
              </Link>
            </div>
          </header>
        </div>
      </div>
    
    
      </div>
      <section className="bg-gray-100 py-8 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <LiaUserTieSolid className="h-12 w-12 text-white" />,
              title: "Consultation",
              subtitle: "Book Your",
            },
            {
              icon: <GoLaw className="h-12 w-12 text-white" />,
              title: "Quotation",
              subtitle: "Get",
            },
            {
              icon: <LiaUsersSolid className="h-12 w-12 text-white" />,
              title: "Join Our Team",
              subtitle: "You Can Easily",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={cardVariants[index].initial}
              animate={cardVariants[index].animate}
              transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: true }}
              className="flex items-center bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="bg-blue-900 p-6">{item.icon}</div>
              <div className="p-6">
                <p className="text-[#c4ad7f] text-sm font-semibold">
                  {item.subtitle}
                </p>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="about" className="bg-[#f9f6f2] p-6 md:p-12 flex flex-col md:flex-row items-center justify-center">
        <div className=" md:w-1/2 flex justify-center">
          <Image src="/bg-imgs/prof-man.png" width={340} height={240} className="shadow-lg rounded-lg"
          alt="prof man"></Image>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-blue-900">About Us</h2>
          <p className="text-gray-600 mt-4">
          We are a team of experienced and dedicated legal professionals committed to providing exceptional representation and counsel to individuals, business and institutions. With years of experience and a proven track record of success, our attorneys are dedicated to helping clients navigate the complexities of the law and achieve their goals.
          </p>
          <div>
            <Link href="/aboutus">
              
                <button className="mt-6 bg-blue-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
                  learn more →
                </button>
              
            </Link>
          </div>
          
        </div>
      </section>
        
      <div >
          <ServicesSection key={services.id} {...services} />
      </div>
      

      
      <div>
        <WhoWeServe/>
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
 