import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const Wishlist = () => {
  const { wishlistItems } = useCart();

  return (
    <div className="container" style={{padding: '3rem 1.5rem', minHeight: '60vh'}}>
      <div className="shop-header">
        <h1 className="page-title">Your Wishlist</h1>
        <p className="page-subtitle">Products you've saved for later.</p>
      </div>

      {wishlistItems.length > 0 ? (
        <div className="products-grid">
          {wishlistItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <div className="empty-state glass" style={{maxWidth: '500px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem', borderRadius: '24px'}}>
          <Heart size={64} className="empty-icon" style={{color: 'var(--accent-primary)', opacity: 0.5, marginBottom: '1.5rem'}} />
          <h2>Your wishlist is empty</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Save items you love to your wishlist to easily find them later.</p>
          <Link to="/shop" className="btn-primary">Explore Products</Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
