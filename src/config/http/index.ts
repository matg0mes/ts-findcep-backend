import axios from "axios";

axios.defaults.headers["Content-Type"] = "application/json";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
