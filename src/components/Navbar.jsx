import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-final.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="flex justify-between items-center px-5 py-3">
        {/* Logo */}
        <div>
          <img
            width={120}
            src={logo}
            alt="Shopora Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex list-none gap-6 text-lg font-medium">
          <Link
            className="hover:text-orange-500 transition-colors duration-300"
            to="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-orange-500 transition-colors duration-300"
            to="/about"
          >
            About
          </Link>

          <Link
            className="hover:text-orange-500 transition-colors duration-300"
            to="/products"
          >
            Products
          </Link>

          <Link
            className="hover:text-orange-500 transition-colors duration-300"
            to="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col bg-gray-800 text-center pb-4">
          <Link
            className="py-3 hover:bg-orange-500 transition"
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            className="py-3 hover:bg-orange-500 transition"
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            className="py-3 hover:bg-orange-500 transition"
            to="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            className="py-3 hover:bg-orange-500 transition"
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
