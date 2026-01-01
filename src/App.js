import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Project';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contact';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Game from './components/Game/Game';
import ExplainingGame from './components/Game/ExplainingGame';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Skills />
  <Services />
      <Projects />
      <Certifications />
      <Contacts />
    </div>
  );
}

export default App;
