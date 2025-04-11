import styles from "./HeaderWithNav.module.css";
import { NavLink } from "react-router-dom";

const HeaderWithNav = () => {
  return (
    <header className={styles["header-with-nav"]}>
      <div className={styles["header-content"]}>
        <NavLink to="/">
          <img
            src="/fcma.ico"
            alt="Logo FCMA"
            className={styles["header-logo"]}
          />
        </NavLink>
        <div className={styles["header-message"]}>
          <h1 className={styles.title}>
            Fundación Centro Mariana de Alfabetización
          </h1>
          <p>
            Fundación sin ánimo de lucro, dedicada a apoyar académicamente a
            niños y jóvenes en estado de vulnerabilidad.
          </p>
        </div>
      </div>

      <nav className={styles["navbar"]}>
        <NavLink to="/" className={styles["nav-link"]}>
          Inicio
        </NavLink>
        <NavLink to="/blog" className={styles["nav-link"]}>
          Blog
        </NavLink>
        <NavLink to="/about" className={styles["nav-link"]}>
          Acerca de FCMA
        </NavLink>
        <NavLink to="/legal" className={styles["nav-link"]}>
          Legal
        </NavLink>
        <NavLink to="/contact" className={styles["nav-link"]}>
          Contacto
        </NavLink>
      </nav>
    </header>
  );
};

export default HeaderWithNav;
