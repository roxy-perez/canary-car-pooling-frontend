import Axios from 'axios';

const axios = Axios.create({
  baseURL: "http://localhost:8500/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

export default axios;