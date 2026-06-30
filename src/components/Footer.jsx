import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white w-full flex flex-col md:flex-row justify-between border-t border-gray-700 p-3">
      <div className="flex flex-col gap-3 p-4">
        <h1 className="text-3xl font-bold text-orange-500">Shopora</h1>
        <p className="text-gray-400">
          Your One-Stop Destination for Trendy Fashion & Lifestyle Products
        </p>
        <p className="text-gray-400">
          Fast Delivery • Secure Payments • Premium Quality Products
        </p>
        <p className="text-gray-400">
          Copyright © 2026 amansingh36645@gmail.com. All right reserved.
        </p>
      </div>
      <div className="flex sm:flex sm:justify-between">
        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-xl font-semibold text-orange-500">Shop</h3>

          <a className="text-gray-400 hover:text-orange-500" href="">
            Smartphones
          </a>

          <a className="text-gray-400 hover:text-orange-500" href="">
            Laptops
          </a>

          <a className="text-gray-400 hover:text-orange-500" href="">
            Furniture
          </a>

          <a className="text-gray-400 hover:text-orange-500" href="">
            Groceries
          </a>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-xl font-semibold text-orange-500">Quick Links</h3>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Services
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Contact
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Products
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            About
          </a>
        </div>

        <div className="flex flex-col gap-3 p-4">
          <h3 className="text-xl font-semibold text-orange-500">
            Stay In Touch
          </h3>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Facebook
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Instagram
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            YouTube
          </a>
          <a
            className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
            href=""
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
