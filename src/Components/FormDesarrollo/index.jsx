import React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormControlLabel,
  RadioGroup,
  TextField,
  Radio,
  Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Add } from '@mui/icons-material';
import TIPO_DESAROLLO from '../../Constants/tipoDesarrollo';
import CLASE_DESAROLLO from '../../Constants/claseDesarrollo';
import useFormDesarrollo from './useFormDesarrollo';
import Amenidad from '../Amenidad';

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

  export const CustomRadio = styled(Radio)(() => ({
    color: '#A45012',
    '&.Mui-checked': {
      color: '#A45012',
    },
  }));
  export const ButtonStandard = styled(Button)({
    width: '134px',
    height: '40px',
    backgroundColor: '#A45012',
    border: '1px solid',
    borderColor: '#A45012',
    color: '#FFFFFF',
    borderRadius: '4px',
    lineHeight: 1.5,
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#FFD9D4',
      borderColor: '#A45012',
      color: '#FFF',
    },
    '&:disabled': {
      backgroundColor: '#C7DEE6',
      borderColor: '#C7DEE6',
      color: '#FFF',
    },
  });
  
  export const ButtonStandardI = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    width: '158px',
    height: '40px',
    backgroundColor: '#A45012',
    border: '1px solid',
    borderColor: '#A45012',
    color: '#FFFFFF',
    borderRadius: '4px',
    lineHeight: 1.5,
    fontFamily: 'Martel Sans',
    fontSize: '16px',
    '&:hover': {
      backgroundColor: '#FFD9D4',
      borderColor: '#A45012',
      color: '#FFF',
    },
    '&:disabled': {
      backgroundColor: '#C7DEE6',
      borderColor: '#C7DEE6',
      color:'#FFF',
    },
  });



const index = ({ expanded, setExpanded }) => {
  const {
    inputDesarrollo,
    limpiarInput,
    validaciones,
    setRegistros,
    addAmenidad,
    amenidades,
    deleteAmenidad,
    setTipoAmenidad,
    setNombreAmendad,
    setNuAmenidad,
  } = useFormDesarrollo(setExpanded);
  const check = true;
  return (
    <Box>
      <Accordion expanded={expanded === 'panel1'}>
        <AccordionSummary id="summary" />
        <AccordionDetails>
          <Box className="container-nuevo-desarrollo">
            <p>
              Datos del desarrollo
            </p>
            <Box className="container-input-desarrollo">
              <CustomInput
                placeholder="DESARROLLO"
                label="DESARROLLO"
                sx={{ width: '30%' }}
                id="nDesarrollo"
                focused
                size="small"
              />
              <CustomInput
                placeholder="NOMBRE DEL DESARROLLO"
                label="NOMBRE DEL DESARROLLO"
                sx={{ width: '30%' }}
                id="nombre"
                type="text"
                focused
                size="small"
                helperText={
                  validaciones.nombre.valid ? '' : validaciones.nombre.message
                }
                value={inputDesarrollo.nombre}
                onChange={setRegistros}
                error={!validaciones.nombre.valid}
              />
              <CustomInput
                placeholder="TIPO DE DESARROLLO"
                label="TIPO DE DESARROLLO"
                sx={{ width: '30%' }}
                id="tipo"
                focused
                select
                SelectProps={{ native: true }}
                onChange={setRegistros}
                value={inputDesarrollo.tipo}
                helperText={
                  validaciones.tipo.valid ? '' : validaciones.tipo.message
                }
                error={!validaciones.tipo.valid}
                size="small">
                {TIPO_DESAROLLO.map(({ name, type }) => (
                  <option key={`option-des ${name}`} value={type}>
                    {name}
                  </option>
                ))}
              </CustomInput>
            </Box>
            <Box className="container-input-desarrollo">
              <CustomInput
                placeholder="CLASE"
                label="CLASE"
                sx={{ width: '30%' }}
                id="clase"
                focused
                onChange={setRegistros}
                select
                SelectProps={{ native: true }}
                size="small"
                value={inputDesarrollo.clase}
                helperText={
                  validaciones.clase.valid ? '' : validaciones.clase.message
                }
                error={!validaciones.clase.valid}>
                {CLASE_DESAROLLO.map(({ name, type }) => (
                  <option key={`option-clas ${name}`} value={type}>
                    {name}
                  </option>
                ))}
              </CustomInput>
              <CustomInput
                placeholder="NÚMERO DE PROPIEDADES"
                label="NÚMERO DE PROPIEDADES"
                sx={{ width: '30%' }}
                id="nPropiedaes"
                focused
                size="small"
                type="number"
                helperText={
                  validaciones.nPropiedaes.valid
                    ? ''
                    : validaciones.nPropiedaes.message
                }
                value={inputDesarrollo.nPropiedaes}
                onChange={setRegistros}
                error={!validaciones.nPropiedaes.valid}
              />
              <CustomInput
                placeholder="NÚMERO DE UNIDADES"
                label="NÚMERO DE UNIDADES"
                sx={{ width: '30%' }}
                id="nUnidades"
                focused
                size="small"
                type="number"
                helperText={
                  validaciones.nUnidades.valid
                    ? ''
                    : validaciones.nUnidades.message
                }
                value={inputDesarrollo.nUnidades}
                onChange={setRegistros}
                error={!validaciones.nUnidades.valid}
              />
            </Box>
            <Box className="container-input-desarrollo">
              <Box sx={{ width: '30%' }}>
                <p>Cuota de mantenimiento</p>
                <RadioGroup
                  name="cMatenimiento"
                  row
                  value={inputDesarrollo.cMatenimiento}
                  onChange={setRegistros}>
                  <FormControlLabel
                    value={1}
                    control={<CustomRadio />}
                    label="Si"
                  />
                  <FormControlLabel
                    value={0}
                    control={<CustomRadio />}
                    label="No"
                  />
                </RadioGroup>
              </Box>
            </Box>
            <p>Dirección</p>
            <Box className="container-input-desarrollo">
              <CustomInput
                placeholder="CALLE"
                label="CALLE"
                sx={{ width: '30%' }}
                id="calle"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.calle.valid ? '' : validaciones.calle.message
                }
                value={inputDesarrollo.calle}
                onChange={setRegistros}
                error={!validaciones.calle.valid}
              />
              <CustomInput
                placeholder="NUM EXT"
                label="NUM EXT"
                sx={{ width: '30%' }}
                id="nExterior"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.nExterior.valid
                    ? ''
                    : validaciones.nExterior.message
                }
                value={inputDesarrollo.nExterior}
                onChange={setRegistros}
                error={!validaciones.nExterior.valid}
              />
              <CustomInput
                placeholder="NUM INT"
                label="NUM INT"
                sx={{ width: '30%' }}
                id="nInterior"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.nInterior.valid
                    ? ''
                    : validaciones.nInterior.message
                }
                value={inputDesarrollo.nInterior}
                onChange={setRegistros}
                error={!validaciones.nInterior.valid}
              />
            </Box>
            <Box className="container-input-desarrollo">
              <CustomInput
                placeholder="PAIS"
                label="PAIS"
                sx={{ width: '30%' }}
                id="pais"
                type="text"
                focused
                size="small"
                helperText={
                  validaciones.pais.valid ? '' : validaciones.pais.message
                }
                value={inputDesarrollo.pais}
                onChange={setRegistros}
                error={!validaciones.pais.valid}
              />
              <CustomInput
                placeholder="ESTADO"
                label="ESTADO"
                sx={{ width: '30%' }}
                id="estado"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.estado.valid ? '' : validaciones.estado.message
                }
                value={inputDesarrollo.estado}
                onChange={setRegistros}
                error={!validaciones.estado.valid}
              />
              <CustomInput
                placeholder="CÓDIGO POSTAL"
                label="CÓDIGO POSTAL"
                sx={{ width: '30%' }}
                id="cp"
                focused
                size="small"
                helperText={
                  validaciones.cp.valid ? '' : validaciones.cp.message
                }
                value={inputDesarrollo.cp}
                onChange={setRegistros}
                error={!validaciones.cp.valid}
              />
            </Box>
            <Box className="container-input-desarrollo">
              <CustomInput
                placeholder="CIUDAD"
                label="CIUDAD"
                sx={{ width: '30%' }}
                id="ciudad"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.ciudad.valid ? '' : validaciones.ciudad.message
                }
                value={inputDesarrollo.ciudad}
                onChange={setRegistros}
                error={!validaciones.ciudad.valid}
              />
              <CustomInput
                placeholder="MUNICIPIO"
                label="MUNICIPIO"
                sx={{ width: '30%' }}
                id="municipio"
                focused
                size="small"
                type="text"
                helperText={
                  validaciones.municipio.valid
                    ? ''
                    : validaciones.municipio.message
                }
                value={inputDesarrollo.municipio}
                onChange={setRegistros}
                error={!validaciones.municipio.valid}
              />
              <CustomInput
                placeholder="COLONIA"
                label="COLONIA"
                sx={{ width: '30%' }}
                id="colonia"
                focused
                type="text"
                size="small"
                helperText={
                  validaciones.colonia.valid ? '' : validaciones.colonia.message
                }
                value={inputDesarrollo.colonia}
                onChange={setRegistros}
                error={!validaciones.colonia.valid}
              />
            </Box>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}>
              <p>Amenidades</p>
              <ButtonStandardI
                sx={{ width: '200px !important' }}
                onClick={() => addAmenidad()}>
                <Add />
                Añadir amenidad
              </ButtonStandardI>
            </Box>
            {amenidades.map((am, i) => (
              <Amenidad
                i={i}
                deleteAmenidad={deleteAmenidad}
                key={`amenidad ${Math.random()}`}
                tipe={am.tipo}
                setTipe={setTipoAmenidad}
                nombre={am.nombre}
                setNombreAmenidad={setNombreAmendad}
                nAmenidad={am.nAmenidades}
                setNuAmenidad={setNuAmenidad}
              />
            ))}
          </Box>
          <ButtonStandard>Guardar</ButtonStandard>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default index;
