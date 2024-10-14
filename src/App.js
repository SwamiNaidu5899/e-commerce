import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './Components/CartContext'; 
import Header from './Components/Header';
import ProductCarousel from './Components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Carousel';
import Shop from './Pages/Shop';
import Footer from './Pages/Footer';
import AboutUs from './Pages/AboutUs';
import OurAdvantages from './Components/OurAdvantages';
import Feedback from './Components/Feedback';
import Offers from './Components/Offers';
import TopBrands from './Components/Brands';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import './styles.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Banner />
                <Offers />
                <ProductCarousel />
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
                <Header />
                <Shop />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutUs />
                <Footer />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
