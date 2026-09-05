/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useCart } from "./Cards/Context/Cart";
import Link from "next/link";

const Header = () => {
  const { cartCount, favCount } = useCart();

  return (
    <div
      className="flex items-center p-6"
      style={{
        backgroundColor: "rgb(0 0 0 / 82%)",
        borderBottom: "1px solid #11101d",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="flex items-center gap-2">
        <div className="bg-blue-500 logo">
          <img src="/favicon.png" alt="logo" className="w-10 h-10" />
        </div>
        <span className="text-2xl font-bold text-blue-500">SpinShop 360</span>
      </div>

      <div className="flex gap-5 items-center ml-auto">
        {/* السلة */}
        <div className="relative flex items-center gap-2">
          <Link href="/Cart">
            <ShoppingCartOutlinedIcon
              className="text-white"
              style={{ fontSize: "32px" }}
            />
            <span className="text-white text-sm font-bold bg-blue-500 rounded-full px-2 min-w-6 text-center">
              {cartCount}
            </span>
          </Link>
        </div>

        {/* المفضلة */}
        <div className="relative flex items-center gap-2">
          <Link href="./Fav">
            <FavoriteBorderOutlinedIcon
              className="text-white"
              style={{ fontSize: "32px" }}
            />
            <span className="text-white text-sm font-bold bg-red-500 rounded-full px-2 min-w-6 text-center">
              {favCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
