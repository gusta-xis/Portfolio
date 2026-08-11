import React from 'react';
import './Skills.css';
import { FiCode, FiLayers, FiServer, FiFigma, FiTool, FiSliders } from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      category: "Linguagens",
      icon: <FiCode size={22} />,
      skills: ["JavaScript", "SQL"]
    },
    {
      category: "Front-end",
      icon: <FiLayers size={22} />,
      skills: ["HTML5", "CSS3", "React", "Next.js"]
    },
    {
      category: "Back-end",
      icon: <FiServer size={22} />,
      skills: ["Node.js", "PostgreSQL", "Delphi"]
    },
    {
      category: "UX / UI",
      icon: <FiFigma size={22} />,
      skills: ["Figma", "Wireframing", "Prototipação", "Design System"]
    },
    {
      category: "Ferramentas",
      icon: <FiTool size={22} />,
      skills: ["Git", "GitHub", "Protheus", "Facplan", "SEI", "Pacote Office"]
    },
    {
      category: "Outros & Metodologias",
      icon: <FiSliders size={22} />,
      skills: ["Excel Avançado", "Gestão de Projetos", "Scrum"]
    }
  ];

  return (
    <section className="skills-section" id="habilidades">
      <div className="skills-container">
        <h2 className="section-title gradient-text">Habilidades Técnicas</h2>
        <p className="section-subtitle">Tecnologias, ferramentas e metodologias utilizadas no meu dia a dia</p>

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
