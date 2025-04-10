"use client";
import Link from "next/link"; 
import Footer from "@/components/footer";

const sectors = [
  {
    name: "Construction",
    description:
      "As a top Construction law firm in Nigeria, we advise and act for both local and foreign clients.",
  },
  {
    name: "Energy & Natural Resources",
    description:
      "As a highly rated energy and natural resources law firm in Nigeria, we understand the trends shaping this sector.",
  },
  {
    name: "Financial Services",
    description:
      "We provide legal solutions to various finance companies, including banks, investment firms, and fintech startups.",
  },
  {
    name: "Healthcare",
    description:
      "We offer legal expertise in the healthcare industry, ensuring compliance with regulations and smooth business operations.",
  },
  {
    name: "Innovation & Technology",
    description:
      "We work with tech startups and enterprises, providing legal guidance on IP, data protection, and regulatory matters.",
  },
  {
    name: "Insurance",
    description:
      "We advise insurance companies on regulatory compliance, claims, and dispute resolution.",
  },
  {
    name: "Media & Entertainment",
    description:
      "Our firm specializes in media and entertainment law, working with creatives, influencers, and production companies.",
  },
  {
    name: "Public Sector",
    description:
      "We provide legal services to government agencies and state-owned enterprises, helping with policies, contracts, and compliance.",
  },
];

export default function SectorList ()  {
  return (
    <div>
      <div 
        className="relative bg-cover h-64 flex justify-center items-center bg-center text-white py-16" 
        style={{ backgroundImage: "url('/bg-imgs/skyscraper.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <h1 className="text-blue-400 text-3xl font-bold relative z-10">Our Key Practice Sectors</h1>
      </div>
      <div className="min-h-screen bg-gray-100 text-gray-900 py-12 px-6">
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
              <p className="text-gray-700">{sector.description}</p>
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


