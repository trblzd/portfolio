import React, { useState } from "react";
import lua from '../icones/lua.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const copyEmail = () => {
    const email = "marianatxf@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado com sucesso!");
    }, () => {
      alert("Falha ao copiar o email.");
    });
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">TRBLZD</div>
      <img src={lua} id="lua" alt="Lua" width="50px" />
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#" onClick={copyEmail}>Email</a>
        <a href="https://github.com/trblzd" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://instagram.com/trblzd" target="_blank" rel="noopener noreferrer">Instagram</a>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? "✕" : "☰"}
      </button>
    </header>
  );
};

export default Header;
