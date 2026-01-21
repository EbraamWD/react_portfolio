import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, TrendingUp, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import './Services.css';

export function ServicesSection() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const calendarLink = 'https://calendar.app.google/XAZRnPRSJ8ydW9LU8';

  const plans = [
    {
      icon: Code2,
      name: t.services.plans.weekly.name,
      price: '€750',
      period: '/week',
      description: t.services.plans.weekly.description,
      hours: t.services.plans.weekly.hours,
      features: t.services.plans.weekly.features,
      popular: false,
    },
    {
      icon: TrendingUp,
      name: t.services.plans.growth.name,
      price: '€2,400',
      period: '/month',
      description: t.services.plans.growth.description,
      hours: t.services.plans.growth.hours,
      features: t.services.plans.growth.features,
      popular: true,
    },
    {
      icon: Zap,
      name: t.services.plans.landing.name,
      price: '€990',
      period: '',
      description: t.services.plans.landing.description,
      hours: t.services.plans.landing.hours,
      features: t.services.plans.landing.features,
      popular: false,
    },
    {
      icon: Rocket,
      name: t.services.plans.mvp.name,
      price: '€4,000',
      period: '',
      description: t.services.plans.mvp.description,
      hours: t.services.plans.mvp.hours,
      features: t.services.plans.mvp.features,
      popular: false,
    },
  ];
  
  return (
    <section id="services" className="services-section">
      <div className="services-background" />

      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <div className="services-badge">
            <span className="services-badge-text">{t.services.badge}</span>
          </div>
          <h2 className="services-title">
            <span className="services-title-gradient">
              {t.services.title}
            </span>
          </h2>
          <p className="services-description">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="services-grid">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card-wrapper"
              >
                {plan.popular && (
                  <div className="service-popular-badge">
                    <div className="service-popular-text">
                      {t.services.mostPopular}
                    </div>
                  </div>
                )}
                <div className={`service-card ${plan.popular ? 'service-card-popular' : ''}`}>
                  <div className="service-icon-wrapper">
                    <Icon className="service-icon" />
                  </div>

                  <h3 className="service-name">{plan.name}</h3>
                  
                  <p className="service-hours">{plan.hours}</p>

                  <div className="service-price-wrapper">
                    <span className="service-price">{plan.price}</span>
                    <span className="service-period">{plan.period}</span>
                  </div>

                  <p className="service-description">
                    {plan.description}
                  </p>

                  <ul className="service-features">
                    {plan.features.map((feature) => (
                      <li key={feature} className="service-feature">
                        <Check className="service-feature-icon" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`btn btn-full ${plan.popular ? 'btn-primary' : 'btn-outline-cyan'}`}
                    onClick={() => window.open(calendarLink, '_blank')}
                  >
                    {t.services.bookCall}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
