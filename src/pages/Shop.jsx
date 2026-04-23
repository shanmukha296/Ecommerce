import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';
import './Shop.css';

const Shop = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [location]);

  useEffect(() => {
    let result = products;

    // Filter by Category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by Search
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => {
          const priceA = a.price * (1 - a.discount / 100);
          const priceB = b.price * (1 - b.discount / 100);
          return priceA - priceB;
        });
        break;
      case 'price-high':
        result.sort((a, b) => {
          const priceA = a.price * (1 - a.discount / 100);
          const priceB = b.price * (1 - b.discount / 100);
          return priceB - priceA;
        });
        break;
      case 'newest':
        // Assuming higher ID is newer for dummy data
        result.sort((a, b) => b.id - a.id);
        break;
      default:
        // Popular - sort by rating/reviews
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts([...result]);
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="container shop-page" style={{padding: '3rem 1.5rem'}}>
      <div className="shop-header">
        <h1 className="page-title">Shop Collection</h1>
        <p className="page-subtitle">Discover our premium selection of products.</p>
      </div>

      <div className="shop-layout">
        {/* Sidebar */}
        <aside className="shop-sidebar glass">
          <div className="sidebar-section">
            <h3 className="sidebar-title">Search</h3>
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="input-base"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">Categories</h3>
            <ul className="category-list">
              <li 
                className={`category-item ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All Categories
              </li>
              {categories.map((cat, idx) => (
                <li 
                  key={idx} 
                  className={`category-item ${selectedCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="shop-main">
          <div className="shop-toolbar glass">
            <div className="results-count">
              Showing {filteredProducts.length} results
            </div>
            <div className="sort-box">
              <span className="sort-label">Sort by:</span>
              <div className="select-wrapper">
                <select 
                  className="input-base sort-select" 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="popular">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest Arrivals</option>
                </select>
                <ChevronDown size={16} className="select-icon" />
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results glass">
              <h3>No products found</h3>
              <p>Try adjusting your search or filters.</p>
              <button 
                className="btn-primary mt-4" 
                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
