/* eslint-disable react-hooks/rules-of-hooks */
"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
// app/Carts.js

import React, { useEffect, useState } from "react";
import { useCart } from "../Cards/Context/Cart";
import Header from "../Header";
import Footer from "../Footer";
import Scene3D from "../Scene3D";

const page = () => {
  const { cart, cartCount, RemoveFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.priceNew.replace("$", ""));
      return acc + price * item.quan;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Scene3D />
      <div className="flex-1 container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-400">🛒 Your cart is empty</p>
            <a href="/" className="text-purple-500 hover:underline mt-4 block">
              Continue Shopping
            </a>
          </div>
        ) : (
          <>
            <p className="text-gray-400 mb-4">Items: {cartCount}</p>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 bg-gray-900 p-4 rounded-2xl mb-4"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-gray-400">{item.title2}</p>
                  <p className="text-purple-500">{item.priceNew}</p>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">Quantity</p>
                  <p className="text-xl font-bold">{item.quan}</p>
                </div>

                <div className="text-center">
                  <p className="text-gray-400 text-sm">Total</p>
                  <p className="text-xl font-bold text-purple-500">
                    ${parseFloat(item.priceNew.replace("$", "")) * item.quan}
                  </p>
                </div>

                <button
                  onClick={() => RemoveFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="bg-gray-900 p-6 rounded-2xl mt-6">
              <div className="flex justify-between text-xl">
                <span>Total:</span>
                <span className="text-purple-500 font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-2xl mt-4 font-bold">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default page;
