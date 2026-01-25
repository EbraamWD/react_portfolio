import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import airaImage from '../../images/aira.png';
import prevenGoImage from '../../images/apple-touch-icon.png';
import sancarloimage from '../../images/sancarlotraslochi.png';
import './Project.css';

export function ProjectsSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const projects = [
    {
      title: t.projects.aira.title,
      description: t.projects.aira.description,
    image: airaImage,
    tags: ["Node.js", "Express", "MongoDB", "Python", "React", "JavaScript", "HMTL", "CSS", "CI/CD", "Railway", "DeepSeek API"],
    liveUrl: 'https://aira-production-34f2.up.railway.app/landing.html',
    githubUrl: '#',
  },
  {
    title: t.projects.prevengo.title,
    description: t.projects.prevengo.description,
    image: prevenGoImage,
    tags: ['Node.js', 'Express', 'PostgreSQL', 'React', 'JavaScript', 'HMTL', 'CSS', 'CI/CD', 'Railway', 'Vercel'],
    liveUrl: 'https://prevengo.xyz/',
    githubUrl: '#',
  },
  {
    title: t.projects.sancarlo.title,
    description: t.projects.sancarlo.description,
    image: sancarloimage,
    tags: ['Next.js', 'TypeScript', 'HMTL', 'CSS', 'Vercel'],
    liveUrl: 'https://sancarlotraslochi.it/',
    githubUrl: '#',
  }
];

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
              {t.projects.title}
            </span>
          </h2>
          <p className="projects-description">
            {t.projects.subtitle}
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
                    {t.projects.liveDemo}
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
            {t.projects.viewAllProjects}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
