import React, { useEffect, useRef, useState } from 'react';
import './About.css';

const About = () => {
  const sectionsRef = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setVisible(v => {
              const updated = [...v];
              updated[i] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    sectionsRef.current.forEach(sec => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about">
      <div
        className={`about-hero ${visible[0] ? "visible" : ""}`}
        ref={el => (sectionsRef.current[0] = el)}
      >
        <h1>About Hintcore</h1>
        <p>We're a software development agency building scalable, secure, and user-focused digital solutions.</p>
      </div>

      <div
        className={`about-story ${visible[1] ? "visible" : ""}`}
        ref={el => (sectionsRef.current[1] = el)}
      >
        <h2>Our Journey</h2>
        <p>Founded on the belief that impactful tech solves real problems, we've built solutions that grow businesses and delight users.</p>
      </div>

      <div
        className={`about-values ${visible[2] ? "visible" : ""}`}
        ref={el => (sectionsRef.current[2] = el)}
      >
        <h2>Our Values</h2>
        <ul>
          <li>Innovation — pushing boundaries</li>
          <li>Transparency — clear, honest collaboration</li>
          <li>Quality — we take pride in well-crafted code</li>
        </ul>
      </div>
    </div>
  );
};

export default About;