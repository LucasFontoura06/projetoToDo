import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../componentes/Footer/footer';
import Header from '../../componentes/Header/header';
import FuncionalidadesHomePage from '../../componentes/FuncionalidadesHomePage/funcionalidades';
import styles from './homePage.module.css';
import { CONSTANTES } from '../../componentes/Constants/contants';

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
      {/* Header reutilizável */}
      <Header />

      {/* Conteúdo principal */}
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}> {CONSTANTES.TITULO_HOMEPAGE} </h1>
          <p className={styles.subtitle}> {CONSTANTES.SUBTITULO_HOMEPAGE} </p>
        </div>

        {/* Componente de funcionalidades */}
        <FuncionalidadesHomePage />

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

      {/* Footer reutilizável */}
      <Footer />
    </div>
  );
}

export default HomePage;
