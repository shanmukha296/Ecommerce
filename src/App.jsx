import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import './App.css';

// Placeholder components for pages we will build later
const ProductDetails = () => <div className="container" style={{padding: '4rem 0'}}><h2>Product Details</h2></div>;
const Cart = () => <div className="container" style={{padding: '4rem 0'}}><h2>Shopping Cart</h2></div>;
const Checkout = () => <div className="container" style={{padding: '4rem 0'}}><h2>Checkout</h2></div>;
const LoginSignup = () => <div className="container" style={{padding: '4rem 0'}}><h2>Login / Signup</h2></div>;
const Wishlist = () => <div className="container" style={{padding: '4rem 0'}}><h2>Wishlist</h2></div>;
const Contact = () => <div className="container" style={{padding: '4rem 0'}}><h2>Contact</h2></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
