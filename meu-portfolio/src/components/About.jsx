import React from 'react';
import './About.css';
import { FiCheckCircle, FiAward, FiBookOpen, FiUser } from 'react-icons/fi';

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/Foto.png" alt="Luiz Gustavo Gouvêa Damascena" />
          <div className="experience-badge">
            <span className="badge-title">Análise & Dev</span>
            <span className="badge-subtitle">UCB 2026</span>
          </div>
        </div>
        
        <div className="about-text">
          <h2 className="section-title gradient-text">Sobre Mim</h2>
          <h5>Desenvolvedor & Analista de Sistemas</h5>
          
          <p>
            Profissional graduado em <strong>Análise e Desenvolvimento de Sistemas pela Universidade Católica de Brasília (UCB)</strong>, 
            com sólida trajetória no suporte técnico, sustentação de aplicações e desenvolvimento de sistemas corporativos.
          </p>
          <p>
            Tenho atuação com <strong>JavaScript, HTML, CSS, SQL e Delphi</strong>, criando soluções eficientes e com forte apreço por UX/UI (Figma, wireframing e prototipação). 
            Possuo perfil analítico, proativo e focado em otimização de processos e inovação tecnológica.
          </p>

          <div className="highlights-grid">
            <div className="highlight-card">
              <FiBookOpen className="highlight-icon" />
              <div>
                <h4>Formação</h4>
                <p>ADS – UCB (2026)</p>
              </div>
            </div>
            <div className="highlight-card">
              <FiAward className="highlight-icon" />
              <div>
                <h4>Foco Técnico</h4>
                <p>Full-Stack & UX/UI</p>
              </div>
            </div>
            <div className="highlight-card">
              <FiUser className="highlight-icon" />
              <div>
                <h4>Perfil</h4>
                <p>Analítico & Proativo</p>
              </div>
            </div>
          </div>

          <a href="https://wa.me/5561993202725" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Fale Comigo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
