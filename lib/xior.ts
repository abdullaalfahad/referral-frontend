import { getCookie } from "cookies-next";
import xior from "xior";

const api = xior.create({
  baseURL: "https://referral-backend-69kc.onrender.com",
  cache: "no-store",
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
