import axios from "axios";
// Cliente axios
const clienteAxios = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_UR}`,
});

export default clienteAxios;
