import styles from "./HeaderWithNav.module.css";
import { NavLink } from "react-router-dom";

const HeaderWithNav = () => {
  return (
    <header className={styles["header-container"]}>
      <div className={styles["header-content"]}>
        <NavLink to="/" className={styles["logo-link"]}>
          <img
            src="/fcma.ico"
            alt="Logo FCMA"
            className={styles["header-logo"]}
          />
          <div className={styles["header-titles"]}>
            <h1 className={styles["main-title"]}>
              Fundación Centro Mariana de Alfabetización
            </h1>
          </div>
        </NavLink>

        <nav className={styles["navbar"]}>
          <NavLink to="/" className={styles["nav-link"]} end>
            <span className={styles["nav-text"]}>Inicio</span>
            <span className={styles["nav-dot"]}></span>
          </NavLink>
          <NavLink to="/blog" className={styles["nav-link"]}>
            <span className={styles["nav-text"]}>Blog</span>
            <span className={styles["nav-dot"]}></span>
          </NavLink>
          <NavLink to="/about" className={styles["nav-link"]}>
            <span className={styles["nav-text"]}>Acerca de</span>
            <span className={styles["nav-dot"]}></span>
          </NavLink>
          <NavLink to="/legal" className={styles["nav-link"]}>
            <span className={styles["nav-text"]}>Legal</span>
            <span className={styles["nav-dot"]}></span>
          </NavLink>
          <NavLink to="/contact" className={styles["nav-link"]}>
            <span className={styles["nav-text"]}>Contacto</span>
            <span className={styles["nav-dot"]}></span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default HeaderWithNav;
