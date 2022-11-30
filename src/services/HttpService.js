import axios from "axios";

// const API_HOST_URL = "https://ngminds.herokuapp.com";
const API_HOST_URL = "https://shop-api.ngminds.com";

export function secureGet(url) {
  return axios.get(`${API_HOST_URL}${url}`);
}

export function post(url, data) {
  return axios.post(`${API_HOST_URL}${url}`, data);
}

export function remove(url) {
  return axios.delete(`${API_HOST_URL}${url}`);
}

axios.interceptors.request.use(
  (config) => {
    console.log(config);
    const newToken = JSON.parse(localStorage.getItem("token"));
    if (newToken) {
      config.headers = { Authorization: `Bearer ${newToken}` };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
