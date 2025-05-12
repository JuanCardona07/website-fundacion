import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <h1>Contáctanos</h1>
      <p className={styles["contact-intro"]}>
        No dudes en ponerte en contacto con nosotros mediante la información de
        contacto a continuación. Estamos disponibles para responder tus
        preguntas y atender tus necesidades.
      </p>

      <div className={styles["contact-info"]}>
        <h2>Información de contacto</h2>
        <address>
          <div className={styles["contact-item"]}>
            <span className={styles["contact-icon"]}>📍</span>
            <p>Vereda La Esmeralda, Marinilla, Antioquia, Colombia</p>
          </div>

          {/* Mapa incrustado justo debajo de la dirección */}
          <div className={styles["map-wrapper"]}>
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7503792462014!2d-75.34213282520068!3d6.174661627455575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442ef775646b03%3A0x6b95bc88990d1372!2sVereda%20La%20Esmeralda%2C%20Marinilla%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1715011603136!5m2!1ses-419!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles["contact-item"]}>
            <span className={styles["contact-icon"]}>✉️</span>
            <p>
              <a href="mailto:centro.marianadealfabetizacion@gmail.com">
                centro.marianadealfabetizacion@gmail.com
              </a>
            </p>
          </div>

          <div className={styles["contact-item"]}>
            <span className={styles["contact-icon"]}>📞</span>
            <p>
              <a href="tel:+573108298815">310-8298815</a>
            </p>
          </div>

          <div className={styles["contact-item"]}>
            <span className={styles["contact-icon"]}>💬</span>
            <p>
              <a
                href="https://wa.me/573108298815"
                target="_blank"
                rel="noopener noreferrer"
              >
                Envíanos un mensaje por WhatsApp
              </a>
            </p>
          </div>

          <div className={styles["contact-item"]}>
            <span className={styles["contact-icon"]}>📋</span>
            <p>Nit: 901048308</p>
          </div>
        </address>
      </div>
    </div>
  );
}
