import axios, { AxiosInstance } from "axios";

export const commonAxios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});
