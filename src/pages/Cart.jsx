import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  const shippingCost = cartTotal > 100 || cartTotal === 0 ? 0 : 15;
  const finalTotal = cartTotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="container cart-empty">
        <div className="empty-state glass">
          <ShoppingBag size={64} className="empty-icon" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <Link to="/shop" className="btn-primary mt-4">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-page" style={{padding: '3rem 1.5rem'}}>
      <h1 className="page-title mb-4">Shopping Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item glass">
              <Link to={`/product/${item.id}`} className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </Link>
              
              <div className="cart-item-info">
                <div>
                  <h3 className="item-name"><Link to={`/product/${item.id}`}>{item.name}</Link></h3>
                  <p className="item-price">
                    ${(item.price * (1 - item.discount / 100)).toFixed(2)}
                  </p>
                </div>
                
                <div className="cart-item-actions">
                  <div className="quantity-control glass">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className="qty-btn"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="qty-btn"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    className="remove-btn" 
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary glass">
          <h3 className="summary-title">Order Summary</h3>
          
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${cartTotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
          </div>
          
          <div className="summary-divider"></div>
          
          <div className="summary-row total">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
          
          <button 
            className="btn-primary checkout-btn" 
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
