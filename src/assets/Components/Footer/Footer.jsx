import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();

  const copyEmail = () => {
    const email = "marianatxf@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copiado com sucesso!");
    }, () => {
      alert("Falha ao copiar o email.");
    });
  };

  return (
    <footer className="main-footer">
      <div className="star-overflow-container">
        <img src="estrela.svg" alt="Estrela Decorativa" className="spinning-star" />
        <div className="footer-content">
          <div className="footer-links">
            {location.pathname !== "/" && <Link to="/" className="home-link" >HOME</Link>}
            
            <a href="https://instagram.com/trblzd" target="_blank" rel="noreferrer">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/marianatxf/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a href="https://lattes.cnpq.br/1739318616918391" target="_blank" rel="noreferrer">LATTES</a>
            <a href="https://github.com/trblzd" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="#" onClick={copyEmail} title="Copiar E-mail">EMAIL</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;