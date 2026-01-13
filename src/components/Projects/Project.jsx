import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import airaImage from '../../images/aira.png';
import prevenGoImage from '../../images/apple-touch-icon.png';
import './Project.css';

const projects = [
  {
    title: 'AIRA',
    description:
      'AI powered extension + dashboard for recruiters. Increase recruiters productivity to scan CV\'s with AI reducing time wasting reading all the candidates CV.',
    image: airaImage,
    tags: ["Node.js", "Express", "MongoDB", "Python", "React", "JavaScript", "HMTL", "CSS", "CI/CD", "Railway", "DeepSeek API"],
    liveUrl: 'https://aira-production-34f2.up.railway.app/landing.html',
    githubUrl: '#',
  },
  {
    title: 'PrevenGo',
    description:
      'Web app that creates quotes in zero time for freelancers or small business owners. PrevenGo is a quote generator that allows users to create and manage quotes for their clients easily.',
    image: prevenGoImage,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'JavaScript', 'HMTL', 'CSS', 'CI/CD', 'Railway', 'Vercel'],
    liveUrl: 'https://prevengo.xyz/',
    githubUrl: '#',
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-glow projects-glow-1" />
      <div className="projects-glow projects-glow-2" />

      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            <span className="projects-title-gradient">
              Featured Projects
            </span>
          </h2>
          <p className="projects-description">
            A selection of recent work showcasing modern web development and creative problem-solving
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-image-overlay" />
                
                <div className="project-hover-overlay">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink className="icon-xs" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    {project.githubUrl !== '#' && <Github className="icon-xs" />}
                    <Github className="icon-xs" />
                    Code
                  </a>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="projects-footer"
        >
          <a 
            href="https://github.com/EbraamWD/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-cyan btn-lg"
          >
            <Github className="icon-sm" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
