import React from 'react';
import './Projects.css';
import EDUSYNC from '../../assets/images/edusync.PNG';
import HINTCOREAGENCY from '../../assets/images/hintcoreagency.PNG';
import HINTCORESCAN from '../../assets/images/hintcorescan.PNG';
import AGROCONNECT from '../../assets/images/agroconnect.PNG';
import OBIMIMPACT from '../../assets/images/obimimpact.PNG';
import IGBOEZENORTHLGA from '../../assets/images/igboezenorthlga.PNG';

const projects = [
  {
    title: 'EduSync LMS',
    description:
      'A full-featured learning management system for schools to manage online courses, assignments, and grading.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: EDUSYNC,
    link: '#',
  },
  {
    title: 'Hintcore Scan',
    description:
      'A product authentication and QR-code-based verification system for real-time verification of authenticity.',
    tech: ['React Native', 'Express.js', 'MongoDB'],
    image: HINTCORESCAN,
    link: '#',
  },
  {
    title: 'Hintcore Agency Site',
    description:
      'Corporate website for Hintcore showcasing services, expertise, and portfolio.',
    tech: ['React', 'CSS', 'Figma'],
    image: HINTCOREAGENCY,
    link: '#',
  },
  {
    title: 'AgroConnect',
    description:
      'Mobile-first platform connecting farmers with markets, offering real-time pricing and logistics support.',
    tech: ['Flutter', 'Firebase', 'Google Maps API'],
    image: AGROCONNECT,
    link: '#',
  },
  {
    title: 'Igbo‑Eze North LGA Portal',
    description:
      'Official municipal portal for Igbo‑Eze North Local Government (Enugu State), providing civic services and announcements.',
    tech: ['React', 'Mongo', 'HTML/CSS', 'Node.js', 'AWS S3'],
    image: IGBOEZENORTHLGA,
    link: 'https://igboezenorthlga.en.gov.ng',
  },
  {
    title: 'ObimImpact',
    description:
      'Personal academic/professional site for Dr. Ifunanya Evangel Obim — lecturer in Library & Information Science.',
    tech: ['React', 'Mongo', 'HTML/CSS', 'Node.js', 'AWS S3', 'Cloudflare'],
    image: OBIMIMPACT,
    link: 'https://obimimpact.com.ng',
  },
];


const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Our Projects</h1>
        <p>
          Take a look at some of the real-world problems we’ve solved through powerful software and thoughtful design.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;