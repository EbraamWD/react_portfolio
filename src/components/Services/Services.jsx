import { motion } from 'framer-motion';
import { Code2, Rocket, Zap, TrendingUp, Check } from 'lucide-react';
import './Services.css';

const plans = [
  {
    icon: Code2,
    name: 'Starter',
    price: '€1,200',
    period: '/month',
    description: 'Perfect for maintaining and improving your existing product',
    hours: '20 hours of development',
    features: [
      'Weekly check-ins',
      'Bug fixes & minor enhancements',
      'Code reviews',
      'Technical support',
      'Priority email response',
    ],
    popular: false,
  },
  {
    icon: TrendingUp,
    name: 'Growth',
    price: '€2,400',
    period: '/month',
    description: 'Ideal for continuous feature development and scaling',
    hours: '40 hours of development',
    features: [
      'Twice-weekly sprint planning',
      'Feature development & maintenance',
      'Performance optimization',
      'Technical consulting',
      'Slack/Discord integration',
    ],
    popular: true,
  },
  {
    icon: Zap,
    name: 'Landing Page',
    price: '€990',
    period: '',
    description: 'Get your startup online with a high-converting landing page',
    hours: 'One-time project',
    features: [
      'Custom design & copywriting',
      'Responsive development',
      'SEO optimization',
      'Analytics integration',
      'Deployment & hosting setup',
    ],
    popular: false,
  },
  {
    icon: Rocket,
    name: 'MVP',
    price: '€4,000',
    period: '',
    description: 'Launch your product idea fast with a market-ready MVP',
    hours: 'Complete product delivery',
    features: [
      'Product scoping & planning',
      'UI/UX prototype',
      'Full-stack development',
      '1st release deployment',
      'Technical documentation',
    ],
    popular: false,
  },
];

export function ServicesSection() {
  const calendarLink = 'https://calendar.app.google/XAZRnPRSJ8ydW9LU8'; // Google Calendar booking link
  
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
            <span className="services-badge-text">Subscription-Based Development</span>
          </div>
          <h2 className="services-title">
            <span className="services-title-gradient">
              Flexible Pricing Plans
            </span>
          </h2>
          <p className="services-description">
            Choose a plan that fits your needs. Scale up or down anytime.
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
                      Most Popular
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
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="services-info"
        >
          <div className="services-info-card">
            <h3 className="services-info-title">Why Subscription-Based Development?</h3>
            <div className="services-info-grid">
              <div className="services-info-item">
                <div className="services-info-icon">
                  <span className="services-info-emoji">💰</span>
                </div>
                <h4 className="services-info-item-title">Predictable Costs</h4>
                <p className="services-info-item-desc">
                  No surprise invoices. Fixed monthly rate for ongoing development.
                </p>
              </div>
              <div className="services-info-item">
                <div className="services-info-icon">
                  <span className="services-info-emoji">⚡</span>
                </div>
                <h4 className="services-info-item-title">Fast Turnaround</h4>
                <p className="services-info-item-desc">
                  Quick iterations and regular deliveries. Stay agile and competitive.
                </p>
              </div>
              <div className="services-info-item">
                <div className="services-info-icon">
                  <span className="services-info-emoji">🎯</span>
                </div>
                <h4 className="services-info-item-title">Flexible Plans</h4>
                <p className="services-info-item-desc">
                  Scale up or pause anytime. No long-term contracts required.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
