import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Barra from '../../Components/Barra';
import Descripcion from '../../Components/Descripcion';

const index = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const session = sessionStorage.getItem('token');
    const deToken = decodeToken(session);
    if (deToken !== null) {
      navigate('/clientes');
    }
  }, []);
  return (
    <>
      <Barra />
      <Descripcion />
    </>
  );
};

export default index;
