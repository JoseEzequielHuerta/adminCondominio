import React, { ChangeEvent, useState } from 'react';

export default (setExpanded) => {
  const [inputDesarrollo, setInputDesarrollo] = useState({
    _id: null,
    idClient: null,
    nombre: '',
    tipo: 1,
    clase: 1,
    nPropiedaes: '',
    nUnidades: '',
    cMatenimiento: 1,
    calle: '',
    nExterior: '',
    nInterior: '',
    pais: '',
    estado: '',
    cp: '',
    ciudad: '',
    colonia: '',
    municipio: '',
    done: 2,
  });
  const [amenidades, setAmenidades] = useState([]);
  const addAmenidad = () => {
    const aux= {
      _id: null,
      nombre: '',
      tipo: 1,
      nAmenidades: 0,
      idClient: null,
      idDesarrollo: null,
    };
    setAmenidades([...amenidades, aux]);
  };
  const limpiarAmenidad = () => setAmenidades([]);
  const deleteAmenidad = (i) => {
    const aux = amenidades;
    aux.splice(i, 1);
    setAmenidades([...aux]);
  };
  const setTipoAmenidad = (i, t) => {
    const aux = amenidades;
    aux[i].tipo = t;
    setAmenidades([...aux]);
  };
  const setNombreAmendad = (i, n) => {
    const aux = amenidades;
    aux[i].nombre = n;
    setAmenidades([...aux]);
  };
  const setNuAmenidad = (i, n) => {
    const aux = amenidades;
    aux[i].nAmenidades = n;
    setAmenidades([...aux]);
  };
  const limpiarInput = () => {
    setInputDesarrollo({
      _id: null,
      idClient: null,
      nombre: '',
      tipo: 1,
      clase: 1,
      nPropiedaes: '',
      nUnidades: '',
      cMatenimiento: 1,
      calle: '',
      nExterior: '',
      nInterior: '',
      pais: '',
      estado: '',
      cp: '',
      ciudad: '',
      colonia: '',
      municipio: '',
      done: 2,
    });
  };
  const [validaciones, setValidaciones] = useState({
    nombre: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
    tipo: {
      regex: '[1-3]',
      valid: true,
      message: 'No se a seleccionado un tipo',
    },
    clase: {
      regex: '[1-5]',
      valid: true,
      message: 'No se a seleccionado un tipo',
    },
    nPropiedaes: {
      regex: '^[0-9]{1,5}$',
      valid: true,
      message: 'Solo se aceptan valores numericos',
    },
    nUnidades: {
      regex: '^[0-9]{1,5}$',
      valid: true,
      message: 'Solo se aceptan valores numericos',
    },
    cMatenimiento: {
      regex: '[1-2]',
      valid: true,
      message: 'No se a seleccionado un tipo',
    },
    calle: {
      regex: '^[a-zA-Z0-9ñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    nExterior: {
      regex: '^[a-zA-Z0-9ñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    nInterior: {
      regex: '^[a-zA-Z0-9ñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan valores alfanumericos',
    },
    pais: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
    estado: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
    cp: {
      regex: '^[0-9]{5,5}$',
      valid: true,
      message: 'El valor no corresponde a un CP',
    },
    colonia: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
    ciudad: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
    municipio: {
      regex: '^[a-zA-ZñÑáéíóúAÁÉÍÓÚ ]+$',
      valid: true,
      message: 'Solo se aceptan carteres de la a-z',
    },
  });

  const setRegistros = ({ target }) => {
   setInputDesarrollo({ ...inputDesarrollo, [target.id]: target.value });
    const val = validaciones[target.id];
    const valid = new RegExp(val.regex);
    val.valid = valid.test(target.value);
    setValidaciones({ ...validaciones, [target.id]: { ...val } });
  };

  return {
    inputDesarrollo,
    limpiarInput,
    validaciones,
    setRegistros,
    addAmenidad,
    amenidades,
    deleteAmenidad,
    setTipoAmenidad,
    setNuAmenidad,
    setNombreAmendad,
  };
};
