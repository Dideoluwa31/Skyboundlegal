import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import services from "@/data/sevices";

const ServicesSection = () => {
  return (
    <section id="services" className="py-12 px-4 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-lg text-gray-600 uppercase tracking-wide">Area Of Practice</h2>

        
        <h3 className="text-3xl font-semibold mt-2">Our Services</h3>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="flex items-start space-x-4 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            
            <div className="relative flex items-center">
              <motion.div
                className="flex items-center group"
                whileHover={{ x: 10 }} 
              >
                <div className="flex items-center justify-center w-10 h-10 border-2 border-gray-400 rounded-full">
                  <FaArrowRight className="text-gray-600" />
                </div>
              </motion.div>
            </div>

            
            <div>
              <h4 className="text-xl font-semibold relative inline-block">
                {service.title}
                <span className="block w-16 md:w-24 h-[3px] bg-blue-500 mx-auto mt-1"></span>
              </h4>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
