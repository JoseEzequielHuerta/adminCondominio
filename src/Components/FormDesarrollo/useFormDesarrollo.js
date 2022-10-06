import React, { useState, useEffect } from 'react';
import DESARROLLO_SERVICE from '../../Services/desarrollo.services';
import AMENIDAD_SERVICE from '../../Services/amenidad.services';

export default (setExpanded, idClien) => {
  const [inputDesarrollo, setInputDesarrollo] = useState({
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
  useEffect(() => {
    setInputDesarrollo({ ...inputDesarrollo, idClient: idClien });
  }, [idClien]);
  const [amenidades, setAmenidades] = useState([]);
  const addAmenidad = () => {
    const aux = {
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

  const inputsLLenos = () => {
    let aux = true;
    if (
      inputDesarrollo.nombre === '' ||
      inputDesarrollo.nPropiedaes === '' ||
      inputDesarrollo.nUnidades === '' ||
      inputDesarrollo.calle === '' ||
      inputDesarrollo.nExterior === '' ||
      inputDesarrollo.pais === '' ||
      inputDesarrollo.estado === '' ||
      inputDesarrollo.cp === '' ||
      inputDesarrollo.ciudad === '' ||
      inputDesarrollo.colonia === '' ||
      inputDesarrollo.municipio === ''
    ) {
      aux = false;
    }
    return aux;
  };

  const inputsValidos = () => {
    let aux = false;
    if (
      validaciones.nombre.valid &&
      validaciones.nPropiedaes.valid &&
      validaciones.nUnidades.valid &&
      validaciones.calle.valid &&
      validaciones.nExterior.valid &&
      validaciones.nInterior.valid &&
      validaciones.pais.valid &&
      validaciones.estado.valid &&
      validaciones.cp.valid &&
      validaciones.ciudad.valid &&
      validaciones.colonia.valid &&
      validaciones.municipio.valid
    ) {
      aux = true;
    }
    return aux;
  };

  const [validButton, setValidButton] = useState(true);

  useEffect(() => {
    if (inputsLLenos() && inputsValidos()) {
      setValidButton(false);
    } else {
      setValidButton(true);
    }
  });

  const setRegistros = ({ target }) => {
    if (target.name === 'cMatenimiento') {
      setInputDesarrollo({
        ...inputDesarrollo,
        [target.name]: Number(target.value),
      });
    } else {
      setInputDesarrollo({ ...inputDesarrollo, [target.id]: target.value });
      const val = validaciones[target.id];
      const valid = new RegExp(val.regex);
      val.valid = valid.test(target.value);
      setValidaciones({ ...validaciones, [target.id]: { ...val } });
    }
  };

  const guardar = () => {
    DESARROLLO_SERVICE.addDesarrollo(inputDesarrollo).then(({data}) => {
      const {_id,idClient}=data
      setExpanded();
      limpiarInput();
      if(amenidades.length>0){
        const am =
          amenidades.map((amenidad)=>(
            {
              ...amenidad,
              idClient,
              idDesarrollo:_id,
            }
          ))
        AMENIDAD_SERVICE.addAmenidades(am).then(()=>limpiarAmenidad())
        .catch(()=>{})
        
      }
    });
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
    validButton,
    guardar,
  };
};
