import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from '../views/Inicio';
import Login from '../views/Login';

const App = () => (
  <Routes>
    <Route path="/" element={<Inicio />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;
