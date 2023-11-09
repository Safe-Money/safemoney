import Header from './components/Header';
import Input from './components/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import './login.css';

function Login() {
  const navigate = useNavigate();

  function logar () {
    sessionStorage.setItem("nomeUsuario", "Nathanzinho")
  }
  
  return (
    <div className="container">
      <Header text="Bem Vindo!" />

      <form>
        <Input type="text" name="email" id="email" label="E-mail" />
        <Input type="password" name="senha" id="senha" label="Senha" />

        <span className='esqueceuSenha'>Esqueceu a senha? <a href="/">Clique aqui</a></span>

        <Button onClick={() => logar()} bg="#08632D" color='white' width="100%">
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
