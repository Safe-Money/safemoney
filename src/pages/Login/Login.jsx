import React from "react";
import logo from "../../assets/logo2.png";
import './login.css';

function Login() {
  return (
    <div className="container">
      <header className="header">
        <img className="loginImg" src={logo} alt="Logo" />
        <span>Bem Vindo</span>
      </header>
      <form>
        <div className="inputContainer">
          <input type="text" name="email" id="email" required="required" />
          <label htmlFor="email">E-mail</label>
        </div>

        <div className="inputContainer">
          <input type="password" name="senha" id="senha" required="required" />
          <label htmlFor="senha">Senha</label>
        </div>
        <span  className="forgot-password">
          Esqueceu a senha? <a href="/">Clique aqui</a>
        </span>

        <button className="button">Entrar</button>
        <div className="footer">
          <p>Não tem uma conta?</p>
          <a href="/">Inscreva-se</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
