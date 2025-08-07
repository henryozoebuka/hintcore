import React from 'react';
import './HomeServices.css';
import { FaLaptopCode, FaMobileAlt, FaCogs, FaCloud, FaLightbulb, FaPencilRuler } from 'react-icons/fa';

const HomeServices = () => {
    const services = [
        {
            icon: <FaLaptopCode />,
            title: 'Web Development',
            description: 'High-performance websites and web applications built using modern technologies like React, Node.js, and MongoDB.',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Mobile Apps',
            description: 'Cross-platform mobile app development using React Native to reach both iOS and Android users efficiently.',
        },
        {
            icon: <FaCogs />,
            title: 'API Integrations',
            description: 'We connect systems with secure and scalable RESTful and GraphQL APIs for seamless data flow.',
        },
        {
            icon: <FaCloud />,
            title: 'DevOps & Cloud',
            description: 'From CI/CD pipelines to cloud deployment, we manage and optimize your infrastructure for scalability.',
        },
        {
            icon: <FaLightbulb />,
            title: 'Tech Consulting',
            description: 'Strategic support to turn your business ideas into working software.',
        },
        {
            icon: <FaPencilRuler />,
            title: 'UI/UX Design',
            description: 'Intuitive and visually compelling user interfaces tailored for optimal user experience and engagement.',
        },
    ];

    return (
        <section className="home-services" id="services">
            <div className="home-services-container">
                <h2 className="home-services-title">What We Do</h2>
                <p className="home-services-subtitle">We deliver modern solutions to power your digital presence.</p>
                <div className="home-services-grid">
                    {services.map((service, index) => (
                        <div className="home-service-card" key={index}>
                            <div className="home-service-icon">{service.icon}</div>
                            <h3 className="home-service-title">{service.title}</h3>
                            <p className="home-service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;