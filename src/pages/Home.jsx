import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, Clock } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const bestSellers = products.slice(4, 8);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Shop the <span className="highlight-text">Latest Trends</span>
            </h1>
            <p className="hero-subtitle">
              Discover premium fashion, cutting-edge electronics, and stunning accessories tailored for your modern lifestyle.
            </p>
            <div className="hero-buttons">
              <Link to="/shop" className="btn-primary hero-btn">
                Shop Now <ArrowRight size={20} />
              </Link>
              <a href="#categories" className="btn-secondary hero-btn glass">
                Explore Categories
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper">
             <div className="hero-blob"></div>
             <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" alt="Fashion Trend" className="hero-image glass" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section container">
        <div className="feature-card glass">
          <Truck size={32} className="feature-icon" />
          <h3>Free Shipping</h3>
          <p>On all orders over $100</p>
        </div>
        <div className="feature-card glass">
          <Shield size={32} className="feature-icon" />
          <h3>Secure Payment</h3>
          <p>100% protected transactions</p>
        </div>
        <div className="feature-card glass">
          <Clock size={32} className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Always here to help you</p>
        </div>
      </section>

      {/* Top Categories */}
      <section id="categories" className="categories-section container">
        <div className="section-header">
          <h2>Top Categories</h2>
          <Link to="/shop" className="view-all-link">View All <ArrowRight size={16} /></Link>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link to={`/shop?category=${category.name}`} key={index} className="category-card glass">
              <div className="category-overlay"></div>
              <h3>{category.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section container">
        <div className="section-header">
          <h2>Featured Products</h2>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="products-section container">
        <div className="section-header">
          <h2>Best Sellers</h2>
        </div>
        <div className="products-grid">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
