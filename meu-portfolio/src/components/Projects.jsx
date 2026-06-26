import React from 'react';
import './Projects.css';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: "GAP System",
      description: "Sistema de gerenciamento de ativos e processos, desenvolvido com foco em desempenho e usabilidade.",
      tech: ["Next.js", "Node.js", "JavaScript"],
      link: "https://sistemas-gap.vercel.app",
      icon: <FiExternalLink size={20} />
    },
    {
      title: "Projeto Quiz",
      description: "Projeto universitário interativo, testando conhecimentos e lógica de programação.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://gusta-xis.github.io/",
      icon: <FiExternalLink size={20} />
    },
    {
      title: "Meu GitHub",
      description: "Visite meu perfil no GitHub para explorar este e outros projetos em que venho trabalhando.",
      tech: ["Git", "GitHub", "Version Control"],
      link: "https://github.com/gusta-xis",
      icon: <FiGithub size={20} />
    }
  ];

  return (
    <section className="projects" id="projetos">
      <div className="projects-container">
        <h2 className="section-title gradient-text">Projetos & Habilidades</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-techs">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.icon}
                Você pode saber mais aqui!
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
