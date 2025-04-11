import styles from './Blog.module.css';
import blogImage from '../../assets/Becas.png';

export default function Blog() {
  return (
    <div className={styles["blog-container"]}>
      <div className={styles["blog-header"]}>
        <h1 className={styles.title}>Blog Educativo</h1>
        <p>Descubre nuestrar últimas noticias y recursos para la educación</p>
      </div>
      
      <div className={styles["blog-image-container"]}>
        <img 
          src={blogImage} 
          alt="Niños participando en actividades de alfabetización" 
          className={styles["blog-main-image"]}
        />
      </div>
    </div>
  );
};
