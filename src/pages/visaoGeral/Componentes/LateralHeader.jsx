import styled from "styled-components";
import { Icon } from "../funcoes/icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Header = styled.div`
width: 14.4%;
border-top-right-radius: 8px;
border-bottom-right-radius: 8px;
background-color:#08632D;
padding: 5% 0 0 0;
position:relative;
`
const PerfilNome = styled.div`
display:flex;
height: 20%;
width:100%;
justify-content:center;
align-items:center;
flex-direction:column;
padding:0;
margin-bottom:30%;
color:#FCFEFD;

.bem-vindo{
    display:flex;
    justify-content:center;
    align-items:center;
    height:20%;
    width:100%;  
    font-size:14px;  
}
.nome{
    justify-content:center;
    align-items:center;
    display:flex;
    height:20%;
    width:100%;
    font-weight:700;
    
}

.foto{
    display:flex;
    box-sizing: border-box;
    width:100%;
    height:60%;
    justify-content:center;
    align-items:center;
    margin:0;
}

.foto span{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    height:60px;
    width:60px;
    background-color:white;
}
`

const Selecao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 35px;
  width: 100%;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s ease;

  .selecionado {
    color: #08632D;
    background-color: white;
  }

    .selecoes-icone {
        
        margin-right:10px;
        color: #08632D;
        }

`;

const NavbarLateral = styled.div`
display:flex;
box-sizing: border-box;
height: 50%;
width:100%;
padding: 0 10px;
font-size:14px;
flex-direction:column;
margin-bottom:40%;

.selecoes{
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:5px;
    height:35px;
    width:100%;
    color:white;
    margin-bottom:10px;
}

.selecoes-icone{
    display:flex;
    align-items:center;
    justify-content:center;
    width:20%;
}

.selecoes-texto{
    width:80%;
    font-weight:700;
}

.selecionado{
    color:#08632D;
    background-color:white;
}
`

const Sair = styled.div`
display:flex;
align-items:center;
width:100%;
padding:0 10px;
color:white;
font-weight:700;
position:absolute;
bottom: 5%;

img{
    margin-right:10px;
}
`

function LateralHeader(props) {
    const [config, setConfig] = useState(false);
    const [selecionado, setSelecionado] = useState(props.selecionado);
    const navigate = useNavigate();

    const handleClick = (selecionado) => {
        setSelecionado(selecionado);
    }

    return (
        <>
            <Header>

                <PerfilNome>
                    <div className="foto">
                        <span>
                            <img src={Icon('logo')} />
                        </span>
                    </div>
                    <div className="bem-vindo">
                        Bem Vindo!
                    </div>
                    <div className="nome">
                        Gabriel
                    </div>

                </PerfilNome>
                <NavbarLateral>
                    <Selecao
                        className={selecionado === "VisaoGeral" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("VisaoGeral")
                            navigate("/visao-geral")
                        }}
                    >
                        <div className="selecoes-icone">
                            <img src={Icon("visaoIcon")} />
                        </div>
                        <div className="selecoes-texto">Visão Geral</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "Lancamentos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => handleClick("Lancamentos")}
                    >
                        <div className="selecoes-icone">
                            <img src={Icon("lancamentosIcon")} />
                        </div>
                        <div className="selecoes-texto">Lançamentos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "Planejamentos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => handleClick("Planejamentos")}
                    >
                        <div className="selecoes-icone">
                            <img src={Icon("planejamentosIcon")} />
                        </div>
                        <div className="selecoes-texto">Planejamentos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "Objetivos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => handleClick("Objetivos")}
                    >
                        <div className="selecoes-icone">
                            <img src={Icon("objetivosIcon")} />
                        </div>
                        <div className="selecoes-texto">Objetivos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "Configuracoes" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("Configuracoes");
                            navigate("/configuracoes");
                        }}
                    >
                        <div className="selecoes-icone">
                            <img src={Icon("configuracoesIcon")} />
                        </div>
                        <div className="selecoes-texto">Configurações</div>
                    </Selecao>
                </NavbarLateral>


                <Sair>
                    <img src={Icon('sairIcon')} />
                    Sair
                </Sair>
            </Header>
        </>
    )
}
export default LateralHeader;