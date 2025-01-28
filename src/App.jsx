import React from "react";
import Header from "./assets/Components/Header";
import Carousel from "./assets/Components/Carousel";
import "./App.css";

import badminton from "./assets/IFSul/badminton.png";
import banner from "./assets/IFSul/bannerlgbt.png";
import cachorrinho from "./assets/IFSul/cachorrinhos.png";
import saci from "./assets/IFSul/logosaci.png";
import propostas from "./assets/IFSul/propostas.jpg";
import sobre from "./assets/IFSul/sobre.jpg";
import adg from "./assets/UFPel/25ADG.png";
import marca from "./assets/UFPel/marca.png";
import photoshop1 from "./assets/Outros/ps1.png";
import tumblr1 from "./assets/Outros/tumblr1.jpg";
import tumblr2 from "./assets/Outros/tumblr2.jpg";

const Images = [
  badminton,
  banner,
  cachorrinho,
  saci,
  propostas,
  sobre,
  adg,
  marca,
  photoshop1,
  tumblr1,
  tumblr2,
];
const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
      <section className="left-section">
  <div className="about">
    <h1>SOBRE MIM</h1>
    <p>
    Tenho 21 anos, me chamo Mariana, sou Técnica em Informática pelo IFSul e 
    atualmente curso Design Gráfico pela Universidade Federal de Pelotas. 
    Em 2015 comecei a editar vídeos e desde então mantenho um canal no YouTube 
    que até hoje levo como um hobby. Tenho experiência em programação, com domínio 
    em React, JavaScript e C++, e, além disso, programei o jogo O Mundo Mágico 
    de Luna que foi totalmente executado em GameMaker Language. Por aqui listo 
    alguns dos meus trabalhos tanto acadêmicos quanto aqueles feitos no tempo livre.
    </p>
  </div>
  <div className="gallery-row">
    <div className="gallery-block">
      <h2>VÍDEOS E CURTAS</h2>
      <ul>
          <a href="https://drive.google.com/file/d/1Cm2pMVEOjse-Yv1Oqli1y07SyD25Xl8O/view" target="_blank"><li>Escolha Certa - 2019</li></a>
          <a href="https://youtube.com/trblzd" target="_blank"><li>Canal do YouTube</li></a>
          <a href="https://youtube.com/playlist?list=PL6rJ7jEexLBiUiY32CvMteAoHcyTQ18ZE&si" target="_blank"><li>GT CarSchool</li></a>
          <a href="https://drive.google.com/file/d/1yJ1JPKnZj2snl3VKIEMY5SoNW-Le7HTC/view" target="_blank"><li>Propaganda IFSul - 2019</li></a>
          <a href="https://drive.google.com/file/d/1dnqYfvwBj2-JzMcuI-3N0tWt-WNMeuz5/view" target="_blank"><li>Tempo - 2022</li></a>
          <a href="https://drive.google.com/file/d/1f8Mx213Lk3wj6wpw1ATFhuo9cmh-gLjf/view" target="_blank"><li>The Last Piece - 2019</li></a>
      </ul>
    </div>
    <div className="gallery-block">
      <h2>PROJETOS</h2>
      <ul>
          <a href="https://github.com/trblzd/Alluga" target="_blank"><li>TCC: ALLuga - 2023</li></a>
          <a href="https://institucional.ufpel.edu.br/projetos/id/u8086" target="_blank"><li>LabXD - 2024</li></a>
          <a href="https://github.com/trblzd/OMMDL" target="_blank"><li>O Mundo Mágico de Luna - 2025</li></a>
          <a href="https://institucional.ufpel.edu.br/projetos/id/u7658" target="_blank"><li>Livros Digitais Interativos - 2025</li></a>
      </ul>
    </div>
  </div>
</section>
<section className="right-section">
  <div className="carousel-block">
    <h2>Peças Gráficas</h2>
            <Carousel images={Images} intervalTime={5000} />
  </div>
</section>
      </main>
    </div>
);
};

export default App;