import axios from "axios";


const api = axios.create({
  //baseURL: "http://localhost:8080",
  baseURL: "http://10.0.0.170:8080",
});


/*
Instale o pacote dotenv executando o seguinte comando no diretório raiz do seu projeto:
npm install dotenv

Crie um arquivo .env no diretório raiz do seu projeto e defina suas variáveis de ambiente lá:
REACT_APP_ENV=prod

No seu arquivo JavaScript ou TypeScript, importe e configure dotenv no topo do arquivo:
require('dotenv').config();

Em seguida, você pode usar process.env.REACT_APP_ENV como você estava fazendo antes:
const api = axios.create({
  baseURL : process.env.REACT_APP_ENV === 'prod' ? 'http://10.0.0.170:8080' : 'http://localhost:8080'
});
*/


api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => {
    return Promise.reject(error);
});

export default api;