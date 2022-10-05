import React, { useEffect, useState } from 'react';

export default (
  done,
  activarClient,
  inactivarCliente,
  setClient,
  setExpand,
) => {
  const [anchor, setAnchor] = useState(null);
  const [optionDisabled, setOptionDisabled] = useState([false, false, false]);
  const [color, setColor] = useState({ color: '#FFF' });
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = (op, client) => {
    setAnchor(null);
    if (op === 'Activar') {
      activarClient(client);
    }
    if (op === 'Desactivar') {
      inactivarCliente(client);
    }
    if (op === 'Editar') {
      setClient(client);
      setExpand();
    }
  };

  const handleClose2 = () => {
    setAnchor(null);
  };
  useEffect(() => {
    if (done === 1) {
      setColor({ color: '#89DE81' });
      setOptionDisabled([true, false, false]);
    } else if (done === 2) {
      setColor({ color: '#DECF81' });
      setOptionDisabled([false, true, false]);
    } else {
      setColor({ color: '#C4C4C4' });
      setOptionDisabled([false, true, false]);
    }
  }, []);
  return {
    optionDisabled,
    color,
    open,
    handleClick,
    handleClose,
    handleClose2,
    anchor,
  };
};
