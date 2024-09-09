import React from "react";
import "./Footer.css";
import logo from '../Assets/logo.png'
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Crafters Logo" />
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/categories">Products</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@crafters.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Address: 123 Furniture St, Design City, CA</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Crafters. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
