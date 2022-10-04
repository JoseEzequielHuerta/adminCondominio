import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Snackbar,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import useFormCliente from './useFormCliente';
import './index.css'

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

const index = ({ expanded, setExpanded }) => {
  const { vertical, horizontal, open, handleClose, alertMessage } =
    useFormCliente();
  return (
    <Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        {alertMessage}
      </Snackbar>
      <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary id="summary" />
        <AccordionDetails>
          <Box className="container-nuevo-cliente">
            <p>Datos de cliente</p>
            <Box className="container-inputs-cliente">
              <CustomInput
                placeholder="NOMBRE(S)"
                label="Nombre(s)"
                sx={{ width: '22%' }}
                id="nombre"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="APELLIDO PATERNO"
                label="APELLIDO PATERNO"
                sx={{ width: '22%' }}
                id="aPaterno"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="APELLIDO MATERNO"
                label="APELLIDO MATERNO"
                sx={{ width: '22%' }}
                id="aMaterno"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="ROL"
                label="ROL"
                sx={{ width: '22%' }}
                id="rol"
                select
                SelectProps={{ native: true }}
                focused
              />
            </Box>
            <Box className="container-inputs-cliente">
              <CustomInput
                placeholder="TELEFONO CELULAR"
                label="TELEFONO CELULAR"
                sx={{ width: '30%' }}
                id="number"
                type="number"
                focused
                size="small"
              />
              <CustomInput
                placeholder="CORREO ELECTRÓNICO"
                label="CORREO ELECTRÓNICO"
                sx={{ width: '30%' }}
                id="correo"
                type="correo"
                focused
                size="small"
              />
              <CustomInput
                placeholder="PREFERENCIA DE CONTACTO"
                label="PREFERENCIA DE CONTACTO"
                sx={{ width: '30%' }}
                id="preferencia"
                select
                SelectProps={{ native: true }}
                focused
              />
            </Box>
            <Box className="container-inputs-cliente">
              <CustomInput
                placeholder="# DE DESARROLLOS"
                label="# DE DESARROLLOS"
                sx={{ width: '30%' }}
                id="nDesarrollos"
                type="number"
                focused
                size="small"
              />
              <CustomInput
                placeholder="TOTAL DE PROPIEDADES"
                label="TOTAL DE PROPIEDADES"
                sx={{ width: '30%' }}
                id="nPropiedades"
                type="number"
                focused
                size="small"
              />
              <CustomInput
                placeholder="TOTAL DE UNIDADES"
                label="TOTAL DE UNIDADES"
                sx={{ width: '30%' }}
                id="nUnidades"
                type="number"
                focused
                size="small"
              />
            </Box>
            <p>Dirección</p>
            <Box className="container-inputs-cliente">
              <CustomInput
                placeholder="CALLE"
                label="CALLE"
                sx={{ width: '22%' }}
                id="calle"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="NUM EXT"
                label="NUM EXT"
                sx={{ width: '10%' }}
                id="nExterior"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="NUM INT"
                label="NUM INT"
                sx={{ width: '10%' }}
                id="nInterior"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="PAIS"
                label="PAIS"
                sx={{ width: '22%' }}
                id="pais"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="ESTADO"
                label="ESTADO"
                sx={{ width: '22%' }}
                id="estado"
                type="text"
                focused
                size="small"
              />
            </Box>
            <Box className="container-inputs-cliente">
              <CustomInput
                placeholder="CÓDIGO POSTAL"
                label="CÓDIGO POSTAL"
                sx={{ width: '30%' }}
                id="cp"
                type="number"
                focused
                size="small"
              />
              <CustomInput
                placeholder="COLONIA"
                label="COLONIA"
                sx={{ width: '30%' }}
                id="colonia"
                type="text"
                focused
                size="small"
              />
              <CustomInput
                placeholder="MUNICIPIO"
                label="MUNICIPIO"
                sx={{ width: '30%' }}
                id="municipio"
                type="text"
                focused
                size="small"
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default index;
