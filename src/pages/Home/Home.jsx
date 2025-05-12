import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import commentsData from "./comments.json";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState(5);

  useEffect(() => {
    const validatedComments = commentsData.map((comment) => ({
      name: comment.name || "Anónimo",
      message: comment.message || "No hay mensaje disponible",
      date: comment.date || "Fecha no disponible",
      position: comment.position || "Usuario",
    }));
    setComments(validatedComments);
  }, []);

  const getInitials = (name) => {
    if (!name || name === "Anónimo") return "?";
    const names = name.split(" ");
    return names
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className={styles["home-container"]}>
      <div className={styles["header-section"]}>
        <h1 className={styles["main-title"]}>
          «Fe, Compromiso, Superación. La Educación como meta hacia el
          Progreso.»
        </h1>
        <p className={styles["fundation-description"]}>
          Somos una fundación sin ánimo de lucro, dedicada a apoyar
          académicamente a niños y jóvenes de la comunidad que se encuentren en
          estado de vulnerabilidad.
        </p>
      </div>

      <div className={styles["video-section"]}>
        <h2 className={styles["video-title"]}>
          Nuestra historia contada por nuestra directora
        </h2>
        <div className={styles["video-container"]}>
          <iframe
            src="https://www.youtube.com/embed/p0VorBUqS9E"
            title="Video del Centro"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className={styles["testimonials-section"]}>
        <h2 className={styles["testimonials-title"]}>
          Algunas opiniones sobre la fundación
        </h2>

        <div className={styles["comments-scroll-container"]}>
          <div className={styles["comments-list"]}>
            {comments.slice(0, visibleComments).map((comment, index) => (
              <div
                key={index}
                className={`${styles["comment-card"]} ${
                  index % 2 === 0
                    ? styles["left-comment"]
                    : styles["right-comment"]
                }`}
              >
                <div className={styles["comment-header"]}>
                  <div className={styles["user-pic"]}>
                    {getInitials(comment.name)}
                  </div>
                  <div className={styles["comment-author"]}>
                    <strong>{comment.name}</strong>
                    <span className={styles["comment-date"]}>
                      {comment.date}
                    </span>
                  </div>
                </div>
                <div className={styles["comment-body"]}>
                  {comment.message.split("\n").map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {comments.length > visibleComments && (
          <button
            className={styles["show-more"]}
            onClick={() => setVisibleComments((prev) => prev + 5)}
          >
            Mostrar más opiniones
          </button>
        )}
      </div>
    </div>
  );
}
