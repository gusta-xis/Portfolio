import React from 'react';
import './Hero.css';
import { FiGithub, FiLinkedin, FiMessageCircle, FiMapPin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <FiMapPin size={14} /> Brasília - DF
        </div>
        <h4>Olá, meu nome é</h4>
        <h1 className="gradient-text">Luiz Gustavo Gouvêa Damascena</h1>
        <h3>Desenvolvedor Front-End, UX/UI & Product Designer</h3>
        
        <p className="hero-description">
          Crio experiências digitais que unem código e design — do wireframe ao deploy. 
          Trabalho com React, Next.js e Figma para transformar ideias em produtos funcionais, 
          acessíveis e visualmente impactantes.
        </p>

        <div className="hero-actions">
          <div className="hero-buttons">
            <a href="#contato" className="btn-primary">
              <FiMessageCircle size={18} />
              Vamos Conversar!
            </a>
            <a href="https://github.com/gusta-xis" target="_blank" rel="noopener noreferrer" className="btn-secondary hero-github">
              <FiGithub size={18} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/devdamascena/" target="_blank" rel="noopener noreferrer" className="btn-secondary hero-linkedin">
              <FiLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
