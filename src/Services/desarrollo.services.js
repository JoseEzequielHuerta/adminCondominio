import axios from 'axios';

const baseURL = process.env.BASEDESARROLLO;

const MY_SERVICE = axios.create({
  baseURL,
  timeout: 1000,
});

const DESARROLLO_SERVICE = {
  getDesarrollo: async () => {
    const res = await MY_SERVICE.get(`/get`);
    return res;
  },
  getDesarrolloById: async (id) => {
    const res = await MY_SERVICE.get(`/get/id=${id}`);
    return res;
  },
  getDesarrolloActive: async () => {
    const res = await MY_SERVICE.get(`/get/active`);
    return res.data;
  },
  getDesarrolloInactive: async () => {
    const res = await MY_SERVICE.get(`/get/inactive`);
    return res.data;
  },
  getDesarrollosByIdClient: async (id) => {
    const res = await MY_SERVICE.get(`/getDesarrollosByIdClient=${id}`);
    return res.data;
  },
  getDesarrollosByIdClientActive: async (id) => {
    const res = await MY_SERVICE.get(`/getDesarrollosByIdClientActive=${id}`);
    return res.data;
  },
  getDesarrollosByIdClientInactive: async (id) => {
    const res = await MY_SERVICE.get(`/getDesarrollosByIdClientInactive=${id}`);
    return res.data;
  },
  addDesarrollo: async (desarrollo) => {
    const res = await MY_SERVICE.post(`/add`, desarrollo);
    return res;
  },
  updateDesarrollo: async (id, desarrollo) => {
    const res = await MY_SERVICE.post(`/update=${id}`, desarrollo);
    return res;
  },
  activeDesarrollo: async (id) => {
    const res = await MY_SERVICE.post(`/activeDesarrollo=${id}`);
    return res;
  },
  inactiveDesarrollo: async (id) => {
    const res = await MY_SERVICE.post(`/inactiveDesarrollo=${id}`);
    return res;
  },
};

export default DESARROLLO_SERVICE;
