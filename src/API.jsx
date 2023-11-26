// Api.js
import axios from 'axios';

const baseUrl = 'http://localhost:8080';  

const Api = {
  login: async (email, senha) => {
    try {
      const response = await axios.post(`${baseUrl}/autenticacao/login`, { email, senha });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  cadastrar: async (nome, email, senha, dtNascimento) => {
    try {
      const dadosCadastro = {
        nome,
        email,
        senha,
        dt_nascimento: dtNascimento,
      };

      const response = await axios.post(`${baseUrl}/usuarios/cadastro`, dadosCadastro);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default Api;
