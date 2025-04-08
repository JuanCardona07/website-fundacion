import '../styles/About.css';

const About = () => {
  return (
    <div className="about-fcma-container">
      <header className="fcma-header">
        <h1>Acerca de FCMA</h1>
        <div className="divider"></div>
      </header>

      <section className="fcma-content">
        {/* Sección Misión */}
        <div className="mission-vision-card">
          <h2 className="section-title">
            <span className="icon">📌</span> Misión
          </h2>
          <p className="section-text">
            Comprometernos con el futuro de los niños y niñas de la vereda La Esmeralda, 
            a través de acciones pedagógicas en procesos educativos como lengua, matemáticas, 
            artística, educación física, entre otros; buscando la inclusión, brindándoles 
            protección, mecanismos de prevención y aceleración de sus procesos cognitivos.
          </p>
        </div>

        <div className="fcma-divider">
          <span>✻</span>
        </div>

        <div className="mission-vision-card">
          <h2 className="section-title">
            <span className="icon">🔭</span> Visión
          </h2>
          <p className="section-text">
            Buscamos ser reconocidos a nivel nacional e internacional, como una institución 
            que cuenta con estrategias aplicadas como iniciativa personalizada de estudiante 
            a estudiante, generando cambios y transformaciones en sus hábitos de estudio y 
            estimulando procesos educativos que ayudan al desarrollo y al crecimiento de los 
            niños y niñas en todas sus dimensiones (corporal, afectiva, cognitiva, social, 
            ética, etc.).
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;