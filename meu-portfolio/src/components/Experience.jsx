import React from 'react';
import './Experience.css';
import { FiBriefcase, FiCalendar, FiCheck } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      title: "Analista de Suporte",
      company: "Editora Digital Brasília Tecnologia LTDA",
      period: "Julho 2026 – Atualmente",
      current: true,
      bullets: [
        "Suporte ao BotConversa e gerenciamento de demandas via e-mail, agilizando o atendimento às unidades;",
        "Formatação e controle de planilhas, padronizando e organizando dados administrativos para facilitar a consulta pela equipe;",
        "Geração de relatórios do sistema para acompanhamento de indicadores, apoiando a tomada de decisão da equipe;",
        "Cadastro de ementas e apoio às rotinas administrativas e financeiras;",
        "Gestão, análise e validação de requerimentos acadêmicos para múltiplas unidades, garantindo consistência nas informações;",
        "Acompanhamento de reuniões e participação em tratativas voltadas à melhoria contínua de processos."
      ]
    },
    {
      title: "Auxiliar de Secretaria",
      company: "Editora Digital Brasília Tecnologia LTDA",
      period: "Abril 2026 – Julho 2026",
      bullets: [
        "Suporte ao BotConversa e gerenciamento de demandas via e-mail, agilizando o atendimento às unidades;",
        "Cadastro de ementas e apoio às rotinas administrativas e financeiras;",
        "Gestão, análise e validação de requerimentos acadêmicos para múltiplas unidades, garantindo consistência nas informações."
      ]
    },
    {
      title: "Desenvolvedor Junior",
      company: "Dexion",
      period: "Fevereiro 2026 – Abril 2026",
      bullets: [
        "Sustentação e evolução de sistemas em Delphi, realizando análise de código e correção de falhas para manter a estabilidade das aplicações;",
        "Execução de consultas e manipulação de dados em banco SQL, apoiando a resolução de demandas técnicas;",
        "Estudo da arquitetura e das regras de negócio para suporte às demandas do sistema."
      ]
    },
    {
      title: "Estágio em Infraestrutura de TI",
      company: "Senac DF",
      period: "Julho 2025 – Setembro 2025",
      bullets: [
        "Suporte técnico a usuários internos, identificando e resolvendo incidentes de hardware, software e rede, garantindo a continuidade operacional;",
        "Configuração e padronização de notebooks corporativos, reduzindo o tempo de preparação dos equipamentos e assegurando conformidade com os padrões internos de TI;",
        "Preparação de laboratórios de informática para uso acadêmico e institucional;",
        "Inclusão de máquinas em domínio corporativo, contribuindo para maior segurança e controle do ambiente de TI."
      ]
    },
    {
      title: "Estágio Administrativo",
      company: "Assefaz DF",
      period: "Agosto 2024 – Julho 2025",
      bullets: [
        "Análise, conferência e validação de dados entre sistemas corporativos, garantindo integridade e confiabilidade das informações;",
        "Automação de rotinas administrativas utilizando Excel avançado e scripts, reduzindo retrabalho;",
        "Participação na parametrização, homologação e testes de sistemas internos;",
        "Gerenciamento de fluxos de assinaturas eletrônicas e documentação digital via sistema SEI."
      ]
    },
    {
      title: "Auxiliar Administrativo",
      company: "Cipo Construtora",
      period: "Novembro 2021 – Agosto 2023",
      bullets: [
        "Organização e manutenção de arquivos administrativos, garantindo eficiência e acessibilidade das informações;",
        "Controle financeiro, com análise de movimentações de caixa utilizando Excel;",
        "Digitalização e processamento de documentos administrativos, otimizando fluxos internos."
      ]
    }
  ];

  return (
    <section className="experience" id="experiencia">
      <div className="experience-container">
        <h2 className="section-title gradient-text">Experiência Profissional</h2>
        <p className="section-subtitle">Minha trajetória em suporte, desenvolvimento de software e gestão de sistemas</p>
        
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div className={`timeline-item ${exp.current ? 'current-item' : ''}`} key={index}>
              <div className="timeline-marker">
                <FiBriefcase size={16} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <h4 className="company-name">{exp.company}</h4>
                  </div>
                  <div className="period-tag">
                    <FiCalendar size={14} />
                    <span>{exp.period}</span>
                    {exp.current && <span className="badge-now">Atual</span>}
                  </div>
                </div>
                <ul className="job-bullets">
                  {exp.bullets.map((bullet, bIndex) => (
                    <li key={bIndex}>
                      <FiCheck className="bullet-icon" size={16} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
