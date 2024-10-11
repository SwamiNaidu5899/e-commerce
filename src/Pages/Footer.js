import React from 'react';
import '../styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Customer Service Section */}
        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li>Help Center</li>
            <li>Returns</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* Information Section */}
        <div className="footer-section">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: support@yourstore.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 E-commerce St, Shopping City</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 YourStore. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
