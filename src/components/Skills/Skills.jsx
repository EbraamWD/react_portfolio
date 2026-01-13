import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Cloud,
  Smartphone,
} from 'lucide-react';
import './Skills.css';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    technologies: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'Angular', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 85 },
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', level: 90 },
      { name: 'TypeScript', level: 90 },
      { name: 'Java', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'Rest API', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: Cloud,
    technologies: [
      { name: 'Docker', level: 85 },
      { name: 'Vercel', level: 82 },
      { name: 'CI/CD', level: 88 },
      { name: 'Railway', level: 90 },
      { name: 'Git', level: 95 },
      { name: 'SVN', level: 90 },
      { name: 'Jira', level: 70 }
    ],
  },
  {
    category: 'AI Intregrations & Mobile',
    icon: Smartphone,
    technologies: [
      { name: 'AI Integrations', level: 90 },
      { name: 'Automations', level: 90 },
      { name: 'Flutter', level: 70 },
      { name: 'UI/UX', level: 88 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Animation', level: 80 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-background" />
      
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="skills-header"
        >
          <h2 className="skills-title">
            <span className="skills-title-gradient">
              Technical Skills
            </span>
          </h2>
          <p className="skills-description">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-card"
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <Icon className="skill-icon" />
                  </div>
                  <h3 className="skill-category">{skillGroup.category}</h3>
                </div>

                <div className="skill-list">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05 }}
                      className="skill-item"
                    >
                      <div className="skill-item-header">
                        <span className="skill-name">{tech.name}</span>
                        <span className="skill-level">{tech.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + techIndex * 0.05 + 0.2 }}
                          className="skill-progress-fill"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="tech-stack"
        >
          {['React', 'Node.js', 'TypeScript', 'AI integrations', 'Docker', 'Vercel', 'PostgreSQL', 'MongoDB', 'Rest API'].map((tech) => (
            <div key={tech} className="tech-badge">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
