import React from 'react';
import './Skills.css';
import { FiCode, FiLayers, FiServer, FiPenTool, FiTool, FiSliders } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      category: "UX / UI Design",
      icon: <FiPenTool size={22} />,
      skills: ["Figma", "Wireframing", "Prototipação", "Design System", "User Research", "Usabilidade"]
    },
    {
      category: "Front-end",
      icon: <FiLayers size={22} />,
      skills: ["React", "Next.js", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Product Design",
      icon: <FiSliders size={22} />,
      skills: ["Fluxos de Usuário", "Arquitetura da Informação", "Acessibilidade", "Design Responsivo", "Micro-interações"]
    },
    {
      category: "Back-end & Dados",
      icon: <FiServer size={22} />,
      skills: ["Node.js", "PostgreSQL", "SQL", "Delphi"]
    },
    {
      category: "Linguagens",
      icon: <FiCode size={22} />,
      skills: ["JavaScript", "SQL", "HTML", "CSS"]
    },
    {
      category: "Ferramentas",
      icon: <FiTool size={22} />,
      skills: ["Git", "GitHub", "Figma", "VS Code", "Scrum", "Gestão de Projetos"]
    }
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">
        <h2 className="section-title gradient-text">Habilidades & Ferramentas</h2>
        <p className="section-subtitle">Do design ao deploy — as tecnologias e práticas que uso para criar produtos digitais</p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div className="skill-card" key={idx}>
              <div className="skill-header">
                <div className="skill-icon-wrapper">
                  {cat.icon}
                </div>
                <h3>{cat.category}</h3>
              </div>
              <div className="skill-tags">
                {cat.skills.map((skill, sIdx) => (
                  <span className="skill-tag" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
