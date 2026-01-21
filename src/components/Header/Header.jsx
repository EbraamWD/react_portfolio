import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import  es  from '../../images/es.png';
import { useLanguage } from '../../contexts/LanguageContext.jsx';
import { useTranslation } from '../../translations/translations.js';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: t.nav.home, id: 'hero' },
    { label: t.nav.skills, id: 'skills' },
    { label: t.nav.projects, id: 'projects' },
    { label: t.nav.services, id: 'services' },
    { label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <button
            onClick={() => scrollToSection('hero')}
            className="logo"
          >
            <img src={es} alt="Logo" className="logo-image" width={150}/>
          </button>

          <nav className="nav-desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-item"
              >
                {item.label}
              </button>
            ))}
            
            <div className="language-selector">
              <Globe size={18} className="language-icon" />
              <button
                onClick={() => toggleLanguage('en')}
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
              <span className="language-divider">|</span>
              <button
                onClick={() => toggleLanguage('it')}
                className={`language-btn ${language === 'it' ? 'active' : ''}`}
              >
                IT
              </button>
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="nav-mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-item-mobile"
              >
                {item.label}
              </button>
            ))}
            
            <div className="language-selector-mobile">
              <Globe size={18} className="language-icon" />
              <button
                onClick={() => {
                  toggleLanguage('en');
                  setIsMobileMenuOpen(false);
                }}
                className={`language-btn ${language === 'en' ? 'active' : ''}`}
              >
                EN
              </button>
              <span className="language-divider">|</span>
              <button
                onClick={() => {
                  toggleLanguage('it');
                  setIsMobileMenuOpen(false);
                }}
                className={`language-btn ${language === 'it' ? 'active' : ''}`}
              >
                IT
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
