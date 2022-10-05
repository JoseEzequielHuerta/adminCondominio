import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Autocomplete, Box, InputAdornment, TextField } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

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

const index = ({ clientes, getCliente }) => {
  const [clien, setClien] = useState('');
  const [cli, setCli] = useState(null);
  return (
    <Autocomplete
      id="select-client"
      sx={{ width: '100%', height: '70px' }}
      options={clientes}
      autoHighlight
      getOptionLabel={({ nombre, aPaterno, aMaterno }) =>
        `${nombre} ${aPaterno} ${aMaterno}`
      }
      onChange={(_, o) => {
        setClien(o.nombre);
        setCli(o);
        getCliente(o);
      }}
      inputValue={clien}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <AccountCircle sx={{ fontSize: '30px' }} />
          {`${option.nombre} ${option.aPaterno} ${option.aMaterno}`}
        </Box>
      )}
      renderInput={(params) => (
        <CustomInput
          {...params}
          label="Cliente"
          onChange={({ target }) => setClien(target.value)}
          required
          focused
          InputProps={{
            ...params.InputProps,
            autoComplete: 'new-password',
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <AccountCircle sx={{ fontSize: '30px' }} />
                </InputAdornment>
                {cli?.estado === '' || cli?.estado === null ? null : (
                  <p className="label-cliente">
                    {cli?.estado},{cli?.pais}
                  </p>
                )}
                {params.InputProps.startAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default index;
