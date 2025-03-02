import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "",
});

export { axiosInstance };
