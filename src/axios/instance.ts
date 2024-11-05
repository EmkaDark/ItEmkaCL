import axios from "axios";

const instance = axios.create({
  baseURL: "http://itemka.ru",
});

export default instance;
