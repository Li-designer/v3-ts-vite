import axios from "axios";
import { RESTFUL_ERROR_CODE_MAP } from "@/utils";
const BASE_URL = import.meta.env.VITE_BASE_URL;
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    timestamp: new Date().getTime(),
    "Cache-Control": "no-cache",
    "Content-Type": "application/json;chareset=UTF-8"
  }
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    const code = Number(response.data.code);
    const msg: string = RESTFUL_ERROR_CODE_MAP[code];
    if (msg) {
      // Toast(response.data.message || msg)
      if (code === 401) {
        // Dialog.confirm({
        //   message: response.data.message || msg
        // })
        console.log(response.data.message);
      }
      return Promise.reject(new Error(response.data.message || msg));
    } else {
      return response;
    }
  },
  thrown => {
    // Toast(thrown.message || "Error");
    /* setTimeout(() => {
      Toast.clear();
    }, 500); */
    return Promise.reject(thrown);
  }
);

export default instance;
