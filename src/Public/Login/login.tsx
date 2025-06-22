import React from 'react';
import { useState } from 'react';
import styles from './login.module.css';

function Login() {
  // Estados para armazenar os valores dos campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função que será executada quando o formulário for enviado
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log('=== DADOS DO LOGIN ===');
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Login</h1>
        
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="email"
              className={styles.formInput}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className={styles.loginButton}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
