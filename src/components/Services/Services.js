import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      {/* Decorative background elements */}
      <div className="services__bg-decoration services__bg-decoration--top-left"></div>
      <div className="services__bg-decoration services__bg-decoration--bottom-right"></div>
      
      <div className="container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__title">Services</h2>
          
          <div className="services__intro">
            <p className="services__description">
              I combine clean product design with solid engineering. Below are strengths and recommended subscription tiers — plus two standalone services for startups.
            </p>
            
            {/* Strengths badges */}
            <div className="strengths">
              <div className="strength-badge">
                <span className="strength-badge__icon">⚡</span>
                <span className="strength-badge__text">Full-stack versatility (JS/TS/React + backend)</span>
              </div>
              <div className="strength-badge">
                <span className="strength-badge__icon">🤖</span>
                <span className="strength-badge__text">AI integration expertise</span>
              </div>
              <div className="strength-badge">
                <span className="strength-badge__icon">✨</span>
                <span className="strength-badge__text">Professional design aesthetic</span>
              </div>
            </div>
          </div>
        </div>
        {/* Services Grid */}
        <div className="services__grid">
          
          {/* STARTER */}
          <article className="service-card">
            <div className="card-header card-header--starter">
              <div className="card-header__decoration"></div>
              <h3 className="card-header__title">STARTER</h3>
              <div className="card-header__price">
                <span className="price-amount">€1,200</span>
                <span className="price-period">/mo</span>
              </div>
            </div>
            
            <div className="card-body">
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">20 hours of development</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">Weekly check-ins</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">Bug fixes & minor enhancements</span>
                </li>
              </ul>
            </div>

            <div className="card-footer">
              <a href="https://calendar.app.google/XAZRnPRSJ8ydW9LU8" target="_blank" rel="noopener noreferrer" className="service-cta">Book a Call</a>
            </div>
          </article>

          {/* GROWTH - Featured */}
          <article className="service-card service-card--featured">
            <div className="featured-badge">MOST POPULAR</div>
            
            <div className="card-header card-header--growth">
              <div className="card-header__decoration"></div>
              <h3 className="card-header__title">GROWTH</h3>
              <div className="card-header__price">
                <span className="price-amount">€2,400</span>
                <span className="price-period">/mo</span>
              </div>
            </div>
            
            <div className="card-body">
              <ul className="feature-list">
                <li className="feature-item">
                  <span className="feature-icon feature-icon--growth">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">40 hours of development</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon feature-icon--growth">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">Twice-weekly sprint planning</span>
                </li>
                <li className="feature-item">
                  <span className="feature-icon feature-icon--growth">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="feature-text">Feature development & maintenance</span>
                </li>
              </ul>
            </div>

            <div className="card-footer">
              <a href="https://calendar.app.google/XAZRnPRSJ8ydW9LU8" target="_blank" rel="noopener noreferrer" className="service-cta service-cta--featured">Book a Call</a>
            </div>
          </article>

          {/* Landing Page */}
          <article className="service-card service-card--small">
            <div className="card-header card-header--landing">
              <div className="card-header__decoration"></div>
              <h3 className="card-header__title">Landing Page</h3>
              <div className="card-header__price">
                <span className="price-amount"> from € 990</span>
              </div>
            </div>
            
            <div className="card-body">
              <p className="card-description">Customized high-converting landing page for startups — copy, design and deployment.</p>
            </div>

            <div className="card-footer">
              <a href="https://calendar.app.google/XAZRnPRSJ8ydW9LU8" target="_blank" rel="noopener noreferrer" className="service-cta">Book a Call</a>
            </div>
          </article>

          {/* MVP */}
          <article className="service-card service-card--small">
            <div className="card-header card-header--mvp">
              <div className="card-header__decoration"></div>
              <h3 className="card-header__title">MVP</h3>
              <div className="card-header__price">
                <span className="price-amount">from €4,000</span>
              </div>
            </div>
            
            <div className="card-body">
              <p className="card-description">Fast MVP build to validate ideas — product scoping, prototype and 1st release, ready to market.</p>
            </div>

            <div className="card-footer">
              <a href="https://calendar.app.google/XAZRnPRSJ8ydW9LU8" target="_blank" rel="noopener noreferrer" className="service-cta">Book a Call</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Services;