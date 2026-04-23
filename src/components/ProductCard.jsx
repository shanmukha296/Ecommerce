import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart, toggleWishlist, wishlistItems } = useCart();
  
  const isWishlisted = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={14} 
          className={i <= Math.round(rating) ? "star-filled" : "star-empty"}
          fill={i <= Math.round(rating) ? "currentColor" : "none"}
        />
      );
    }
    return stars;
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card card">
      <div className="product-image-container">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        
        {product.discount > 0 && (
          <span className="discount-badge">-{product.discount}%</span>
        )}
        
        <button 
          className={`wishlist-btn glass ${isWishlisted ? 'active' : ''}`}
          onClick={handleToggleWishlist}
          aria-label="Add to wishlist"
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>
        
        <div className="product-overlay glass">
          <button className="overlay-btn" onClick={(e) => { e.preventDefault(); console.log('Quick view', product.id); }}>
            <Eye size={18} /> Quick View
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">{renderStars(product.rating)}</div>
          <span className="rating-count">({product.reviews})</span>
        </div>
        
        <div className="product-bottom">
          <div className="product-price">
            {product.discount > 0 ? (
              <>
                <span className="current-price">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="current-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button className="add-cart-btn btn-primary" onClick={handleAddToCart} aria-label="Add to cart">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
