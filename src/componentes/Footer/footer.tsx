import React from 'react';
import styles from './footer.module.css';

// Interface para as props do Footer (opcional para personalização futura)
interface FooterProps {
  text?: string;
  showDivider?: boolean;
}

function Footer({ 
  text = "Projeto de aprendizado • React + TypeScript • Versão 1.0.0",
  showDivider = true 
}: FooterProps) {
  return (
    <footer className={`${styles.footer} ${showDivider ? styles.withDivider : ''}`}>
      <p className={styles.footerText}>{text}</p>
    </footer>
  );
}

export default Footer;
