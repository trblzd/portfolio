import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './Home.css'

import ghub from '/ghub.svg'
import insta from '/insta.svg'
import lkin from '/lkin.svg'
import email from '/email.svg'
import softwares from '/softwares.svg'
import softwaresmb from '/softwaresmb.svg'

function Home() {
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
      <Header />
      <div className="container">
        <div className="profile-contact-section">
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

        <div className="right-side">
          <div className="about-section">
            <h1>SOBRE MIM</h1>
            <p>
              Tenho 22 anos, me chamo Mariana, sou Técnica em Informática pelo IFSul 
              e atualmente curso Design pela Universidade Federal de Pelotas. No momento 
              estou cursando o 4º semestre e sou bolsista do PET Saúde no projeto SUSi.
              Em 2015 comecei a editar vídeos e desde então mantenho um canal no 
              YouTube, mas atualmente o deixei de lado. Tenho experiência em programação, 
              principalmente nas linguagens JavaScript e C++, e, além disso, programei os jogos 
              O Mundo Mágico de Luna e NerDesign que foram totalmente executados em GameMaker Language. 
              Por aqui listo alguns dos meus trabalhos tanto acadêmicos quanto aqueles 
              feitos no tempo livre.
            </p>
          </div>

          <div className="softwares-section">
            <h1>SOFTWARES</h1>
            <div className="softwares-icons">
              <picture>
                <source media="(max-width: 1023px)" srcSet={softwaresmb} />
                <img src={softwares} alt="Softwares" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home