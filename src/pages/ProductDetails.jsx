import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { cartContext } from "../context/CartContext";

import { Link, Outlet } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const [values, setValues] = useState("");
  const [categorys, setCategorys] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    let sum = Math.floor(Math.random() * 30);
    setNum(sum);
  }, []);

  let api = `https://dummyjson.com/products?limit=0&skip=${num}&select=title,price,rating,stock,images,description,discountPercentage,category`;

  const fetchData = async () => {
    let response = await axios.get(api);
    let item = response.data.products;
    setProduct(item);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setCategorys(values);
  };

  useEffect(() => {
    fetchData();
  }, [num, categorys]);

  return (
    <div className="flex flex-col w-full">
      {/* search product */}
      <div className="header bg-gray-800 flex justify-between items-center p-4 ">
        <form onSubmit={submitHandler}>
          <select
            className="bg-white border border-gray-300 rounded p-2 text-gray-800 outline-none mr-3"
            onChange={(e) => {
              setValues(e.target.value);
            }}
            id="items"
            name="category"
          >
            <option value="">All</option>
            <option value="tops">Tops</option>
            <option value="sports-accessories">Sports</option>
            <option value="mobile-accessories">Mobile Accessories</option>
            <option value="laptops">Laptop</option>
            <option value="kitchen-accessories">Kitchen Item</option>
            <option value="smartphones">Phones</option>
            <option value="furniture">Furniture</option>
            <option value="motorcycle">Bikes</option>
            <option value="groceries">Groceries</option>
          </select>
          <button
            onClick={submitHandler}
            className="bg-orange-500 hover:bg-orange-600 rounded p-2 cursor-pointer text-white transition-colors duration-300"
          >
            Search
          </button>
        </form>

        <div className="text-3xl font-semibold text-white relative">
          <div className="text-sm bg-orange-500 text-white text-center rounded-full absolute w-5 ml-4">
            
          </div>
          <Link to="/cart">
            <i class="ri-shopping-cart-2-fill"></i>
          </Link>
        </div>
      </div>

      {/* header banner */}
      <div className="flex w-full justify-center items-center p-4">
        <div className="bg-gray-900 w-full prelative flex items-center justify-around rounded-3xl ">
          <div className="flex gap-4 flex-col m-3 w-full sm:w-1/2 ">
            <p className="text-xl font-semibold w-fit text-orange-500 border border-orange-500 rounded-xl px-4 py-2">
              New Collection
            </p>
            <h1 className=" sm:text-6xl font-bold text-white">
              Find Your Style,
              <br />
              Love Your Look
            </h1>
            <p className="text-gray-300">
              Dicover the latest trends in fashion, <br />
              beauty, and lifestyle.
            </p>
            <Link to="/products" className="bg-orange-500 hover:bg-orange-600 text-white w-1/2 p-2 rounded-2xl cursor-pointer transition-colors duration-300 text-center">
              Shop Now
            </Link>
          </div>
          <div className="hidden sm:block md:-mt-42 lg:mt-0 ">
            <img width={500} src="src\assets\banner_2.png" alt="" />
          </div>
        </div>
      </div>
      {/* Main product card here */}
      <div className="p-2">
        {/* deal of the day section */}

        <div className="deal-section">
          <h1 className="text-3xl font-bold text-gray-900 p-2">Best Deal For You</h1>
          <div className="flex flex-wrap gap-3 mt-7 justify-between p-4">
            {product.slice(3, 7).map((e) => {
              return (
                <div key={e.id}>
                  <ProductCard
                    img={e.images}
                    title={e.title}
                    desc={e.description}
                    rating={e.rating}
                    price={e.price}
                    discPrice={e.discountPercentage}
                    category={e.category}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* Recommended deal all product display here */}
        <div className="deals-all">
          <h1 className="text-3xl font-bold text-gray-900 p-2">Recommended Products</h1>
          <div className="flex flex-wrap gap-3 mt-7 justify-between p-4">
            {(categorys === ""
              ? product
              : product.filter((e) => {
                  return e.category === categorys;
                  setNum(0);
                })
            )
              .slice(0, 12)
              .map((e) => {
                return (
                  <div key={e.id}>
                    <ProductCard
                      img={e.images}
                      title={e.title}
                      desc={e.description}
                      rating={e.rating}
                      price={e.price}
                      discPrice={e.discountPercentage}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex justify-between p-5">
        <button
          onClick={() => {
            setNum((prev) => prev - 12);
          }}
          className="bg-gray-900 hover:bg-orange-500 p-3 w-25 rounded text-white font-semibold text-lg cursor-pointer transition-colors duration-300"
        >
          Prev
        </button>
        <button
          onClick={() => {
            setNum((prev) => prev + 12);
          }}
          className="bg-gray-900 hover:bg-orange-500 p-3 w-25 rounded text-white font-semibold text-lg cursor-pointer transition-colors duration-300"
        >
          Next
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default ProductDetails;
