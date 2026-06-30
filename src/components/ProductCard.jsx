import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../context/CartContext";

const ProductCard = ({
  img,
  title,
  desc,
  price,
  discPrice,
  rating,
  category,
}) => {
  const [cart, setCart] = useContext(cartContext);

  const dataLog = () => {
    setCart((prev) => [
      ...prev,
      {
        image: img[0],
        title: title,
        desc: desc,
        price: price,
        category: category,
      },
    ]);
  };

  return (
    <div className="overflow-x-hidden">
      <div className="w-full sm:w-78 max-w-78 flex flex-col bg-white border border-gray-200 rounded-3xl h-full justify-between shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div className="">
          <img
            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            src={img[0]}
            alt={title}
          />
        </div>
        <div className="flex flex-col gap-1 p-3">
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
          <p className="text-gray-500 text-sm leading-relaxed text-justify">{desc}</p>
          <p className="text-orange-500 font-semibold">
            Rating: <span className="text-black">{rating}</span>
          </p>
          <div className="flex justify-between items-center ">
            <div className="font-extralight">
              <p className="text-xl font-bold text-gray-900">${price}</p>
              <p className="text-sm text-green-600">{discPrice}% OFF</p>
            </div>
            <button
              onClick={dataLog}
              className="bg-gray-900 hover:bg-orange-500 text-white px-4 py-2 rounded-xl cursor-pointer transition-colors duration-300"
            >
              Add to Cart
              {/* <Link to="/cart">Add to Card</Link> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
