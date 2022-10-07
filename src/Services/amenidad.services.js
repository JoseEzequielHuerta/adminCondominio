import axios from 'axios';

const baseURL = process.env.BASEAMENIDAD;

const MY_SERVICE = axios.create({
  baseURL,
  timeout: 1000,
});

const AMENIDAD_SERVICE = {
  addAmenidades: async (amenidades) => {
    const res = await MY_SERVICE.post('/addAmenidades', amenidades);
    return res;
  },
};

export default AMENIDAD_SERVICE;
