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
          </Box>
          <Box className="container-inputs-cliente">
            <CustomInput
              placeholder="Nombre(s)"
              label="Nombre(s)"
              sx={{ width: '22%' }}
              id="nombre"
              type="text"
              focused
              size="small"
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default index;
