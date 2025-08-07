import React, { useState } from 'react';
import './HomeNewsletter.css';

const HomeNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('Please enter a valid email address.');
      return;
    }

    // Placeholder for API call or integration
    console.log('Subscribing:', email);
    setStatus('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="home-newsletter">
      <div className="home-newsletter-container">
        <h2 className="home-newsletter-title">Stay Updated</h2>
        <p className="home-newsletter-subtitle">Subscribe to our newsletter to get the latest updates and offers.</p>
        <form className="home-newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            className="home-newsletter-input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="home-newsletter-button">Subscribe</button>
        </form>
        {status && <p className="home-newsletter-status">{status}</p>}
      </div>
    </section>
  );
};

export default HomeNewsletter;