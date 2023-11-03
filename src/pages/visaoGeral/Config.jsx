import Input from "../Login/components/Input";
import styled from "styled-components";
import "../Login/login.css";
import { Button } from "../../components/Button";
import { useState } from "react";

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  overflow-y:none;
  justify-content:center;
  align-items:center;

  .container{
    width: 80vw;
  }

  *{
    box-sizing: border-box;
  }

  .footer{
    display:flex;
    justify-content:space-between;
    margin: auto;
    width: 23vw;
  }
`

function Config() {
    const [ativo, setAtivo] = useState(true);
    const [email, setEmail] = useState("gabriel@sptech");
    const [nome, setNome] = useState("gabriel");
    const [senha, setSenha] = useState("123");

    const handleClick = () => {
        setAtivo(!ativo);
    }

    const handleSave = () => {
        setEmail(email) 
        setNome(nome) 
        setSenha(senha)
        setAtivo(!ativo);
    }

    return (
        <>
            <AllContainers>

                <div className="container" id="config">

                    <h1>Configurações</h1>

                    <form>
                        {ativo ? (
                            <div>
                                <Input type="text" name="email" id="email" label={email} desativo={ativo} onChange={(e) => setEmail(e.target.value)}/>
                                <Input type="text" name="nome" id="nome" label={nome} desativo={ativo} />
                                <Input type="password" name="senha" id="senha" label={senha} desativo={ativo} />
                                <Input type="password" name="confirmaSenha" id={senha} label="Confirmar Senha" desativo={ativo} />
                            </div>
                        ) : (
                            <div>
                                <Input type="text" name="email" id="email" label="E-mail" desativo={ativo} />
                                <Input type="text" name="nome" id="nome" label="Nome" desativo={ativo} />
                                <Input type="password" name="senha" id="senha" label="Senha" desativo={ativo} />
                                <Input type="password" name="confirmaSenha" id="confirmaSenha" label="Confirmar Senha" desativo={ativo} />
                            </div>
                        )}

                        <div className="footer">
                            <Button bg="#08632D" color='white'  width="45%" height="50px" onClick={() => handleClick()}>
                                Alterar
                            </Button>

                            <Button bg="#08632D" color='white' width="45%" height="50px" onClick={() => handleSave()}>
                                Salvar
                            </Button>
                        </div>

                    </form>
                </div>
            </AllContainers>
        </>
    )
}

export default Config;