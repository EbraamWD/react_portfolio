import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import './Hero.css';

export function HeroSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

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
                {t.hero.greeting}
              </span>
              <br />
              <span className="hero-title-gradient">
                {t.hero.title}
              </span>
              <br />
              <span className="hero-title-white">
                {t.hero.subtitle}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hero-description"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="hero-subscription-badge"
            >
              <span className="badge-icon">✨</span>
              <span className="badge-text">
                <strong>{t.hero.subscriptionBadge}</strong> — {t.hero.subscriptionText}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-benefits"
            >
              <div className="hero-benefits-grid">
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon">
                    <span className="hero-benefit-emoji">💰</span>
                  </div>
                  <h4 className="hero-benefit-title">{t.services.whySubscription.benefits.predictable.title}</h4>
                  <p className="hero-benefit-desc">
                    {t.services.whySubscription.benefits.predictable.description}
                  </p>
                </div>
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon">
                    <span className="hero-benefit-emoji">⚡</span>
                  </div>
                  <h4 className="hero-benefit-title">{t.services.whySubscription.benefits.fast.title}</h4>
                  <p className="hero-benefit-desc">
                    {t.services.whySubscription.benefits.fast.description}
                  </p>
                </div>
                <div className="hero-benefit-item">
                  <div className="hero-benefit-icon">
                    <span className="hero-benefit-emoji">🎯</span>
                  </div>
                  <h4 className="hero-benefit-title">{t.services.whySubscription.benefits.flexible.title}</h4>
                  <p className="hero-benefit-desc">
                    {t.services.whySubscription.benefits.flexible.description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
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
