// components/HomeAbout/HomeAbout.jsx

import React, { useEffect, useRef, useState } from 'react';
import './HomeAbout.css';

const HomeAbout = () => {
  const ref = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect(); // Clean up observer
  }, []);

  return (
    <section className={`home-about ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="home-about-container">
        <h2 className="home-about-title">About Hintcore</h2>
        <p className="home-about-text">
          At Hintcore, we specialize in building robust, scalable, and user-centric software solutions.
          From custom web applications to cutting-edge mobile apps, our team is committed to helping
          businesses thrive in the digital age.
        </p>
        <p className="home-about-text">
          With a passion for excellence and a focus on innovation, we merge creativity with technical expertise
          to deliver products that truly make a difference.
        </p>
        <a href="/about" className="home-about-link">Learn More</a>
      </div>
    </section>
  );
};

export default HomeAbout;