import React, { useState } from 'react';
import './Header.css';
import es from '../../images/es.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <a href="#home"><img src={es} alt="ES" /></a>
        </div>

        {/* nav con classe dinamica */}
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#services" onClick={toggleMenu}>Services</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#certifications" onClick={toggleMenu}>Certifications</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>

        {/* bottone hamburger / close */}
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Subscription banner in header for high visibility */}
      <div className="header-subscription">
        <div className="header-subscription__inner container">
          <div className="sub-left">
            <strong>Full‑Stack Subscription</strong>
            <span className="sub-desc"> — Dedicated monthly developer: STARTER €1,200/mo • GROWTH €2,400/mo</span>
          </div>

          <div className="sub-ctas">
            <a href="https://calendar.app.google/XAZRnPRSJ8ydW9LU8" target="_blank" rel="noopener noreferrer" className="btn-sub">Book a call</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
