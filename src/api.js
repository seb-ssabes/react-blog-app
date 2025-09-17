import axios from "axios";

const api = axios.create({
  baseURL: "/",  // let requests pass through vite directly
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error(
      "Axios error:",
      error.response?.status,
      error.response?.data || error.message
    );
    return Promise.reject(error);
  }
);

export default api;
