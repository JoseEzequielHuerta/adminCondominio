import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './index.css';

const index = ({ val }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState(val);
  const handleChange = (e, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      navigate('/clientes');
    } else if (newValue === 1) {
      navigate('/desarrollo');
    } else {
      navigate('/propiedades');
    }
  };

  return (
    <Box>
      <h2>Centro de cuentas</h2>
      <Box sx={{ borderBottom: 1, borderColor: '#fff' }}>
        <Tabs className="tabs" value={value} onChange={handleChange}>
          <Tab label="Clientes" />
          <Tab className="tab2" label="Desarrollo" />
          <Tab className="tab3" label="Propiedades" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default index;
