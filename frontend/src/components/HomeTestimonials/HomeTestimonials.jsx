import React from 'react';
import './HomeTestimonials.css';

const testimonials = [
  {
    name: 'Chuka M.',
    role: 'Startup Founder',
    quote: 'HintCore helped us go from concept to launch in record time. The communication was excellent throughout.',
  },
  {
    name: 'Ada I.',
    role: 'Product Manager',
    quote: 'Their development team is professional, fast, and truly understands product strategy.',
  },
  {
    name: 'Uche N.',
    role: 'Agency Partner',
    quote: 'Reliable and technically strong. They delivered everything we asked for and more.',
  },
];

const HomeTestimonials = () => {
  return (
    <section className="home-testimonials">
      <div className="home-testimonials-container">
        <h2 className="home-testimonials-title">What Our Clients Say</h2>
        <div className="home-testimonial-cards">
          {testimonials.map((item, index) => (
            <div className="home-testimonial-card" key={index}>
              <p className="home-testimonial-quote">“{item.quote}”</p>
              <div className="home-testimonial-author">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonials;