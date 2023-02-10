import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../views/Inicio';
import Login from '../views/Login';
import Clientes from '../views/Clientes';
import Desarrollo from '../views/Desarrollo';
import Propiedades from '../views/Propiedades';

const App = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/login" element={<Login />} />
    <Route path="/clientes" element={<Clientes />} />
    <Route path="/desarrollo" element={<Desarrollo />} />
    <Route path="/propiedades" element={<Propiedades />} />
    <Route path="*" element={<Inicio />} />
  </Routes>
);

export default App;
