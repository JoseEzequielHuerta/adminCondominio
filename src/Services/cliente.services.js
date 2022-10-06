import axios from 'axios';

const baseURL = process.env.BASECLIENTE;

const MY_SERVICE = axios.create({
  baseURL,
  timeout: 1000,
});

const CLIENTE_SERVICE = {
  getClients: async () => {
    const res = await MY_SERVICE.get(`/get`);
    return res.data;
  },
  getClientById: async (id) => {
    const res = await MY_SERVICE.get(`/get/id=${id}`);
    return res;
  },
  getClientsActive: async () => {
    const res = await MY_SERVICE.get(`/get/active`);
    return res.data;
  },
  getClientsInactive: async () => {
    const res = await MY_SERVICE.get(`/get/inactive`);
    return res.data;
  },
  addClient: async (client) => {
    const cli = { ...client, nUnidades: Number(client.nUnidades) };
    const res = await MY_SERVICE.post(`/add`, cli);
    return res;
  },
  updateClient: async (id, client) => {
    const cli = {
      nombre: client.nombre,
      aPaterno: client.aPaterno,
      aMaterno: client.aMaterno,
      rol: client.rol,
      number: client.number,
      correo: client.correo,
      preferencia: client.preferencia,
      nclients: client.nDesarrollos,
      nPropiedades: client.nPropiedades,
      nUnidades: Number(client.nUnidades),
      calle: client.calle,
      nExterior: client.nExterior,
      nInterior: client.nInterior,
      pais: client.pais,
      estado: client.estado,
      cp: client.cp,
      colonia: client.colonia,
      municipio: client.municipio,
      done: client.done,
    };
    const res = await MY_SERVICE.post(`/update=${id}`, cli);
    return res;
  },
  activeClient: async (id) => {
    const res = await MY_SERVICE.post(`/activeClient=${id}`);
    return res;
  },
  inactiveClient: async (id) => {
    const res = await MY_SERVICE.post(`/inactiveClient=${id}`);
    return res;
  },
};

export default CLIENTE_SERVICE;
