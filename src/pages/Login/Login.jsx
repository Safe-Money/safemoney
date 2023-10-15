import Header from './components/Header';
import Input from './components/Input';
import { Button } from '../../components/Button';
import './login.css';

function Login() {
  return (
    <div className="container">
      <Header text="Bem Vindo!" />

      <form>
        <Input type="text" name="email" id="email" label="E-mail" />
        <Input type="password" name="senha" id="senha" label="Senha" />

        <span>Esqueceu a senha? <a href="/">Clique aqui</a></span>

        <Button bg="#08632D" color='white' width="100%">
          Entrar
        </Button>

        <div className="footer">
          <p>Não tem uma conta?</p>
          <a href="/">Inscreva-se</a>
        </div>

      </form>
    </div>
  );
}

export default Login;
