import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

const copyEmail = () => {
    const email = "marianatxf@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado com sucesso!");
    }, () => {
      alert("Falha ao copiar o email.");
    });
  };

  return (
    <header className="main-header">
      <div className="logo-container">
        <Link to="/"><img src="verde.png" alt="Mari Logo" className="logo-img" /></Link>
      </div>
      <nav className="header-nav">
        <a href="https://instagram.com/trblzd" target="_blank" rel="noreferrer">INSTAGRAM</a>
        <a href="https://www.linkedin.com/in/marianatxf/" target="_blank" rel="noreferrer">LINKEDIN</a>
        <a href=" https://lattes.cnpq.br/1739318616918391" target="_blank" rel="noreferrer">LATTES</a>
        <a href="https://github.com/trblzd" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="#" onClick={copyEmail} title="Copiar E-mail">EMAIL</a>
      </nav>
    </header>
  );
};

export default Header;