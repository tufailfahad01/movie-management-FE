import axios, { AxiosResponse } from "axios";
const api = axios.create({
  baseURL: "https://7312-72-255-21-37.ngrok-free.app/",
});

api.interceptors.request.use(
  (config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    config.headers["ngrok-skip-browser-warning"] = "true";
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return {
      ...response,
      success: true,
      statusCode: response.status,
    };
  },
  (error) => {
    return Promise.reject({
      statusCode: error.response?.status || 500,
      success: false,
      message: error.response?.data?.message || "Something went wrong",
    });
  }
);

export default api;
