import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles'
import { Add } from '@mui/icons-material';
import MenuLateral from '../../Layouts/MenuLateral';
import Tab from '../../Components/Tab';

import './index.css'


const ButtonStyled= styled(Button)({
    display: 'flex',
    alignItems: 'center',
    width: '200px' ,
    height: '40px',
    backgroundColor: '#A45012',
    color: '#FFF',
    borderRadius: '4px',
    lineHeight: 1.5,
    fontSize: '16px',
    '&:hover':{
        backgroundColor: '#FFF',
        border: '1px solid #A45012',
        color: '#A45012'
    }
})

const index = () => (
<MenuLateral>
    <Tab val={0}/>
    <Box className='container-cliente'>
        <h3>Registro Clientes</h3>
        <ButtonStyled>
            <Add/> Nuevo Cliente
        </ButtonStyled>
    </Box>
</MenuLateral>
)

export default index;
