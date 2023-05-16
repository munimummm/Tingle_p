import axios from "axios";

export const commonAxios = axios.create({
  baseURL: import.meta.env.REACT_APP_SERVER_URL,
});
