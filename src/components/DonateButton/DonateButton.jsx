import React from "react";
import styles from "./DonateButton.module.css";

const MercadoPagoButton = () => {
  const handleDonate = () => {
    window.open(
      "https://link.mercadopago.com.co/fcma",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <button
      onClick={handleDonate}
      className={styles["donate-button"]}
      aria-label="Donar con Mercado Pago"
    >
      <span className="pulse-effect">❤️🙏</span> ¡Dona Ahora!
    </button>
  );
};

export default MercadoPagoButton;
