import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Formulario from '../../Components/Formulario';
import './index.css';

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
    <div className="login-div">
      <Formulario />
    </div>
  );
};
export default index;
