import React, { useEffect, useRef, useState } from 'react';
import './HomeHero.css';

const HomeHero = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`home-hero ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="home-hero-overlay" />
      <div className="home-hero-container">
        <h1>Empowering Businesses Through Code</h1>
        <p>
          Hintcore delivers cutting-edge, scalable, and user-focused software
          that accelerates your digital transformation journey.
        </p>
        <a href="#contact" className="home-hero-cta">Let's Build Together</a>
      </div>
    </section>
  );
};

export default HomeHero;