import axios from "axios";

export const commonAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 5000,
});
