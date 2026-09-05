import React from "react";

const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: " rgb(0 0 0 / 82%)" }} className="mt-2">
        <h1 className=" text-center text-2xl font-bold text-white mt-22 p-4">
          Why Choose Us
        </h1>
        <div className="flex justify-around ">
          <div className="text-center p-1">
            <div className="w-6 h-6 rounded-full bg-purple-400 m-auto p-4 mb-2"></div>
            <h1 className="text-white">360° Interactive View</h1>
            <p className="text-gray-500" style={{ fontSize: "14px" }}>
              Free shipping on all orders over $150 with 30-day returns
            </p>
          </div>
          <div className="text-center">
            <h1
              className="w-6 h-6 rounded-full m-auto p-4 mb-2"
              style={{ backgroundColor: "#00BFFF" }}
            ></h1>
            <h1 className="text-white">360° Interactive View</h1>
            <p className="text-gray-500" style={{ fontSize: "14px" }}>
              Hand-crafted products with the finest materials
            </p>
          </div>
          <div className="text-center ">
            <div className="w-6 h-6 rounded-full bg-purple-400 m-auto p-4 mb-2"></div>
            <h1 className="text-white">360° Interactive View</h1>
            <p className="text-gray-500" style={{ fontSize: "14px" }}>
              Free shipping on all orders over $150 with 30-day returns
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
