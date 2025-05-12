import { useState } from "react";
import styles from "./Blog.module.css";
import blogImage from "../../assets/Becas.png";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [expandedImage, setExpandedImage] = useState(null);

  const categories = ["Todos", "Actividades/Programas", "Logros", "Noticias"];

  const handleImageClick = (image) => {
    setExpandedImage(image === expandedImage ? null : image);
  };

  return (
    <div className={styles["blog-container"]}>
      <header className={styles["blog-header"]}>
        <h1 className={styles["blog-title"]}>Blog</h1>
        <p className={styles["blog-subtitle"]}>
          Descubre nuestras últimas noticias y recursos para la educación
        </p>
        <div className={styles["title-divider"]}></div>
      </header>

      <div className={styles["blog-filters"]}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles["filter-button"]} ${
              activeCategory === category ? styles["active"] : ""
            }`}
            onClick={() =>
              setExpandedImage(null) || setActiveCategory(category)
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className={styles["blog-content"]}>
        {(activeCategory === "Todos" ||
          activeCategory === "Actividades/Programas") && (
          <div className={styles["blog-post"]}>
            <div
              className={`${styles["image-container"]} ${
                expandedImage === blogImage ? styles["expanded"] : ""
              }`}
              onClick={() => handleImageClick(blogImage)}
            >
              <img
                src={blogImage}
                alt="Información sobre Actividades/Programas"
                className={styles["blog-image"]}
              />
            </div>
            <div className={styles["post-details"]}>
              <h2 className={styles["post-title"]}>
                Programa de becas fundación CMA
              </h2>
              <p className={styles["post-description"]}>
                Conoce los requisitos para aplicar a nuestras becas educativas.
                Las becas cubren hasta el 100% de los costos educativos para
                estudiantes de bajos recursos con buen desempeño académico.
              </p>
            </div>
          </div>
        )}

        {activeCategory !== "Todos" &&
          activeCategory !== "Actividades/Programas" && (
            <div className={styles["empty-state"]}>
              <p>Próximamente publicaremos contenido en esta categoría</p>
            </div>
          )}
      </div>

      {expandedImage && (
        <div
          className={styles["fullscreen-overlay"]}
          onClick={() => setExpandedImage(null)}
        >
          <img
            src={expandedImage}
            alt="Vista ampliada"
            className={styles["fullscreen-image"]}
          />
        </div>
      )}
    </div>
  );
}
