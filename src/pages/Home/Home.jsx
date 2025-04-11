import { useState, useRef } from 'react';
import styles from './Home.module.css';
import moment from 'moment';

export default function Home(){
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
      date: moment().format('MMMM Do YYYY, h:mm:ss a')      
    };

    setComments([newComment, ...comments]);
    setName('');
    setMessage('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className={styles["home-container"]}>      
      <h1 className={styles.title}>«Fe, Compromiso, Superación.
           La Educación como meta hacia el Progreso.»</h1>
      <div className={styles["video-container"]}>
        <iframe
          src="https://www.youtube.com/embed/p0VorBUqS9E"
          title="Video del Centro"
          allowFullScreen
        ></iframe>
      </div>


      <div className={styles['comments-section']}>
        <h2>Comentarios {`(${comments.length})`}</h2>
        {/* <div className={styles["comments-header"]}>
          <div className={styles["comment-count"]}>{comments.length} comentarios</div>
        </div> */}

        {/* <div className={styles["comment-input-container"]}>
        </div> */}
          <form onSubmit={handleSubmit} className={styles["comment-form"]}>
            <textarea 
              className={styles["comment-input"]}
              ref={textareaRef}
              placeholder="Escribe tu comentario..."
              value={message}
              onChange={handleTextareaChange}
              required
              rows="1"
            />
            <div className={styles["form-footer"]}>
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
        
        <div className={styles["comments-list"]}>
          {comments.map((comment, index) => (
            <div key={index} className={styles["comment-card"]}>
              <div className={styles["comment-header"]}>
              <div className={styles['user-pic']}/>
                <strong>{comment.name}</strong>
                <span className={styles["comment-date"]}>{comment.date}</span>
              </div>
              <div className={styles["comment-body"]}>
                {comment.message.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className={styles["comments-section"]}>
        
      </div> */}
    </div>
  );
};
