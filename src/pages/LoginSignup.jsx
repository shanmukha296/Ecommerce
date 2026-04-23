import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login/signup delay
    setTimeout(() => {
      alert(isLogin ? "Logged in successfully!" : "Account created successfully!");
      navigate('/');
    }, 500);
  };

  return (
    <div className="container auth-container">
      <div className="auth-card glass">
        <div className="auth-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Login to access your account' : 'Join NovaCart for exclusive offers'}</p>
        </div>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="input-base" placeholder="John Doe" required />
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="input-base" placeholder="you@example.com" required />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="input-base" placeholder="••••••••" required />
          </div>

          <button type="submit" className="btn-primary auth-submit">
            {isLogin ? <><LogIn size={18} /> Login</> : <><UserPlus size={18} /> Sign Up</>}
          </button>
        </form>

        <div className="auth-toggle">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
