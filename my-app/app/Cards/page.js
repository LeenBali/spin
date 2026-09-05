"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import "animate.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useCart } from "./Context/Cart";
import Link from "next/link";

const Cards = () => {
  const { AddToCart, AddToFav, cartCount, favCount } = useCart();

  const product = [
    // ... بيانات المنتجات (نفسها) ...
    {
      id: 1,
      img: "/photo-1542291026-7eec264c27ff.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 2,
      img: "/photo-1606107557195-0e29a4b5b4aa.avif",
      title: "Velocity Pro",
      title2: "Elite Racing Edition",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 3,
      img: "/photo-1595950653106-6c9ebd614d3a.avif",
      title: "Urban Runner",
      title2: "City Street Essential",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 4,
      img: "/photo-1600185365926-3a2ce3cdb9eb.avif",
      title: "Velocity Pro",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 5,
      img: "/photo-1608231387042-66d1773070a5 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 6,
      img: "/photo-1551107696-a4b0c5a0d9a2.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 7,
      img: "/photo-1523275335684-37898b6baf30 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 8,
      img: "/photo-1553062407-98eeb64c6a62.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 9,
      img: "/photo-1511499767150-a48a237f0083 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 10,
      img: "/photo-1547949003-9792a18a2601.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 11,
      img: "/photo-1602143407151-7111542de6e8 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 12,
      img: "/photo-1598550476439-6847785fcea6.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 13,
      img: "/photo-1507473885765-e6ed057f782c - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 14,
      img: "/photo-1518455027359-f3f8164ba6bd.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 15,
      img: "/photo-1594620302200-9a762244a156.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 16,
      img: "/photo-1505740420928-5e560c06d30e.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 17,
      img: "/",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 18,
      img: "/0f1ed9ce0a1ded4d98728372fe3dce1d.jpg",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 19,
      img: "/photo-1587825140708-dfaf72ae4b04.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 20,
      img: "/photo-1521572163474-6864f9cf17ab.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 21,
      img: "/photo-1556821840-3a63f95609a7.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 22,
      img: "/photo-1506629082955-511b1aa562c8.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 23,
      img: "/photo-1551028719-00167b16eac5.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 24,
      img: "/photo-1591195853828-11db59a44f6b.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 25,
      img: "/photo-1622445275463-afa2ab738c34.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
  ];

  const [products, setproducts] = useState("all");
  const pr =
    products === "all" ? product : product.filter((e) => e.cat === products);

  // دالة لمنع انتشار الحدث عند الضغط على الأزرار
  const handleButtonClick = (e, callback, item) => {
    e.preventDefault();
    e.stopPropagation();
    callback(item);
  };

  return (
    <div>
      {/* أزرار التصفية */}
      <div className="flex justify-center gap-4 flex-wrap">
        <div className="flex justify-center gap-4 flex-wrap">
          <button
            className={`border-2  but rounded-xl text-white ${
              products === "all" ? "shadow-lg" : ""
            }`}
            style={{
              background:
                products === "all"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("all")}
          >
            All Products
          </button>
          <button
            className="border-2 but p-2 rounded-xl text-white"
            style={{
              background:
                products === "footwear"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("footwear")}
          >
            Footwear
          </button>
          <button
            className="border-2 but p-2 rounded-xl text-white"
            style={{
              background:
                products === "Accessories"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("Accessories")}
          >
            Accessories
          </button>
          <button
            className="border-2 but p-2 rounded-xl text-white"
            style={{
              background:
                products === "Furniture"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("Furniture")}
          >
            Furniture
          </button>
          <button
            className="border-2 but p-2 rounded-xl text-white"
            style={{
              background:
                products === "Electronics"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("Electronics")}
          >
            Electronics
          </button>
          <button
            className="border-2 but p-2 rounded-xl text-white"
            style={{
              background:
                products === "clothing"
                  ? "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))"
                  : "rgb(0 0 0 / 82%)",
            }}
            onClick={() => setproducts("clothing")}
          >
            Clothing
          </button>
        </div>
      </div>

      {/* عرض المنتجات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto">
        {pr.map((item) => (
          // ✅ الرابط على البطاقة بأكملها
          <Link href={`../Cards/${item.id}`} key={item.id}>
            <div
              className="max-w-full rounded-lg cards text-surface shadow-secondary-1 dark:bg-surface-dark hover:shadow-lg transition-shadow duration-300 flex flex-col group cursor-pointer"
              style={{
                backgroundColor: "hsl(240 10% 15%)",
              }}
            >
              <div className="relative w-full h-72 rounded-t-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.img}
                  alt={item.title}
                />

                {/* الأيقونات - خلفية سوداء وأيقونة بيضاء */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  {/* ❤️ أيقونة المفضلة */}
                  <button
                    className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-pink-500 transition-colors duration-300 cursor-pointer border-0 shadow-lg"
                    onClick={(e) => handleButtonClick(e, AddToFav, item)}
                  >
                    <FavoriteBorderIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    />
                  </button>

                  {/* 🛒 أيقونة السلة */}
                  <button
                    className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 cursor-pointer border-0 shadow-lg"
                    onClick={(e) => handleButtonClick(e, AddToCart, item)}
                  >
                    <ShoppingCartOutlinedIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    />
                  </button>

                  {/* 👁️ أيقونة العرض - ملغية لأن الرابط موجود على البطاقة */}
                  <button
                    className="bg-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-green-500 transition-colors duration-300 cursor-pointer border-0 shadow-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log("عرض المنتج:", item.id);
                    }}
                  >
                    <RemoveRedEyeIcon
                      style={{
                        fontSize: "20px",
                        color: "white",
                      }}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                <h5 className="text-xl text-left text-white leading-tight p-3 font-bold">
                  {item.title}
                </h5>

                <ul className="w-full">
                  <li className="w-full text-left ps-3 pb-2 text-sm text-gray-400 border-b-2 border-neutral-100 border-opacity-100 dark:border-white/10">
                    {item.title2}
                  </li>

                  <div className="flex gap-2 p-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
                    <div className="w-6 h-6 bg-red-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  <li className="w-full p-3 flex justify-between items-center gap-3">
                    <span className="flex items-center gap-2">
                      <p
                        className="text-2xl font-bold"
                        style={{
                          background:
                            "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {item.priceNew}
                      </p>
                      <span className="text-lg line-through font-bold text-gray-400">
                        {item.priceOld}
                      </span>
                    </span>
                    <button
                      className="inline-flex items-center rounded-full text-sm px-2 transition-all animate__animated animate__flash animate__infinite"
                      style={{ backgroundColor: "hsl(0 84.2% 60.2%)" }}
                    >
                      25% OFF
                    </button>
                  </li>

                  <div className="flex items-center gap-1 p-2">
                    {Array.from({ length: item.rate }, (_, index) => (
                      <StarRoundedIcon
                        key={index}
                        className="text-yellow-400"
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">(4.5)</span>
                  </div>

                  {/* زر Add to Cart */}
                  <div className="bg-black p-2.5">
                    <button
                      className="rounded-3xl p-2 w-full 
                                 opacity-0 group-hover:opacity-100
                                 animate__animated group-hover:animate__backInRight
                                 transition-all duration-500
                                 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                      style={{
                        background:
                          "linear-gradient(to left, hsl(195 100% 50%), hsl(263 70% 58%))",
                        animationDuration: "1.2s",
                        animationDelay: "0.6s",
                        animationTimingFunction:
                          "cubic-bezier(0.34, 1.56, 0.64, 1)",
                      }}
                      onClick={() => AddToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
