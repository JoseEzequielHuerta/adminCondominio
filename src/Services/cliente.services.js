import axios from 'axios';

const baseURL = process.env.BASECLIENTE;

const MY_SERVICE = axios.create({
  baseURL,
  timeout: 1000,
});

const CLIENTE_SERVICE = {
  addClient: async (client) => {
    const res = await MY_SERVICE.post(`/add`, client);
    return res;
  },
};

export default CLIENTE_SERVICE;
