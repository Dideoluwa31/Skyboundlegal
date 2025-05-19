"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const teamMembers = [
  {
    name: "MAQBOOL MALIK",
    role: "Principal Solicitor",
    img: "/team-photo/Malik Maqbool.jpg",
    bio: "Experienced principal solicitor dedicated to providing top-tier legal solutions.",
  },
  {
    name: "PRINCE IDOWU ILARA",
    role: "FSM",
    img: "/team-photo/CHAIRMAN.jpg",
    bio: "Experienced principal solicitor dedicated to providing top-tier legal solutions.",
  },
  {
    name: "RUFUS OLAYEMI ILARA",
    role: "Barrister and Solicitor",
    img: "/team-photo/Idowu Ilara.jpg",
   
  },
  {
    name: "MOHAMMED IBRAHIM IQBAL",
    role: "Trainee Solicitor",
    img: "/team-photo/Mohammed Iqbal.jpg",
   
  },
  {
    name: "SHERISSA CUPID",
    role: "Trainee Solicitor",
    img: "/team-photo/Sherissa Cupid.jpg",
  },
  {
    name: "AHMED BODLA",
    role: "Legal Executive",
    img: "/team-photo/Ahmed Bodla.jpg",
  },
  {
    name: "SARA HUSSAIN",
    role: "Solicitor",
    img: "/team-photo/Sara Hussian.jpg",
  },
  {
    name: "EBENEZER OLUFUNSO",
    role: "Solicitor",
    img: "/team-photo/Sara Hussian.jpg",
  },
  {
    name: "ABIOYE OLUWAFUNKE",
    role: "Solicitor",
    img: "/team-photo/Sara Hussian.jpg",
  },
  {
    name: "ASUBIOJO OREOLUWA",
    role: "Solicitor",
    img: "/team-photo/Sara Hussian.jpg",
  },
];

const TeamCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 relative">
      
      {/* Malik's standalone image */}
      <div className="mb-8 text-center">
        <div className="relative overflow-hidden rounded-lg shadow-lg mx-auto w-full max-w-lg brightness-110">
          <Image
            src={teamMembers[0].img}
            alt={teamMembers[0].name}
            className="w-full h-[500px] object-cover"
            width={400}
            height={500}
            priority
          />
        </div>
        <h3 className="text-gray-900 text-xl font-semibold mt-4">
          {teamMembers[0].name}
        </h3>
        <p className="text-gray-700 text-sm">{teamMembers[0].role}</p>
      </div>

      {/* Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-100 text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        <FaChevronLeft /> 
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-100 text-gray-900 p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        <FaChevronRight />
      </button>

      {/* Swiper for the rest of the team */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} 
        className="relative"
      >
        {teamMembers.slice(1).map((member, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-lg brightness-110">
              <Image
                src={member.img}
                alt={member.name}
                className="w-full h-[500px] object-cover"
                width={400}
                height={500}
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-blue-900 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-700 text-sm">{member.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
