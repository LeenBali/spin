/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "@/app/Header";
import Footer from "@/app/Footer";
import Scene3D from "@/app/Scene3D";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import Counter from "../Counter";
const page = async ({ params }) => {
  const product = [
    {
      id: 1,
      img: "../photo-1542291026-7eec264c27ff.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 2,
      img: "../photo-1606107557195-0e29a4b5b4aa.avif",
      title: "Velocity Pro",
      title2: "Elite Racing Edition",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 3,
      img: "../photo-1595950653106-6c9ebd614d3a.avif",
      title: "Urban Runner",
      title2: "City Street Essential",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 4,
      img: "../photo-1600185365926-3a2ce3cdb9eb.avif",
      title: "Velocity Pro",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 5,
      img: "../photo-1608231387042-66d1773070a5 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 6,
      img: "../photo-1551107696-a4b0c5a0d9a2.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "footwear",
    },
    {
      id: 7,
      img: "../photo-1523275335684-37898b6baf30 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 8,
      img: "../photo-1553062407-98eeb64c6a62.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 9,
      img: "../photo-1511499767150-a48a237f0083 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 10,
      img: "../photo-1547949003-9792a18a2601.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 11,
      img: "../photo-1602143407151-7111542de6e8 - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Accessories",
    },
    {
      id: 12,
      img: "../photo-1598550476439-6847785fcea6.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 13,
      img: "../photo-1507473885765-e6ed057f782c - Copy.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 14,
      img: "../photo-1518455027359-f3f8164ba6bd.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 15,
      img: "../photo-1594620302200-9a762244a156.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Furniture",
    },
    {
      id: 16,
      img: "../photo-1505740420928-5e560c06d30e.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 17,
      img: "../",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 18,
      img: "../0f1ed9ce0a1ded4d98728372fe3dce1d.jpg",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 19,
      img: "../photo-1587825140708-dfaf72ae4b04.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "Electronics",
    },
    {
      id: 20,
      img: "../photo-1521572163474-6864f9cf17ab.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 21,
      img: "../photo-1556821840-3a63f95609a7.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 22,
      img: "../photo-1506629082955-511b1aa562c8.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 23,
      img: "../photo-1551028719-00167b16eac5.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 24,
      img: "../photo-1591195853828-11db59a44f6b.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
    {
      id: 25,
      img: "../photo-1622445275463-afa2ab738c34.avif",
      title: "HyperSonic X1",
      title2: "Premium Performance Sneaker",
      priceNew: "$299",
      priceOld: "$399",
      rate: 5,
      cat: "clothing",
    },
  ];

  const { id } = await params;
  const x = product.find((e) => e.id === Number(id));
  return (
    <div>
      <Header />
      <Scene3D />
      <div className="flex gap-13 ms-7 mt-2">
        <div>
          <img
            src={x.img}
            className="w-xl rounded-4xl"
            style={{ height: "618px" }}
          />
          <div
            className="rounded-2xl p-4 mt-4"
            style={{ backgroundColor: "#11101d" }}
          >
            <div>
              <p className="text-white font-bold text-xl">Choose Your Color</p>
              <p className="text-gray-500 text-sm">Pick a vibrant shade</p>
            </div>
            <div className="flex gap-14 mt-4">
              <div className="w-9 h-9 bg-purple-400 rounded-3xl"></div>
              <div className="w-9 h-9 bg-blue-400 rounded-3xl"></div>
              <div className="w-9 h-9 bg-red-400 rounded-3xl"></div>
              <div className="w-9 h-9 bg-green-400 rounded-3xl"></div>
              <div className="w-9 h-9 bg-black rounded-3xl"></div>
              <div className="w-9 h-9  bg-pink-400 rounded-3xl"></div>
            </div>
            <button className="border-2 bg-black buts p-2 m-5 mt-4 rounded-2xl w-full text-white text-sm">
              Reset to Default
            </button>
          </div>
          <div
            className="rounded-2xl p-4 mt-4"
            style={{ backgroundColor: "#11101d" }}
          >
            <div>
              <p className="text-white font-bold text-xl">Customer Reviews</p>
            </div>
            <div className="flex items-center">
              {Array.from({ length: x.rate }, (_, i) => (
                <StarRoundedIcon key={i} className="text-amber-400" />
              ))}
              <span className="ps-3 font-medium">4.8 (122 reviews)</span>
            </div>
            <p className="text-white font-medium">Alex M.</p>
            <p className="text-gray-400 text-sm">
              Super comfortable and stylish! Perfect for footwear.
            </p>
            <p className="text-white font-medium pt-4">Sarah K.</p>
            <p className="text-gray-400 text-sm">
              Great HyperSonic X1, and sizing runs perfect for me.
            </p>
            <button className="border-2 bg-black buts p-2 m-5 mt-4 rounded-2xl w-full text-white text-sm">
              View All Reviews
            </button>
          </div>
        </div>
        <div>
          <p
            className=" text-4xl font-bold mb-4 mt-4"
            style={{
              background:
                "linear-gradient(to right, hsl(195 100% 50%), hsl(263 70% 58%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {x.title}
          </p>
          <p className="text-gray-400 text-xl font-bold mb-4">{x.title2}</p>
          <div className="flex items-center gap-3">
            <p className="text-white text-2xl font-black mb-4">{x.priceNew}</p>
            <p className="text-gray-500 line-through mb-4">{x.priceOld}</p>
            <button
              className="inline-flex items-center rounded-full text-sm  px-5 p-0.5 text-white
                  hover:bg-red-500!   "
              style={{ backgroundColor: "hsl(0 84.2% 60.2%)" }}
            >
              25% off
            </button>
            <button
              className="inline-flex items-center rounded-full text-sm  px-5 p-0.5 text-white 
                 bg-yellow-500 hover:bg-purple-500!  "
            >
              Low Stock
            </button>
          </div>
          <div>
            <p className="text-white pb-4 pt-5">Select Size (US)</p>
            <div className="flex gap-5">
              <button
                className="p-3 w-14  buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                7
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                8
              </button>
              <button
                className="p-3 w-14 buts text-white rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                8.5
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                9
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                9.5
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                10
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                10.5
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                11
              </button>
              <button
                className="p-3 w-14 buts text-white  rounded-xl"
                style={{ backgroundColor: "#11101d" }}
              >
                12
              </button>
            </div>
            <p className="text-white pt-7">Quantity</p>
            <Counter />
          </div>
          <p className="pt-8 text-white">You May Also Like</p>
          <div className="flex gap-5 mt-2">
            <div
              className="p-3 w-52  buts text-white  rounded-xl"
              style={{ backgroundColor: "#11101d" }}
            >
              <img
                src="../photo-1542291026-7eec264c27ff.avif"
                className="w-40 m-auto rounded-2xl h-32"
              />
              <p className="text-center text-white pt-3">
                HyperSonic X1
                <p className="text-gray-400">$299</p>
              </p>
              <button className="border-2 bg-black buts p-2 m-5 mt-4 rounded-2xl w-full text-white text-sm">
                View All Reviews
              </button>
            </div>
            <div
              className="p-3 w-52  buts text-white  rounded-xl"
              style={{ backgroundColor: "#11101d" }}
            >
              <img
                src="../photo-1606107557195-0e29a4b5b4aa.avif"
                className="w-40 m-auto rounded-2xl h-32"
              />
              <p className="text-center text-white pt-3">
                HyperSonic X1
                <p className="text-gray-400">$299</p>
              </p>
              <button className="border-2 bg-black buts p-2 m-5 mt-4 rounded-2xl w-full text-white text-sm">
                View All Reviews
              </button>
            </div>
            <div
              className="p-3 w-52  buts text-white  rounded-xl"
              style={{ backgroundColor: "#11101d" }}
            >
              <img
                src="../photo-1595950653106-6c9ebd614d3a.avif"
                className="w-40 m-auto rounded-2xl h-32"
              />
              <p className="text-center text-white pt-3">
                HyperSonic X1
                <p className="text-gray-400">$299</p>
              </p>
              <button className="border-2 bg-black buts p-2 m-5 mt-4 rounded-2xl w-full text-white text-sm">
                View All Reviews
              </button>
            </div>
          </div>
          <div className="pt-5">
            <p className="text-gray-400">✓ Free shipping on orders over $150</p>

            <p className="text-gray-400">✓ 30-day return policy</p>

            <p className="text-gray-400">✓ 1-year warranty included</p>
          </div>
          <div
            className="rounded-2xl w-2xl p-6 mt-4"
            style={{ backgroundColor: "#11101d" }}
          >
            <div>
              <p className="text-white font-bold p-1.5 text-lg">
                Delivery Information
              </p>
              <p className="text-gray-500  p-1.5 text-sm font-medium">
                Estimated delivery: 3-5 business days
              </p>
              <p className="text-gray-500  p-1.5 text-sm font-medium">
                Free shipping on orders over $150
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
