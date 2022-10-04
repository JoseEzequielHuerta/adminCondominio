import React, { useEffect, useState } from 'react';
import { Alert } from '@mui/material';
import CLIENTE_SERVICE from '../../Services/cliente.services';

export default (setExpanded) => {
  useEffect(() => {
    if (inputsLLenos() && inputsValidos()) {
      setValidButton(false);
    } else {
      setValidButton(true);
    }
  });
  const [confirm, setConfirm] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
  });

  const { vertical, horizontal, open } = confirm;

  const handleClose = () => setConfirm({ ...confirm, open: false });
  const [alertMessage, setAlertMessage] = useState();
  const successMessage = (
    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
      Exito al crear cliente
    </Alert>
  );
  const errorMessage = (
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
      Error al crear cliente
    </Alert>
  );

  const [inputsCliente, setInputsCliente] = useState({
    nombre: '',
    aPaterno: '',
    aMaterno: '',
    rol: 1,
    number: '',
    correo: '',
    preferencia: 1,
    nDesarrollos: '',
    nPropiedades: '',
    nUnidades: '',
    calle: '',
    nExterior: '',
    nInterior: '',
    pais: '',
    estado: '',
    cp: '',
    colonia: '',
    municipio: '',
  });

  const [validaciones, setValidaciones] = useState({
    nombre: {
      regex: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan caracteres de la a-z',
    },
    aPaterno: {
      regex: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan caracteres de la a-z',
    },
    aMaterno: {
      regex: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan caracteres de la a-z',
    },
    rol: {
      regex: '[1-5]',
      valid: true,
      message: 'No se a seleccionado un rol',
    },
    number: {
      regex: '^[0-9]{10,10}$',
      valid: true,
      message: 'El numero debe de ser de 10 digitos',
    },
    correo: {
      regex:
        "^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\\.[a-zA-Z]+",
      valid: true,
      message: 'El correo debe tener formato valido',
    },
    preferencia: {
      regex: '[1-2]',
      valid: true,
      message: 'No se selecciono preferencia',
    },
    nDesarrollos: {
      regex: '^[0-9]{1,5}$',
      valid: true,
      message: 'Solo se aceptan valores numericos',
    },
    nPropiedades: {
      regex: '^[0-9]{1,5}$',
      valid: true,
      message: 'Solo se aceptan valores numericos',
    },
    nUnidades: {
      regex: '^[0-9]{1,5}$',
      valid: true,
      message: 'Solo se aceptan valores numericos',
    },
    calle: {
      regex: '^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    nExterior: {
      regex: '^[a-zA-Z0-9ñÑ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    nInterior: {
      regex: '^[a-zA-Z0-9ñÑ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    pais: {
      regex: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores a-z',
    },
    estado: {
      regex: '^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores a-z',
    },
    cp: {
      regex: '^[0-9]{5,5}$',
      valid: true,
      message: 'El valor no corresponde a un CP',
    },
    colonia: {
      regex: '[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    municipio: {
      regex: '[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
  });

  const [validButton, setValidButton] = useState(true);

  const setInputs = ({ target }) => {
    setInputsCliente({
      ...inputsCliente,
      [target.id]: target.value,
    });
    const val = validaciones[target.id];
    const valid = new RegExp(val.regex);
    val.valid = valid.test(target.value);
    setValidaciones({
      ...validaciones,
      [target.id]: { ...val },
    });
  };

  const inputsLLenos = () => {
    let aux = true;
    if (
      inputsCliente.nombre === '' ||
      inputsCliente.aMaterno === '' ||
      inputsCliente.aPaterno === '' ||
      inputsCliente.calle === '' ||
      inputsCliente.colonia === '' ||
      inputsCliente.cp === '' ||
      inputsCliente.estado === '' ||
      inputsCliente.municipio === '' ||
      inputsCliente.nExterior === '' ||
      inputsCliente.pais === '' ||
      inputsCliente.number === '' ||
      inputsCliente.nDesarrollos === '' ||
      inputsCliente.nPropiedades === '' ||
      inputsCliente.nUnidades === ''
    ) {
      aux = false;
    }
    return aux;
  };

  const inputsValidos = () => {
    let aux = false;
    if (
      validaciones.nombre.valid &&
      validaciones.aMaterno.valid &&
      validaciones.aPaterno.valid &&
      validaciones.rol.valid &&
      validaciones.number.valid &&
      validaciones.correo.valid &&
      validaciones.preferencia.valid &&
      validaciones.nDesarrollos.valid &&
      validaciones.nPropiedades.valid &&
      validaciones.nUnidades.valid &&
      validaciones.calle.valid &&
      validaciones.nExterior.valid &&
      validaciones.nInterior.valid &&
      validaciones.pais.valid &&
      validaciones.estado.valid &&
      validaciones.cp.valid &&
      validaciones.colonia.valid &&
      validaciones.municipio.valid
    ) {
      aux = true;
    }
    return aux;
  };
  const limpiarInput = () =>
    setInputsCliente({
      nombre: '',
      aPaterno: '',
      aMaterno: '',
      rol: 1,
      number: '',
      correo: '',
      preferencia: 1,
      nDesarrollos: '',
      nPropiedades: '',
      nUnidades: '',
      calle: '',
      nExterior: '',
      nInterior: '',
      pais: '',
      estado: '',
      cp: '',
      colonia: '',
      municipio: '',
    });

  const guardar = () => {
    CLIENTE_SERVICE.addClient(inputsCliente)
      .then(() => {
        setAlertMessage(successMessage);
        setConfirm({ ...confirm, open: true });
        limpiarInput();
        setExpanded();
      })
      .catch(() => {
        setAlertMessage(errorMessage);
        setConfirm({ ...confirm, open: true });
      });
  };

  return {
    vertical,
    horizontal,
    open,
    handleClose,
    alertMessage,
    inputsCliente,
    setInputs,
    validaciones,
    validButton,
    guardar,
  };
};
