import React from "react";

const ContactUs = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative bg-cover h-64 justify-center items-center flex bg-center text-white py-16" style={{ backgroundImage: "url('/bg-imgs/handshake2.jpeg')" }} >
        <div className="absolute inset-0 bg-opacity-50 bg-black/80" ></div>
        <h1 className="text-blue-400 text-3xl font-bold relative justify-center z-10">Contact Us</h1>
      </div>

      {/* Contact Information Section */}
      <div className="container mx-auto px-4 py-10" >
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
          <h2 className="text-blue-900 text-2xl font-semibold mb-4">Reach Us</h2>

          <p className="text-gray-700">
            <span className="font-bold">Office:</span> 12 Linda Chalker Cresent, Asokoro, Abuja FCT.
          </p>

          <p className="text-gray-700 mt-2">
            <span className="font-bold">Tel:</span> +234 9167610059
          </p>

          <p className="text-gray-700 mt-2">
            <span className="font-bold">Email:</span> <a href="skyboundlegal@gmail.com" className="text-blue-900 hover:underline">skyboundlegal@gmail.com</a>
          </p>

          {/* Embedded Google Map */}
          <div className="mt-6">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4647522437435!2d7.516789110248954!3d9.021298389072763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0c06e7f790a7%3A0x2c16d6d999c90a69!2s12%20Linda%20Chalker%20St%2C%20Asokoro%2C%20Aso%20900110%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1743604626118!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;