import axios from 'axios';

const baseURL = process.env.BASEAUTH;

const MY_SERVICE = axios.create({
  baseURL,
  timeout: 1000,
});

const AUTH_SERVICE = {
  login: async (correo, password) => {
    const res = await MY_SERVICE.post('/login', { correo, password });
    return res;
  },
};

export default AUTH_SERVICE;
