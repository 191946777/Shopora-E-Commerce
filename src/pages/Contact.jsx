import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-1/2 h-1 bg-orange-500 mx-auto rounded-full"></div>
          <p className="text-gray-500 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 w-1/2 sm:w-full ">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 p-3 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              ></textarea>

              <button className="w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-orange-500 transition duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 w-1/2 sm:w-full">
            
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Find Us on Map
              </h2>

              {/* Replace this div with an iframe later */}
              <div className="w-full h-400px bg-gray-100 border-2 border-dashed border-orange-300 rounded-2xl flex items-center justify-center">
                

                <iframe
                className="rounded-2xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7215.968814934736!2d82.96138014126416!3d25.271109960653476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3246100ae5c9%3A0xa426bae967fcf7d6!2sChitaipur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1782641536665!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="strict-origin-when-cross-origin"
                  title="Shopora Location"
                ></iframe>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
