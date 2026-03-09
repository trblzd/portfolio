import React from "react";
import { useParams } from "react-router-dom";
import { projetosData } from '../../../data/data.js';
import "./Template.css";

const ProjetoTemplate = () => {
  const { id } = useParams();
  const projeto = projetosData[id];

  if (!projeto) return <div className="projeto-not-found">Projeto não encontrado.</div>;

  return (
    <main className="projeto-container">
      <header className="projeto-header">
        <h1 className="projeto-titulo">{projeto.titulo}</h1>
      </header>

      {projeto.secoes.map((secao, index) => (
        <section key={index} className="projeto-secao">
          <div className="projeto-main-layout">
            <div className="projeto-text-column">
              {secao.subtitulo && <h2 className="projeto-subtitulo-alinhado">{secao.subtitulo}</h2>}
              
              <div className="projeto-meta-info">
                {projeto.disciplina && <p><strong>Disciplina:</strong> {projeto.disciplina}</p>}
                {projeto.semestre && <p><strong>Semestre:</strong> {projeto.semestre}</p>}
                {secao.colaboradores && secao.colaboradores[0] !== "" && (
                  <p><strong>{secao.colaboradores.length > 1 ? "Colaboradores:" : "Colaborador:"}</strong> {secao.colaboradores.join(", ")}</p>
                )}
              </div>

              <p className="projeto-descricao">{secao.descricao}</p>

              {secao.link && secao.link.url !== "" && (
                <div className="projeto-link-wrapper">
                  <a href={secao.link.url} target="_blank" rel="noopener noreferrer" className="projeto-external-link">
                    {secao.link.label || "Ver Projeto Completo"}
                  </a>
                </div>
              )}
            </div>

            {secao.fotos.principal && (
              <div className="projeto-image-column">
                <img src={secao.fotos.principal} alt="Destaque" className="img-destaque" />
              </div>
            )}
          </div>

          {secao.fotos.galeria && secao.fotos.galeria.length > 0 && (
            <div className="projeto-galeria-flex">
              {secao.fotos.galeria.map((foto, idx) => (
                <div key={idx} className="galeria-flex-item">
                  <img src={foto} alt={`Galeria ${idx}`} className="img-flex-fluid" />
                </div>
              ))}
            </div>
          )}
          <div className="section-spacer" />
        </section>
      ))}
    </main>
  );
};

export default ProjetoTemplate;