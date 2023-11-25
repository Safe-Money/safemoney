import Input from './components/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useState } from 'react';
import styled from "styled-components"
import { Icon } from '../visaoGeral/funcoes/icons';

const Image = styled.div`

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  img{
    margin-top:10px;
    margin-bottom:30px;
    height:60px;
    width:110px;
  }

`;

const H2 = styled.div`
    margin-bottom:50px;
    color: #08632D;

text-align: center;

font-size: 35px;
font-style: normal;
font-weight: 600;
line-height: 24px;
`


function Cadastro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirma] = useState('');

    return (
        <div className="container">
            
            <Image>
            <img className="loginImg"  src={Icon('Logo2')} />
            </Image>
            <H2>Junte-se a nós!</H2>
            <form>
                <Input type="text" name="nome" id="nome" label="Nome" valor={nome} change={(e) => setNome(e.target.value)} ativo="true" />
                <Input type="text" name="email" id="email" label="E-mail" ativo="true" valor={email} change={(e) => setEmail(e.target.value)}/>
                <Input type="password" name="senha" id="senha" label="Senha" ativo="true" valor={senha} change={(e) => setSenha(e.target.value)}/>
                <Input type="password" name="confirmaSenha" id="confirmaSenha" label="Confirmar senha" ativo="true" valor={confirmaSenha} change={(e) => setConfirma(e.target.value)}/>

                <Button bg="#08632D" color='white' width="100%">
                    Cadastre-se
                </Button>

                <div className="footer">
                    <p>já tem uma conta?</p>
                    <a onClick={() => navigate("/login")}>Clique aqui</a>
                </div>

            </form>
        </div>
    );
}

export default Cadastro;
