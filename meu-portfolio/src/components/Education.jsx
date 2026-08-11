import React from 'react';
import './Education.css';
import { FiBookOpen, FiAward, FiCheckCircle } from 'react-icons/fi';

export default function Education() {
  const certifications = [
    { title: "JavaScript", institution: "EBAC", year: "2026", duration: "12h" },
    { title: "Foundations of Cybersecurity", institution: "Coursera", year: "2025", duration: "10h" },
    { title: "Scrum Fundamentals Certified (SFC™)", institution: "ScrumStudy", year: "2024" },
    { title: "Fundamentos da LGPD", institution: "Assefaz", year: "2024" },
    { title: "Inglês Avançado", institution: "CNA", year: "2023" },
    { title: "Pacote Office", institution: "ViaEducação", year: "2019" }
  ];

  return (
    <section className="education-section" id="formacao">
      <div className="education-container">
        <h2 className="section-title gradient-text">Formação & Certificações</h2>
        <p className="section-subtitle">Minha graduação acadêmica e qualificações complementares</p>

        <div className="education-grid">
          {/* Formação Acadêmica */}
          <div className="edu-card main-degree">
            <div className="edu-header">
              <div className="edu-icon-box">
                <FiBookOpen size={28} />
              </div>
              <div>
                <span className="edu-type">Ensino Superior</span>
                <h3>Análise e Desenvolvimento de Sistemas</h3>
                <h4 className="institution">Universidade Católica de Brasília (UCB)</h4>
              </div>
            </div>
            <div className="edu-footer">
              <span className="status-badge">Concluído em 2026</span>
            </div>
          </div>

          {/* Certificações */}
          <div className="cert-wrapper">
            <div className="cert-header">
              <FiAward size={24} className="cert-main-icon" />
              <h3>Certificações & Cursos</h3>
            </div>
            <div className="cert-list">
              {certifications.map((cert, i) => (
                <div className="cert-item" key={i}>
                  <FiCheckCircle className="cert-check" size={18} />
                  <div className="cert-info">
                    <span className="cert-title">{cert.title}</span>
                    <span className="cert-institution">{cert.institution} ({cert.year}){cert.duration ? ` • ${cert.duration}` : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
