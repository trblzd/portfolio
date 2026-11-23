import { useState, useRef, useEffect } from 'react';
import { projetosData } from './data/data'; 

const bioContent = [
  "Designer em formação pela UFPel",
  "Técnica em Informática pelo IFSul campus Bagé",
  "unindo programação e design para criar soluções que equilibram estética e funcionalidade",
  "mais de 11 anos de prática em ferramentas como Photoshop e Premiere Pro",
  "da concepção visual ao front-end!",
  "Fluente em inglês e kpopper de carteirinha :p"
];

const skillsContent = "UI/UX/ pacote adobe/ fotografia/ Identidade Visual/ Mídias Sociais/ HTML/CSS/ JavaScript/ React.js/ figma";

const contactLinks = [
  { label: "instagram", href: "https://instagram.com/trblzd" },
  { label: "linkedin", href: "https://www.linkedin.com/in/marianatxf/" },
  { label: "lattes", href: "https://lattes.cnpq.br/1739318616918391" },
  { label: "github", href: "https://github.com/trblzd" },
  { label: "email", href: "mailto:marianatxf@gmail.com" }
];

const projectGroups = [
  { id: "2026", projects: [{ id: "ciclo", menuLabel: "Identidade Visual: Ciclo" }, { id: "susi", menuLabel: "Identidade Visual: SUSi" }, { id: "fotografia-design", menuLabel: "Fotografia e Design" }, { id: "busepel", menuLabel: "Busepel" }, { id: "gabriela", menuLabel: "Gabriela" }, { id: "dialogos", menuLabel: "Identidade Visual: Diálogos para Bem Viver" }], },
  { id: "2025", projects: [{ id: "luna", menuLabel: "O Mundo Mágico de Luna" }, { id: "anne-green-gables", menuLabel: "Anne de Green Gables" }, { id: "cartoes-postais", menuLabel: "Cartões Postais" }, { id: "trajetorias", menuLabel: "Trajetórias" }, { id: "fotografia", menuLabel: "Fotografia" }, { id: "k-charted", menuLabel: "K-Charted" }, { id: "nerdesign", menuLabel: "NerDesign" }, { id: "labxd", menuLabel: "LabXD" }, { id: "leia", menuLabel: "Léia" }] },
  { id: "2022", projects: [{ id: "tempo", menuLabel: "Tempo" }, { id: "cartazes", menuLabel: "Cartazes IFSul" }, { id: "tcc", menuLabel: "TCC: Alluga" }] },
  { id: "2020", projects: [{ id: "safira", menuLabel: "Chapa Safira GEIF" }] },
  { id: "2019", projects: [{ id: "propaganda", menuLabel: "Propaganda IFSul" }, { id: "last-piece", menuLabel: "The Last Piece" }, { id: "escolha", menuLabel: "Escolha Certa" }] },
  { id: "acervo", projects: [{ id: "kpop", menuLabel: "K-Pop Album Covers" }, { id: "youtube", menuLabel: "YouTube" }, { id: "portfolio-figma", menuLabel: "Portfólio (Figma)" }, { id: "gt", menuLabel: "GT CarSchool" }, { id: "lab", menuLabel: "Lab" }] }
];

const isExternalOnly = (projectId) => {
  const p = projetosData[projectId];
  return p && p.linkExterno && (!p.secoes || p.secoes.length === 0);
};

// Componente do botão de voltar ao topo
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button className="scroll-to-top-btn" onClick={scrollToTop} aria-label="Voltar ao topo">
      ↑
    </button>
  );
};

const YearAccordionGroup = ({ group, isOpen, onToggle, selectedProjectId, openSectionIndex, onSelectProject, onSelectSection }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, openSectionIndex, selectedProjectId]); 

  return (
    <div className="accordion-group">
      <button 
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`panel-${group.id}`}
      >
        {group.id}
      </button>
      <div
        id={`panel-${group.id}`}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ height: `${height}px` }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} style={{ paddingTop: '8px', paddingBottom: '16px' }}>
          {group.projects.map((project) => {
            const projectData = projetosData[project.id];
            const hasMultipleSections = projectData?.secoes && projectData.secoes.length > 1;
            const isProjectSelected = selectedProjectId === project.id;
            const isExternal = isExternalOnly(project.id);

            if (isExternal) {
              return (
                <div key={project.id} className="project-item-wrapper">
                  <a
                    href={projectData.linkExterno}
                    className="project-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {project.menuLabel} ↗
                  </a>
                </div>
              );
            }

            return (
              <div key={project.id} className="project-item-wrapper">
                <button
                  className={`project-btn ${isProjectSelected ? 'selected' : ''}`}
                  onClick={() => onSelectProject(project.id)}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {project.menuLabel}
                </button>

                {isProjectSelected && hasMultipleSections && (
                  <div className="sub-accordion">
                    {projectData.secoes.map((secao, idx) => {
                      if (!secao.subtitulo) return null; 
                      const isSectionOpen = openSectionIndex === idx;
                      
                      return (
                        <div key={idx} className="sub-accordion-group">
                          <button 
                            className="sub-accordion-header"
                            onClick={() => onSelectSection(idx)}
                            aria-expanded={isSectionOpen}
                          >
                            {secao.subtitulo}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [openGroupId, setOpenGroupId] = useState("2026");
  const [selectedProjectId, setSelectedProjectId] = useState("busepel");
  const [openSectionIndex, setOpenSectionIndex] = useState(0); 
  const [isFading, setIsFading] = useState(false);

  const handleToggleGroup = (groupId) => {
    setOpenGroupId(prev => prev === groupId ? null : groupId);
  };

  const handleSelectProject = (projectId) => {
    if (projectId === selectedProjectId) return;
    
    setIsFading(true);
    setTimeout(() => {
      setSelectedProjectId(projectId);
      setOpenSectionIndex(0);
      setIsFading(false);
      
      if (window.innerWidth <= 1100) {
        setTimeout(() => {
          const element = document.getElementById('project-details');
          if (element) {
            const yOffset = -20; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }, 200);
  };

  const handleSelectSection = (index) => {
    if (index === openSectionIndex) return;
    
    setIsFading(true);
    setTimeout(() => {
      setOpenSectionIndex(index);
      setIsFading(false);
      
      // Adicionado o scroll para subcategorias no mobile
      if (window.innerWidth <= 1100) {
        setTimeout(() => {
          const element = document.getElementById('project-details');
          if (element) {
            const yOffset = -20; 
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }, 100);
      }
    }, 200);
  };

  const projectContent = projetosData[selectedProjectId] || {
    titulo: "Projeto Provisório",
    disciplina: "A definir",
    semestre: "A definir",
    secoes: [{ subtitulo: "", colaboradores: [], descricao: "Descrição em breve.", fotos: { principal: "", galeria: [] } }]
  };

  const activeSection = projectContent.secoes[openSectionIndex] || projectContent.secoes[0];
  
  const validCollaborators = activeSection.colaboradores?.filter(name => name && name.trim() !== "") || [];
  const hasCollaborators = validCollaborators.length > 0;
  const collaboratorsText = validCollaborators.join(", ");

  return (
    <div className="portfolio-container">
      <div className="desktop-grid">
        
        <section className="left-col">
          <div className="content-block">
            <h2 className="section-heading">sobre</h2>
            <div className="bio-content">
              {bioContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="section-heading">skills</h2>
            <p className="skills-list">{skillsContent}</p>
          </div>

          <div className="brand-area">
            <img src="./mari-logo.svg" alt="MARI Logo" className="brand-logo" />
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="middle-col">
          <h2 className="section-heading">projetos</h2>
          {projectGroups.map((group) => (
            <YearAccordionGroup
              key={group.id}
              group={group}
              isOpen={openGroupId === group.id}
              onToggle={() => handleToggleGroup(group.id)}
              selectedProjectId={selectedProjectId}
              openSectionIndex={openSectionIndex}
              onSelectProject={handleSelectProject}
              onSelectSection={handleSelectSection}
            />
          ))}
        </section>

        <section className={`right-col ${isFading ? 'fading' : ''}`} id="project-details">
          <div className="project-caption">
            <h1 className="project-title">{projectContent.titulo}</h1>
            
            {activeSection.subtitulo && (
              <h2 className="project-subtitle">
                {activeSection.subtitulo}
              </h2>
            )}

            <div className="project-meta">
              {projectContent.disciplina && <div><span className="meta-label">disciplina:</span> {projectContent.disciplina}</div>}
              {projectContent.semestre && <div><span className="meta-label">semestre:</span> {projectContent.semestre}</div>}
              
              {hasCollaborators && (
                <div>
                  <span className="meta-label">colaboradores:</span> {collaboratorsText}
                </div>
              )}
            </div>
            
            <p className="project-description">{activeSection.descricao}</p>
            
            {projectContent.linkExterno && projectContent.secoes.length > 0 && (
              <a 
                href={projectContent.linkExterno} 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-link"
              >
                acessar projeto ↗
              </a>
            )}
          </div>

          <div className="image-gallery">
            {activeSection.fotos.principal && (
              <div className="main-image">
                <img src={activeSection.fotos.principal} alt={projectContent.titulo} />
              </div>
            )}
            
            {activeSection.fotos.galeria && activeSection.fotos.galeria.length > 0 && (
              <div className="secondary-images-grid">
                {activeSection.fotos.galeria.map((img, idx) => (
                  <div key={idx} className="secondary-image">
                    <img src={img} alt={`${projectContent.titulo} - ${idx + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

      </div>
      
      <ScrollToTopButton />
    </div>
  );
}