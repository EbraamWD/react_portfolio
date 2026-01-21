import { motion } from 'framer-motion';
import { CreditCard, Mail, ClipboardList, Code, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import './HowItWorksSection.css';

export function HowItWorksSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const steps = [
    {
      number: '01',
      icon: CreditCard,
      title: t.howItWorks.steps.step1.title,
      description: t.howItWorks.steps.step1.description,
      color: 'cyan',
    },
    {
      number: '02',
      icon: Mail,
      title: t.howItWorks.steps.step2.title,
      description: t.howItWorks.steps.step2.description,
      color: 'blue',
    },
    {
      number: '03',
      icon: ClipboardList,
      title: t.howItWorks.steps.step3.title,
      description: t.howItWorks.steps.step3.description,
      color: 'purple',
    },
    {
      number: '04',
      icon: Code,
      title: t.howItWorks.steps.step4.title,
      description: t.howItWorks.steps.step4.description,
      color: 'cyan',
      badge: t.howItWorks.steps.step4.badge,
    },
  ];

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-background">
        <div className="how-it-works-glow how-it-works-glow-1" />
        <div className="how-it-works-glow how-it-works-glow-2" />
      </div>

      <div className="how-it-works-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="how-it-works-header"
        >
          <div className="how-it-works-badge">
            <Sparkles className="how-it-works-badge-icon" />
            <span className="how-it-works-badge-text">{t.howItWorks.badge}</span>
          </div>
          <h2 className="how-it-works-title">
            <span className="how-it-works-title-gradient">
              {t.howItWorks.title}
            </span>
          </h2>
          <p className="how-it-works-description">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="how-it-works-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="step-wrapper"
              >
                <div className={`step-card step-card-${step.color}`}>
                  <div className="step-number-wrapper">
                    <span className="step-number">{step.number}</span>
                  </div>

                  <div className="step-content">
                    <div className="step-icon-wrapper">
                      <Icon className="step-icon" />
                    </div>

                    <h3 className="step-title">{step.title}</h3>
                    <p className="step-description">{step.description}</p>

                    {step.badge && (
                      <div className="step-badge">
                        <span className="step-badge-text">{step.badge}</span>
                      </div>
                    )}
                  </div>

                  {index < steps.length - 1 && (
                    <div className="step-connector" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="how-it-works-cta"
        >
          <div className="how-it-works-cta-card">
            <h3 className="how-it-works-cta-title">{t.howItWorks.cta.title}</h3>
            <p className="how-it-works-cta-description">
              {t.howItWorks.cta.description}
            </p>
            <button
              className="btn btn-primary btn-cta"
              onClick={() =>
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              {t.howItWorks.cta.button}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}