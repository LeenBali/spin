"use client";

import React from "react";
import Cards from "./Cards/page";
const Homes = () => {
  return (
    <div>
      <div className="text-center p-7">
        <p className="text-blue-600 font-bold text-4xl">SpinShop 360</p>
        <p className="text-gray-500 font-medium p-2">
          Explore our collection in stunning 3D. Click any product to customize
          and view in detail.
        </p>
        <input
          type="search"
          className="input rounded-xl w-96 p-2 mt-1"
          placeholder="Search products..."
        />
      </div>
      <Cards />
    </div>
  );
};

export default Homes;
