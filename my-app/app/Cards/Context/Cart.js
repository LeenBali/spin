"use client";
import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const Cart = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [fav, setFav] = useState([]);
  const [favCount, setFavCount] = useState(0);

  // ✅ تعديل: استقبال المنتج مباشرة بدون {}
  function AddToCart(product) {
    console.log("🛒 جاري الإضافة:", product?.title);

    // التحقق من وجود المنتج
    if (!product) return;

    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quan: item.quan + 1 } : item,
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quan: 1 }]);
    }
    setCartCount(cartCount + 1);
  }

  // ✅ تعديل: استقبال المنتج مباشرة بدون {}
  function AddToFav(product) {
    console.log("❤️ جاري الإضافة للمفضلة:", product?.title);

    if (!product) return;

    const existingProduct = fav.find((item) => item.id === product.id);
    if (!existingProduct) {
      setFav([...fav, { ...product, quan: 1 }]);
      setFavCount(favCount + 1);
    } else {
      console.log("⚠️ المنتج موجود بالفعل في المفضلة");
    }
  }

  // ✅ دالة لحذف من السلة
  function RemoveFromCart(productId) {
    const productToRemove = cart.find((item) => item.id === productId);
    if (productToRemove) {
      setCartCount(cartCount - productToRemove.quan);
      setCart(cart.filter((item) => item.id !== productId));
    }
  }

  // ✅ دالة لحذف من المفضلة
  function RemoveFromFav(productId) {
    const productToRemove = fav.find((item) => item.id === productId);
    if (productToRemove) {
      setFavCount(favCount - productToRemove.quan);
      setFav(fav.filter((item) => item.id !== productId));
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        fav,
        favCount,
        AddToCart,
        AddToFav,
        RemoveFromCart,
        RemoveFromFav,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
