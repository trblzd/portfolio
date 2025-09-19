import React from "react";
import './Projetos.css';

// Reutiliza os imports da home para a seção de contato
import ghub from '/ghub.svg'
import insta from '/insta.svg'
import lkin from '/lkin.svg'
import email from '/email.svg'

const Projetos = () => {
  const copyEmail = () => {
    const email = "marianatxf@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado com sucesso!");
    }, () => {
      alert("Falha ao copiar o email.");
    });
  };

  return (
    <>
      <div className="container-projetos">
        <div className="profile-contact-section-projetos">
          <div className="profile-image">
            <img src="euu.png" alt="Foto de Perfil" />
          </div>
          <div className="contact">
            <h1>CONTATO:</h1>
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/marianatxf/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src={lkin} alt="LinkedIn" className="icon-img" />
              </a>
              <a href="https://www.instagram.com/trblzd/" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src={insta} alt="Instagram" className="icon-img" />
              </a>
              <a href="https://github.com/trblzd" target="_blank" rel="noopener noreferrer" title="GitHub">
                <img src={ghub} alt="GitHub" className="icon-img" />
              </a>
              <a href="#" onClick={copyEmail} title="Copiar E-mail">
                <img src={email} alt="Email" className="icon-img" />
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-block projetos-block">
          <h2>PROJETOS</h2>
          <ul>
            <a href="https://github.com/trblzd/Alluga" target="_blank" rel="noopener noreferrer"><li>TCC: ALLuga - 2023</li></a>
            <a href="https://institucional.ufpel.edu.br/projetos/id/u8086" target="_blank" rel="noopener noreferrer"><li>LabXD - 2024</li></a>
            <a href="https://github.com/trblzd/OMMDL" target="_blank" rel="noopener noreferrer"><li>O Mundo Mágico de Luna - 2025</li></a>
            <a href="https://wp.ufpel.edu.br/projetoleia/" target="_blank" rel="noopener noreferrer"><li>Léia - 2025</li></a>
            <a href="https://github.com/trblzd/NerDesign" target="_blank" rel="noopener noreferrer"><li>NerDesign - 2025</li></a>
            <a href="https://trajetorias.web.illinois.edu/" target="_blank" rel="noopener noreferrer"><li>Trajetórias - 2025</li></a>
            <a href="https://www.figma.com/design/M6XvPRfUdvNeTLrfNPRSJX/Portfolio?node-id=2001-3&t=92eRyrh1MbzvfTxM-1" target="_blank" rel="noopener noreferrer"><li>Portfólio (Figma) - 2025</li></a>
          </ul>
        </div>
        
        <div className="gallery-block videos-block">
          <h2>VÍDEOS</h2>
          <ul>
            <a href="https://youtube.com/trblzd" target="_blank" rel="noopener noreferrer"><li>Canal do YouTube</li></a>
            <a href="https://youtube.com/playlist?list=PL6rJ7jEexLBiUiY32CvMteAoHcyTQ18ZE&si" target="_blank" rel="noopener noreferrer"><li>GT CarSchool</li></a>
            <a href="https://drive.google.com/file/d/1Cm2pMVEOjse-Yv1Oqli1y07SyD25Xl8O/view" target="_blank" rel="noopener noreferrer"><li>Escolha Certa - 2019</li></a>
            <a href="https://drive.google.com/file/d/1f8Mx213Lk3wj6wpw1ATFhuo9cmh-gLjf/view" target="_blank" rel="noopener noreferrer"><li>The Last Piece - 2019</li></a>
            <a href="https://drive.google.com/file/d/1yJ1JPKnZj2snl3VKIEMY5SoNW-Le7HTC/view" target="_blank" rel="noopener noreferrer"><li>Propaganda IFSul - 2019</li></a>
            <a href="https://drive.google.com/file/d/1dnqYfvwBj2-JzMcuI-3N0tWt-WNMeuz5/view" target="_blank" rel="noopener noreferrer"><li>Tempo - 2022</li></a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projetos;