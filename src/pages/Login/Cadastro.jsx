import Header from './components/Header';
import Input from './components/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { useState } from 'react';

function Cadastro() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirma] = useState('');

    return (
        <div className="container">
            <Header text="Junte-se a nós!" />

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
