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
    const res = await MY_SERVICE.post(`/add`, client);
    return res;
  },
  updateClient: async (id, client) => {
    const res = await MY_SERVICE.post(`/update=${id}`, client);
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
