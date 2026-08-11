import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FiMenu, FiX } from 'react-icons/fi';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <a href="#home" className="logo">
          Luiz Gustavo<span className="logo-dot">.</span>
        </a>

        <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a href="#sobre" onClick={closeMobileMenu}>Sobre Mim</a></li>
          <li><a href="#experiencia" onClick={closeMobileMenu}>Experiência</a></li>
          <li><a href="#habilidades" onClick={closeMobileMenu}>Habilidades</a></li>
          <li><a href="#formacao" onClick={closeMobileMenu}>Formação</a></li>
          <li><a href="#projetos" onClick={closeMobileMenu}>Projetos</a></li>
          <li><a href="#contato" onClick={closeMobileMenu}>Contato</a></li>
        </ul>

        <button className="mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
