import React from 'react';
import './Hero.css';
import { FiGithub } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h4>Olá, meu nome é</h4>
        <h1 className="gradient-text">Luiz Gustavo</h1>
        <h3>Eu sou um desenvolvedor JavaScript</h3>
        
        <div className="hero-actions">
          <p className="subtitle">Podemos nos conhecer melhor?</p>
          <div className="hero-buttons">
            <a href="#contato" className="btn-primary">Vamos Conversar!</a>
            <a href="https://github.com/gusta-xis" target="_blank" rel="noopener noreferrer" className="btn-secondary hero-github">
              <FiGithub size={20} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
