import React from 'react';
import { Box } from '@mui/material';
import ClienteInfo from '../ClienteInfo';

const index = ({
  title,
  clientes,
  check,
  setExpanded,
  setClient,
  activarClient,
  inactivarCliente,
  setCliente,
}) => (
  <Box
    style={{
      border: '1px solid #CECECE',
      borderRadius: '5px',
      padding: '15px',
      marginTop: '15px',
    }}
  >
    <p>{title}</p>
    <Box>
      {clientes.map((client) => (
        <ClienteInfo
          key={client._id}
          clienteI={client}
          check={check}
          setExpanded={setExpanded}
          setClient={setClient}
          activarClient={activarClient}
          inactivarCliente={inactivarCliente}
          setCliente={setCliente}
        />
      ))}
    </Box>
  </Box>
);

export default index;
