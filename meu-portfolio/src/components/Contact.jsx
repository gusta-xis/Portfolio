import React from 'react';
import './Contact.css';
import { FiLinkedin, FiGithub, FiInstagram, FiMail, FiMessageCircle } from 'react-icons/fi';

export default function Contact() {
  return (
    <footer className="contact" id="contato">
      <div className="contact-content">
        <h2 className="section-title gradient-text">Podemos bater um papo?</h2>
        <p className="contact-subtitle">Me envie uma mensagem e vamos construir algo incrível juntos.</p>
        
        <a href="https://wa.me/qr/32LKMJ4GRTUCA1" className="btn-primary contact-btn" target="_blank" rel="noopener noreferrer">
          <FiMessageCircle size={20} />
          Enviar mensagem
        </a>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/devdamascena/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={24} />
          </a>
          <a href="https://github.com/gusta-xis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={24} />
          </a>
          <a href="https://www.instagram.com/dev.gustaxis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FiInstagram size={24} />
          </a>
          <a href="https://wa.me/qr/32LKMJ4GRTUCA1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FiMessageCircle size={24} />
          </a>
          <a href="mailto:luizgustavogodamascena3@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FiMail size={24} />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <h6>Luiz Gustavo</h6>
        <p>Copyright By DAMASCENA - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
