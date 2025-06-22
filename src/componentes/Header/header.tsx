import React from 'react';
import styles from './header.module.css';

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
      <div className={styles.logo}>
        <span className={styles.logoIcon}>📝</span>
        <span className={styles.logoText}>To-Do List</span>
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
