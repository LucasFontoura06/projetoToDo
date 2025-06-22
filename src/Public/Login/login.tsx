import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../componentes/Footer/footer';
import Header from '../../componentes/Header/header';
import styles from './login.module.css';
import { CONSTANTES } from '../../componentes/Constants/contants';

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
      {/* Header reutilizável com botão de voltar */}
      <Header 
        showBackButton={true}
        onBackClick={handleBack}
      />

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <div className={styles.loginSection}>
          <div className={styles.loginContent}>
            <h1 className={styles.title}>{CONSTANTES.TITULO_LOGIN}</h1>
            <p className={styles.subtitle}>{CONSTANTES.SUBTITULO_LOGIN}</p>
            
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{CONSTANTES.LABEL_EMAIL}</label>
                <input
                  type="email"
                  className={styles.input}
                  placeholder={CONSTANTES.PLACEHOLDER_EMAIL}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>{CONSTANTES.LABEL_SENHA}</label>
                <input
                  type="password"
                  className={styles.input}
                  placeholder={CONSTANTES.PLACEHOLDER_SENHA}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className={styles.submitButton}> {CONSTANTES.BOTAO_ENTRAR} </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer reutilizável */}
      <Footer />
    </div>
  );
}

export default Login;
