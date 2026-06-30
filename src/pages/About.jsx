import React from "react";
import { Link } from 'react-router-dom'

const About = () => {
return ( <div className="bg-gray-50">


  {/* Hero Section */}
  <section className="bg-linear-to-r from-gray-600 to-gray-800 text-white py-20">
    <div className="max-w-6xl mx-auto text-center px-6">
      <h1 className="text-5xl font-bold mb-6">About Shopora</h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Shopora is your trusted online shopping destination, bringing
        together fashion, electronics, home essentials, and much more
        at unbeatable prices.
      </p>
    </div>
  </section>

  {/* Who We Are */}
  <section className="max-w-6xl mx-auto py-20 px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Who We Are
        </h2>

        <p className="text-gray-600 mb-4">
          At Shopora, we believe shopping should be simple, secure,
          and enjoyable. Our platform offers thousands of carefully
          selected products to meet your everyday needs.
        </p>

        <p className="text-gray-600 mb-4">
          We are dedicated to providing high-quality products,
          excellent customer support, and a seamless shopping
          experience for customers worldwide.
        </p>

        <p className="text-gray-600">
          Whether you're looking for fashion, gadgets, furniture,
          or groceries, Shopora has everything in one place.
        </p>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1758520387283-303b0b332e89?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Shopora"
          className="rounded-3xl shadow-xl"
        />
      </div>
    </div>
  </section>

  {/* Statistics */}
  <section className="bg-gray-900 py-16">
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">

      <div>
        <h1 className="text-5xl font-bold text-orange-500">10K+</h1>
        <p className="text-gray-300 mt-3">Happy Customers</p>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-orange-500">25K+</h1>
        <p className="text-gray-300 mt-3">Products Sold</p>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-orange-500">500+</h1>
        <p className="text-gray-300 mt-3">Brands Available</p>
      </div>

      <div>
        <h1 className="text-5xl font-bold text-orange-500">24/7</h1>
        <p className="text-gray-300 mt-3">Customer Support</p>
      </div>

    </div>
  </section>

  {/* Discover Section */}
  <section className="max-w-6xl mx-auto py-20 px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <img
          src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Discover"
          className="rounded-3xl shadow-xl"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Discover New Trends
        </h2>

        <p className="text-gray-600 mb-6">
          Explore our latest collections featuring premium products
          designed to elevate your lifestyle. Discover fashion,
          electronics, and essentials tailored just for you.
        </p>

        <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl transition">
          Discover More
        </Link>
      </div>

    </div>
  </section>

  {/* Team Section */}
  <section className="bg-gray-100 py-20">
    <div className="max-w-6xl mx-auto px-6">

      <h2 className="text-4xl font-bold text-center mb-12">
        Meet Our Team
      </h2>

      <div className="grid md:grid-cols-4 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Aman Singh</h3>
          <p className="text-orange-500">Frontend Developer</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt=""
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Sarah Wilson</h3>
          <p className="text-orange-500">UI/UX Designer</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <img
            src="https://randomuser.me/api/portraits/men/54.jpg"
            alt=""
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">John Carter</h3>
          <p className="text-orange-500">Backend Developer</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt=""
            className="w-28 h-28 rounded-full mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">Emma Brown</h3>
          <p className="text-orange-500">Marketing Manager</p>
        </div>

      </div>
    </div>
  </section>

</div>
);
};

export default About;
