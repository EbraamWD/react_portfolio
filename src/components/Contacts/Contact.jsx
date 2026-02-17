import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import './ContactSection.css';

export function ContactSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const calendarLink = 'https://calendar.app.google/XAZRnPRSJ8ydW9LU8';

  return (
    <section id="contact" className="contact-section">
      <div className="contact-background" />
      <div className="contact-glow" />

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            <span className="contact-title-gradient">
              {t.contact.title}
            </span>
          </h2>
          <p className="contact-description">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-cta-column"
          >
            <div className="contact-cta-card">
              <h3 className="contact-cta-title">{t.contact.cta.title}</h3>
              <p className="contact-cta-description">
                {t.contact.cta.description}
              </p>
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg btn-full"
              >
                {t.contact.cta.button}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="contact-info-column"
          >
            <div className="contact-info-card">
              <h3 className="contact-info-title">{t.contact.info.title}</h3>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-info-label">{t.contact.info.email}</h4>
                  <a
                    href="mailto:ebraam.saad@gmail.com"
                    className="contact-info-link"
                  >
                    ebraam.saad@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-info-label">{t.contact.info.location}</h4>
                  <p className="contact-info-text">{t.contact.info.locationValue}</p>
                </div>
              </div>
            </div>

            <div className="contact-social-card">
              <h3 className="contact-info-title">{t.contact.info.connect}</h3>
              <div className="contact-social-links">
                <a
                  href="https://github.com/EbraamWD/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="social-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ebraamsaad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="social-icon" />
                </a>
              </div>
            </div>

            <div className="contact-availability">
              <div className="availability-header">
                <div className="availability-indicator" />
                <span className="availability-text">{t.contact.info.availability}</span>
              </div>
              <p className="availability-desc">
                {t.contact.info.availabilityDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}