import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './components/Header';
import Input from './components/Input';
import { Button } from '../../components/Button';
import Api from '../../API'; 

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function logar() {
    try {
      const response = await Api.login(email, senha);
      localStorage.setItem('token', response.token);

      const decodedToken = JSON.parse(atob(response.token.split('.')[1]));
      console.log('Token Decodificado:', decodedToken);

      Swal.fire({
        icon: 'success',
        title: 'Login bem-sucedido!',
        text: 'Você foi autenticado com sucesso.',
      });

      navigate('/visao-geral');
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Erro no login!',
        text: 'Verifique suas credenciais e tente novamente.',
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
