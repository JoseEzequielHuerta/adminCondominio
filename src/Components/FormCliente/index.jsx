import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Snackbar,
  TextField,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import useFormCliente from './useFormCliente';
import Roles from '../../Constants/roles';

import './index.css';

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

const index = ({ expanded, setExpanded }) => {
  const {
    vertical,
    horizontal,
    open,
    handleClose,
    alertMessage,
    inputsCliente,
    setInputs,
    validaciones,
    validButton,
  } = useFormCliente();
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
                value={inputsCliente.nombre}
                onChange={setInputs}
                helperText={
                  validaciones.nombre.valid ? '' : validaciones.nombre.message
                }
                error={!validaciones.nombre.valid}
              />
              <CustomInput
                placeholder="APELLIDO PATERNO"
                label="APELLIDO PATERNO"
                sx={{ width: '22%' }}
                id="aPaterno"
                type="text"
                focused
                size="small"
                value={inputsCliente.aPaterno}
                onChange={setInputs}
                helperText={
                  validaciones.aPaterno.valid
                    ? ''
                    : validaciones.aPaterno.message
                }
                error={!validaciones.aPaterno.valid}
              />
              <CustomInput
                placeholder="APELLIDO MATERNO"
                label="APELLIDO MATERNO"
                sx={{ width: '22%' }}
                id="aMaterno"
                type="text"
                focused
                size="small"
                value={inputsCliente.aMaterno}
                onChange={setInputs}
                helperText={
                  validaciones.aMaterno.valid
                    ? ''
                    : validaciones.aMaterno.message
                }
                error={!validaciones.aMaterno.valid}
              />
              <CustomInput
                placeholder="ROL"
                label="ROL"
                sx={{ width: '22%' }}
                id="rol"
                select
                SelectProps={{ native: true }}
                focused
                value={inputsCliente.rol}
                onChange={setInputs}
                helperText={
                  validaciones.rol.valid ? '' : validaciones.rol.message
                }
                error={!validaciones.rol.valid}
              >
                {Roles.map(({ name, type }) => (
                  <option key={name} value={type}>
                    {name}
                  </option>
                ))}
              </CustomInput>
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
                value={inputsCliente.number}
                onChange={setInputs}
                helperText={
                  validaciones.number.valid ? '' : validaciones.number.message
                }
                error={!validaciones.number.valid}
              />
              <CustomInput
                placeholder="CORREO ELECTRÓNICO"
                label="CORREO ELECTRÓNICO"
                sx={{ width: '30%' }}
                id="correo"
                type="correo"
                focused
                size="small"
                value={inputsCliente.correo}
                onChange={setInputs}
                helperText={
                  validaciones.correo.valid ? '' : validaciones.correo.message
                }
                error={!validaciones.correo.valid}
              />
              <CustomInput
                placeholder="PREFERENCIA DE CONTACTO"
                label="PREFERENCIA DE CONTACTO"
                sx={{ width: '30%' }}
                id="preferencia"
                select
                SelectProps={{ native: true }}
                focused
                value={inputsCliente.preferencia}
                onChange={setInputs}
                helperText={
                  validaciones.preferencia.valid
                    ? ''
                    : validaciones.preferencia.message
                }
                error={!validaciones.preferencia.valid}
              >
                <option value={1}>Llamada por teléfono</option>
                <option value={2}>Correo electrónico</option>
              </CustomInput>
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
                value={inputsCliente.nDesarrollos}
                onChange={setInputs}
                helperText={
                  validaciones.nDesarrollos.valid
                    ? ''
                    : validaciones.nDesarrollos.message
                }
                error={!validaciones.nDesarrollos.valid}
              />
              <CustomInput
                placeholder="TOTAL DE PROPIEDADES"
                label="TOTAL DE PROPIEDADES"
                sx={{ width: '30%' }}
                id="nPropiedades"
                type="number"
                focused
                size="small"
                value={inputsCliente.nPropiedades}
                onChange={setInputs}
                helperText={
                  validaciones.nPropiedades.valid
                    ? ''
                    : validaciones.nPropiedades.message
                }
                error={!validaciones.nPropiedades.valid}
              />
              <CustomInput
                placeholder="TOTAL DE UNIDADES"
                label="TOTAL DE UNIDADES"
                sx={{ width: '30%' }}
                id="nUnidades"
                type="number"
                focused
                size="small"
                onChange={setInputs}
                helperText={
                  validaciones.nUnidades.valid
                    ? ''
                    : validaciones.nUnidades.message
                }
                error={!validaciones.nUnidades.valid}
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
                value={inputsCliente.calle}
                onChange={setInputs}
                helperText={
                  validaciones.calle.valid ? '' : validaciones.calle.message
                }
                error={!validaciones.calle.valid}
              />
              <CustomInput
                placeholder="NUM EXT"
                label="NUM EXT"
                sx={{ width: '10%' }}
                id="nExterior"
                type="text"
                focused
                size="small"
                value={inputsCliente.nExterior}
                onChange={setInputs}
                helperText={
                  validaciones.nExterior.valid
                    ? ''
                    : validaciones.nExterior.message
                }
                error={!validaciones.nExterior.valid}
              />
              <CustomInput
                placeholder="NUM INT"
                label="NUM INT"
                sx={{ width: '10%' }}
                id="nInterior"
                type="text"
                focused
                size="small"
                value={inputsCliente.nInterior}
                onChange={setInputs}
                helperText={
                  validaciones.nInterior.valid
                    ? ''
                    : validaciones.nInterior.message
                }
                error={!validaciones.nInterior.valid}
              />
              <CustomInput
                placeholder="PAIS"
                label="PAIS"
                sx={{ width: '22%' }}
                id="pais"
                type="text"
                focused
                size="small"
                value={inputsCliente.pais}
                onChange={setInputs}
                helperText={
                  validaciones.pais.valid ? '' : validaciones.pais.message
                }
                error={!validaciones.pais.valid}
              />
              <CustomInput
                placeholder="ESTADO"
                label="ESTADO"
                sx={{ width: '22%' }}
                id="estado"
                type="text"
                focused
                size="small"
                value={inputsCliente.estado}
                onChange={setInputs}
                helperText={
                  validaciones.estado.valid ? '' : validaciones.estado.message
                }
                error={!validaciones.estado.valid}
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
                value={inputsCliente.cp}
                onChange={setInputs}
                helperText={
                  validaciones.cp.valid ? '' : validaciones.cp.message
                }
                error={!validaciones.cp.valid}
              />
              <CustomInput
                placeholder="COLONIA"
                label="COLONIA"
                sx={{ width: '30%' }}
                id="colonia"
                type="text"
                focused
                size="small"
                value={inputsCliente.colonia}
                onChange={setInputs}
                helperText={
                  validaciones.colonia.valid ? '' : validaciones.colonia.message
                }
                error={!validaciones.colonia.valid}
              />
              <CustomInput
                placeholder="MUNICIPIO"
                label="MUNICIPIO"
                sx={{ width: '30%' }}
                id="municipio"
                type="text"
                focused
                size="small"
                value={inputsCliente.municipio}
                onChange={setInputs}
                helperText={
                  validaciones.municipio.valid
                    ? ''
                    : validaciones.municipio.message
                }
                error={!validaciones.municipio.valid}
              />
            </Box>
            <ButtonStyled disabled={validButton}>Guardar</ButtonStyled>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default index;
