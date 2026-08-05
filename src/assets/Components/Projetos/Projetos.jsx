import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Projetos.css';

const Projetos = () => {
  const title = "PROJETOS";
  const navigate = useNavigate();

  const categories = [
    {
      id: "ufpel",
      title: "DESIGN & UFPEL",
      items: [
        { name: "Cartões Postais - 2025", url: "/projeto/cartoes-postais", externo: false },
        { name: "K-Charted - 2025", url: "/projeto/k-charted", externo: false },
        { name: "Anne de Green Gables - 2025", url: "/projeto/anne-green-gables", externo: false },
        { name: "Acervo", url: "/projeto/acervo", externo: false },
        { name: "Fotografia - 2025", url: "/projeto/fotografia", externo: false },
        { name: "Fotografia e Design - 2026", url: "/projeto/fotografia-design", externo: false },
        { name: "Identidade Visual: Ciclo - 2026", url: "/projeto/ciclo", externo: false },
        { name: "Identidade Visual: SUSi - 2026", url: "/projeto/susi", externo: false },
        { name: "O Mundo Mágico de Luna - 2025", url: "https://github.com/trblzd/OMMDL", externo: true },
        { name: "Léia - 2025", url: "https://wp.ufpel.edu.br/projetoleia/", externo: true },
        { name: "NerDesign - 2025", url: "/projeto/nerdesign", externo: false },
        { name: "Trajetórias - 2025", url: "https://trajetorias.web.illinois.edu/", externo: true },
        { name: "LabXD - 2025", url: "https://institucional.ufpel.edu.br/projetos/id/u8086", externo: true },
        { name: "Busepel - 2026", url: "/projeto/busepel", externo: false }
      ]
    },
    {
      id: "videos",
      title: "AUDIOVISUAL",
      items: [
        { name: "Canal do YouTube", url: "https://youtube.com/trblzd", externo: true },
        { name: "GT CarSchool", url: "https://youtube.com/playlist?list=PL6rJ7jEexLBiUiY32CvMteAoHcyTQ18ZE&si", externo: true },
        { name: "Escolha Certa - 2019", url: "https://drive.google.com/file/d/1Cm2pMVEOjse-Yv1Oqli1y07SyD25Xl8O/view", externo: true },
        { name: "The Last Piece - 2019", url: "https://drive.google.com/file/d/1f8Mx213Lk3wj6wpw1ATFhuo9cmh-gLjf/view", externo: true },
        { name: "Propaganda IFSul - 2019", url: "https://drive.google.com/file/d/1yJ1JPKnZj2snl3VKIEMY5SoNW-Le7HTC/view", externo: true },
        { name: "Tempo - 2022", url: "https://drive.google.com/file/d/1dnqYfvwBj2-JzMcuI-3N0tWt-WNMeuz5/view", externo: true }
      ]
    },
    {
      id: "outros",
      title: "LAB",
      items: [
        { name: "Chapa Safira GEIF - 2020", url: "/projeto/safira", externo: false },
        { name: "Cartazes IFSul - 2022", url: "/projeto/cartazes", externo: false },
        { name: "TCC: Alluga - 2022", url: "https://github.com/trblzd/Alluga", externo: true },
        { name: "Tumblr", url: "https://trblzd.tumblr.com/", externo: true },
        { name: "K-Pop Album Covers", url: "https://trblzd.tumblr.com/tagged/album%20covers", externo: true },
        { name: "Lab", url: "/projeto/lab", externo: false },
        { name: "Portfólio (Figma) - 2024-2026", url: "https://www.figma.com/design/M6XvPRfUdvNeTLrfNPRSJX/Portfolio?node-id=2001-3&t=92eRyrh1MbzvfTxM-1", externo: true },
        { name: "Github", url: "https://github.com/trblzd", externo: true }
      ]
    }
  ];

  const handleRandomProject = () => {
    const internalProjects = categories
      .flatMap(cat => cat.items)
      .filter(item => !item.externo);

    if (internalProjects.length > 0) {
      const randomIndex = Math.floor(Math.random() * internalProjects.length);
      navigate(internalProjects[randomIndex].url);
    }
  };

  const getYear = (str) => {
    const match = str.match(/\d{4}$/); 
    return match ? parseInt(match[0]) : 0;
  };

  const sortItems = (items) => {
    return [...items].sort((a, b) => {
      const yearA = getYear(a.name);
      const yearB = getYear(b.name);
      if (yearA !== yearB) return yearB - yearA; 
      return b.name.length - a.name.length; 
    });
  };

  return (
    <main className="projects-content">
      <header className="projects-header-block">
        <h1 className="projects-title">
          {title.split("").map((char, index) => (
            <span key={index} className="hover-letter">
              {char}
            </span>
          ))}
        </h1>
        <button onClick={handleRandomProject} className="random-project-btn">
          PROJETO ALEATÓRIO
        </button>
      </header>

      <section className="projects-grid">
        {categories.map((cat) => (
          <div key={cat.id} id={cat.id} className="project-card">
            <h2 className="section-subtitle">{cat.title}</h2>
            <ul className="project-list">
              {sortItems(cat.items).map((item, index) => (
                <li key={index}>
                  {item.externo ? (
                    <a href={item.url} className="project-link" target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.url} className="project-link">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Projetos;