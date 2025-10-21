import axios from "axios";
import { getCookie } from "cookies-next";

const api = axios.create({
  baseURL: "localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = getCookie("accessToken") as string | undefined;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
