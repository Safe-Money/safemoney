import Input from "../Login/components/Input";
import styled from "styled-components";
import "../Login/login.css";
import { Button } from "../../components/Button";
import { useState } from "react";
import LateralHeader from "./Componentes/LateralHeader";

const AllContainers = styled.div`
  display: flex;
  height:100vh;
  overflow-y:none;
  justify-content:center;
  align-items:center;

  .container{
    width: 80%;
  }
`

const ConfigContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Footer = styled.div`
  display: flex;
    justify-content: space-between;
    width: 100%;
`

function Config() {
    const [ativo, setAtivo] = useState(false);
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
                <LateralHeader selecionado="config" />

                <div className="container" id="config">

                    <h1>Configurações</h1>

                    <form>

                        <ConfigContainer>
                            <Input type="text" name="email" id="email" label={email} desativo={ativo} onChange={(e) => setEmail(e.target.value)} />
                            <Input type="text" name="nome" id="nome" label={nome} desativo={ativo} />
                            <Input type="password" name="senha" id="senha" label={senha} desativo={ativo} />
                            <Input type="password" name="confirmaSenha" id={senha} label="Confirmar Senha" desativo={ativo} />

                            <Footer>
                                {!ativo && 
                                <Button bg="#08632D" color='white' width="45%" height="50px" onClick={() => handleClick()}>
                                    Alterar
                                </Button>}

                                {ativo && 
                                <Button bg="#D0112B" color='white' width="45%" height="50px" onClick={() => handleClick()}>
                                    Cancelar
                                </Button>}

                                <Button bg="#08632D" color='white' width="45%" height="50px" onClick={() => handleSave()}>
                                    Salvar
                                </Button>
                            </Footer>
                        </ConfigContainer>



                    </form>
                </div>
            </AllContainers>
        </>
    )
}

export default Config;