import React from 'react';
import './Projects.css';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "GAP – Gestão Pessoal e Orçamentária",
      badge: "Projeto Pessoal • Em Desenvolvimento",
      description: "Aplicação web modular para gerenciamento pessoal e controle orçamentário. Conta com backend em Node.js, banco PostgreSQL (Neon), e fluxos completos de autenticação (cadastro, verificação por código e recuperação de senha).",
      tech: ["React / Next.js", "Node.js", "JavaScript", "PostgreSQL (Neon)"],
      demoLink: "https://sistemas-gap.vercel.app",
      githubLink: "https://github.com/gusta-xis/Gap",
      featured: true
    },
    {
      title: "Projeto Quiz Interativo",
      badge: "Projeto Universitário",
      description: "Aplicação web interativa desenvolvida para testar conhecimentos e lógica de programação, com interface dinâmica e responsiva.",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demoLink: "https://gusta-xis.github.io/",
      githubLink: "https://github.com/gusta-xis",
      featured: false
    },
    {
      title: "GitHub & Repositórios Code",
      badge: "Portfólio de Código",
      description: "Explore o perfil no GitHub para ver estes e outros projetos de automação, desenvolvimento web e experimentos práticos.",
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
        <p className="section-subtitle">Aplicações e soluções desenvolvidas com foco em qualidade e usabilidade</p>
        
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
