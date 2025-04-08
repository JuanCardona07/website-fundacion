import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado con éxito!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>
      <p className="contact-intro">Hablemos. No dudes en ponerte en contacto con nosotros mediante la información de contacto a continuación, o envíanos un mensaje mediante el formulario.</p>

      <div className="contact-content">
        <div className="contact-info">
          <h2>Ponte en contacto</h2>
          <address>
            <p>Vereda La Esmeralda</p>
            <p>Marinilla, Antioquia</p>
            <p>Colombia</p>
            <p><a href="mailto:centro.marianadealfabetizacion@gmail.com">centro.marianadealfabetizacion@gmail.com</a></p>
            <p>Nit: 90.10/48308</p>
            <p>Celular: 310-8298815</p>
          </address>
        </div>

        <div className="contact-form">
          <h2>Envíanos un mensaje</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre (obligatorio)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico (obligatorio)</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje (obligatorio)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button type="submit" className="submit-button">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;