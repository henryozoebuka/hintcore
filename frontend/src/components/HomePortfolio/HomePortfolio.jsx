import React from 'react';
import './HomePortfolio.css';
import PORTFOLIO1 from '../../assets/images/portfolio1.PNG';
import PORTFOLIO2 from '../../assets/images/portfolio2.PNG';
import PORTFOLIO3 from '../../assets/images/portfolio3.PNG';
import PORTFOLIO4 from '../../assets/images/portfolio4.PNG';
const portfolioItems = [
  {
    title: 'E-Commerce Platform',
    image: PORTFOLIO1,
    description: 'A full-stack e-commerce web app built with React, Node.js, and MongoDB.',
  },
  {
    title: 'Local Government Portal',
    image: PORTFOLIO2,
    description: 'A municipal information portal designed for transparency and service delivery.',
  },
  {
    title: 'Scan & Verify App',
    image: PORTFOLIO3,
    description: 'A QR-based product verification solution with React Native and Express.js.',
  },
  {
    title: 'Agency Landing Page',
    image: PORTFOLIO4,
    description: 'A responsive, high-converting landing page for a digital agency.',
  },
];

const HomePortfolio = () => {
  return (
    <section className="home-portfolio" id="portfolio">
      <div className="home-portfolio-container">
        <h2 className="home-portfolio-title">Our Portfolio</h2>
        <p className="home-portfolio-subtitle">
          Some of the impactful projects we've delivered for clients.
        </p>

        <div className="home-portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div className="home-portfolio-card" key={index}>
              <img src={item.image} alt={item.title} className="home-portfolio-image" />
              <div className="home-portfolio-content">
                <h3 className="home-portfolio-project">{item.title}</h3>
                <p className="home-portfolio-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;