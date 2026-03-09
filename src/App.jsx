import React, { Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import Header from './assets/Components/Header/Header.jsx';
import Footer from './assets/Components/Footer/Footer.jsx';
import Home from './assets/Components/Home/Home.jsx';
import Projetos from './assets/Components/Projetos/Projetos.jsx';
import ProjetoTemplate from './assets/Components/Template/Template.jsx';
import ScrollToTop from './assets/Components/Scroll.jsx'; 

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
      <ScrollToTop /> 
      <div className="app-container">
        <Header />
        
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projeto/:id" element={<ProjetoTemplate />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;