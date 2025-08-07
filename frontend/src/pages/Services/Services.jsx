import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Custom Software Development',
    description:
      'We build secure, scalable, and high-performing web and mobile applications tailored to your business needs.',
  },
  {
    title: 'Website Design & Development',
    description:
      'Beautiful, responsive, and fast websites that reflect your brand identity and engage users effectively.',
  },
  {
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile apps built with performance and usability in mind for both Android and iOS.',
  },
  {
    title: 'UI/UX Design',
    description:
      'We create intuitive interfaces and seamless experiences that delight users and drive engagement.',
  },
  {
    title: 'DevOps & Cloud Solutions',
    description:
      'From CI/CD pipelines to scalable cloud infrastructure, we help you automate and grow efficiently.',
  },
  {
    title: 'Technical Consulting & Support',
    description:
      'Our experts work with you to architect solutions, improve existing systems, and provide long-term support.',
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          At Hintcore, we offer full-cycle development services to bring your digital products to life —
          from planning to deployment and ongoing support.
        </p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="services-cta">
        <h2>Let’s Build Something Great</h2>
        <p>
          Have an idea or project in mind? Let’s collaborate and turn it into a powerful digital experience.
        </p>
        <a href="/contact" className="services-contact-btn">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Services;