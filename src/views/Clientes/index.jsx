import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import { decodeToken } from 'react-jwt';
import MenuLateral from '../../Layouts/MenuLateral';
import Tab from '../../Components/Tab';
import Buscador from '../../Components/Buscador';
import FormCliente from '../../Components/FormCliente';

import './index.css';

const ButtonStyled = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  width: '200px',
  height: '40px',
  backgroundColor: '#A45012',
  color: '#FFF',
  borderRadius: '4px',
  lineHeight: 1.5,
  fontSize: '16px',
  '&:hover': {
    backgroundColor: '#FFF',
    border: '1px solid #A45012',
    color: '#A45012',
  },
});

const index = () => {
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState('');
  const handleExpanded = () => {
    setExpanded(!expanded ? 'panel1' : false);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const session = sessionStorage.getItem('token');
    const deToken = decodeToken(session);
    if (deToken === null) {
      navigate('/');
    } else {
      setName(deToken.name);
    }
  }, []);

  return (
    <MenuLateral name={name}>
      <Tab val={0} />
      <Box
        className="container-cliente"
        sx={{ borderBottom: '2px solid #fff' }}
      >
        <h3>Registro Clientes</h3>
        <ButtonStyled onClick={() => handleExpanded()}>
          <Add /> Nuevo Cliente
        </ButtonStyled>
      </Box>
      <Box
        className="container-cliente"
        sx={{ borderBottom: '2px solid #fff' }}
      >
        <h3>Clientes</h3>
        <Buscador />
      </Box>
      <FormCliente expanded={expanded} setExpanded={handleExpanded} />
    </MenuLateral>
  );
};

export default index;
