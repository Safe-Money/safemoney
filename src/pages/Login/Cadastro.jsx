import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../api';
import Swal from 'sweetalert2';
import Input from './components/Input';
import { Button } from '../../components/Button';
import { Icon } from '../visaoGeral/funcoes/icons';

const Image = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  img {
    margin-top: 10px;
    margin-bottom: 30px;
    height: 60px;
    width: 110px;
  }
`;

const H2 = styled.div`
  margin-bottom: 50px;
  color: #08632D;
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dtNascimento, setDataNascimento] = useState("");

  const data = new Date(dtNascimento);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
      await api.post('/usuarios/cadastro', {
        nome,
        email,
        senha,
        dtNascimento: data  
      }).then((response) => {
  
      console.log('Usuário cadastrado', response);
  
      Swal.fire({
        icon: 'success',
        title: 'Cadastro bem-sucedido!',
        text: 'Você foi cadastrado com sucesso!',
      });
      
      navigate('/login');

    }).catch((error) => {
      console.log('Não foi possível cadastrar o usuário', error);
  
      Swal.fire({
        icon: 'error',
        title: 'Cadastro mal-sucedido!',
        text: 'Não foi possível cadastrar o usuário!',
      });
    });
  }
  

  return (
    <div className="container">
      <Image>
        <img className="loginImg" src={Icon('Logo2')} alt="Logo" />
      </Image>
      <H2>Junte-se a nós!</H2>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="nome" id="nome" label="Nome" value={nome} change={(e) => setNome(e.target.value)} />
        <Input type="text" name="email" id="email" label="E-mail" value={email} change={(e) => setEmail(e.target.value)} />
        <Input type="date" name="dataNascimento" id="dataNascimento" label="" value={dtNascimento} change={(e) => setDataNascimento(e.target.value)} />
        <Input type="password" name="senha" id="senha" label="Senha" value={senha} change={(e) => setSenha(e.target.value)} />
        <Button type="submit" bg="#08632D" color="white" width="100%">
          Cadastre-se
        </Button>

        <div className="footer">
          <p>Já tem uma conta?</p>
          <a onClick={() => navigate("/login")}>Clique aqui</a>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;