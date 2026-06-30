import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);

  let api = `https://dummyjson.com/products/category/womens-dresses?limit=4&skip=0&select=title,price,rating,stock,images,description,discountPercentage,reviews`;

  const fetchData = async () => {
    let response = await axios.get(api);
    let item = response.data.products;
    setData(item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* Home Hero */}
      <div className="flex flex-col-reverse lg:flex-row w-full items-center bg-gray-100">
        {/* Left */}
        <div className="flex flex-col items-center gap-5 p-5 w-full lg:w-1/2">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-orange-500 text-center">
            BEST DESTINATIONS AROUND THE WORLD
          </h3>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-gray-900">
            Wear the best and <br />
            fashion your look
          </h1>

          <p className="text-sm sm:text-base text-center text-gray-600 px-2 lg:px-0">
            Built Wicket longer admire do barton vanity itself do in it.
            Prefered to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
        </div>

        {/* Right */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-250px sm:h-350px lg:h-auto object-cover"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      {/* Trending Products */}

      <h1 className="text-3xl font-bold text-gray-900 p-4 text-center lg:text-left">
        Trending Products
      </h1>

      <div className="flex flex-wrap justify-center lg:justify-between gap-5 mt-7 p-4">
        {data.map((e) => {
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

      {/* Customer Review */}

      <div className="bg-gray-100 text-center p-6 mb-5">
        <h3 className="text-orange-500 font-semibold">
          Customer Review
        </h3>

        <h1 className="text-3xl font-bold text-gray-900">
          What People Say About Us
        </h1>

        <div className="flex flex-col lg:flex-row">
          {data.map((e) => {
            return (
              <div key={e.id} className="p-3 w-full lg:w-2/3">
                <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 flex flex-col gap-2">
                  <div className="text-lg font-semibold text-gray-900">
                    Name: {e.reviews[0].reviewerName}
                  </div>

                  <p className="text-sm text-gray-600">
                    {e.reviews[0].comment}
                  </p>

                  <p className="text-xl font-semibold text-orange-500">
                    Rating: {e.reviews[0].rating}
                  </p>

                  <p className="text-sm font-medium text-gray-500 break-all">
                    Email: {e.reviews[0].reviewerEmail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;