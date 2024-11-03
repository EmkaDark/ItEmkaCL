import axios from "axios";

const instance = axios.create({
  baseURL: "http://31.128.46.180:3001",
});

export default instance;
