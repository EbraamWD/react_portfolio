import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import './ContactSection.css';

export function ContactSection() {
  const calendarLink = 'https://calendar.app.google/XAZRnPRSJ8ydW9LU8'; // Your Google Calendar link

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
              Let's Work Together
            </span>
          </h2>
          <p className="contact-description">
            Have a project in mind? Let's discuss how we can collaborate
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
              <h3 className="contact-cta-title">Schedule a Call</h3>
              <p className="contact-cta-description">
                The best way to discuss your project is over a video call. Click below to book a time that works for you.
              </p>
              <a
                href={calendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg btn-full"
              >
                Book a Call
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
              <h3 className="contact-info-title">Get in Touch</h3>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <Mail className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-info-label">Email</h4>
                  <a
                    href="mailto:ebraam.saad@gmail.it"
                    className="contact-info-link"
                  >
                    ebraam.saad@gmail.it
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon-wrapper">
                  <MapPin className="contact-icon" />
                </div>
                <div>
                  <h4 className="contact-info-label">Location</h4>
                  <p className="contact-info-text">Milan, Italy</p>
                </div>
              </div>
            </div>

            <div className="contact-social-card">
              <h3 className="contact-info-title">Connect with Me</h3>
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
                <span className="availability-text">Currently Available</span>
              </div>
              <p className="availability-desc">
                Open to new projects and collaborations
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}