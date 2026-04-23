import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { cartCount, wishlistItems } = useCart();

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <Link to="/" className="brand-logo">
          Nova<span>Cart</span>
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>
        
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          
          <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <Link to="/wishlist" className="icon-btn nav-badge-container" aria-label="Wishlist">
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="nav-badge">{wishlistItems.length}</span>
            )}
          </Link>
          
          <Link to="/cart" className="icon-btn nav-badge-container" aria-label="Cart">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="nav-badge">{cartCount}</span>
            )}
          </Link>
          
          <Link to="/login" className="login-btn">
            <User size={18} />
            <span className="hide-mobile">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
