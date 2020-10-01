import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://food-shop-api-matej.herokuapp.com/',
});

export default instance;
