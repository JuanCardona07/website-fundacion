import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}> 
      <p>© {new Date().getFullYear()} Centro Mariana de Alfabetización</p>
    </footer>
  );
};

export default Footer;