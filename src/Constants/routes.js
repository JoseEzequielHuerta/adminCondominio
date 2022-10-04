import React from 'react';
import { Groups, CorporateFare, MapsHomeWork } from '@mui/icons-material';

const routes = [
  {
    title: 'Clientes',
    icon: <Groups sx={{ fontSize: '20px', color: '#A45012' }} />,
    link: '/clientes',
    active: true,
  },
  {
    title: 'Desarrollo',
    icon: <CorporateFare sx={{ fontSize: '20px', color: '#A45012' }} />,
    link: '/desarrollo',
    active: false,
  },
  {
    title: 'Propiedades',
    icon: <MapsHomeWork sx={{ fontSize: '20px', color: '#A45012' }} />,
    link: '/propiedades',
    active: false,
  },
];

export default routes;
