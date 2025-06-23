import React from 'react';
import { CONSTANTES } from '../../componentes/Constants/contants';
import styles from './cadastro.module.css';
import Header from '../../componentes/Header/header';
import Footer from '../../componentes/Footer/footer';

function Cadastro() {
  return (
    // Um container principal para a página inteira
    <div className={styles.pageContainer}>
      <Header />
      
      {/* O main agora tem o fundo gradiente e centraliza o conteúdo */}
      <main className={styles.mainContent}>
        <div className={styles.cadastroSection}>
          <h1 className={styles.title}>{CONSTANTES.TITULO_CADASTRO}</h1>
          <p className={styles.subtitle}>{CONSTANTES.SUBTITULO_CADASTRO}</p>
          <input type="text" name="nome" placeholder={CONSTANTES.LABEL_NOME} />
          <input type="email" name="email" placeholder={CONSTANTES.LABEL_EMAIL_CADASTRO} />
          <input type="password" name="password" placeholder={CONSTANTES.LABEL_SENHA_CADASTRO} />
          <button type="submit">{CONSTANTES.BOTAO_CADASTRAR}</button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default Cadastro;