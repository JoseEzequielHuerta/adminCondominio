import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../views/Inicio';
import Login from '../views/Login';
import Residente from '../views/Residente';
import Administrador from '../views/Administrador';

const App = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/login" element={<Login />} />
    <Route path="/administrador" element={<Administrador />} />
    <Route path="/residente" element={<Residente />} />
  </Routes>
);

export default App;
