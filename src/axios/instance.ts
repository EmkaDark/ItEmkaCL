import axios from "axios";

const instance = axios.create({
  baseURL: "https://itemka.ru",
});

export default instance;
