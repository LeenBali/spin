/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */
"use client";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useCart } from "../Cards/Context/Cart";
import Header from "../Header";
import Footer from "../Footer";
import Scene3D from "../Scene3D";

const page = () => {
  const { fav, favCount, RemoveFromFav, AddToCart } = useCart();
  const [favItems, setFavItems] = useState([]);

  useEffect(() => {
    setFavItems(fav);
  }, [fav]);

  if (fav.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Scene3D />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <p className="text-2xl text-white">❤️ لا توجد منتجات في المفضلة</p>
            <a
              href="/"
              className="text-white hover:underline mt-4 inline-block"
            >
              التسوق الآن
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Scene3D />
      <div className="flex-1 container mx-auto p-4">
        <p className="text-gray-400 mb-4">عدد المنتجات: {favCount}</p>
        {favItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-[#11101d] p-4 rounded-2xl mb-4"
          >
            <img
              src={item.img}
              className="w-24 h-24 object-cover rounded-xl"
              alt={item.title}
            />
            <div className="flex-1">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.title2}</p>
              <p className="text-purple-500 font-bold">{item.priceNew}</p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  AddToCart(item);
                  RemoveFromFav(item.id);
                }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition-all"
              >
                أضف للسلة
              </button>
              <button
                onClick={() => RemoveFromFav(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition-all"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
