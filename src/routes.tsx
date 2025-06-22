import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Importando os componentes das páginas
import HomePage from './Public/HomePage/homePage';
import Login from './Public/Login/login';
import Cadastro from './Public/Cadastro/cadastro';

// Componente de rotas principal
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota padrão - redireciona para a HomePage */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Rota da página inicial */}
        <Route path="/home" element={<HomePage />} />
        
        {/* Rota da página de login */}
        <Route path="/login" element={<Login />} />
        
        {/* Rota da página de cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />
        
        {/* Rota para páginas não encontradas - redireciona para home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes; 