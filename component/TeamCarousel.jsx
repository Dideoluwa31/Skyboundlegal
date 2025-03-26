import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const teamMembers = [
  {
    name: "MAQBOOL MALIK",
    role: "Principal Solicitor",
    img: "/path-to-image1.jpg",
    bio: "Experienced principal solicitor dedicated to providing top-tier legal solutions.",
  },
  {
    name: "RUFUS ILARA",
    role: "Solicitor",
    img: "/path-to-image2.jpg",
    bio: "Highly enthusiastic and client-focused lawyer, known for his dedication.",
  },
  {
    name: "MOHAMMED IBRAHIM IQBAL",
    role: "Trainee Solicitor",
    img: "/path-to-image3.jpg",
    bio: "Passionate about law and committed to serving clients with excellence.",
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
      {/* Custom Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        <FaChevronLeft />
      </button>

      <button
        ref={nextRef}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 z-10"
      >
        <FaChevronRight />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Store swiper instance
        className="relative"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="relative group">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
                <p className="text-gray-200 mt-2">{member.bio}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamCarousel;
