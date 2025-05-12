import { useState, useEffect } from "react";
import styles from "./Legal.module.css";

const acta_constitucionyestatutos = require("../../assets/ACTA DE CONSTITUCION Y ESTATUTOS.pdf");
const cargos_directivos = require("../../assets/CARGOS DIRECTIVOS.pdf");
const certificado_cumplimiento = require("../../assets/CERTIFICADO DE CUMPLIMIENTO 13.pdf");
const dictamen = require("../../assets/DICTAMEN.pdf");
const estados_financieros = require("../../assets/ESTADOS FINANCIEROS.pdf");
const informe_gestion = require("../../assets/INFORME DE GESTION.pdf");
const miembros_junta = require("../../assets/MIEMBROS DE LA JUNTA.pdf");
const revelaciones = require("../../assets/REVELACIONES.pdf");

export default function Legal() {
  const [fullscreenDoc, setFullscreenDoc] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const legalDocuments = [
    {
      title: "Acta de constitución y Estatutos",
      file: acta_constitucionyestatutos,
    },
    { title: "Cargos directivos", file: cargos_directivos },
    { title: "Certificado de cumplimiento", file: certificado_cumplimiento },
    { title: "Dictamen", file: dictamen },
    { title: "Estados financieros", file: estados_financieros },
    { title: "Informe de gestión", file: informe_gestion },
    { title: "Miembros de la junta", file: miembros_junta },
    { title: "Revelaciones", file: revelaciones },
  ];

  const openDocument = (doc) => {
    if (isMobile) {
      setFullscreenDoc(doc);
    } else {
      window.open(doc.file.default || doc.file, "_blank");
    }
  };

  const closeFullscreen = () => setFullscreenDoc(null);

  return (
    <div className={styles.legalContainer}>
      <header className={styles.legalHeader}>
        <h1 className={styles.legalTitle}>Documentos Legales</h1>
        <p className={styles.legalSubtitle}>
          Conoce la documentación oficial de nuestra fundación
        </p>
        <div className={styles.titleDivider}></div>
      </header>

      <div className={styles.documentsGrid}>
        {legalDocuments.map((doc, index) => (
          <div
            key={index}
            className={styles.documentCard}
            onClick={() => openDocument(doc)}
            title="Haz clic para ver el documento"
          >
            <div className={styles.documentIcon}>
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path
                  fill="#E2001A" /* Color rojo original */
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                />
                <path fill="#FFFFFF" d="M14 2v6h6" />
                <path fill="#FFCDD2" d="M14 8h6l-6-6v6z" />
                <text
                  x="12"
                  y="16"
                  fontFamily="Arial"
                  fontSize="6"
                  fill="#FFFFFF"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  PDF
                </text>
              </svg>
            </div>
            <div className={styles.documentInfo}>
              <h3 className={styles.documentTitle}>{doc.title}</h3>
              <div className={styles.documentMeta}></div>
            </div>
          </div>
        ))}
      </div>

      {isMobile && fullscreenDoc && (
        <div className={styles.documentFullscreen}>
          <div className={styles.documentFullscreenContent}>
            <button className={styles.closeButton} onClick={closeFullscreen}>
              &times;
            </button>
            <iframe
              src={fullscreenDoc.file.default || fullscreenDoc.file}
              title={fullscreenDoc.title}
              className={styles.documentIframe}
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
