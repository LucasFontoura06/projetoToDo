import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

function Login() {
  // Hook do react-router-dom para navegação
  const navigate = useNavigate();
  
  // Estados para armazenar os valores dos campos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função que será executada quando o formulário for enviado
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log('=== DADOS DO LOGIN ===');
    console.log('Email digitado:', email);
    console.log('Senha digitada:', password);
    
    // Aqui você pode adicionar a lógica de autenticação
    // Por enquanto, vamos apenas mostrar um alerta
    alert('Login realizado com sucesso!\n\nEmail: ' + email + '\nSenha: ' + password);
  };

  // Função para voltar para a página inicial
  const handleBack = () => {
    console.log('=== USUÁRIO CLICOU EM VOLTAR ===');
    navigate('/home');
  };

  return (
    <div className={styles.loginContainer}>
      {/* Header minimalista */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>📝</span>
          <span className={styles.logoText}>To-Do List</span>
        </div>
        <button 
          className={styles.backButton} 
          onClick={handleBack}
        >
          ← Voltar
        </button>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <div className={styles.loginSection}>
          <div className={styles.loginContent}>
            <h1 className={styles.title}>Entrar no sistema</h1>
            <p className={styles.subtitle}> Acesse sua conta para gerenciar suas tarefas </p>
            
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Senha</label>
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitButton}> Entrar </button>
            </form>

            <div className={styles.helpText}>
              <p>Este é um projeto de aprendizado</p>
              <p>Use qualquer email e senha para testar</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer minimalista */}
      <footer className={styles.footer}>
        <p>Projeto de aprendizado • React + TypeScript</p>
      </footer>
    </div>
  );
}

export default Login;
