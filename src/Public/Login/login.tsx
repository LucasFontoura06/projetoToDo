import React from 'react';
import styles from './login.module.css';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <h1 className={styles.loginTitle}>Login</h1>
        
        <form className={styles.loginForm}>
          <div className={styles.formGroup}>
            <input
              type="email"
              className={styles.formInput}
              placeholder="Email"
            />
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="password"
              className={styles.formInput}
              placeholder="Senha"
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
