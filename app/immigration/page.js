"use client";
import Link from "next/link"; 
import Footer from "@/components/footer";

const sectors = [
  {
    name: "PRIVATE IMMIGRATION",
    topic:
      "Navigating Private Immigration with Confidence",
    description:"Our private immigration experts provide personalized support and guidance to help you achieve your goals."
  },
  {
    name: "APPEALS",
    topic:
      "Overturning Visa Denials, One Appeal at a Time",
    description:"Expert visa appeal services to help you navigate the complex process and achieve a successful outcome",
  },
  {
    name: "ASYLUM",
    topic:
      "Seeking Safety, Seeking Hope",
    description:"Expert asylum services to help individuals fleeing persecution find protection and a new beginning"
  },
  {
    name: "BUSINESS IMMIGRATION",
    topic:
      "Navigating the Complexities of Business Immigration",
    description:"Expert guidance and support to help you overcome the challenges of global mobility and talent acquisition."
  },
  
];

export default function SectorList ()  {
  return (
    <div>
      <div 
        className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
        style={{ backgroundImage: "url('/random/immigration.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="text-white text-3xl font-bold relative z-10">IMMIGRATION</h1>
      </div>
      <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-6">
      
      <div className="max-w-5xl mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
                <div key={index} className="bg-blue-900 shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{sector.name}</h3>
                <p className="text-900 font-semibold text-lg">{sector.topic}</p>
                <p className="text-white">{sector.description}</p>
                </div>
            ))}
            </div>
            <div className="mt-8 text-center">
            <Link href="/"> 
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                ← Back to Home
                </button>
            </Link>
            </div>
        </div>
    </div>
    <div>
      <Footer />
      </div>
    </div>
  );
};


