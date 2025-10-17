import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">HintCore</h2>
          <p className="footer-text">
            Building innovative tech solutions that drive real-world impact.
          </p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: info@hintcore.com.ng</p>
          <p>Phone: +234 805 902 7156</p>
          <p>Location: Enugu, Nigeria</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} HintCore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;