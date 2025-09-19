import React, {Suspense, useEffect} from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './assets/Components/Header/Header.jsx';
import Footer from './assets/Components/Footer/Footer.jsx';
import Home from './assets/Components/Home/Home.jsx'; 
import Galeria from './assets/Components/Galeria/Galeria.jsx'; 
import Projetos from './assets/Components/Projetos/Projetos.jsx';

function App() {
   useEffect(() => {
    const handleContextmenu = e => {
      e.preventDefault()
    }
    document.addEventListener('contextmenu', handleContextmenu)
    
    return function cleanup() {
      document.removeEventListener('contextmenu', handleContextmenu)
    }
  }, []);

  return (
    <HashRouter>
      <div className="app-container">
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
        </Suspense>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;