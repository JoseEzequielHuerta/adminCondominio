import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Construccion from '../../Assets/Images/construccion.jpg';
import MenuLateral from '../../Layouts/MenuLateral';
import Tab from '../../Components/Tab';

const index = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  useEffect(() => {
    const session = sessionStorage.getItem('token');
    const deToken = decodeToken(session);
    if (deToken === null) {
      navigate('/');
    } else {
      setName(deToken.name);
    }
  }, []);
  return (
    <MenuLateral name={name}>
      <Tab val={2} />
      <div>
        <img src={Construccion} alt="sitio" />
      </div>
    </MenuLateral>
  );
};
export default index;
