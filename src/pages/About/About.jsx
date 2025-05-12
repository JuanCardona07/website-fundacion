import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <header className={styles["about-header"]}>
        <h1 className={styles["about-title"]}>Acerca de FCMA</h1>
        <div className={styles["title-divider"]}></div>
      </header>

      <section className={styles["content-section"]}>
        <div className={styles["card"]}>
          <h2 className={styles["card-title"]}>
            <span className={styles["card-icon"]}>📌</span> Misión
          </h2>
          <div className={styles["card-content"]}>
            <p>
              Comprometernos con el futuro de los niños y niñas de la vereda La
              Esmeralda, a través de acciones pedagógicas en procesos educativos
              como lengua, matemáticas, artística, educación física, entre
              otros; buscando la inclusión, brindándoles protección, mecanismos
              de prevención y aceleración de sus procesos cognitivos.
            </p>
          </div>
        </div>

        <div className={styles["card"]}>
          <h2 className={styles["card-title"]}>
            <span className={styles["card-icon"]}>🔭</span> Visión
          </h2>
          <div className={styles["card-content"]}>
            <p>
              Buscamos ser reconocidos a nivel nacional e internacional, como
              una institución que cuenta con estrategias aplicadas como
              iniciativa personalizada de estudiante a estudiante, generando
              cambios y transformaciones en sus hábitos de estudio y estimulando
              procesos educativos que ayudan al desarrollo y al crecimiento de
              los niños y niñas en todas sus dimensiones (corporal, afectiva,
              cognitiva, social, ética, etc.).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
