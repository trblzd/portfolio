import React from "react";
import { Link, useLocation } from "react-router-dom"; 
import './Header.css';

const Header = () => {
  const location = useLocation(); 

  const isGaleria = location.pathname === '/galeria';
  const isProjetos = location.pathname === '/projetos';

  return (
    <header className="header">
      <div className="header-content">
        {(isGaleria || isProjetos) && (
          <>
            <Link to="/" id="h1hover"><h1>Home</h1></Link>
          </>
        )}
        
        {!isGaleria && (
          <Link to="/galeria" id="h1hover"><h1>Galeria</h1></Link>
        )}

        {!isProjetos && (
          <Link to="/projetos" id="h1hover"><h1>Projetos</h1></Link>
        )}
      </div>
    </header>
  );
};

export default Header;