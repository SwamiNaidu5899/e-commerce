import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import ProductCarousel from './Components/Card'
import CartWishlistPanel from './Components/SliderPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Carousel';
import Shop from './Pages/Shop';
import './styles.css'
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

  const addToCart = (product) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
    if (!isAlreadyInCart) {
      setCartItems([...cartItems, product]);
    }
  };

  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlistItems.some((item) => item.id === product.id);
    if (!isAlreadyInWishlist) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  return (
    <>

      <Router>
        {/* <CartWishlistPanel
        cartItems={cartItems}
        wishlistItems={wishlistItems}
        removeFromCart={(id) => setCartItems(cartItems.filter((item) => item.id !== id))}
        removeFromWishlist={(id) => setWishlistItems(wishlistItems.filter((item) => item.id !== id))}
        increaseQuantity={(id) => setCartItems(cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item))}
        decreaseQuantity={(id) => setCartItems(cartItems.map((item) => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item))}
      /> */}
        <Routes>
          <Route path="/" element={<> <Header cartItems={cartItems} wishlistItems={wishlistItems} />
            <Banner /><Offers /><ProductCarousel /> <OurAdvantages /> <TopBrands /><Feedback /><Footer />
            </>} />
          <Route
            path="/shop"
            element={<><Header cartItems={cartItems} wishlistItems={wishlistItems} /><Shop addToCart={addToCart} addToWishlist={addToWishlist} /><Footer/></>}
          />
          <Route path='about' element={<AboutUs />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
