
import React from 'react';
import './Hero.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"></link>

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hey, I'm <span className="text-highlight">Ebraam Saad</span>
                    </h1>
                    <h2 className="hero-subtitle">Full-Stack Developer</h2>
                    <p className="hero-description">
                        I transform ideas into modern, responsive web applications.
                        As a full-stack developer, I work across multiple stacks — JavaScript,
                        TypeScript, PHP, and Node.js — with strong experience in Docker and cloud technologies.
                        From design to deployment, I build complete, scalable solutions.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            View my last projects
                        </button>
                        <button className="btn btn-secondary" onClick={scrollToContact}>
                            Let's get in touch
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <div className="profile-image"></div>
                        <div className floating-icon="floating-icon react">
                            <i className="fab fa-react"></i>
                        </div>
                        <div className floating-icon="floating-icon node">
                            <i className="fab fa-node-js"></i>
                        </div>
                        <div className floating-icon="floating-icon js">
                            <i className="fab fa-js-square"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
};

export default Hero;