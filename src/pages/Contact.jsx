import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container" style={{padding: '4rem 1.5rem'}}>
      <div style={{textAlign: 'center', marginBottom: '4rem'}}>
        <h1 style={{fontSize: '2.5rem', marginBottom: '1rem'}}>Contact Us</h1>
        <p style={{color: 'var(--text-secondary)'}}>We'd love to hear from you. Please fill out this form.</p>
      </div>
      
      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', maxWidth: '1000px', margin: '0 auto'}}>
        <div className="contact-info" style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
          <div className="info-item glass" style={{padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <Mail size={24} style={{color: 'var(--accent-primary)'}} />
            <div>
              <h4 style={{marginBottom: '0.25rem'}}>Email</h4>
              <p style={{color: 'var(--text-secondary)'}}>support@novacart.com</p>
            </div>
          </div>
          <div className="info-item glass" style={{padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <Phone size={24} style={{color: 'var(--accent-primary)'}} />
            <div>
              <h4 style={{marginBottom: '0.25rem'}}>Phone</h4>
              <p style={{color: 'var(--text-secondary)'}}>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="info-item glass" style={{padding: '1.5rem', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <MapPin size={24} style={{color: 'var(--accent-primary)'}} />
            <div>
              <h4 style={{marginBottom: '0.25rem'}}>Office</h4>
              <p style={{color: 'var(--text-secondary)'}}>123 Tech Boulevard, NY</p>
            </div>
          </div>
        </div>
        
        <form className="glass" style={{padding: '2.5rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '1.5rem'}} onSubmit={(e) => {e.preventDefault(); alert('Message sent!');}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.875rem', fontWeight: '500'}}>First Name</label>
              <input type="text" className="input-base" required />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <label style={{fontSize: '0.875rem', fontWeight: '500'}}>Last Name</label>
              <input type="text" className="input-base" required />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.875rem', fontWeight: '500'}}>Email</label>
            <input type="email" className="input-base" required />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <label style={{fontSize: '0.875rem', fontWeight: '500'}}>Message</label>
            <textarea className="input-base" rows="5" required style={{resize: 'vertical'}}></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{alignSelf: 'flex-start', marginTop: '1rem'}}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
