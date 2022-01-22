import axios from "axios";

const clienteLogin = axios.create({
  //baseURL: "http://164.90.147.181:3301",
  baseURL: "https://peaceful-river-53446.herokuapp.com/api",
  //baseURL: "http://comprafacil.com.bo:3500",
});

export default clienteLogin;
