import React from 'react';
import './Contact.css';
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiMessageCircle, FiPhone } from 'react-icons/fi';

export default function Contact() {
  return (
    <footer className="contact" id="contato">
      <div className="contact-content">
        <h2 className="section-title gradient-text">Vamos Criar Algo Juntos?</h2>
        <p className="contact-subtitle">
          Estou disponível para oportunidades em desenvolvimento front-end, UX/UI design e design de produtos digitais. 
          Vamos conversar sobre como posso agregar ao seu time ou projeto!
        </p>

        <div className="contact-cards">
          <a href="mailto:Luizgustavogodamascena3@gmail.com" className="contact-info-card">
            <FiMail size={22} className="info-icon" />
            <div>
              <span className="card-label">E-mail</span>
              <span className="card-val">Luizgustavogodamascena3@gmail.com</span>
            </div>
          </a>

          <a href="https://wa.me/5561993202725" target="_blank" rel="noopener noreferrer" className="contact-info-card">
            <FiPhone size={22} className="info-icon" />
            <div>
              <span className="card-label">Telefone / WhatsApp</span>
              <span className="card-val">(61) 99320-2725</span>
            </div>
          </a>
        </div>
        
        <div className="cta-container">
          <a href="https://wa.me/5561993202725" className="btn-primary contact-btn" target="_blank" rel="noopener noreferrer">
            <FiMessageCircle size={20} />
            Enviar Mensagem no WhatsApp
          </a>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/devdamascena/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={22} />
          </a>
          <a href="https://github.com/gusta-xis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={22} />
          </a>
          <a href="https://www.instagram.com/dev.gustaxis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram size={22} />
          </a>
          <a href="mailto:Luizgustavogodamascena3@gmail.com" aria-label="Email">
            <FiMail size={22} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <h6>Luiz Gustavo Gouvêa Damascena</h6>
        <p>Desenvolvedor Front-End · UX/UI · Product Designer • {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
