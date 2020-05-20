import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apiskoole.herokuapp.com/',
});

export default api;
