import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="about-content">
        <div className="about-image">
          <img src="/img/Foto.png" alt="Luiz Gustavo" />
        </div>
        <div className="about-text">
          <h2 className="section-title gradient-text">Sobre mim</h2>
          <h5>Desenvolvedor de software</h5>
          <p>
            Sou Luiz Gustavo, estudante de Análise e Desenvolvimento de Sistemas (UCB) 
            direcionando minha carreira para o Front-End. Minha experiência em TI inclui 
            automação de processos e integração de sistemas. Estou focado em aprimorar 
            minhas habilidades em JavaScript, HTML, CSS e UX/UI, buscando transformar 
            ideias em soluções funcionais e acessíveis.
          </p>
          <div className="stacks">
            <h3>Principais Tecnologias</h3>
            <div class="tech-tags">
              <span>JavaScript</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
          <a href="https://wa.me/qr/32LKMJ4GRTUCA1" className="btn-secondary">
            Vamos Conversar!
          </a>
        </div>
      </div>
    </section>
  );
}
