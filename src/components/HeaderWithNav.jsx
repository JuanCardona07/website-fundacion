import '../styles/HeaderWithNav.css';

const HeaderWithNav = () => {
  return (
    <header className="header-with-nav">
      <div className="header-content">
        <img 
          src="/fcma.ico" 
          alt="Logo FCMA" 
          className="header-logo"
        />
        <div className="header-message">
          <h1>Fundación Centro Mariana de Alfabetización</h1>
          <p>
            Fundación sin ánimo de lucro, dedicada a apoyar académicamente a niños y jóvenes 
            en estado de vulnerabilidad.
          </p>
        </div>
      </div>

      <nav className="navbar">
        <a href="/" className="nav-link">Inicio</a>
        <a href="/blog" className="nav-link">Blog</a>
        <a href="/about" className="nav-link">Acerca de FCMA</a>
        <a href="/legal" className="nav-link">Legal</a>
        <a href="/contact" className="nav-link">Contacto</a>
      </nav>
    </header>
  );
};

export default HeaderWithNav;