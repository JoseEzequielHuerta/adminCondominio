import React from 'react';
import EdificioImage from '../../Assets/Images/edificio.jpg';
import './index.css';

const index = () => (
  <box className="body-box">
    <box className="container">
      <h2>Admin condominio</h2>
      <h4>Disminuye tu carga de trabajo y ten mas tiempo para ti</h4>
      <div className="text">
        ¿Tardas demasiado
        <br />
        registrando clientes
        <br />y tus condominios?
      </div>
      <br />
      <div className="text2">
        Centraliza a todos tus residentes en una sola herramienta y olvidate de
        los procesos manuales y los errores al realizar la conciliacion de pagos
        a fin de mes.
      </div>
    </box>
    <div className="container2">
      <div>
        <img className="imgEdi" src={EdificioImage} alt="Edificio" />
      </div>
    </div>
  </box>
);

export default index;
