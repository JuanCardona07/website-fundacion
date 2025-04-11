import '../styles/Blog.css';
import blogImage from '../media/Becas.png';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog Educativo</h1>
        <p>Descubre nuestrar últimas noticias y recursos para la educación</p>
      </div>
      
      <div className="blog-image-container">
        <img 
          src={blogImage} 
          alt="Niños participando en actividades de alfabetización" 
          className="blog-main-image"
        />
      </div>
    </div>
  );
};

export default Blog;