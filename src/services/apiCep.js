import axios from "axios";

//https://viacep.com.br/ws/88090050/json/

const apiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/"
});
export default apiCep;