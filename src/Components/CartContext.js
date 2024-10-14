import React, { createContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast.success('Product added to cart!');
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
      toast.info('Product quantity updated in cart!');
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast.error('Product removed from cart!');
  };

  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishlistItems([...wishlistItems, product]);
      toast.success('Product added to wishlist!');
    } else {
      toast.info('Product already in wishlist!');
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
    toast.error('Product removed from wishlist!');
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </CartContext.Provider>
  );
};
