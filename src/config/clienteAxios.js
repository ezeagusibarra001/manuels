import axios from "axios";

const clienteAxios = axios.create({
  //baseURL: "http://164.90.147.181:3301",
  baseURL: "http://manuels609-env.eba-s5w3f8km.us-east-2.elasticbeanstalk.com/api",
  //baseURL: "http://comprafacil.com.bo:3500",
});

export default clienteAxios;