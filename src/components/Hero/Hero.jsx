import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="hero-badge"
            >
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-title"
            >
              <span className='hero-title-gradient'>
                Hi, I'm Ebraam
              </span>
              <br />
              <span className="hero-title-gradient">
                Full Stack Engineer
              </span>
              <br />
              <span className="hero-title-white">
                Building Digital Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              Crafting elegant solutions to complex problems. Specializing in modern web technologies,
              scalable architecture, and user-centric design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="hero-subscription-badge"
            >
              <span className="badge-icon">✨</span>
              <span className="badge-text">
                <strong>Dedicated Monthly Collaboration</strong> — Subscribe for ongoing development and design support
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hero-buttons"
            >
              <button
                className="btn btn-primary btn-lg"
                onClick={() =>
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Explore Plans
                <ArrowRight className="icon-sm" />
              </button>
              <button
                className="btn btn-secondary btn-lg"
                onClick={() => window.open('https://calendar.app.google/XAZRnPRSJ8ydW9LU8', '_blank')}
              >
                Let's Connect
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="hero-social"
            >
              <a
                href="https://github.com/EbraamWD"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/ebraamsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="social-icon" />
              </a>
              <a
                href="mailto:ebraam.saad@gmail.com"
                className="social-link"
              >
                <Mail className="social-icon" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-visual"
          >
            <div className="hero-visual-container">
              <div className="hero-rings">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="hero-ring hero-ring-1"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="hero-ring hero-ring-2"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="hero-ring hero-ring-3"
                />
                
                <div className="hero-center-glow" />
              </div>

              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="hero-particle"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
