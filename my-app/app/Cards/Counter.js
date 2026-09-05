"use client";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCart } from "./Context/Cart";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  function increase() {
    setCounter(counter + 1);
  }
  function decrease() {
    setCounter(counter - 1);
    if (counter === 0) {
      setCounter(0);
    }
  }
  const { AddToCart, AddToFav } = useCart();
  return (
    <div>
      <div className="flex gap-2 items-center mt-2">
        <button
          onClick={decrease}
          className=" w-8 buts h-8 buts text-white  rounded-xl"
          style={{ backgroundColor: "#11101d" }}
        >
          -
        </button>
        <p className="text-white">{counter}</p>
        <button
          onClick={increase}
          className=" w-8 buts h-8 text-white  rounded-xl"
          style={{ backgroundColor: "#11101d" }}
        >
          +
        </button>
      </div>
      <div className="flex gap-10 mt-4">
        <button
          className="bg-purple-500! rounded-2xl text-white p-2 w-xl"
          onClick={AddToCart}
        >
          Add to Cart
        </button>
        <div
          className="w-12 h-12 rounded-2xl p-2.5  buts"
          style={{ backgroundColor: "#11101d" }}
        >
          <FavoriteBorderIcon className="text-white " onClick={AddToFav} />
        </div>
      </div>
    </div>
  );
};

export default Counter;
