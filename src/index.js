import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato';
import Eventos from './pages/eventos';
import VariavelEstado from './pages/variavelEstado';
import Componentes from './pages/componentes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
        <Route path='/eventos' element={<Eventos />} />
        <Route path='/variavelStd' element={<VariavelEstado />} />
        <Route path='/componentes' element={<Componentes />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

