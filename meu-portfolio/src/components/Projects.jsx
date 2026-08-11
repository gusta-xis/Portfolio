import React from 'react';
import './Projects.css';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "GAP – Gestão Pessoal e Orçamentária",
      badge: "Full-Stack • UX/UI • Em Desenvolvimento",
      description: "Aplicação web modular que projetei e desenvolvi do zero — desde os wireframes e fluxos de usuário no Figma até o código em produção. Conta com backend em Node.js, banco PostgreSQL (Neon), e interface pensada para usabilidade e acessibilidade.",
      tech: ["React / Next.js", "Node.js", "PostgreSQL", "Figma", "Design System"],
      demoLink: "https://sistemas-gap.vercel.app",
      githubLink: "https://github.com/gusta-xis/Gap",
      featured: true
    },
    {
      title: "Projeto Quiz Interativo",
      badge: "Front-End • Design",
      description: "Aplicação interativa com foco na experiência do usuário — interface responsiva, transições suaves e design centrado em engajamento e diversão.",
      tech: ["HTML5", "CSS3", "JavaScript", "UI Design"],
      demoLink: "https://gusta-xis.github.io/",
      githubLink: "https://github.com/gusta-xis",
      featured: false
    },
    {
      title: "GitHub & Repositórios",
      badge: "Portfólio de Código",
      description: "Explore meu perfil no GitHub para ver projetos de desenvolvimento web, experimentos de UI e prototipação de interfaces.",
      tech: ["Git", "GitHub", "Open Source"],
      demoLink: "https://github.com/gusta-xis",
      githubLink: "https://github.com/gusta-xis",
      featured: false
    }
  ];

  return (
    <section className="projects" id="projetos">
      <div className="projects-container">
        <h2 className="section-title gradient-text">Projetos em Destaque</h2>
        <p className="section-subtitle">Produtos digitais que projetei e desenvolvi, do conceito à implementação</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${project.featured ? 'featured-card' : ''}`} key={index}>
              <div className="project-card-header">
                <FiFolder className="folder-icon" size={28} />
                <span className="project-badge">{project.badge}</span>
              </div>
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-techs">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              <div className="project-links">
                {project.demoLink && (
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-project-link primary-link">
                    <FiExternalLink size={16} />
                    Ver Demo
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-project-link secondary-link">
                    <FiGithub size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
