import React from 'react';
import './HomeCTA.css';
import { useNavigate } from 'react-router-dom';

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="home-cta">
      <div className="home-cta-container">
        <h2 className="home-cta-title">Ready to build something amazing?</h2>
        <p className="home-cta-text">Let’s bring your ideas to life with cutting-edge technology solutions tailored just for you.</p>
        <button className="home-cta-button" onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default HomeCTA;