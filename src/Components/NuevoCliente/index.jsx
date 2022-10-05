import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TextField } from '@mui/material';
import SelectCliente from '../SelcetCliente';

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

const CustomInput = styled(TextField)(() => ({
  '& label.Mui-disabled': {
    color: '#70A5B6',
  },
  '& label.Mui-focused': {
    color: '#2A4A66',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-disabled fieldset': {
      borderColor: '#C7DEE6',
    },
    '& fieldset': {
      borderColor: '#70A5B6',
    },
    '&:hover fieldset': {
      borderColor: '#2A4A66',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#3E6884',
    },
  },
}));

const index = ({ clientes, setCliente, nDesarrollos }) => 
  (
    <Box className="container-datos-cliente">
      <p style={{ marginBottom: 0 }}>Datos del cliente</p>
      <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <SelectCliente clientes={clientes} getCliente={setCliente} />
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <CustomInput
          label="NUMERO DE DESARROLLOS"
          placeholder="NUMERO DE DESARROLLOS"
          type="number"
          sx={{ width: '100%' }}
          focused
          value={nDesarrollos}
        />
      </Box>
      <ButtonStyled>Guardar</ButtonStyled>
    </Box>
  );


export default index;
