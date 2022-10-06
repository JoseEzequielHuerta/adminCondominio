import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TapAndPlayOutlinedIcon from '@mui/icons-material/TapAndPlayOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const index = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <TapAndPlayOutlinedIcon
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </TapAndPlayOutlinedIcon>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin condominio
        </Typography>
        <Link to="../login">
          <Button color="inherit">Iniciar</Button>
        </Link>
      </Toolbar>
    </AppBar>
  </Box>
);

export default index;
