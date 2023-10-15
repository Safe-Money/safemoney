import Header from './components/Header';
import Input from './components/Input';
import { Button } from '../../components/Button';

function Cadastro() {
    return (
        <div className="container">
            <Header text="Junte-se a nós!" />

            <form>
                <Input type="text" name="nome" id="nome" label="Nome" />
                <Input type="text" name="email" id="email" label="E-mail" />
                <Input type="password" name="senha" id="senha" label="Senha" />
                <Input type="password" name="confirmaSenha" id="confirmaSenha" label="Confirmar senha" />

                <Button bg="#08632D" color='white' width="100%">
                    Cadastre-se
                </Button>

                <div className="footer">
                    <p>já tem uma conta?</p>
                    <a href="/">Clique aqui</a>
                </div>

            </form>
        </div>
    );
}

export default Cadastro;
