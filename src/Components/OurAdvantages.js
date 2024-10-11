import React from 'react';
import { FaShippingFast, FaShieldAlt, FaExchangeAlt, FaTag } from 'react-icons/fa';
import '../styles.css';

function OurAdvantages() {
  return (
    <div className="about-container">
      <h2>Our Advantages</h2>
      <div className="advantages-container">
        <div className="advantage-item">
          <FaShippingFast className="advantage-icon" />
          <h3>Free Shipping</h3>
          <p>from $500</p>
        </div>
        <div className="advantage-item">
          <FaShieldAlt className="advantage-icon" />
          <h3>Warranty Service</h3>
          <p>for 3 months</p>
        </div>
        <div className="advantage-item">
          <FaExchangeAlt className="advantage-icon" />
          <h3>Exchange and Return</h3>
          <p>within 14 days</p>
        </div>
        <div className="advantage-item">
          <FaTag className="advantage-icon" />
          <h3>Discounts for Customers</h3>
          <p>Exclusive offers available</p>
        </div>
      </div>
    </div>
  );
}

export default OurAdvantages;
