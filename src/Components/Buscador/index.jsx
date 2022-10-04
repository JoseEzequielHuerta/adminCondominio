import { Search } from '@mui/icons-material';
import { Input, InputAdornment } from '@mui/material';
import React from 'react';

const index = () => (
  <Input
    endAdornment={
      <InputAdornment position="end">
        <Search />
      </InputAdornment>
    }
    sx={{ width: '200px' }}
    placeholder="Buscar"
  />
);

export default index;
