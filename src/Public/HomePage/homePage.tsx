import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './homePage.module.css';

function HomePage() {
  // Hook do react-router-dom para navegação
  const navigate = useNavigate();

  // Função que será executada quando o usuário clicar em "Começar"
  const handleStart = () => {
    console.log('=== USUÁRIO CLICOU EM COMEÇAR ===');
    console.log('Redirecionando para a lista de tarefas...');
    // Navegando para a página de login (que será onde o usuário acessa o sistema)
    navigate('/login');
  };

  // Função que será executada quando o usuário clicar em "Sobre"
  const handleAbout = () => {
    console.log('=== USUÁRIO CLICOU EM SOBRE ===');
    console.log('Mostrando informações sobre o aplicativo...');
    // Aqui você pode adicionar a navegação para uma página sobre
    // Por enquanto, vamos apenas mostrar um alerta
    alert('Este é um projeto de aprendizado em React e TypeScript!\n\nFuncionalidades:\n• Adicionar tarefas\n• Marcar como concluídas\n• Editar tarefas\n• Excluir tarefas\n• Filtrar por status');
  };

  return (
    <div className={styles.homeContainer}>
      {/* Header minimalista */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>📝</span>
          <span className={styles.logoText}>To-Do List</span>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Organize suas tarefas de forma simples
          </h1>
          <p className={styles.subtitle}>
            Um aplicativo minimalista para gerenciar suas atividades diárias
          </p>
        </div>

        {/* Seção de funcionalidades */}
        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>O que você pode fazer</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>➕</span>
              <h3>Adicionar tarefas</h3>
              <p>Crie novas tarefas rapidamente</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✅</span>
              <h3>Marcar como concluída</h3>
              <p>Risque tarefas da sua lista</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✏️</span>
              <h3>Editar tarefas</h3>
              <p>Modifique quando necessário</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🗑️</span>
              <h3>Excluir tarefas</h3>
              <p>Remova o que não precisa</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🔍</span>
              <h3>Filtrar por status</h3>
              <p>Encontre o que procura</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>📱</span>
              <h3>Responsivo</h3>
              <p>Funciona em qualquer dispositivo</p>
            </div>
          </div>
        </section>

        {/* Seção de ação */}
        <section className={styles.cta}>
          <p className={styles.ctaText}>
            Este é um projeto para aprender React e TypeScript
          </p>
          <div className={styles.buttonGroup}>
            <button 
              className={styles.primaryButton} 
              onClick={handleStart}
            >
              Começar agora
            </button>
            <button 
              className={styles.secondaryButton} 
              onClick={handleAbout}
            >
              Saiba mais
            </button>
          </div>
        </section>
      </main>

      {/* Footer minimalista */}
      <footer className={styles.footer}>
        <p>Projeto de aprendizado • React + TypeScript</p>
      </footer>
    </div>
  );
}

export default HomePage;
