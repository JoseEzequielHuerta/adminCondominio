import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { styled } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import MenuLateral from '../../Layouts/MenuLateral';
import Tab from '../../Components/Tab';
import NuevoCliente from '../../Components/NuevoCliente';
import NuevoDesarrollo from '../../Components/FormDesarrollo';
import CLIENTE_SERVICE from '../../Services/cliente.services';

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
  const [clientes, setClientes] = useState([]);
  const [name, setName] = useState('');
  const [cli, setCli] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [nDesarrollos, setNDesarrollos] = useState(0);
  useEffect(() => {
    CLIENTE_SERVICE.getClients()
      .then((data) => setClientes(data))
      .catch(() => {});
  }, []);

  const getCliente = (cl) => {
    setCli(cl);
  };

  useEffect(() => {
    if (cli) {
      setNDesarrollos(Number(cli.nDesarrollos));
    } else {
      setNDesarrollos(0);
    }
  }, [getCliente]);
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
      <Tab val={1} />
      <Box
        className="container-desarrollo"
        sx={{ borderBottom: '2px solid #fff' }}
      >
        <h3>Registro desarrollos</h3>
        <ButtonStyled onClick={() => handleExpanded()}>
          <Add /> Nuevo desarrollo
        </ButtonStyled>
      </Box>
      <Box
        sx={{
          margon: '20px',
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <Box sx={{ width: '35%' }}>
          <NuevoCliente
            clientes={clientes}
            setCliente={getCliente}
            nDesarrollos={nDesarrollos}
          />
        </Box>
        <Box sx={{ width: '50%' }}>
          <NuevoDesarrollo
            expanded={expanded}
            setExpanded={() => handleExpanded()}
          />
        </Box>
      </Box>
    </MenuLateral>
  );
};

export default index;
