import { useState, useRef } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const textareaRef = useRef(null);
  
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newComment = {
      name,
      message,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className="home-container">
      <h1>«Fe, Compromiso, Superación.
           La Educación como meta hacia el Progreso.»</h1>
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/p0VorBUqS9E"
          title="Video del Centro"
          allowFullScreen
        ></iframe>
      </div>

      <div className="comments-section">
        <div className="comments-header">
          <h2>Comentarios</h2>
          <div className="comment-count">{comments.length} comentarios</div>
        </div>
        
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-card">
              <div className="comment-header">
                <strong>{comment.name}</strong>
                <span className="comment-date">{comment.date}</span>
              </div>
              <div className="comment-body">
                {comment.message.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="comment-input-container">
          <form onSubmit={handleSubmit} className="comment-form">
            <textarea
              ref={textareaRef}
              placeholder="Escribe tu comentario..."
              value={message}
              onChange={handleTextareaChange}
              required
              rows="1"
            />
            <div className="form-footer">
              <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button type="submit">Comentar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;