import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Input from './components/Input';
import { Button } from '../../components/Button';
import api from '../../api';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logar() {
    try {
      const response = await api.post('/autenticacao/login', {
        email,
        senha,
      });
  
      console.log(response);
  
      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('nome', response.data.nome);
      sessionStorage.setItem('email', response.data.email);
      sessionStorage.setItem('id', response.data.id);
  
      Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido!',
        text: 'Você foi autenticado com sucesso.',
      });
  
      navigate(`/visao-geral/`);
    } catch (error) {
      const errorMessage = 'Verifique suas credenciais e tente novamente.';
  
      Swal.fire({
        icon: 'error',
        title: 'Erro no login!',
        text: errorMessage,
      });
  
      console.error('Erro no login:', error.message);
    }
  }
  

  return (
    <div className="container">
      <Header text="Bem Vindo!" />

      <form>
        <Input type="text" name="email" id="email" label="E-mail" value={email} change={(e) => setEmail(e.target.value)} />
        <Input type="password" name="senha" id="senha" label="Senha" value={senha} change={(e) => setSenha(e.target.value)} />

        <span className='esqueceuSenha'>Esqueceu a senha? <a href="/">Clique aqui</a></span>

        <Button type="button" onClick={() => logar()} bg="#08632D" color='white' width="100%">
          Entrar
        </Button>

        <div className="footer">
          <p>Não tem uma conta?</p>
          <a onClick={() => navigate("/cadastro")}>Inscreva-se</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
