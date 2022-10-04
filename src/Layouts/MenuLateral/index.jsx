import { AccountCircle, ArrowDropDown } from '@mui/icons-material';
import { Box, Fade, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../Constants/routes';

import './index.css';

const index = ({ children }) => {
    const [anchorEl,setAnchorEl]=useState(null);
    const open = Boolean(anchorEl);
    const handleClick=({currentTarget})=>{
        setAnchorEl(currentTarget);
    }
    const handleClose=()=>setAnchorEl(null);

return(
  <Box className="container-view">
    <Box className="menu-lateral">
      <Box>
        <h4>Ingesu App</h4>
      </Box>
      <Box>
        <Box className="banner">
          <AccountCircle sx={{ fontSize: '40px' }} />
        </Box>
        <Box className='banner-name'>
          <p className="cta">[Nombre]</p>
          <Box onClick={handleClick} sx={{cursor:'pointer'}}> 
            <ArrowDropDown />
          </Box>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose} TransitionComponent={Fade}>
            <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
          </Menu>
        </Box>
      </Box>
      {routes.map(({ title, icon, link }) => (
      <Box key={title}>
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? 'active' : 'inactive')}
        >
          <Box className="container-link">
            <Box className="link-container">
              <Box className="container-inicio">{icon}</Box>
              <p className="title">{title}</p>
            </Box>
          </Box>
        </NavLink>
      </Box>
    ))}
    </Box>
    <Box className="children-container">{children}</Box>
  </Box>
);
}

export default index;
