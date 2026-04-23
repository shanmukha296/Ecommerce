import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, Heart, Shield, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlistItems } = useCart();
  
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Black');

  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    const found = products.find(p => p.id === parseInt(id));
    if (found) {
      setProduct(found);
    } else {
      // Handle not found
      navigate('/shop');
    }
  }, [id, navigate]);

  if (!product) return <div className="container" style={{padding: '4rem 0'}}>Loading...</div>;

  const isWishlisted = wishlistItems.some(item => item.id === product.id);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    // In a real app we'd pass size and color too
    for (let i = 0; i < quantity; i++) {
        addToCart(product);
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i <= Math.round(rating) ? "star-filled" : "star-empty"}
          fill={i <= Math.round(rating) ? "currentColor" : "none"}
        />
      );
    }
    return stars;
  };

  const colors = ['Black', 'Silver', 'Navy'];
  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="product-details-page">
      <div className="container" style={{paddingTop: '3rem'}}>
        <div className="pd-layout">
          {/* Image Gallery */}
          <div className="pd-image-section">
            <div className="pd-main-image glass">
              <img src={product.image} alt={product.name} />
              {product.discount > 0 && (
                <span className="discount-badge">-{product.discount}%</span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="pd-info-section">
            <div className="pd-header">
              <span className="pd-category">{product.category}</span>
              <h1 className="pd-title">{product.name}</h1>
              
              <div className="pd-rating">
                <div className="stars">{renderStars(product.rating)}</div>
                <span>{product.rating} Rating ({product.reviews} Reviews)</span>
              </div>
            </div>

            <div className="pd-price-row">
              {product.discount > 0 ? (
                <>
                  <span className="pd-current-price">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                  <span className="pd-original-price">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="pd-current-price">${product.price.toFixed(2)}</span>
              )}
            </div>

            <p className="pd-description">{product.description}</p>

            {/* Options */}
            {(product.category === 'Fashion' || product.category === 'Accessories') && (
              <div className="pd-options">
                <div className="option-group">
                  <h4>Size</h4>
                  <div className="size-selector">
                    {sizes.map(size => (
                      <button 
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="option-group">
                  <h4>Color</h4>
                  <div className="color-selector">
                    {colors.map(color => (
                        <button 
                            key={color}
                            className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                            onClick={() => setSelectedColor(color)}
                        >
                            {color}
                        </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="pd-actions">
              <div className="pd-quantity glass">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={18} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={18} /></button>
              </div>

              <button className="btn-primary flex-1" onClick={handleAddToCart}>
                <ShoppingCart size={20} /> Add to Cart
              </button>

              <button 
                className={`pd-wishlist-btn glass ${isWishlisted ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              >
                <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Perks */}
            <div className="pd-perks glass">
              <div className="perk-item">
                <Shield size={20} className="perk-icon" />
                <span>1 Year Warranty</span>
              </div>
              <div className="perk-item">
                <Truck size={20} className="perk-icon" />
                <span>Free Shipping over $100</span>
              </div>
              <div className="perk-item">
                <RotateCcw size={20} className="perk-icon" />
                <span>30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
            <div className="related-products">
                <h2 className="section-title">Related Products</h2>
                <div className="products-grid">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
