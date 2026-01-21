import { Header } from './components/Header/Header.jsx';
import { HeroSection } from './components/Hero/Hero.jsx';
import { SkillsSection } from './components/Skills/Skills.jsx';
import { ProjectsSection } from './components/Projects/Project.jsx';
import { ServicesSection } from './components/Services/Services.jsx';
import { ContactSection } from './components/Contacts/Contact.jsx';
import { HowItWorksSection } from './components/HowItWorks/HowItWorksSection.jsx';
import { LanguageProvider } from './contexts/LanguageContext.jsx';
import './App.css';

export default function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <HowItWorksSection />
          <ServicesSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}
