import React, { useState, useEffect } from "react";
import './Galeria.css';

// Importe todas as imagens primeiro
import badminton from "./IFSul/badminton.png";
import banner from "./IFSul/bannerlgbt.png";
import cachorrinho from "./IFSul/cachorrinhos.png";
import saci from "./IFSul/logosaci.png";
import propostas from "./IFSul/propostas.jpg";
import sobre from "./IFSul/sobre.jpg";
import adg from "./UFPel/25ADG.png";
import marca from "./UFPel/marca.png";
import photoshop1 from "./Outros/ps1.png";
import tumblr1 from "./Outros/tumblr1.jpg";
import tumblr2 from "./Outros/tumblr2.jpg";
import tumblr3 from "./Outros/tumblr3.jpg";
import tumblr4 from "./Outros/tumblr4.jpg";
import tumblr5 from "./Outros/tumblr5.png";
import tumblr6 from "./Outros/tumblr6.jpg";
import ningc from "./Outros/ningc.jpg";
import anne1 from "./UFPel/anne1.jpg";
import anne2 from "./UFPel/anne2.jpg";
import anne3 from "./UFPel/anne3.jpg";
import tttv from "./UFPel/tttv.jpg";
import kcharted from "./UFPel/kcharted.jpg";
import neomorf from "./UFPel/neomorf.jpg";
import ksoo from "./UFPel/ksoo.jpg";
import posterV from "./UFPel/posterV.png";
import pgKDA from "./UFPel/pgKDA.jpg";
import c1 from "./UFPel/1c.png";
import c2 from "./UFPel/2c.jpg";
import c3 from "./UFPel/3c.png";
import c4 from "./UFPel/4c.png";
import c5 from "./UFPel/5c.png";
import c6 from "./UFPel/6c.png";
import c7 from "./UFPel/7c.png";
import c8 from "./UFPel/8c.png";
import c10 from "./UFPel/10c.png";
import c11 from "./UFPel/11c.png";
import c12 from "./UFPel/12c.jpg";
import kch1 from "./UFPel/1kch.jpg";
import kch2 from "./UFPel/2kch.jpg";
import kch3 from "./UFPel/3kch.jpg";
import kch4 from "./UFPel/4kch.jpg";
import kch5 from "./UFPel/5kch.jpg";    
import kch6 from "./UFPel/6kch.jpg";
import ftg1 from "./UFPel/ftg1.jpg";
import ftg2 from "./UFPel/ftg2.jpg";
import ftg3 from "./UFPel/ftg3.jpg";
import ftg4 from "./UFPel/ftg4.jpg";
import ftg5 from "./UFPel/ftg5.jpg";
import ftg6 from "./UFPel/ftg6.jpg";
import ftg7 from "./UFPel/ftg7.jpg";
import ftg8 from "./UFPel/ftg8.jpg";
import ftg9 from "./UFPel/ftg9.jpg";
import ftg10 from "./UFPel/ftg10.jpg";
import ftg11 from "./UFPel/ftg11.jpg";
import ftg12 from "./UFPel/ftg12.jpg";
import ftg13 from "./UFPel/ftg13.jpg";
import ftg14 from "./UFPel/ftg14.jpg";
import ftg15 from "./UFPel/ftg15.jpg";


const allImages = [
  { src: badminton, alt: "Badminton", hoverText: "Badminton - 2022 - IFSul" },
  { src: banner, alt: "Banner LGBT", hoverText: "Banner LGBT - 2022 - IFSul" },
  { src: cachorrinho, alt: "Cachorrinho", hoverText: "Cachorrinhos - 2022 - IFSul" },
  { src: saci, alt: "Logo Saci", hoverText: "Logo Saci - 2022 - IFSul" },
  { src: propostas, alt: "Propostas", hoverText: "Propostas - 2020 - IFSul" },
  { src: sobre, alt: "Sobre", hoverText: "Sobre - 2020 - IFSul" },
  { src: adg, alt: "25ADG", hoverText: "25 Anos Design - 2024 - UFPel" },
  { src: marca, alt: "Marca", hoverText: "Marca de Si - 2024 - UFPel" },
  { src: anne1, alt: "Anne 1", hoverText: "Anne de Green Gables Tipográfia - 2025 - UFPel" },
  { src: anne2, alt: "Anne 2", hoverText: "Anne de Green Gables Ilustração - 2025 - UFPel" },
  { src: anne3, alt: "Anne 3", hoverText: "Anne de Green Gables Geometria - 2025 - UFPel" },
  { src: photoshop1, alt: "Photoshop 1", hoverText: "Banner Youtube - 2024 - Outros" },
  { src: tumblr1, alt: "Tumblr 1", hoverText: "Aespa - 2024 - Outros" },
  { src: tumblr2, alt: "Tumblr 2", hoverText: "IU - 2021 - Outros" },
  { src: tumblr3, alt: "Tumblr 3", hoverText: "Red Velvet - 2022 - Outros" },
  { src: tumblr4, alt: "Tumblr 4", hoverText: "NingNing - 2024 - Outros" },
  { src: tumblr5, alt: "Tumblr 5", hoverText: "Billlie - 2022 - Outros" },
  { src: tumblr6, alt: "Tumblr 6", hoverText: "Eunbi - 2022 - Outros" },
  { src: tttv, alt: "TTTV", hoverText: "Cartão Postal Verso - 2025 - UFPel" },
  { src: kcharted, alt: "Kcharted", hoverText: "KCharted Capa - 2025 - UFPel" },
  { src: neomorf, alt: "Neomorf", hoverText: "Neomorfismo - 2025 - UFPel" },
  { src: ksoo, alt: "Ksoo", hoverText: "KyungSoo - 2025 - UFPel" },
  { src: posterV, alt: "Poster V", hoverText: "Poster Vertical - 2025 - UFPel" },
  { src: ningc, alt: "Ningc", hoverText: "NingNing Capa - 2023 - Outros" },
  { src: pgKDA, alt: "PG KDA", hoverText: "Kcharted - 2025 - UFPel" },
  { src: c1, alt: "1C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c2, alt: "2C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c3, alt: "3C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c4, alt: "4C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c5, alt: "5C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c6, alt: "6C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c7, alt: "7C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c8, alt: "8C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c10, alt: "10C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c11, alt: "11C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: c12, alt: "12C", hoverText: "Cartão Postal - 2025 - UFPel" },
  { src: kch1, alt: "1KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: kch2, alt: "2KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: kch3, alt: "3KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: kch4, alt: "4KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: kch5, alt: "5KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: kch6, alt: "6KCH", hoverText: "Kcharted - 2025 - UFPel" },
  { src: ftg1, alt: "FTG 1", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg2, alt: "FTG 2", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg3, alt: "FTG 3", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg4, alt: "FTG 4", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg5, alt: "FTG 5", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg6, alt: "FTG 6", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg7, alt: "FTG 7", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg8, alt: "FTG 8", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg9, alt: "FTG 9", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg10, alt: "FTG 10", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg11, alt: "FTG 11", hoverText: "Fotografia Light Painting - 2025 - UFPel" },
  { src: ftg12, alt: "FTG 12", hoverText: "Fotografia Fotometrada - 2025 - UFPel" },
  { src: ftg13, alt: "FTG 13", hoverText: "Fotografia Fotometrada - 2025 - UFPel" },
  { src: ftg14, alt: "FTG 14", hoverText: "Fotografia Fotometrada - 2025 - UFPel" },
  { src: ftg15, alt: "FTG 15", hoverText: "Fotografia Fotometrada - 2025 - UFPel" },
];

const shuffleArray = (array) => {
  const shuffledArray = [...array]; 
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Galeria = () => { 
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    setGalleryImages(shuffleArray(allImages));
  }, []);

  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {galleryImages.map((image, index) => (
          <GalleryItem image={image} key={index} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ image }) => {
  const [loaded, setLoaded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };
  
  // Função para lidar com o clique/toque
  const handleItemInteraction = () => {
    // Verifica se a tela é mobile (largura menor que a breakpoint)
    if (window.innerWidth < 1024) {
      setShowOverlay(!showOverlay);
    }
  };

  return (
    <div 
      className={`galeria-item ${showOverlay ? 'show-overlay' : ''}`} 
      onClick={handleItemInteraction} 
      onTouchStart={handleItemInteraction}
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        loading="lazy" 
        decoding="async"
        onLoad={handleImageLoad}
        className={loaded ? 'fade-in' : ''}
      />
      <div className="overlay">
        <p className="overlay-text">{image.hoverText}</p>
      </div>
    </div>
  );
};

export default Galeria;