import axios from 'axios';

const instace = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default instace;
