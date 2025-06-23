import styles from './header.module.css';
import React from 'react';
import logo from '../../assets/telaCadastro/logoProject.jpg'; // Importe o seu logo aqui

// Interface para as props do Header
interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
  backButtonText?: string;
}

function Header({ 
  showBackButton = false,
  onBackClick,
  backButtonText = "← Voltar"
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo do Projeto" className={styles.logo} />
      </div>
      
      {showBackButton && onBackClick && (
        <button 
          className={styles.backButton} 
          onClick={onBackClick}
        >
          {backButtonText}
        </button>
      )}
    </header>
  );
}

export default Header;
