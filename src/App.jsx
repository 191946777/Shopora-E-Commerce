import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import CartItem from "./components/CartItem";

const App = (props) => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="cart" element={<CartItem />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
