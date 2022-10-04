import React, { useState } from 'react';

export default () => {
  const [confirm, setConfirm] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = confirm;

  const handleClose = () => setConfirm([{ ...confirm, open: false }]);
  const [alertMessage, setAlertMessage] = useState();
  return {
    vertical,
    horizontal,
    open,
    handleClose,
    alertMessage,
  };
};
