import axios from "axios";

const clienteLogin = axios.create({
  //baseURL: "http://164.90.147.181:3301",
  baseURL: "http://localhost:8080",
  //baseURL: "http://comprafacil.com.bo:3500",
});

export default clienteLogin;