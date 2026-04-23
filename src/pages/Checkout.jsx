import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container" style={{padding: '4rem 0', textAlign: 'center'}}>
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn-primary mt-4">Go to Shop</Link>
      </div>
    );
  }

  const shippingCost = cartTotal > 100 ? 0 : 15;
  const finalTotal = cartTotal + shippingCost;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order Placed Successfully!');
    navigate('/');
    // In a real app we'd clear cart here
  };

  return (
    <div className="container" style={{padding: '3rem 1.5rem'}}>
      <h1 style={{marginBottom: '2rem'}}>Checkout</h1>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 380px', gap: '2rem'}}>
        <form className="glass" style={{padding: '2rem', borderRadius: '16px'}} onSubmit={handleSubmit}>
          <h3 style={{marginBottom: '1.5rem'}}>Shipping Address</h3>
          
          <div style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
            <input type="text" className="input-base" placeholder="Full Name" required />
            <input type="text" className="input-base" placeholder="Address Line 1" required />
            <input type="text" className="input-base" placeholder="City" required />
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
              <input type="text" className="input-base" placeholder="State" required />
              <input type="text" className="input-base" placeholder="Zip Code" required />
            </div>
          </div>
          
          <h3 style={{marginBottom: '1.5rem'}}>Payment Option</h3>
          <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
              <input type="radio" name="payment" defaultChecked /> Credit Card
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
              <input type="radio" name="payment" /> UPI
            </label>
            <label style={{display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
              <input type="radio" name="payment" /> Cash on Delivery
            </label>
          </div>
          
          <button type="submit" className="btn-primary" style={{width: '100%'}}>Place Order</button>
        </form>
        
        <div className="glass" style={{padding: '2rem', borderRadius: '16px', height: 'fit-content'}}>
          <h3 style={{marginBottom: '1.5rem'}}>Order Summary</h3>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem'}}>
            {cartItems.map(item => (
              <div key={item.id} style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem'}}>
                <span>{item.quantity}x {item.name.substring(0, 20)}...</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div style={{borderTop: '1px solid var(--card-border)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between'}}>
            <span>Total</span>
            <span style={{fontWeight: '700'}}>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
