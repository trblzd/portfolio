import './Home.css';
import { Link } from "react-router-dom"; 

const Home = () => {
  const title = "PORTFOLIO";

  return (
    <main className="home-content">
      <h1 className="main-title">
        {title.split("").map((char, index) => (
          <span key={index} className="hover-letter">
            {char}
          </span>
        ))}
      </h1>

      <section className="blocks-container">
        <div className="info-column" id="about-me">
          <h2 className="section-subtitle">SOBRE MIM</h2>
          <div className="content-wrapper">
            <p className="intro-text">
              <span className="highlight">Designer</span> em formação pela UFPel e <span className="highlight">Tecnica em Informatica</span> pelo IFSul.
            </p>
            <p>
              Unindo a programação e os algoritmos à sensibilidade visual é o que define meu trabalho. Com mais de <strong>11 anos de experiência</strong> prática em <strong>Photoshop e Premiere Pro</strong>, crio soluções que equilibram estética e funcionalidade.
            </p>
            <p>
              Além de ser uma amante das grandes áreas do design, domino o desenvolvimento <strong>front-end</strong>, garantindo que tudo seja executado com perfeição. Sou <strong>fluente em inglês</strong> e entusiasta da cultura coreana, trazendo uma perspectiva global para cada projeto.
            </p>
          </div>
        </div>

        <div className="info-column" id="skills">
          <h2 className="section-subtitle">SKILLS</h2>
          <div className="content-wrapper">
            <div className="skill-group">
              <h3>Design</h3>
              <p>UI/UX, Photoshop, Illustrator, Premiere Pro, Identidade Visual, Mídias Sociais, After Effects, Lightroom</p>
            </div>
            <div className="skill-group">
              <h3>Dev</h3>
              <p>HTML/CSS, JavaScript, React.js</p>
            </div>
            <div className="skill-group">
              <h3>Extras</h3>
              <p>Inglês Fluente, Coreano Básico/Intermediário</p>
            </div>
          </div>
        </div>
      </section>

      <div className="cta-container">
        <Link to="/projetos">
          <button className="cta-button">explorar projetos</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;