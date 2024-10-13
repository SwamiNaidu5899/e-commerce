import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductCarousel from './Components/Card';
import CartWishlistPanel from './Components/SliderPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Carousel';
import Shop from './Pages/Shop';
import './styles.css';
import Footer from './Pages/Footer';
import AboutUs from './Pages/AboutUs';
import OurAdvantages from './Components/OurAdvantages';
import Feedback from './Components/Feedback';
import Offers from './Components/Offers';
import TopBrands from './Components/Brands';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  // Function to remove an item from the cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  // Function to increase the quantity of an item in the cart
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity of an item in the cart
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
    <Router>
      <Header cartItems={cartItems} wishlistItems={wishlistItems} />
      <CartWishlistPanel
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        removeFromCart={removeFromCart}
        removeFromWishlist={removeFromWishlist}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
      />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Offers />
              <ProductCarousel addToCart={addToCart} addToWishlist={addToWishlist} />
              <OurAdvantages />
              <TopBrands />
              <Feedback />
              <Footer />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Shop addToCart={addToCart} addToWishlist={addToWishlist} />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
