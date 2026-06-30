import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/CartContext";

const CartItem = () => {
  const [cart, setCart] = useContext(cartContext);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [coupon, setCoupon] = useState("");
  const [validCoupon, setValidCoupon] = useState("");
  const [num, setNum] = useState(1);
  const [discount, setDiscount] = useState(0);

  let totalamt = 0;

  for (let i = 0; i < cart.length; i++) {
    totalamt += cart[i].price;
  }

  const submithandler = (e) => {
    e.preventDefault();
    setValidCoupon(coupon);
    setCoupon("");
  };

  useEffect(() => {
    let disCount = 0;
    let fixedAmt = JSON.parse(totalamt.toFixed(2));
    let totalTax = JSON.parse(((fixedAmt * 10) / 100).toFixed(2));
    let deliAmt = JSON.parse(((fixedAmt * 3) / 100).toFixed(2));
    if (validCoupon === "NEW2026") {
      disCount = JSON.parse(((fixedAmt * 15) / 100).toFixed(2));
      setDiscount(disCount);
    }

    setDelivery(deliAmt);
    setTax(totalTax);
    setTotal(JSON.parse(fixedAmt + totalTax + deliAmt - disCount).toFixed(2));
  }, [cart, validCoupon]);

  return (
    <>
      {/* main div */}
      <div className="flex justify-between w-full gap-8 p-6 bg-gray-50 min-h-screen lg:flex-row sm:flex-col">
        {/* Shopping Cart */}
        <div className="flex flex-col lg:w-2/3 bg-white border border-gray-200 p-6 rounded-3xl shadow-md">
          {/* cart heading */}
          <div>
            <h1 className="text-2xl font-bold mb-2">Shopping Cart</h1>
            {/* border div */}
            <div className="w-full bg-gray-200 h-0.5"></div>
          </div>
          {/* all cart item display here */}
          <div className="flex flex-col p-2 gap-2">
            {/* cart display mapping here */}

            {cart.length === 0 ? (
              <div className="flex justify-center items-center h-60">
                <h1 className="text-3xl font-bold text-gray-500">
                  🛒 Your Cart is Empty
                </h1>
              </div>
            ) : (
              cart.map((e, idx) => {
                return (
                  <>
                    <div
                      key={idx}
                      className="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
                    >
                      <div className="flex justify-between w-full ">
                        <div className="flex w-1/3">
                          <img
                            className="w-24 h-24 object-cover rounded-xl"
                            src={e.image}
                            alt=""
                          />
                          <div>
                            <h1 className="font-bold text-gray-900 text-lg">
                              {e.title}
                            </h1>
                            <p className="text-sm ">
                              Category:{" "}
                              <span className="text-orange-500 font-medium">
                                {e.category}
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* cart value plus minus */}
                        <div className="w-1/3 justify-end flex items-center">
                          <button className="bg-gray-900 hover:bg-orange-500 text-white px-3 py-1 rounded-lg transition">
                            +
                          </button>
                          <input
                            className="bg-gray-100 border border-gray-300 w-12 p-1 text-center rounded-lg"
                            type="number"
                            value={num}
                          />
                          <button className="bg-gray-900 hover:bg-orange-500 text-white px-3 py-1 rounded-lg transition">
                            -
                          </button>
                        </div>
                        {/* pricing */}
                        <div className="w-1/3 flex justify-end items-center">
                          <h1 className="font-bold text-xl text-gray-900">
                            ${e.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
            )}
          </div>
        </div>
        {/* second row coupon pricing purchase section */}

        <div className="flex flex-col lg:w-1/3 gap-3 sticky top-6 h-fit sm:w-full ">
          {/* coupon code */}
          <form onSubmit={submithandler}>
            <div className="flex flex-col gap-1 bg-white border border-gray-200 p-6 rounded-3xl shadow-md ">
              <h1 className="text-2xl font-bold">Coupon Code</h1>
              <div className="w-full bg-gray-600 h-0.5"></div>

              <input
                value={coupon}
                onChange={(e) => {
                  setCoupon(e.target.value);
                }}
                className="bg-gray-100 border border-gray-300 p-3 rounded-xl outline-none focus:border-orange-500"
                type="text"
                placeholder="Enter Your Coupon Code"
              />
              <button
                onClick={submithandler}
                className="bg-gray-900 hover:bg-orange-500 text-white font-semibold p-3 rounded-xl transition"
              >
                Apply Coupon
              </button>
            </div>
          </form>

          {/* order summary */}
          <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-md">
            <h1 className="text-2xl font-bold">Order Summery</h1>
            <div className="w-full bg-gray-600 h-0.5"></div>
            {/* total */}
            <div className="flex flex-col ">
              <div className="flex justify-between">
                <p className="font-bold">Discount </p>
                <p className="text-green-600">${discount}</p>
              </div>

              <div className="flex justify-between">
                <p className="font-bold">Delivery </p>
                <p className="">${delivery}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold">Tax </p>
                <p className="text-gray-700">${tax}</p>
              </div>
              <div className="w-full bg-gray-600 h-0.5"></div>
              <div className="flex justify-between">
                <p className="font-bold">Total </p>
                <p className="text-2xl font-bold text-orange-500">${total}</p>
              </div>
            </div>
          </div>
          {/* payment */}
          <div className="bg-white border border-gray-200 p-6 rounded-3xl shadow-md">
            <h1 className="text-2xl font-bold">Payment Method</h1>
            <div className="w-full bg-gray-600 h-0.5"></div>
            <div className="text-xl font-semibold text-gray-800 py-3">
              💳 PayPal
            </div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold p-3 rounded-xl w-full transition">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
