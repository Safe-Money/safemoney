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
    const [email, setEmail] = useState(sessionStorage.getItem("emailUsuario"));
    const [nome, setNome] = useState(sessionStorage.getItem("nomeUsuario"));
    const [senha, setSenha] = useState(sessionStorage.getItem("senhaUsuario"));
    const [confirmaSenha, setConfirma] = useState(sessionStorage.getItem("senhaUsuario"));

    const handleClick = () => {
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
                            <Input type="text" name="email" id="email" label="Email" valor={email} change={(e) => setEmail(e.target.value)} />
                            <Input type="text" name="nome" id="nome" label="Nome" valor={nome} change={(e) => setNome(e.target.value)}/>
                            <Input type="password" name="senha" id="senha" label="Senha" valor={senha} change={(e)=> setSenha(e.target.value)} />
                            <Input type="password" name="confirmaSenha" id="senha" label="Confirmar Senha" valor={confirmaSenha} change={(e) => setConfirma(e.target.value)}/>

                            <Footer>
                                <Button bg="#D0112B" color='white' width="45%" height="50px" onClick={() => handleClick()}>
                                    Cancelar
                                </Button>

                                <Button bg="#08632D" color='white' width="45%" height="50px" onClick={() => {handleSave(), handleClick()}}>
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