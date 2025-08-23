import React, { useState } from "react";
import './Project.css';
import airaImage from '../../images/aira.png';

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "AIRA",
            description: "AI powered extension + dashboard for recruiters. Increase recruiters productivity to scan CV's with AI reducing time wasting reading all the candidates CV.",
            technologies: ["Node.js", "Express", "MongoDB", "Python", "React", "JavaScript", "HMTL", "CSS", "CI/CD", "Railway", "DeepSeek API"],
            image: airaImage,
            link: "https://aira-production-34f2.up.railway.app/landing.html"
        }
    ]);

    return (
        <section id="projects" className="projects">
            <div className="projects-title">
                <h2>Latest Projects</h2>
            </div>
            <div className="container">
                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;