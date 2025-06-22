import React from 'react';
import styles from './funcionalidades.module.css';

// Interface para as funcionalidades
interface Funcionalidade {
  icon: string;
  title: string;
  description: string;
}

// Array com as funcionalidades
const funcionalidades: Funcionalidade[] = [
  {
    icon: '➕',
    title: 'Adicionar tarefas',
    description: 'Crie novas tarefas rapidamente'
  },
  {
    icon: '✅',
    title: 'Marcar como concluída',
    description: 'Risque tarefas da sua lista'
  },
  {
    icon: '✏️',
    title: 'Editar tarefas',
    description: 'Modifique quando necessário'
  },
  {
    icon: '🗑️',
    title: 'Excluir tarefas',
    description: 'Remova o que não precisa'
  },
  {
    icon: '🔍',
    title: 'Filtrar por status',
    description: 'Encontre o que procura'
  },
  {
    icon: '📱',
    title: 'Responsivo',
    description: 'Funciona em qualquer dispositivo'
  }
];

function FuncionalidadesHomePage() {
  return (
    <section className={styles.features}>
      <h2 className={styles.sectionTitle}>O que você pode fazer</h2>
      <div className={styles.featuresGrid}>
        {funcionalidades.map((funcionalidade, index) => (
          <div key={index} className={styles.feature}>
            <span className={styles.featureIcon}>{funcionalidade.icon}</span>
            <h3>{funcionalidade.title}</h3>
            <p>{funcionalidade.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FuncionalidadesHomePage;
