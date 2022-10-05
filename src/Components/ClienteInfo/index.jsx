import React from 'react';
import {
  AccountCircle,
  FiberManualRecord,
  MoreVert,
} from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import useClienteInfo from './useClienteInfo';

import './index.css';

const index = ({
  clienteI,
  check,
  setExpanded,
  setClient,
  activarClient,
  inactivarCliente,
  setCliente,
}) => {
  const { done, nombre, colonia, estado, pais, aPaterno } = clienteI;
  const options = ['Activar', 'Desactivar', 'Editar'];
  const {
    optionDisabled,
    color,
    open,
    handleClick,
    handleClose,
    handleClose2,
    anchor,
  } = useClienteInfo(
    done,
    activarClient,
    inactivarCliente,
    setClient,
    setExpanded,
  );
  return (
    <Box className="container-cliente" onClick={() => setCliente(clienteI)}>
      <Box className="container-active">
        <FiberManualRecord sx={{ color }} />
        <AccountCircle style={{ fontSize: '30px' }} />
      </Box>
      <Box style={{ width: '80%' }}>
        <p className="pequeno-titulo" style={{ marginBottom: 0 }}>
          {nombre} {aPaterno}
        </p>
        <p className="pequeno-contenido" style={{ marginBottom: 0 }}>
          {colonia},{estado},{pais}
        </p>
      </Box>
      <Box style={{ width: '20%' }}>
        <IconButton
          disabled={!check}
          aria-label="More"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVert />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            'aria-labelledby': 'long-button',
          }}
          anchorEl={anchor}
          open={open}
          onClose={handleClose2}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option, i) => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={() => handleClose(option, clienteI)}
              disabled={optionDisabled[i]}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};

export default index;
