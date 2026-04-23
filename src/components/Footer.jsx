import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Share2, Globe, Video, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="brand-logo footer-logo">
              Nova<span>Cart</span>
            </Link>
            <p className="footer-desc">
              Your premium destination for the latest fashion, cutting-edge electronics, and stunning accessories.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><Video size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/shop">Shop Now</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Customer Support</h4>
            <ul>
              <li><Link to="/returns">Returns & Refunds</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/track-order">Track Order</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="footer-heading">Subscribe</h4>
            <p>Get 10% off your first order!</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="input-base" required />
              <button type="submit" className="btn-primary subscribe-btn">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NovaCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
