import React, { ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { Box, TextField, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import AMENIDADES from '../../Constants/amenidades';

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

export const ButtonIcon = styled(IconButton)({
  color: '#A45012',
  '&:hover': {
    color: '#FFD9D4',
  },
});

const index = ({
  i,
  deleteAmenidad,
  tipe,
  setTipe,
  nombre,
  setNombreAmenidad,
  nAmenidad,
  setNuAmenidad,
}) => {
  const setInput = ({ target }) => {
    setTipe(i, Number(target.value));
  };
  const setName = ({ target }) => {
    setNombreAmenidad(i, target.value);
  };
  const setNamenidad = ({ target }) => {
    setNuAmenidad(i, Number(target.value));
  };
  return (
    <Box className="container-input-amenidad">
      <CustomInput
        placeholder="TIPO"
        label="TIPO"
        sx={{ width: '30%' }}
        id="tipo"
        focused
        size="small"
        select
        SelectProps={{ native: true }}
        value={tipe}
        onChange={setInput}
      >
        {AMENIDADES.map(({ name, type }) => (
          <option key={`option-ame ${name}`} value={type}>
            {name}
          </option>
        ))}
      </CustomInput>
      {tipe === 5 ? (
        <CustomInput
          placeholder="NOMBRE"
          label="nombre"
          sx={{ width: '30%' }}
          id="cantidad"
          focused
          size="small"
          value={nombre}
          onChange={setName}
        />
      ) : null}
      <CustomInput
        placeholder="CANTIDAD"
        label="CANTIDAD"
        sx={tipe === 5 ? { width: '22%' } : { width: '30%' }}
        id="cantidad"
        focused
        size="small"
        value={nAmenidad}
        onChange={setNamenidad}
      />
      <Box sx={tipe === 5 ? null : { width: '30%' }}>
        <ButtonIcon onClick={() => deleteAmenidad(i)}>
          <Delete />
        </ButtonIcon>
      </Box>
    </Box>
  );
};

export default index;
