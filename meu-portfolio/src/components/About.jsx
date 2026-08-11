import React from 'react';
import './About.css';
import { FiAward, FiBookOpen, FiLayout, FiPenTool } from 'react-icons/fi';

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/Foto.png" alt="Luiz Gustavo Gouvêa Damascena" />
          <div className="experience-badge">
            <span className="badge-title">Dev & Design</span>
            <span className="badge-subtitle">Code · UX · Product</span>
          </div>
        </div>
        
        <div className="about-text">
          <h2 className="section-title gradient-text">Sobre Mim</h2>
          <h5>Desenvolvedor Front-End & Product Designer</h5>
          
          <p>
            Sou <strong>Luiz Gustavo</strong>, graduado em <strong>Análise e Desenvolvimento de Sistemas pela UCB</strong>. 
            Minha atuação vive na intersecção entre <strong>desenvolvimento e design</strong> — acredito que um bom produto 
            digital nasce quando código limpo encontra uma experiência de usuário bem pensada.
          </p>
          <p>
            Trabalho com <strong>React, Next.js, Node.js e JavaScript</strong> no desenvolvimento, e com 
            <strong> Figma, wireframing, prototipação e design systems</strong> na construção de interfaces. 
            Meu objetivo é criar produtos que sejam bonitos, funcionais e centrados no usuário.
          </p>

          <div className="highlights-grid">
            <div className="highlight-card">
              <FiLayout className="highlight-icon" />
              <div>
                <h4>Front-End</h4>
                <p>React · Next.js · JS</p>
              </div>
            </div>
            <div className="highlight-card">
              <FiPenTool className="highlight-icon" />
              <div>
                <h4>UX / UI Design</h4>
                <p>Figma · Prototipação</p>
              </div>
            </div>
            <div className="highlight-card">
              <FiAward className="highlight-icon" />
              <div>
                <h4>Product Design</h4>
                <p>Design System · Research</p>
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
