import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Icon } from "../funcoes/icons";
import { useState } from "react";

const Header = styled.div`
width: 165px;
height: 100vh;
background-color: #08632D;
padding: 5% 0 0 0;
border-radius: 0px 15px 15px 0px;
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
    margin-top:5%;
}
.nome{
    justify-content:center;
    align-items:center;
    display:flex;
    height:60%;
    width:100%;
    font-weight:500;
    font-size:16px;
    
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
        
        color: #08632D;
         
        }

        
        &:hover {
            background-color: #05411d;
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
   
}

.selecoes-texto{
    font-weight:550;
    font-size:0.85rem;
    justify-content:flex-start;
}
img{
    width:20px;
    margin:0 10px 0 5px;
}

.selecionado{
    color:#08632D;
    background-color:white;
    justify-content:flex-start;
}

.planejamentosAtiva{
    width: 15px;
}
`

const Sair = styled.div`
display:flex;
align-items:center;
// width:100%;
padding:0 10px;
color:white;
font-weight:500;
position:absolute;
bottom: 5%;
font-size:0.85rem;
cursor: pointer;

img{
    margin-right:10px;
    width:20px;
}

&:hover{
    // color:red;
}
`

function LateralHeader(props) {
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
                        Olá,
                    </div>
                    <div className="nome">
                        {sessionStorage?.getItem("nomeUsuario")}
                    </div>

                </PerfilNome>
                <NavbarLateral>
                    <Selecao
                        className={selecionado === "geral" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("geral")
                            navigate("/visao-geral")
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "geral" ? <img src={Icon("visaoIcon")} /> : <img src={Icon("visaoDesativa")} />}
                        </div>

                        <div className="selecoes-texto">Visão Geral</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "cartoes" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("cartoes")
                            navigate("/cartoes")
                        }
                        }
                    >
                        <div className="selecoes-icone">
                            {selecionado === "cartoes" ? <img   src={Icon("cartoesAtiva")} /> : <img src={Icon("cartoesIcon")} />}
                        </div>

                        <div className="selecoes-texto">Cartões</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "lancamentos" ? "selecionado efeito" : "selecoes-texto efeito"}
                        onClick={() => {
                            handleClick("lancamentos")
                            navigate("/lancamentos")
                        }
                        }
                    >
                        <div className="selecoes-icone">
                            {selecionado === "lancamentos" ? <img   src={Icon("lancamentosAtiva")} /> : <img src={Icon("lancamentosIcon")} />}
                        </div>

                        <div className="selecoes-texto">Lançamentos</div>
                    </Selecao>

                    <Selecao
                    
                        className={selecionado === "planejamentos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("planejamentos")
                            navigate("/planejamentos")
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "planejamentos" ? <img  className="planejamentosAtiva" src={Icon("planejamentosAtiva")} /> : <img src={Icon("planejamentosIcon")} />}
                        </div>
                        <div className="selecoes-texto">Planejamentos</div>
                    </Selecao>

                    <Selecao
                        className={selecionado === "objetivos" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("objetivos")
                            navigate("/objetivos")
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "objetivos" ? <img src={Icon("objetivosAtiva")} /> : <img src={Icon("objetivosIcon")} />}
                        </div>
                        <div className="selecoes-texto">Objetivos</div>
                    </Selecao>

                   
                    <Selecao
                        className={selecionado === "config" ? "selecionado" : "selecoes-texto"}
                        onClick={() => {
                            handleClick("config");
                            navigate("/config")
                        }}
                    >
                        <div className="selecoes-icone">
                            {selecionado === "config" ? <img src={Icon("configAtiva")} /> : <img src={Icon("configuracoesIcon")} />}
                        </div>
                        <div className="selecoes-texto">Configurações</div>
                    </Selecao>
                    
                </NavbarLateral>


                <Sair onClick={() => {
                    sessionStorage.clear()
                    navigate("/")}}>
                    <img src={Icon('sairIcon')} />
                    Sair
                </Sair>
            </Header>
        </>
    )
}
export default LateralHeader;